"use client";

import React from 'react';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { Toast } from '../common/Toast';

export function AppShell() {
    return (
        <div className="flex h-screen w-full bg-zinc-950 text-slate-200 overflow-hidden font-sans">
            <Toast />
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <Dashboard />
            </main>

            {/* Persistent Apprentice Sidebar */}
            <aside className="w-[420px] border-l border-zinc-800 bg-zinc-950 flex flex-col shadow-[shadow:_-10px_0_30px_-5px_rgba(0,0,0,0.5)] z-20">
                <Sidebar />
            </aside>
        </div>
    );
}
