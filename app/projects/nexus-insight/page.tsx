"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Rocket, Database, Brain, Wallet, Sparkles, CheckCircle2, Users, Target, Shield, Calendar, Map, Zap } from "lucide-react";
import { ApprenticeProvider } from "@/components/nexus-insight/context/ApprenticeContext";
import { AppShell } from "@/components/nexus-insight/layout/AppShell";
import { projects } from "@/lib/projects";

export default function NexusInsightPage() {
    const [viewMode, setViewMode] = useState<'details' | 'prototype'>('details');
    const project = projects.find(p => p.id === "nexus-insight");

    if (!project) return <div>Project not found</div>;

    if (viewMode === 'prototype') {
        return (
            <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col">
                {/* Prototype Header */}
                <div className="h-14 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-50">
                    <div className="flex items-center gap-3">
                        <span className="font-bold text-slate-200">Nexus Insight</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 uppercase tracking-wider">
                            Prototype Environment
                        </span>
                    </div>
                    <button
                        onClick={() => setViewMode('details')}
                        className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <ArrowLeft size={14} /> Exit Prototype
                    </button>
                </div>

                {/* App Container */}
                <div className="flex-1 overflow-hidden relative">
                    <ApprenticeProvider>
                        <AppShell />
                    </ApprenticeProvider>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background relative overflow-hidden">
            <div className="fixed inset-0 grid-background-dark dark:opacity-40 -z-10 pointer-events-none" />

            {/* Hero */}
            <section className="container mx-auto px-6 pt-32 pb-12 relative z-10">
                <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>

                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 font-medium mb-4">
                            <Brain className="w-4 h-4" />
                            <span>Learned Business Logic</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-balance">{project.name}</h1>
                        <p className="text-2xl text-blue-400 font-medium">{project.tagline}</p>
                    </div>

                    <p className="text-xl text-foreground/80 leading-relaxed max-w-4xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => setViewMode('prototype')}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
                        >
                            Launch Prototype
                            <Rocket className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                        <div className="p-5 rounded-xl glass-card">
                            <div className="flex items-center gap-2 mb-2">
                                <Brain className="w-5 h-5 text-purple-500" />
                                <div className="text-sm text-muted-foreground">Type</div>
                            </div>
                            <div className="text-lg font-bold">Apprentice AI</div>
                        </div>
                        <div className="p-5 rounded-xl glass-card">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-5 h-5 text-cyan-500" />
                                <div className="text-sm text-muted-foreground">Learning</div>
                            </div>
                            <div className="text-lg font-bold">Observation</div>
                        </div>
                        <div className="p-5 rounded-xl glass-card">
                            <div className="flex items-center gap-2 mb-2">
                                <Wallet className="w-5 h-5 text-green-500" />
                                <div className="text-sm text-muted-foreground">Logic Store</div>
                            </div>
                            <div className="text-lg font-bold">Skill Wallet</div>
                        </div>
                        <div className="p-5 rounded-xl glass-card">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                <div className="text-sm text-muted-foreground">Maturity</div>
                            </div>
                            <div className="text-lg font-bold">{project.maturityRating}/10</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Innovation */}
            <section className="container mx-auto px-6 py-12">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                            1
                        </div>
                        <h2 className="text-3xl font-bold">The Apprentice Model</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl glass-card border-blue-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-opacity group-hover:opacity-10">
                                <Brain className="w-48 h-48" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-blue-400">Problem: Hardcoded Logic</h3>
                            <p className="text-foreground/80 leading-relaxed mb-6">
                                Traditional B2B apps rely on static business logic defined by developers. Rules like &quot;highlight variances &gt; 10%&quot; or
                                "always exclude intercompany transfers" are hardcoded, making them brittle and expensive to change as business needs evolve.
                            </p>
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 font-mono text-xs">
                                if (variance &gt; 0.10) &#123; <br />
                                &nbsp;&nbsp; alert("Warning"); <br />
                                &#125; // Hardcoded forever
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl glass-card border-green-500/20 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transition-opacity group-hover:opacity-10">
                                <Sparkles className="w-48 h-48" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-green-400">Solution: Learned Logic</h3>
                            <p className="text-foreground/80 leading-relaxed mb-6">
                                Nexus Insight acts as an <strong>Apprentice</strong>. It starts with no rules. By observing user corrections (e.g., "remove these transfers"),
                                interactive choices, and repetitive tasks, it <em>learns</em> the business logic and adds it to its "Skill Wallet."
                            </p>
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 font-mono text-xs">
                                [Skill Wallet] <br />
                                + Learned: Variance Threshold (User Pref) <br />
                                + Learned: Filter Rule (Observation)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-6 py-12 bg-slate-50/50 dark:bg-white/5">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Value for the Organization</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">For Analysts</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Reduces repetitive manual reporting by learning preferences (e.g., &quot;Always exclude intercompany transfers for Midwest region&quot;).
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">For Executives</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Provides proactive &quot;Monday Morning&quot; briefings without needing to ask, surfacing anomalies and key metrics automatically.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold">For the Enterprise</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Captures tribal knowledge. As the AI learns one analyst&apos;s heuristics, that knowledge is institutionalized and can be shared or audited.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Walkthrough */}
            <section className="container mx-auto px-6 py-12 pb-24">
                <div className="max-w-5xl mx-auto space-y-12">
                    <h2 className="text-3xl font-bold mb-8">Key Capabilities</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl glass-card">
                            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                                <Wallet className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Skill Wallet</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                A visual ledger of learned heuristics.
                            </p>
                            <ul className="text-xs space-y-2 text-foreground/70 bg-black/20 p-3 rounded-lg">
                                <li className="flex gap-2">
                                    <span className="text-green-400">✓</span> Validation Rule #1
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-green-400">✓</span> Monday Recon (80% Conf)
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl glass-card">
                            <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 border border-orange-500/20">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Implicit Signals</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Tracks non-verbal cues to predict needs.
                            </p>
                            <div className="text-xs text-foreground/70 bg-black/20 p-3 rounded-lg italic">
                                &quot;User always exports to Excel on Mondays at 9am -&gt; Proactively offer export.&quot;
                            </div>
                        </div>

                        <div className="p-6 rounded-xl glass-card">
                            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Logic Inspector</h3>
                            <p className="text-muted-foreground text-sm">
                                Open the &quot;brain&quot; to see exactly why a decision was made. Was it a hardcoded rule or a learned preference? Transparency is key.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="container mx-auto px-6 py-12 pb-32">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <Map className="w-8 h-8 text-muted-foreground" />
                        <h2 className="text-3xl font-bold">Roadmap</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="relative pl-8 border-l border-border/50">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-blue-400">Near Term (Q2)</span>
                            </h3>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>Natural Language Querying (NLQ):</strong> Ask &quot;Why is Detroit lagging?&quot; for deep-dive analysis.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>Heuristic Sharing:</strong> Share &quot;Sales Skill Packs&quot; between analysts.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>Correction Workflow:</strong> Debug logic in natural language (e.g., &quot;Only exclude transfers for external reports&quot;).</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative pl-8 border-l border-border/50">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-purple-400">Mid Term (Q3)</span>
                            </h3>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>ERP Integration:</strong> Live connectors to NetSuite/SAP/Salesforce.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>Anomaly Detection V2:</strong> Semantic understanding of seasonal variance.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="relative pl-8 border-l border-border/50">
                            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                <span className="text-yellow-400">Long Term Vision</span>
                                <Rocket className="w-4 h-4 text-yellow-400" />
                            </h3>
                            <ul className="space-y-3 text-foreground/80">
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>&quot;Journeyman&quot; Mode:</strong> AI graduates to training other analysts.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5" />
                                    <span><strong>Enterprise &quot;SME&quot; Graph:</strong> Auto-mapping organizational knowledge.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
