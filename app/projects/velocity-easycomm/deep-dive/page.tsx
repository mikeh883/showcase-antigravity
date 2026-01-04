import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Sparkles, Rocket, Zap, DollarSign, Users, Printer, CheckCircle2 } from "lucide-react";
import { getFlagshipProject } from "@/lib/projects";

export default function EasyCommDeepDivePage() {
  const project = getFlagshipProject();

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      {/* Header */}
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>Flagship Project Deep Dive</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-balance">
              {project.name}
              <br />
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Deep Dive
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground">{project.tagline}</p>
          </div>

          <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
            {project.description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-xl glass-card">
              <Code2 className="w-6 h-6 text-primary mb-2" />
              <div className="text-3xl font-bold">{project.linesOfCode.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground mt-1">Lines of Code</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <Sparkles className="w-6 h-6 text-cyan-500 mb-2" />
              <div className="text-3xl font-bold">{project.features}+</div>
              <div className="text-sm text-muted-foreground mt-1">Major Features</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <Rocket className="w-6 h-6 text-purple-500 mb-2" />
              <div className="text-3xl font-bold">{project.keyInnovations.length}</div>
              <div className="text-sm text-muted-foreground mt-1">Key Innovations</div>
            </div>
            <div className="p-5 rounded-xl glass-card">
              <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
              <div className="text-3xl font-bold">{project.maturityRating}/10</div>
              <div className="text-sm text-muted-foreground mt-1">Functional</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Challenge</h2>
          <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
            <p className="text-xl text-foreground/90 leading-relaxed mb-6">
              Print and mail service providers face a critical bottleneck: onboarding new clients takes <strong className="text-red-500 font-semibold">2-3 months</strong> of manual back-and-forth,
              document conversion is slow and error-prone, and pricing is opaque with hidden costs.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-background/50 border border-red-500/10">
                <div className="text-2xl font-bold text-red-500 mb-2">8-12 weeks</div>
                <div className="text-sm text-muted-foreground">Average onboarding time</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-red-500/10">
                <div className="text-2xl font-bold text-red-500 mb-2">Manual</div>
                <div className="text-sm text-muted-foreground">Document conversion process</div>
              </div>
              <div className="p-4 rounded-lg bg-background/50 border border-red-500/10">
                <div className="text-2xl font-bold text-red-500 mb-2">Hidden</div>
                <div className="text-sm text-muted-foreground">Cost structure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">The Solution</h2>
          <div className="p-8 rounded-2xl glass-card">
            <p className="text-xl text-foreground/90 leading-relaxed mb-6">
              EasyComm transforms document communication workflows with AI-powered automation,
              reducing onboarding from months to <strong className="text-green-500 font-semibold">2-3 weeks</strong> (80% reduction)
              and providing complete cost transparency.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-green-500 mb-2">80%</div>
                <div className="text-sm text-muted-foreground">Faster onboarding</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-green-500 mb-2">4 LLMs</div>
                <div className="text-sm text-muted-foreground">Multi-model synthesis</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-2xl font-bold text-green-500 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Pricing transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 1: Dual Import Modes */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">1</div>
            <h2 className="text-4xl font-bold">Dual Import Mode Architecture</h2>
          </div>

          <div className="space-y-6">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-500" />
                The Innovation
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Different documents have different needs. Compliance docs need pixel-perfect accuracy,
                but marketing letters need to be editable. Traditional systems force you to choose one approach.
                EasyComm offers both.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl glass-card">
                  <h4 className="font-bold text-lg mb-3 text-blue-500">Exact Replica Mode</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Cost:</strong> $0.02/document</p>
                    <p><strong className="text-foreground">Method:</strong> Pixel-perfect HTML positioning</p>
                    <p><strong className="text-foreground">Use case:</strong> Regulatory disclosures, legal documents, statements</p>
                    <p><strong className="text-foreground">Output:</strong> Exact visual replica with positioned elements</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl glass-card">
                  <h4 className="font-bold text-lg mb-3 text-cyan-500">Semantic/Editable Mode</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Cost:</strong> $0.0075/document (63% cheaper)</p>
                    <p><strong className="text-foreground">Method:</strong> Hybrid HTML with editable sections</p>
                    <p><strong className="text-foreground">Use case:</strong> Marketing letters, bills, promotional materials</p>
                    <p><strong className="text-foreground">Output:</strong> Positioned headers + semantic body + variables</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Impact:</strong> Customers save 63% when they can use semantic mode, while compliance-critical
                  documents maintain 100% accuracy with exact replica mode.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 2: Multi-LLM Synthesis */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">2</div>
            <h2 className="text-4xl font-bold">Multi-LLM Synthesis Pattern</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                The Innovation
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                No single AI model is best at everything. Instead of betting on one provider, EasyComm uses
                4 different LLMs strategically: route by task complexity, synthesize results for critical operations,
                and optimize costs without sacrificing quality.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-4">Model Strategy</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <div>
                        <strong className="text-foreground">Gemini 2.5 Flash:</strong>
                        <span className="text-muted-foreground"> Fast classification, production processing (cheap & fast)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-500">•</span>
                      <div>
                        <strong className="text-foreground">Gemini 3 Pro:</strong>
                        <span className="text-muted-foreground"> Complex document analysis (better reasoning)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-500">•</span>
                      <div>
                        <strong className="text-foreground">Claude:</strong>
                        <span className="text-muted-foreground"> Document consultation (conversational)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-yellow-500">•</span>
                      <div>
                        <strong className="text-foreground">GPT-4:</strong>
                        <span className="text-muted-foreground"> Fallback & specialized tasks</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-4">Synthesis Mode</h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    For critical operations (field extraction, compliance analysis), run all 3 models
                    and combine results:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 rounded bg-white/5">
                      <strong className="text-foreground">Vote:</strong>
                      <span className="text-muted-foreground"> Use majority consensus for classification</span>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <strong className="text-foreground">Merge:</strong>
                      <span className="text-muted-foreground"> Combine unique insights from each model</span>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <strong className="text-foreground">Confidence:</strong>
                      <span className="text-muted-foreground"> Score based on agreement level</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-sm text-purple-400">
                  <strong>Impact:</strong> 60-70% cost savings vs. always using premium models,
                  15-20% accuracy improvement on critical tasks through synthesis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 3: Audience-Based Pricing */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">3</div>
            <h2 className="text-4xl font-bold">Audience-Based Pricing Calculator</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-500" />
                The Innovation
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Traditional pricing: "You have 100K contacts in your database, so we charge for 100K."
                But what if you only message 5K active users? EasyComm calculates costs based on selected
                audience segments, not total database size.
              </p>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-4">Example Calculation</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Total Database:</span>
                    <span className="font-bold">100,000 contacts</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Selected Segment:</span>
                    <span className="font-bold text-primary">"Active Users" = 8,500</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-border/50">
                    <span className="text-muted-foreground">Old Model Cost:</span>
                    <span className="font-bold line-through text-red-400">$5 + ($0.001 × 100,000) = $105</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">EasyComm Cost:</span>
                    <span className="font-bold text-green-500 text-xl">$5 + ($0.001 × 8,500) = $13.50</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5">
                  <h5 className="font-semibold mb-2 text-sm">Real-Time Updates</h5>
                  <p className="text-sm text-foreground/70">Cost recalculates instantly as you change segments</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <h5 className="font-semibold mb-2 text-sm">Full Transparency</h5>
                  <p className="text-sm text-foreground/70">Line-item breakdown of every cost component</p>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-600 dark:text-green-400">
                  <strong>Impact:</strong> Fairer pricing increases conversion rates. Customers only pay
                  for who they actually message, not their entire database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 4: AI-Assisted Onboarding */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">4</div>
            <h2 className="text-4xl font-bold">AI-Assisted Case Onboarding</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                The Innovation
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Traditional onboarding: weeks of email tennis gathering information. EasyComm:
                upload samples from your current provider, AI extracts everything, pre-fills the wizard,
                and generates a live Statement of Work as you complete sections.
              </p>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-4 text-red-400">Before (Traditional)</h4>
                    <div className="space-y-3">
                      {[
                        "Sales calls & discovery",
                        "Manual data gathering",
                        "Email back-and-forth",
                        "Create SOW manually",
                        "Legal review & revisions",
                        "Finally sign contract"
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                          {step}
                        </div>
                      ))}
                      <div className="mt-4 p-3 rounded bg-red-500/10 border border-red-500/20 text-red-400 font-bold">
                        Timeline: 8-12 weeks
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-green-400">After (EasyComm)</h4>
                    <div className="space-y-3">
                      {[
                        "Upload current provider samples",
                        "AI analyzes & extracts data",
                        "70% of wizard pre-filled",
                        "Complete remaining sections",
                        "Live SOW updates in real-time",
                        "Review & sign"
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-foreground/90">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                          {step}
                        </div>
                      ))}
                      <div className="mt-4 p-3 rounded bg-green-500/10 border border-green-500/20 text-green-500 font-bold">
                        Timeline: 2-3 weeks (80% faster)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h5 className="font-semibold mb-3">What the AI Extracts</h5>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Document Types</div>
                      <div className="text-muted-foreground">Bills, statements, notices</div>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Volumes</div>
                      <div className="text-muted-foreground">Monthly/quarterly estimates</div>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Channels</div>
                      <div className="text-muted-foreground">Print, email, SMS, web</div>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Branding</div>
                      <div className="text-muted-foreground">Colors, logos, fonts</div>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Compliance</div>
                      <div className="text-muted-foreground">Required disclosures</div>
                    </div>
                    <div className="p-3 rounded bg-white/5">
                      <div className="text-primary mb-1 font-medium">Formatting</div>
                      <div className="text-muted-foreground">Layout preferences</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className="text-sm text-orange-400">
                  <strong>Impact:</strong> Faster revenue recognition, better customer experience,
                  and dramatically reduced sales cycle friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation 5: Print Production Sophistication */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold text-primary-foreground">5</div>
            <h2 className="text-4xl font-bold">Print Production Sophistication</h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl glass-card">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Printer className="w-6 h-6 text-indigo-500" />
                The Innovation
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                Print pricing is notoriously complex and opaque. EasyComm models every USPS cost factor
                accurately: postage classes, presort discounts, consolidation savings, paper stock,
                color options, and address quality services. Complete transparency in real-time.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-4">Postage & Presorting</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-muted-foreground">First-Class</span>
                      <span className="font-mono">$0.51</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-muted-foreground">Marketing Mail</span>
                      <span className="font-mono">$0.32</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-white/10">
                      <span className="text-muted-foreground">Certified</span>
                      <span className="font-mono">$4.25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Priority</span>
                      <span className="font-mono">$8.50</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-muted-foreground mb-2">Presort Discounts:</div>
                    <div className="flex gap-2">
                      {["Standard", "Automation", "Carrier-Route"].map((level) => (
                        <span key={level} className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold mb-4">Production Options</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-foreground/70 mb-2">Paper Stock (5 options)</div>
                      <div className="flex flex-wrap gap-2">
                        {["20# White", "24# White", "60# Linen", "80# Gloss", "100# Cover"].map((stock) => (
                          <span key={stock} className="px-2 py-1 rounded bg-white/5 text-xs">{stock}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-foreground/70 mb-2">Color Options</div>
                      <div className="flex gap-2">
                        {["B&W", "Single-sided", "Double-sided"].map((option) => (
                          <span key={option} className="px-2 py-1 rounded bg-white/5 text-xs">{option}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-foreground/70 mb-2">Envelope Types (5 options)</div>
                      <div className="text-xs text-gray-500">#10, #9, 6×9, 9×12, Window</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="font-bold mb-4">Value-Added Services</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-primary mb-1 font-medium">Consolidation</div>
                    <div className="text-muted-foreground">Household matching saves 8-15%</div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 font-medium">CASS Certification</div>
                    <div className="text-muted-foreground">Address standardization</div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 font-medium">NCOA Processing</div>
                    <div className="text-muted-foreground">Change of address updates</div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 font-medium">Informed Delivery</div>
                    <div className="text-muted-foreground">USPS preview integration</div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 font-medium">Return Envelopes</div>
                    <div className="text-muted-foreground">Pre-paid business reply</div>
                  </div>
                  <div>
                    <div className="text-primary mb-1 font-medium">Inserts</div>
                    <div className="text-muted-foreground">Marketing materials, surveys</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                <p className="text-sm text-indigo-400">
                  <strong>Impact:</strong> Real-time calculation of 15+ variables. Transparency builds trust.
                  Customers see exactly what they're paying for and can optimize their campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-16 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">This is Just One Project</h2>
            <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
              Explore the complete portfolio to see how product thinking and technical execution
              come together across different domains and complexity levels.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-all hover:scale-105 shadow-xl shadow-primary/20"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
