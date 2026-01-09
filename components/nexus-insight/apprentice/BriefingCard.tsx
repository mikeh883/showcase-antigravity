"use client";

import React from 'react';
import { Sun, ArrowRight, Mail } from 'lucide-react';

export function BriefingCard() {
    return (
        <div className="mt-auto mx-4 mb-4 p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-indigo-500/20 shadow-lg relative group overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="flex items-start gap-3 relative z-10">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 shrink-0">
                    <Sun size={18} />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-slate-200">Good Morning</h4>
                    <div className="text-xs text-zinc-500 mt-0.5 mb-3">It's Monday, 8:00 AM</div>

                    <p className="text-sm text-zinc-300 leading-relaxed">
                        I've run your standard <span className="text-indigo-400 font-medium">Midwest Recon</span>.
                        Total: $1.2M (Validated against ERP). No variances found.
                    </p>

                    <div className="flex gap-2 mt-4">
                        <button className="flex-1 py-1.5 px-3 rounded-md bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-slate-200 flex items-center justify-center gap-1.5 transition-colors">
                            <Mail size={12} /> Email Summary
                        </button>
                        <button className="flex-1 py-1.5 px-3 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 text-xs font-medium text-indigo-400 flex items-center justify-center gap-1.5 transition-colors">
                            Drill Down <ArrowRight size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
