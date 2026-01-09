"use client";

import React from 'react';
import { X, Database, Brain } from 'lucide-react';
import { useApprentice } from '../context/ApprenticeContext';
import { motion, AnimatePresence } from 'framer-motion';

export function LogicInspector() {
    const { isInspectorOpen, setIsInspectorOpen, skills } = useApprentice();

    return (
        <AnimatePresence>
            {isInspectorOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
                        onClick={() => setIsInspectorOpen(false)}
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-[450px] bg-zinc-950 border-l border-zinc-800 shadow-2xl z-40 flex flex-col"
                    >
                        <div className="h-16 flex items-center justify-between px-6 border-b border-zinc-800 bg-zinc-900/50">
                            <div className="flex items-center gap-2 text-slate-200">
                                <Brain size={18} className="text-blue-400" />
                                <span className="font-semibold">Logic Inspector</span>
                            </div>
                            <button
                                onClick={() => setIsInspectorOpen(false)}
                                className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                    <Database size={14} /> Learned Skills & Heuristics
                                </h3>
                                <div className="space-y-3">
                                    {skills.map((skill) => (
                                        <div key={skill.id} className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 group hover:border-blue-500/30 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-sm font-medium text-blue-400 font-mono">{skill.name}</span>
                                                <span className="text-xs text-zinc-600">{skill.date}</span>
                                            </div>
                                            <p className="text-sm text-zinc-400">{skill.description}</p>
                                            <div className="mt-3 pt-3 border-t border-zinc-800/50 flex gap-2">
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">Active</span>
                                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">Confidence: 98%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 rounded-lg bg-zinc-900/30 border border-dashed border-zinc-800 text-xs text-zinc-500 font-mono">
                                // System Internal State <br />
                                status: OBSERVING <br />
                                context_window: 128k <br />
                                learning_rate: ADAPTIVE
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
