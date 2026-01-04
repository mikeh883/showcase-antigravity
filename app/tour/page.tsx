import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Sparkles, Code2, Zap, Rocket, Target, FlaskConical } from "lucide-react";
import { getFlagshipProject, getTier2Projects, getTier4Projects } from "@/lib/projects";

export default function TourPage() {
  const flagship = getFlagshipProject();
  const tier2 = getTier2Projects();
  const tier4 = getTier4Projects();
  const productIntel = tier4.find(p => p.id === "productintel-agents");

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="container mx-auto px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
            <Clock className="w-4 h-4" />
            <span>5-Minute Guided Tour</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold">
            A Curated Journey Through
            <br />
            <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Product Innovation
            </span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From novel ideas to working prototypes. See how creative problem-solving
            and industry knowledge transform concepts into functional applications.
          </p>
        </div>
      </section>

      {/* Tour Timeline */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Stop 1: The Hook */}
          <div className="relative pl-8 border-l-2 border-primary/30 animate-slide-up">
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">The Hook (1 minute)</h2>
              </div>
              <p className="text-foreground/70 text-lg">
                I take novel ideas and transform them into working prototypes through creative problem-solving
                and deep industry knowledge. Each application demonstrates real AI integration, live data persistence,
                and functional workflows—not hardcoded demos.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-primary">140K+</div>
                  <div className="text-sm text-foreground/70 mt-1">Lines of Functional Code</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400">9 Apps</div>
                  <div className="text-sm text-foreground/70 mt-1">Working Prototypes</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">Real AI</div>
                  <div className="text-sm text-foreground/70 mt-1">Live LLM Integration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stop 2: The Flagship */}
          {flagship && (
            <div className="relative pl-8 border-l-2 border-primary/30 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                2
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">The Flagship Project (2 minutes)</h2>
                </div>

                <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{flagship.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-lg">{flagship.tagline}</p>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      {flagship.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="text-2xl font-bold">{flagship.linesOfCode.toLocaleString()}</div>
                        <div className="text-sm text-foreground/70">Lines of Code</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="text-2xl font-bold">{flagship.features}+ Features</div>
                        <div className="text-sm text-foreground/70">Major Capabilities</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground/70">Key Innovations:</div>
                      <ul className="space-y-2">
                        {flagship.keyInnovations.slice(0, 3).map((innovation, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/90">
                            <Sparkles className="w-4 h-4 text-yellow-400 mt-1 shrink-0" />
                            <span>{innovation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/projects/${flagship.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all"
                    >
                      Deep Dive into {flagship.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
              </div>
            </div>
          )}

          {/* Stop 3: The Innovation Showcase */}
          {productIntel && (
            <div className="relative pl-8 border-l-2 border-orange-400/30 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold">
                3
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold">The Innovation (2 minutes)</h2>
                </div>

                <div className="space-y-4">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-2">
                        Experimental • Novel Concept
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{productIntel.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-lg">{productIntel.tagline}</p>
                    </div>

                    <p className="text-foreground leading-relaxed">
                      While EasyComm showcases production-grade sophistication, ProductIntel-Agents explores cutting-edge
                      AI architecture that doesn't exist in mainstream tools yet: <strong className="text-orange-600 dark:text-orange-400">domain-specialized
                      AI agent teams</strong> with industry expertise that generic AI systems cannot match.
                    </p>

                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">The Breakthrough:</div>
                      <p className="text-foreground text-sm">
                        Instead of one generic AI analyzing your payment API update, you get a <strong>FinTech compliance expert</strong> who
                        understands Fair Lending Act requirements, a <strong>Healthcare specialist</strong> who prioritizes HIPAA, and an
                        <strong> E-commerce conversion optimizer</strong>—all working together through supervisor coordination.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="text-2xl font-bold">{productIntel.linesOfCode.toLocaleString()}</div>
                        <div className="text-sm text-foreground/70">Lines of Code</div>
                      </div>
                      <div className="p-4 rounded-lg bg-white/5">
                        <div className="text-2xl font-bold">6 Agents</div>
                        <div className="text-sm text-foreground/70">Specialized AI Teams</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-foreground/70">What Makes It Unique:</div>
                      <ul className="space-y-2">
                        {productIntel.keyInnovations.slice(0, 3).map((innovation, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/90">
                            <Sparkles className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                            <span>{innovation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/projects/${productIntel.id}/deep-dive`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all"
                    >
                      Explore the Innovation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
              </div>
            </div>
          )}

          {/* Stop 4: The Breadth */}
          <div className="relative pl-8 border-l-2 border-primary/30 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
              4
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">The Breadth (1 minute)</h2>
              </div>
              <p className="text-foreground/70 text-lg">
                That's just one project. Here are {tier2.length} more sophisticated systems demonstrating
                different capabilities:
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                {tier2.map((project, idx) => (
                  <div
                    key={project.id}
                    className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/30 transition-all"
                  >
                    <h3 className="font-bold text-lg mb-2">{project.name}</h3>
                    <p className="text-foreground/70 text-sm mb-3">{project.tagline}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4 text-blue-400" />
                        <span className="text-foreground/70">{(project.linesOfCode / 1000).toFixed(0)}K LOC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-foreground/70">{project.features} features</span>
                      </div>
                    </div>
                    {project.demoUrl && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                        >
                          View Live →
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stop 5: The Skills */}
          <div className="relative pl-8 border-l-2 border-primary/30 animate-slide-up" style={{ animationDelay: "0.7s" }}>
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
              5
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">What This Demonstrates (1 minute)</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-3 text-primary">Product Thinking</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Identified real user pain points</li>
                    <li>• Designed solutions, not just features</li>
                    <li>• Made conscious trade-off decisions</li>
                    <li>• Measured impact with metrics</li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-3 text-cyan-400">Technical Execution</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Multi-LLM architecture & RAG systems</li>
                    <li>• Production-grade full-stack apps</li>
                    <li>• Real-time systems & WebSockets</li>
                    <li>• Type-safe, well-architected code</li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-3 text-purple-400">Domain Expertise</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Enterprise communications</li>
                    <li>• Financial operations</li>
                    <li>• Product management tools</li>
                    <li>• AI/ML systems</li>
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                  <h3 className="font-semibold mb-3 text-yellow-400">End-to-End Ownership</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>• Concept to production</li>
                    <li>• Solo execution (all vibe-coded)</li>
                    <li>• Deployment & documentation</li>
                    <li>• Iterative improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-linear-to-br from-blue-950/50 to-cyan-950/50 border border-blue-500/20 text-center space-y-6">
            <h2 className="text-3xl font-bold">Want to See More?</h2>
            <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
              Explore the complete portfolio with detailed breakdowns of each project,
              including architecture decisions, code samples, and lessons learned.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg font-semibold flex items-center gap-2 transition-all hover:scale-105"
              >
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="px-8 py-4 border border-gray-700 hover:border-gray-600 rounded-lg font-semibold transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
