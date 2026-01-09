"use client";

import React from 'react';
import { Bot, Wallet, Brain, ToggleRight, ToggleLeft } from 'lucide-react';
import { useApprentice } from '../context/ApprenticeContext';

export function ApprenticeHeader() {
    const { isApprenticeMode, setIsApprenticeMode, skills, setIsInspectorOpen } = useApprentice();

    return (
        <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-900/40 backdrop-blur shrink-0">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                        <Bot size={20} className="text-blue-400" />
                    </div>
                    {/* Status Dot */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-zinc-900"></div>
                </div>
                <div>
                    <div className="font-semibold text-slate-200 text-sm tracking-wide">Apprentice</div>
                    <div className="text-[10px] text-blue-400 font-medium uppercase tracking-wider flex items-center gap-1">
                        Active Learning
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-1">
                {/* Skill Wallet Badge */}
                <div className="group relative">
                    <button
                        className="h-8 pr-3 pl-2 rounded-md hover:bg-zinc-800 flex items-center gap-1.5 transition-all border border-transparent hover:border-zinc-700"
                        title="Skill Wallet"
                    >
                        <div className="p-1 rounded bg-indigo-500/10 text-indigo-400">
                            <Wallet size={14} />
                        </div>
                        <span className="text-xs font-medium text-zinc-300">{skills.length}</span>
                    </button>

                    {/* Tooltip/Dropdown for skills */}
                    <div className="absolute right-0 top-full mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl p-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 pointer-events-none">
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wilder px-2 py-1 mb-1">Recent Skills</div>
                        {skills.slice(-3).map(skill => (
                            <div key={skill.id} className="text-xs p-2 rounded hover:bg-zinc-800 text-zinc-300 truncate">
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logic Inspector Trigger */}
                <button
                    onClick={() => setIsInspectorOpen(true)}
                    className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-blue-400 transition-colors"
                    title="Open Logic Inspector"
                >
                    <Brain size={18} />
                </button>

                <div className="w-px h-4 bg-zinc-800 mx-1"></div>

                {/* Mode Toggle */}
                <button
                    onClick={() => setIsApprenticeMode(!isApprenticeMode)}
                    className={`p-1 rounded-md transition-colors ${isApprenticeMode ? 'text-blue-400' : 'text-zinc-500'}`}
                    title="Toggle Apprentice Mode"
                >
                    {isApprenticeMode ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                </button>
            </div>
        </div>
    );
}
