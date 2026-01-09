"use client";

import React, { useRef, useEffect } from 'react';
import { useApprentice } from '../context/ApprenticeContext';
import { Bot, User } from 'lucide-react';
import { BriefingCard } from './BriefingCard';

export function ChatInterface() {
    const { messages, isApprenticeMode } = useApprentice();
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex-1 overflow-y-auto flex flex-col relative">
            <div className="p-6 pb-20 space-y-6">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>

                        {/* Avatar */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border 
                ${msg.role === 'user'
                                ? 'bg-zinc-800 border-zinc-700 text-zinc-400'
                                : 'bg-blue-500/10 border-blue-500/20 text-blue-400'}`}>
                            {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                        </div>

                        {/* Bubble */}
                        <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user'
                                ? 'bg-zinc-800 text-slate-200 rounded-tr-none'
                                : 'bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-tl-none'}`}>
                            {msg.content}
                        </div>
                    </div>
                ))}

                {/* Proactive State - Show Briefing if not in strict learning mode (or simulate toggle) 
            For demo, we can just render the BriefingCard if mode is NOT apprentice, 
            or we can have it always available for the demo's sake as "pinned"
        */}
                {!isApprenticeMode && <BriefingCard />}

                <div ref={bottomRef} />
            </div>

            {/* Input Overlay - simulate disabled/enabled */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={isApprenticeMode ? "Ask a question..." : "Replies handled by Apprentice..."}
                        className="w-full h-12 rounded-xl bg-zinc-900/80 border border-zinc-800 px-4 pl-4 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm placeholder:text-zinc-600 transition-all backdrop-blur-sm"
                    />
                </div>
            </div>
        </div>
    );
}
