export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tier: 1 | 2 | 3 | 4;
  linesOfCode: number;
  features: number;
  technologies: string[];
  keyInnovations: string[];
  demoUrl?: string;
  status: "working-prototype" | "functional-demo" | "concept-validation" | "roadmap";
  maturityRating: number; // out of 10 (functional completeness, not production readiness)
  combinedFrom?: string[]; // IDs of projects this roadmap item combines
}

export const projects: Project[] = [
  {
    id: "velocity-easycomm",
    name: "EasyComm",
    tagline: "Enterprise Multi-Channel Communication Platform",
    description: "Working prototype demonstrating AI-powered document processing with dual-mode architecture and 4-LLM synthesis. Built to validate solutions for print/mail service provider onboarding challenges.",
    tier: 1,
    linesOfCode: 43707,
    features: 20,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "4 AI Providers", "ConvertAPI", "Puppeteer"],
    keyInnovations: [
      "Dual Import Modes (pixel-perfect vs. semantic) - 63% theoretical cost savings",
      "Multi-LLM Synthesis Pattern with 4 providers (Gemini, Claude, GPT-4, Grok)",
      "Audience-Based Pricing Calculator with real-time updates",
      "AI-Assisted Case Onboarding workflow automation",
      "Print Production modeling with USPS pricing integration"
    ],
    status: "working-prototype",
    maturityRating: 8.5
  },
  {
    id: "productintel-agents",
    name: "ProductIntel-Agents",
    tagline: "Multi-Agent Orchestration System",
    description: "Experimental platform exploring domain-specialized AI agents with supervisor coordination. Demonstrates novel approaches to cross-product intelligence discovery through 6 specialized agents, hybrid semantic search, and real-time workflow monitoring.",
    tier: 4,
    linesOfCode: 11100,
    features: 15,
    technologies: ["React", "Express", "TypeScript", "PostgreSQL", "OpenAI", "WebSocket", "Drizzle ORM"],
    keyInnovations: [
      "Multi-agent supervisor pattern with product-specific domain expertise",
      "Hybrid semantic search combining vector similarity with metadata boosting",
      "Real-time WebSocket monitoring of multi-stage AI workflows",
      "Intelligent document chunking preserving API specs and code blocks",
      "NotebookLLM-style chat with cross-product context awareness"
    ],
    status: "concept-validation",
    maturityRating: 6.5
  },
  {
    id: "product-ecosystem",
    name: "Product-Ecosystem",
    tagline: "Multi-Product Intelligence SaaS Platform",
    description: "Functional demo platform showcasing AI-powered feedback analysis across product portfolios. Features dynamic prompt engineering, multi-LLM support, and comprehensive analytics.",
    tier: 2,
    linesOfCode: 25000,
    features: 18,
    technologies: ["Next.js 15", "React 19", "TypeScript", "Supabase", "Claude", "GPT-4o", "Groq"],
    keyInnovations: [
      "Dynamic AI prompt system incorporating docs, instructions, and roadmap context",
      "Multi-product portfolio management for 4 demo products",
      "ROI calculator with investment scenario modeling",
      "Dual AI session simulation for testing product responses",
      "Comprehensive API architecture with 59 routes and RLS security"
    ],
    demoUrl: "https://productintel.io",
    status: "functional-demo",
    maturityRating: 8.0
  },
  {
    id: "data-viz-chat",
    name: "Data Visualization Chat",
    tagline: "AI-Powered Multi-Source Analytics Platform",
    description: "Real-time data visualization chatbot with infinite canvas UI. Streams responses from multiple LLM providers while rendering interactive charts from 7 data sources (stocks, weather, economic indicators). Features sophisticated NLP query parsing, technical indicator calculations, and draggable visualization cards.",
    tier: 4,
    linesOfCode: 6071,
    features: 18,
    technologies: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Vercel AI SDK", "Recharts", "Tailwind"],
    keyInnovations: [
      "SSE streaming architecture handling text, visualizations, and metadata simultaneously",
      "Infinite canvas with 8-point draggable, resizable visualization cards",
      "Multi-provider LLM switching (OpenAI, Anthropic, xAI) at runtime",
      "NLP query parser understanding complex financial queries and modification intents",
      "Real-time technical indicator calculations (RSI, with MACD/Bollinger recognition)",
      "Agent-based system with database-driven prompt customization per data source"
    ],
    demoUrl: "https://v0-llm-chat-with-web-viewer.vercel.app",
    status: "working-prototype",
    maturityRating: 7.0
  },
  {
    id: "roadmap-app",
    name: "Roadmap Application",
    tagline: "Product Roadmap Visualization Tool",
    description: "Concept validation for product roadmap management with dual visualization modes and multi-dimensional filtering.",
    tier: 3,
    linesOfCode: 6000,
    features: 8,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS"],
    keyInnovations: [
      "Dual view modes with block and Gantt chart visualizations",
      "Multi-dimensional filtering by application and persona",
      "Dynamic quarter calculation for timeline planning",
      "In-place editing with real-time Supabase sync"
    ],
    status: "concept-validation",
    maturityRating: 6.5
  },
  {
    id: "easyvoc",
    name: "EasyVOC",
    tagline: "Voice of Customer Platform",
    description: "Working prototype for AI-powered feedback collection with PM-configurable guidance and automated insight generation.",
    tier: 3,
    linesOfCode: 17000,
    features: 14,
    technologies: ["React 18", "Vite", "TypeScript", "Drizzle ORM", "Express", "OpenAI GPT-4o"],
    keyInnovations: [
      "PM-configurable chat guidance with conditional triggers",
      "Proposed changes workflow to prevent duplicate suggestions",
      "Journey analytics with AI-powered personalized recommendations",
      "Team collaboration with role-based permissions",
      "Performance analytics with snapshot caching"
    ],
    status: "working-prototype",
    maturityRating: 7.0
  },
  {
    id: "comm-recon",
    name: "Comm-Recon",
    tagline: "Financial Reconciliation Command Center",
    description: "Prototype demonstrating function-calling RAG for financial data queries with real-time monitoring capabilities.",
    tier: 2,
    linesOfCode: 12000,
    features: 12,
    technologies: ["Next.js 15", "React 19", "TypeScript", "Supabase", "OpenAI GPT-4o", "Recharts"],
    keyInnovations: [
      "Function-calling RAG for precise data queries (vs. approximate vector search)",
      "Real-time SLA monitoring with 30-second polling",
      "Filter-driven context injection for LLM analysis",
      "API proxy pattern for corporate firewall bypass",
      "Multi-source configuration (env vars, localStorage, server)"
    ],
    demoUrl: "https://recon.mikeholloway.dev",
    status: "working-prototype",
    maturityRating: 7.5
  },
  {
    id: "domain-ai-studio",
    name: "Domain AI Studio",
    tagline: "End-to-End Local LLM Platform",
    description: "Planned platform unifying RAG knowledge management with local model fine-tuning. Will combine document ingestion, vector search, and RAG capabilities with frontier-to-local model distillation, enabling organizations to build privacy-preserving domain-expert AI systems optimized for Apple Silicon.",
    tier: 2,
    linesOfCode: 9443,
    features: 24,
    technologies: ["Next.js", "React", "TypeScript", "Python", "Supabase", "Ollama", "MLX", "OpenAI", "Vercel AI SDK"],
    keyInnovations: [
      "End-to-end workflow: Document upload → RAG knowledge base → Training data generation → Local model fine-tuning",
      "RAG architecture with automated document embedding and vector similarity search",
      "Few-shot knowledge transfer from GPT-4/Claude into specialized Llama models",
      "Apple Silicon optimization with MLX framework for hardware acceleration",
      "Admin console for managing knowledge bases, model configurations, and fine-tuning workflows",
      "Multi-model deployment with parameter tuning and performance analytics"
    ],
    status: "roadmap",
    maturityRating: 0,
    combinedFrom: ["slm-admin", "llm-distillation"]
  },
  {
    id: "nexus-insight",
    name: "Nexus Insight",
    tagline: "Apprentice AI for Business Logic",
    description: "An AI apprentice that learns business logic and user preferences by observing interactions. Features a 'Skill Wallet' and 'Implicit Signals Log' that adapts to user behavior in real-time. Includes 'Negative Logic' learning (what NOT to do) and Temporal Triggers.",
    tier: 4,
    linesOfCode: 2400,
    features: 8,
    technologies: ["Next.js", "React", "Tailwind CSS", "Lucide React"],
    keyInnovations: [
      "Apprentice Mode: AI observes user corrections to learn domain rules",
      "Skill Wallet: Visual representation of learned capabilities",
      "Implicit Signals Log: Tracking non-verbal user preferences",
      "Proactive Insights: AI suggests actions based on learned patterns (e.g., 'Monday Recon')"
    ],
    status: "working-prototype",
    maturityRating: 7.0
  }
];

export const getActiveProjects = () => projects.filter(p => p.status !== "roadmap");
export const getRoadmapProjects = () => projects.filter(p => p.status === "roadmap");

export const getTotalStats = () => {
  const activeProjects = getActiveProjects();
  return {
    totalProjects: activeProjects.length,
    totalLinesOfCode: activeProjects.reduce((sum, p) => sum + p.linesOfCode, 0),
    functionalDemos: activeProjects.filter(p => p.status === "functional-demo" || p.status === "working-prototype").length,
    averageMaturity: (activeProjects.reduce((sum, p) => sum + p.maturityRating, 0) / activeProjects.length).toFixed(1)
  };
};

export const getFlagshipProject = () => projects.find(p => p.id === "velocity-easycomm");
export const getTier1Projects = () => getActiveProjects().filter(p => p.tier === 1);
export const getTier2Projects = () => getActiveProjects().filter(p => p.tier === 2);
export const getTier3Projects = () => getActiveProjects().filter(p => p.tier === 3);
export const getTier4Projects = () => getActiveProjects().filter(p => p.tier === 4);
