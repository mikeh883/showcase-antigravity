import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Sparkles, Rocket, CheckCircle2, Activity, FlaskConical, MapIcon } from "lucide-react";
import { projects, getTier1Projects, getTier2Projects, getTier3Projects, getTier4Projects, getRoadmapProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const tier1 = getTier1Projects();
  const tier2 = getTier2Projects();
  const tier3 = getTier3Projects();
  const tier4 = getTier4Projects();
  const roadmap = getRoadmapProjects();

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold font-heading">
              Complete
              <br />
              <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Project Portfolio
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {projects.length} working prototypes built from novel ideas, organized by complexity and scope.
              Each demonstrates the journey from concept to functional application through creative problem-solving.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl glass-card">
              <div className="text-3xl font-bold text-primary">{tier1.length}</div>
              <div className="text-sm text-muted-foreground">Flagship Project</div>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <div className="text-3xl font-bold text-cyan-500">{tier2.length}</div>
              <div className="text-sm text-muted-foreground">Deep Dive Projects</div>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <div className="text-3xl font-bold text-purple-500">{tier3.length}</div>
              <div className="text-sm text-muted-foreground">Supporting Projects</div>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <div className="text-3xl font-bold text-orange-500">{tier4.length}</div>
              <div className="text-sm text-muted-foreground">Experimental</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1: Flagship */}
      {tier1.length > 0 && (
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Flagship Project</h2>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                Most Sophisticated
              </span>
            </div>

            {tier1.map((project) => (
              <div
                key={project.id}
                className="group p-8 rounded-3xl glass-card relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <Rocket className="w-64 h-64" />
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-4xl font-bold mb-2">{project.name}</h3>
                      <p className="text-2xl text-primary">{project.tagline}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                      <div className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-lg shadow-primary/25">
                        {project.maturityRating}/10 Functional
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground text-lg leading-relaxed max-w-4xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <Code2 className="w-5 h-5" />
                        <div className="text-sm font-medium">Lines of Code</div>
                      </div>
                      <div className="text-2xl font-bold">{project.linesOfCode.toLocaleString()}</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2 text-cyan-500">
                        <Sparkles className="w-5 h-5" />
                        <div className="text-sm font-medium">Features</div>
                      </div>
                      <div className="text-2xl font-bold">{project.features}+</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2 text-primary">
                        <Rocket className="w-5 h-5" />
                        <div className="text-sm font-medium">Innovations</div>
                      </div>
                      <div className="text-2xl font-bold">{project.keyInnovations.length}</div>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2 text-green-500">
                        <Activity className="w-5 h-5" />
                        <div className="text-sm font-medium">Status</div>
                      </div>
                      <div className="text-lg font-bold capitalize">{project.status}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Key Innovations</div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.keyInnovations.slice(0, 4).map((innovation, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                          <Sparkles className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium">{innovation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-primary/20"
                  >
                    Explore Full Deep Dive
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Innovation: ProductIntel-Agents */}
      {tier4.length > 0 && tier4[0] && (
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold">Featured Innovation</h2>
              <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-semibold">
                Experimental • Novel Concept
              </span>
            </div>

            <div className="group p-8 rounded-3xl glass-card">
              <div className="space-y-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{tier4[0].name}</h3>
                    <p className="text-xl text-blue-500 font-medium">{tier4[0].tagline}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-bold border border-orange-500/20">
                      {tier4[0].maturityRating}/10 Functional
                    </div>
                  </div>
                </div>

                <p className="text-foreground text-lg leading-relaxed">
                  While EasyComm showcases production-grade sophistication, ProductIntel-Agents explores cutting-edge
                  AI architecture that doesn't exist in mainstream tools yet: <strong className="text-orange-500">domain-specialized
                    AI agent teams</strong> with industry expertise that generic AI systems cannot match.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-orange-500">
                      <Code2 className="w-5 h-5" />
                      <div className="text-sm font-medium">Lines of Code</div>
                    </div>
                    <div className="text-2xl font-bold">{tier4[0].linesOfCode.toLocaleString()}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-orange-500">
                      <Sparkles className="w-5 h-5" />
                      <div className="text-sm font-medium">Features</div>
                    </div>
                    <div className="text-2xl font-bold">{tier4[0].features}+</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-orange-500">
                      <FlaskConical className="w-5 h-5" />
                      <div className="text-sm font-medium">AI Agents</div>
                    </div>
                    <div className="text-2xl font-bold">6</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-2 mb-2 text-orange-500">
                      <Rocket className="w-5 h-5" />
                      <div className="text-sm font-medium">Innovations</div>
                    </div>
                    <div className="text-2xl font-bold">{tier4[0].keyInnovations.length}</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">What Makes It Unique</div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tier4[0].keyInnovations.slice(0, 3).map((innovation, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-foreground/90">
                        <Sparkles className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                        <span className="text-sm">{innovation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${tier4[0].id}/deep-dive`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold transition-all shadow-lg shadow-orange-500/20"
                >
                  Explore the Innovation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tier 2: Deep Dive Projects */}
      {tier2.length > 0 && (
        <section className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-cyan-500" />
              <h2 className="text-3xl font-bold">Deep Dive Projects</h2>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-500 text-sm font-semibold border border-cyan-500/20">
                Advanced Systems
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {tier2.map((project) => (
                <div
                  key={project.id}
                  className="group p-8 rounded-3xl glass-card hover:border-cyan-500/30 transition-all"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{project.name}</h3>
                        <p className="text-cyan-500 text-sm font-medium">{project.tagline}</p>
                      </div>
                      <div className="px-2 py-1 rounded bg-cyan-500/10 text-cyan-500 text-xs font-bold border border-cyan-500/20">
                        {project.maturityRating}/10
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/5">
                      <div>
                        <div className="text-xs text-muted-foreground">LOC</div>
                        <div className="text-lg font-bold">{(project.linesOfCode / 1000).toFixed(0)}K</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Features</div>
                        <div className="text-lg font-bold">{project.features}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <div className="text-sm font-bold capitalize text-green-500">{project.status}</div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Top Innovations</div>
                      <ul className="space-y-2">
                        {project.keyInnovations.slice(0, 2).map((innovation, idx) => (
                          <li key={idx} className="text-xs text-foreground/80 flex items-start gap-2">
                            <span className="text-cyan-500 mt-0.5">•</span>
                            <span className="line-clamp-1">{innovation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 font-bold group-hover:gap-3 transition-all"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground font-medium transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier 3 & 4 Grid */}
      <section className="container mx-auto px-6 py-12 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Supporting */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-purple-500" />
              <h2 className="text-2xl font-bold">Supporting Projects</h2>
            </div>
            <div className="grid gap-4">
              {tier3.map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-2xl glass-card hover:border-purple-500/30 transition-all"
                >
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <p className="text-purple-400 text-xs font-medium">{project.tagline}</p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-white/5 pt-3 mt-3">
                      <span>{(project.linesOfCode / 1000).toFixed(0)}K LOC</span>
                      <span>•</span>
                      <span>{project.features} features</span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-bold mt-2 group-hover:gap-2 transition-all"
                    >
                      Details
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experimental */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold">Experimental</h2>
            </div>
            <div className="grid gap-4">
              {tier4.filter(p => p.id !== "productintel-agents").map((project) => (
                <div
                  key={project.id}
                  className="group p-6 rounded-2xl glass-card hover:border-orange-500/30 transition-all"
                >
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg">{project.name}</h3>
                    <p className="text-orange-400 text-xs font-medium">{project.tagline}</p>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground border-t border-white/5 pt-3 mt-3">
                      <span>{(project.linesOfCode / 1000).toFixed(1)}K LOC</span>
                      <span>•</span>
                      <span className="capitalize">{project.status}</span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs text-orange-400 hover:text-orange-300 font-bold mt-2 group-hover:gap-2 transition-all"
                    >
                      Explore Concept
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      {roadmap.length > 0 && (
        <section className="container mx-auto px-6 py-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <MapIcon className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold">Roadmap</h2>
            </div>

            {roadmap.map((project) => (
              <div
                key={project.id}
                className="group p-8 rounded-3xl glass-card border-l-4 border-yellow-500"
              >
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold mb-3 border border-yellow-500/20">
                      <MapIcon className="w-3 h-3" />
                      <span>Future Development • Tier {project.tier}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-yellow-500 text-lg">{project.tagline}</p>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
