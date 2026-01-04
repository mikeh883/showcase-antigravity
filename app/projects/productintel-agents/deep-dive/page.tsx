import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Sparkles, Rocket, FlaskConical, Users, Brain, GitBranch, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProductIntelDeepDivePage() {
  const project = projects.find(p => p.id === "productintel-agents");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-600 dark:text-orange-400 font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              <span>Novel AI Architecture</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-balance">{project.name}</h1>
            <p className="text-2xl text-orange-600 dark:text-orange-300 font-medium">{project.tagline}</p>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
            {project.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-blue-500" />
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
              <div className="text-3xl font-bold">{project.linesOfCode.toLocaleString()}</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-cyan-500" />
                <div className="text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div className="text-3xl font-bold">6</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-purple-500" />
                <div className="text-sm text-muted-foreground">Innovations</div>
              </div>
              <div className="text-3xl font-bold">{project.keyInnovations.length}</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <div className="text-sm text-muted-foreground">Maturity</div>
              </div>
              <div className="text-3xl font-bold">{project.maturityRating}/10</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Competitive Advantage */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">The Competitive Moat</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl glass-card border-red-500/20 bg-red-500/5">
              <h3 className="font-bold text-lg mb-3 text-red-500 flex items-center gap-2">
                <span className="text-xl">❌</span> Generic AI Systems
              </h3>
              <p className="text-muted-foreground text-sm mb-4 italic">
                "The BNPL API could integrate with analytics for better customer insights and with checkout flows for improved user experience."
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="text-red-500">•</span>
                  <span>One-size-fits-all responses</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="text-red-500">•</span>
                  <span>No industry context awareness</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="text-red-500">•</span>
                  <span>Limited compliance understanding</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="text-red-500">•</span>
                  <span>Surface-level integration suggestions</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl glass-card border-green-500/20 bg-green-500/5">
              <h3 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                <span className="text-xl">✅</span> ProductIntel Domain Experts
              </h3>
              <p className="text-muted-foreground text-sm mb-4 italic">
                "BNPL triggers Fair Lending Act compliance (12-16 week regulatory review required). Credit decisioning requires ECOA safeguards. PCI scope expansion needed. Timeline: 18-24 weeks including CFPB audit. Recommend legal counsel engagement."
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="text-green-500">•</span>
                  <span>Domain-expert analysis (FinTech, Healthcare, E-commerce)</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="text-green-500">•</span>
                  <span>Regulatory compliance awareness</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="text-green-500">•</span>
                  <span>Industry-specific terminology and context</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/90">
                  <span className="text-green-500">•</span>
                  <span>Deep integration recommendations with compliance timelines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 1: Multi-Agent Supervisor Pattern */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
              1
            </div>
            <h2 className="text-3xl font-bold">Multi-Agent Supervisor Pattern</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2 text-orange-600 dark:text-orange-300">
                <GitBranch className="w-5 h-5" />
                The Problem
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Generic AI systems analyze product changes with general-purpose intelligence, missing critical domain-specific
                requirements like regulatory compliance, industry best practices, and specialized terminology. A payment API update
                analyzed by generic AI won't surface Fair Lending Act implications or PCI compliance requirements.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-300">The Solution</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                <strong>Supervisor Agent Orchestration</strong> that routes webhooks to domain-specialized Discovery Agents
                (FinTech, Healthcare, E-commerce), each with tailored expertise, industry vocabulary, and compliance awareness.
                The supervisor coordinates cross-product analysis across multiple specialized teams simultaneously.
              </p>

              <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm overflow-x-auto border border-white/10 shadow-inner">
                <div className="text-cyan-400">// Supervisor routes to specialized agents</div>
                <div className="text-slate-200">{`{`}</div>
                <div className="text-slate-200 ml-4">"webhook_source": "PAYMENTS",</div>
                <div className="text-slate-200 ml-4">"primary_discovery": "fintech_discovery_agent",</div>
                <div className="text-slate-200 ml-4">"specialized_team": "fintech_compliance_team",</div>
                <div className="text-slate-200 ml-4">"domain_expertise": [</div>
                <div className="text-green-400 ml-8">"PCI_DSS", "Fair_Lending_Act",</div>
                <div className="text-green-400 ml-8">"CFPB_Regulations", "AML_BSA"</div>
                <div className="text-slate-200 ml-4">]</div>
                <div className="text-slate-200">{`}`}</div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-cyan-600 dark:text-cyan-300">Impact & Differentiation</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground/90">Industry-Expert Intelligence</div>
                    <div className="text-muted-foreground text-sm">FinTech agents understand payment compliance, Healthcare agents prioritize HIPAA, E-commerce agents focus on conversion optimization</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground/90">Insurmountable Competitive Moat</div>
                    <div className="text-muted-foreground text-sm">Deep domain specialization that generic AI systems cannot replicate without years of training on industry-specific data</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-purple-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground/90">Scalable Expertise</div>
                    <div className="text-muted-foreground text-sm">Supervisor coordinates multiple domain teams analyzing the same API from different specialized perspectives simultaneously</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 2: Hybrid Semantic Search */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
              2
            </div>
            <h2 className="text-3xl font-bold">Hybrid Semantic Search with Metadata Boosting</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-300">The Problem</h3>
              <p className="text-foreground/90 leading-relaxed">
                Simple vector similarity search misses relevant context. A query for "auth" should find OAuth, JWT, and authentication
                documentation, but basic vector search with high thresholds (0.7+) filters out semantically related but differently
                phrased content. Product teams lose valuable insights buried in documentation.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-300">The Solution</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                <strong>Three-Phase Hybrid Retrieval:</strong> (1) Query expansion with synonyms, (2) Broad recall with 0.5 threshold,
                (3) Re-ranking with metadata boosting for recency, content type, and product importance. This achieves high recall
                AND precision through multi-stage optimization.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-orange-600 dark:text-orange-300 mb-2">Phase 1</div>
                  <div className="text-sm text-foreground/70">Query expansion: "auth" → "authentication", "oauth", "jwt", "security"</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-orange-600 dark:text-orange-300 mb-2">Phase 2</div>
                  <div className="text-sm text-foreground/70">Broad recall: 0.5 threshold, fetch 3x desired results</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-orange-600 dark:text-orange-300 mb-2">Phase 3</div>
                  <div className="text-sm text-foreground/70">Metadata boosting: Recency +15%, API docs +8%, core products +10%</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-cyan-600 dark:text-cyan-300">Impact & Differentiation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Most vector search implementations use "dumb similarity" scoring. ProductIntel adds <strong>business intelligence</strong> through
                metadata awareness, achieving documented accuracy improvements through the three-phase approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 3: Real-Time WebSocket Orchestration */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold border border-orange-500/20">
              3
            </div>
            <h2 className="text-3xl font-bold">Real-Time WebSocket Workflow Monitoring</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-300">The Problem</h3>
              <p className="text-foreground/90 leading-relaxed">
                Multi-stage AI workflows (Discovery → Analysis → Prototype → Persona → Review) can take minutes to complete.
                Without real-time visibility, users don't know if the system is processing, stuck, or failed. This creates
                uncertainty and reduces trust in AI systems.
              </p>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-300">The Solution</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                <strong>Bi-directional WebSocket Architecture</strong> providing live agent status updates, workflow progress tracking,
                and activity logs. Server-side orchestrator broadcasts state changes to all connected clients with graceful
                degradation for serverless environments.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-orange-600 dark:text-orange-300 mb-2">Event Types</div>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• agent_status_update</li>
                    <li>• workflow_complete</li>
                    <li>• agent_statuses (full sync)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-orange-600 dark:text-orange-300 mb-2">Features</div>
                  <ul className="text-sm text-foreground/70 space-y-1">
                    <li>• Automatic reconnection</li>
                    <li>• Serverless fallback</li>
                    <li>• Live progress bars (25%, 50%, 75%, 100%)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-card">
              <h3 className="font-bold text-lg mb-3 text-cyan-600 dark:text-cyan-300">Impact & Differentiation</h3>
              <p className="text-muted-foreground text-sm">
                Most AI systems are "request-response." ProductIntel provides <strong>continuous operational transparency</strong> with
                live status updates, building user confidence through real-time visibility into multi-agent orchestration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Example */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Real-World Impact: BNPL API Analysis</h2>

          <div className="space-y-6">
            <p className="text-foreground/90 leading-relaxed">
              When a Payment Gateway publishes a Buy Now, Pay Later (BNPL) API, ProductIntel's specialized agents analyze it
              from three domain perspectives simultaneously, each surfacing unique insights that generic AI would miss:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 rounded-xl glass-card">
                <h3 className="font-bold text-lg mb-3 text-yellow-500">💳 FinTech Team</h3>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Fair Lending Act compliance required</li>
                  <li>• 12-16 week regulatory review</li>
                  <li>• PCI scope expansion needed</li>
                  <li>• CFPB audit timeline: 18-24 weeks</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass-card">
                <h3 className="font-bold text-lg mb-3 text-blue-500">🛒 E-commerce Team</h3>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• 23% conversion lift potential</li>
                  <li>• $2.3M annual revenue impact</li>
                  <li>• 6-week implementation</li>
                  <li>• A/B testing framework essential</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl glass-card">
                <h3 className="font-bold text-lg mb-3 text-green-500">📊 Analytics Team</h3>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• New revenue stream opportunity</li>
                  <li>• Credit risk modeling capabilities</li>
                  <li>• 8-week ML model training</li>
                  <li>• ROI: 300% within 12 months</li>
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-xl glass-card border-purple-500/20 bg-purple-500/5">
              <h3 className="font-bold text-lg mb-3 text-purple-500">🎯 Strategic Synthesis</h3>
              <p className="text-foreground/90 text-sm">
                "Cross-domain analysis: BNPL positions ProductIntel in $24B+ installment economy. FinTech compliance creates
                competitive moat. E-commerce conversion optimization drives immediate revenue. Analytics capabilities enable
                new product offerings. Recommend Q1 prioritization with parallel team execution."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="container mx-auto px-6 py-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 text-sm font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <h3 className="font-bold text-lg mb-3 text-orange-600 dark:text-orange-400">Why This Matters</h3>
            <p className="text-foreground/90 leading-relaxed">
              ProductIntel-Agents demonstrates that <strong>architectural innovation</strong> can create defensible competitive advantages.
              While competitors build generic AI tools, domain-specialized agent teams with industry expertise represent a
              <strong> fundamentally different approach</strong> that delivers exponentially more value to users in regulated industries.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
