import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

// Initialize OpenAI client for embeddings (separate from AI SDK for now to keep it simple or reuse)
const openaiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const pc = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
});

const indexName = process.env.PINECONE_INDEX_NAME!;

export async function POST(req: Request) {
    const { messages } = await req.json();

    // 1. Get the last user message
    const lastMessage = messages[messages.length - 1];
    const userQuery = lastMessage.content;

    // 2. Generate Embedding for the query
    const embeddingResponse = await openaiClient.embeddings.create({
        model: "text-embedding-3-small",
        input: userQuery,
    });
    const embedding = embeddingResponse.data[0].embedding;

    // 3. Query Pinecone
    const index = pc.index(indexName);
    const queryResponse = await index.query({
        vector: embedding,
        topK: 3,
        includeMetadata: true,
    });

    // 4. Construct Context
    const context = queryResponse.matches
        .map((match) => {
            const filename = match.metadata?.filename;
            const content = match.metadata?.content;
            return `[File: ${filename}]\n${content}\n`;
        })
        .join("\n---\n");

    // 5. Create System Prompt
    const systemPrompt = `
You are an intelligent architectural assistant for Mike Holloway's portfolio.
You have access to the actual codebase of this project via the Context provided below.
Your goal is to explain the architecture, design decisions, and implementation details to technical users (recruiters, engineering managers).

Rules:
- ALWAYS reference the specific files you are using to answer.
- If the context doesn't contain the answer, admit it. Do not hallucinate code.
- Be concise and professional.
- Use markdown for code blocks.

Context from Codebase:
${context}
`;

    // 6. Stream Response
    const result = await streamText({
        model: openai("gpt-4o"),
        messages: messages,
        system: systemPrompt,
    });

    return result.toTextStreamResponse();
}
