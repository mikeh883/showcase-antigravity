"use client";

import React, { useState } from 'react';
import { BarChart3, Download, Copy, Filter, MoreHorizontal } from 'lucide-react';
import { useApprentice } from '../context/ApprenticeContext';
import { SALES_DATA, HEADERS } from '../data/mockData';

export function Dashboard() {
    const { addSkill, isApprenticeMode } = useApprentice();
    const [data] = useState(SALES_DATA);

    const handleExport = () => {
        if (isApprenticeMode) {
            addSkill({ name: 'Export Preference: CSV', description: 'User prefers CSV exports for Sales Tables' });
        }
    };

    const handleCopy = () => {
        if (isApprenticeMode) {
            addSkill({ name: 'Clipboard Action', description: 'User copies table data to clipboard' });
            // Bonus skill for demo
            setTimeout(() => {
                addSkill({ name: 'Weekly Variance Logic', description: 'Auto-detect >10% variance in Midwest region' });
            }, 1500);
        }
    };

    return (
        <div className="h-full flex flex-col p-8 overflow-y-auto bg-zinc-950">
            <header className="mb-10 flex items-center justify-between">
                <div>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono mb-2 uppercase tracking-widest">
                        <span>Observer</span>
                        <span>/</span>
                        <span>Sales</span>
                        <span>/</span>
                        <span className="text-blue-400">Midwest</span>
                    </div>
                    <h1 className="text-3xl font-semibold text-white tracking-tight">Midwest Region Sales</h1>
                    <p className="text-slate-400 mt-1">Weekly Performance Recon</p>
                </div>
                <div className="flex gap-2">
                    <button className="h-9 px-4 rounded-md border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-2">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="h-9 px-4 rounded-md bg-white text-zinc-950 text-sm font-medium hover:bg-slate-200 transition-colors">
                        New Query
                    </button>
                </div>
            </header>

            {/* Data Table */}
            <div className="border border-zinc-800 rounded-xl bg-zinc-900/20 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/40">
                    <h3 className="text-sm font-medium text-slate-300 flex items-center gap-2">
                        <BarChart3 size={16} className="text-indigo-400" />
                        Raw Data View
                    </h3>
                    <div className="flex items-center gap-1">
                        <button onClick={handleCopy} className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Copy Data">
                            <Copy size={16} />
                        </button>
                        <button onClick={handleExport} className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" title="Export CSV">
                            <Download size={16} />
                        </button>
                        <div className="w-px h-4 bg-zinc-800 mx-1"></div>
                        <button className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                            <MoreHorizontal size={16} />
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-zinc-800">
                                {HEADERS.map(header => (
                                    <th key={header.key} className="px-6 py-3 font-medium text-zinc-500 whitespace-nowrap bg-zinc-900/20">
                                        {header.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/50">
                            {data.map((row) => (
                                <tr key={row.id} className="group hover:bg-zinc-900/50 transition-colors">
                                    <td className="px-6 py-3.5 text-zinc-300">{row.region}</td>
                                    <td className="px-6 py-3.5 font-mono text-slate-200">${row.sales.toLocaleString()}</td>
                                    <td className="px-6 py-3.5 font-mono text-zinc-500">${row.transfers.toLocaleString()}</td>
                                    <td className="px-6 py-3.5 font-mono text-indigo-300 font-medium">${row.net.toLocaleString()}</td>
                                    <td className="px-6 py-3.5">
                                        <span className={`text-xs px-2 py-0.5 rounded-full border ${row.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                            row.status === 'Warning' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                                                row.status === 'Lagging' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                    'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                            } `}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
