import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
});

const indexName = process.env.PINECONE_INDEX_NAME!;

// Files or directories to ignore
const IGNORE_PATTERNS = [
    "node_modules",
    ".next",
    ".git",
    "package-lock.json",
    "ingest.ts",
    ".DS_Store",
    "favicon.ico",
    "fonts",
    "images",
    "next.config.ts",
    "postcss.config.mjs",
    "tailwind.config.ts",
    "tsconfig.json",
    "README.md",
    "PROGRESS.md",
    ".env",
    ".env.local",
    ".env.example",
    "components/ui", // skip shadcn/ui components to focus on logic
];

// Directories to specifically target for "high value" knowledge
const TARGET_DIRS = [
    "app",
    "lib",
    "components",
    // "hooks" (if we had them)
];

async function getFiles(dir: string): Promise<string[]> {
    const subdirs = await fs.promises.readdir(dir);
    const files = await Promise.all(
        subdirs.map(async (subdir): Promise<string | string[]> => {
            const res = path.resolve(dir, subdir);
            const relativePath = path.relative(process.cwd(), res);

            // Check ignore patterns
            if (IGNORE_PATTERNS.some((pattern) => relativePath.includes(pattern))) {
                return [];
            }

            const stat = await fs.promises.stat(res);
            return stat.isDirectory() ? getFiles(res) : res;
        })
    );
    return files.reduce((a: string[], f) => a.concat(f), []);
}

async function ingest() {
    console.log("🚀 Starting ingestion...");

    if (!process.env.OPENAI_API_KEY || !process.env.PINECONE_API_KEY || !process.env.PINECONE_INDEX_NAME) {
        console.error("❌ Missing environment variables. Please check .env.local");
        process.exit(1);
    }

    // 1. Gather files
    let allFiles: string[] = [];
    for (const dir of TARGET_DIRS) {
        const dirPath = path.join(process.cwd(), dir);
        if (fs.existsSync(dirPath)) {
            const files = await getFiles(dirPath);
            allFiles = allFiles.concat(files);
        }
    }

    // Filter for text files only (ts, tsx, js, mdx, md, css)
    allFiles = allFiles.filter(f => /\.(ts|tsx|js|jsx|md|mdx|css)$/.test(f));

    console.log(`📂 Found ${allFiles.length} files to index.`);

    const vectors: any[] = [];

    // 2. Process each file
    for (const filePath of allFiles) {
        const relativePath = path.relative(process.cwd(), filePath);
        console.log(`Processing: ${relativePath}`);

        const content = fs.readFileSync(filePath, "utf-8");

        // Skip empty files
        if (!content.trim()) continue;

        // Generate Embedding
        const embeddingResponse = await openai.embeddings.create({
            model: "text-embedding-3-small",
            input: content, // Note: For very large files, we should chunk. Assuming components are reasonable size for now.
        });

        const embedding = embeddingResponse.data[0].embedding;

        vectors.push({
            id: relativePath,
            values: embedding,
            metadata: {
                filename: relativePath,
                content: content, // Storing full content in metadata for retrieval context
            },
        });
    }

    // 3. Upsert to Pinecone
    const index = pc.index(indexName);

    // Batch upsert (Pinecone limit is usually 100 vectors per request, or 2MB)
    const BATCH_SIZE = 10;
    for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
        const batch = vectors.slice(i, i + BATCH_SIZE);
        await index.upsert(batch);
        console.log(`✅ Upserted batch ${i} - ${i + batch.length}`);
    }

    console.log("🎉 Ingestion complete!");
}

ingest().catch(console.error);
