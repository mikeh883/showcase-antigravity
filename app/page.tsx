"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Code2, Rocket, Sparkles, Terminal, Activity, Layers, Clock, Target, FlaskConical, Zap } from "lucide-react";
import { getTotalStats, getFlagshipProject, getTier2Projects, getTier4Projects } from "@/lib/projects";
import { motion } from "framer-motion";

export default function Home() {
  const stats = getTotalStats();
  const flagship = getFlagshipProject();
  const tier2 = getTier2Projects();
  const tier4 = getTier4Projects();
  const productIntel = tier4.find(p => p.id === "productintel-agents");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      {/* Dynamic Background */}
      <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10 pointer-events-none" />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          className="max-w-5xl mx-auto text-center space-y-8"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Product Portfolio 2025-2026</span>
          </motion.div>

          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-balance tracking-tight">
            From Concept to{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Enterprise
              <span className="absolute -inset-1 blur-2xl opacity-20 bg-primary rounded-full" />
            </span>
            <br />
            Building Production AI Products
          </motion.h1>

          <motion.p variants={item} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance font-light">
            A showcase of <strong className="text-foreground font-medium">{stats.totalProjects} working prototypes</strong>—evolving novel ideas into functional applications through creative engineering.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/projects"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              Explore Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Grid Stats */}
      <section className="container mx-auto px-6 py-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto md:h-96"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Large Card */}
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl glass-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-48 h-48" />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="text-sm font-medium text-primary mb-2">Total Output</div>
                <div className="text-6xl font-bold tracking-tight">{(stats.totalLinesOfCode / 1000).toFixed(0)}k+</div>
                <div className="text-2xl text-muted-foreground mt-1">Lines of Code Written</div>
              </div>
              <p className="text-muted-foreground max-w-md">
                Full-stack implementations demonstrating clean architecture, performance optimization, and modern best practices.
              </p>
            </div>
          </div>

          {/* Functional Demos Card */}
          <div className="md:col-span-1 md:row-span-2 p-6 rounded-3xl glass-card flex flex-col justify-between group hover:border-primary/50 transition-colors">
            <div className="p-3 bg-primary/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
              <Activity className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="text-4xl font-bold">{stats.functionalDemos}</div>
              <div className="text-sm text-muted-foreground">Functional Demos</div>
            </div>
          </div>

          {/* Stack Card */}
          <div className="p-6 rounded-3xl glass-card flex flex-col justify-between group hover:border-cyan-500/50 transition-colors">
            <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit">
              <Layers className="w-6 h-6 text-cyan-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">Full Stack</div>
              <div className="text-xs text-muted-foreground">Next.js • Tailwind • AI</div>
            </div>
          </div>

          {/* Terminal Card */}
          <div className="p-6 rounded-3xl glass-card flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
            <div className="p-3 bg-purple-500/10 rounded-2xl w-fit">
              <Terminal className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs text-muted-foreground">Type Safe</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* THE JOURNEY / TOUR CONTENT */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading">The Portfolio Journey</h2>
            <p className="text-muted-foreground text-lg">A curated tour through product innovation</p>
          </div>

          {/* Stop 1: The Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
              1
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">The Hook</h2>
              </div>
              <p className="text-foreground/70 text-lg">
                I take novel ideas and transform them into working prototypes through creative problem-solving
                and deep industry knowledge. Each application demonstrates real AI integration, live data persistence,
                and functional workflows—not hardcoded demos.
              </p>
              <div className="grid md:grid-cols-3 gap-4 pt-4">
                <div className="p-6 rounded-xl glass-card">
                  <div className="text-3xl font-bold text-primary">{(stats.totalLinesOfCode / 1000).toFixed(0)}K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Lines of Code</div>
                </div>
                <div className="p-6 rounded-xl glass-card">
                  <div className="text-3xl font-bold text-cyan-400">{stats.totalProjects} Apps</div>
                  <div className="text-sm text-muted-foreground mt-1">Working Prototypes</div>
                </div>
                <div className="p-6 rounded-xl glass-card">
                  <div className="text-3xl font-bold text-purple-400">Real AI</div>
                  <div className="text-sm text-muted-foreground mt-1">Live LLM Integration</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stop 2: The Flagship */}
          {flagship && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
                2
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">The Flagship Project</h2>
                </div>

                <div className="p-8 rounded-3xl glass-card relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10 space-y-6">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{flagship.name}</h3>
                      <p className="text-xl text-primary font-medium">{flagship.tagline}</p>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {flagship.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold">{flagship.linesOfCode.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Lines of Code</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-2xl font-bold">{flagship.features}+ Features</div>
                        <div className="text-sm text-muted-foreground">Major Capabilities</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${flagship.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold transition-all hover:scale-105 shadow-md"
                      >
                        Deep Dive into {flagship.name}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stop 3: The Innovation */}
          {productIntel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-orange-400/30"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold text-white">
                3
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold">The Innovation</h2>
                </div>

                <div className="p-8 rounded-3xl glass-card relative overflow-hidden border-orange-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-50" />
                  <div className="relative z-10 space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-semibold mb-3">
                        Experimental • Novel Concept
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{productIntel.name}</h3>
                      <p className="text-orange-600 dark:text-orange-400 text-lg font-medium">{productIntel.tagline}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      While EasyComm showcases production-grade sophistication, ProductIntel-Agents explores cutting-edge
                      AI architecture: <strong className="text-orange-600 dark:text-orange-400">domain-specialized AI agent teams</strong> with industry expertise.
                    </p>

                    <div className="p-4 rounded-xl bg-background/50 border border-white/10 backdrop-blur-sm">
                      <p className="text-sm">
                        Instead of one generic AI, you get a <strong>FinTech compliance expert</strong>, a <strong>Healthcare specialist</strong>, and an
                        <strong> E-commerce optimizer</strong>—all working together.
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/projects/${productIntel.id}/deep-dive`}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-semibold transition-all"
                      >
                        Explore the Innovation
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Stop 4: The Breadth */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
              4
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">The Breadth</h2>
              </div>
              <p className="text-foreground/70 text-lg">
                That's just one project. Here are {tier2.length} more sophisticated systems demonstrating
                different capabilities:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {tier2.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group p-5 rounded-xl glass-card hover:border-primary/50 transition-all duration-300"
                  >
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.tagline}</p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Code2 className="w-4 h-4 text-blue-400" />
                        <span>{(project.linesOfCode / 1000).toFixed(0)}K LOC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span>{project.features} feats</span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Project <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stop 5: The Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l-2 border-primary/30"
          >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white">
              5
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">What This Demonstrates</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl glass-card">
                  <h3 className="font-semibold mb-3 text-primary">Product Thinking</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Identified real user pain points</li>
                    <li>• Designed solutions, not just features</li>
                    <li>• Made conscious trade-off decisions</li>
                    <li>• Measured impact with metrics</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl glass-card">
                  <h3 className="font-semibold mb-3 text-cyan-500">Technical Execution</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Multi-LLM architecture & RAG systems</li>
                    <li>• Production-grade full-stack apps</li>
                    <li>• Real-time systems & WebSockets</li>
                    <li>• Type-safe, well-architected code</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-6 py-16 pb-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold">Ready to see more?</h3>
          <div className="flex justify-center gap-4">
            <Link href="/projects" className="px-8 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground font-medium transition-colors">
              Browse All Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
