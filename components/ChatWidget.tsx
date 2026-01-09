"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Terminal, Loader2, FileCode } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming you have utility, if not I'll standard clsx

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat() as any;
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[450px] h-[600px] max-h-[80vh] flex flex-col rounded-2xl border border-white/10 glass-card shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-black/20 backdrop-blur-md flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <Terminal className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Architect Agent</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        <p className="text-xs text-muted-foreground">Online • Index v1.0</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 opacity-70">
                                    <Terminal className="w-12 h-12 text-primary/50" />
                                    <div>
                                        <h4 className="font-semibold">Ask about this codebase</h4>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            "How is the homepage implemented?" <br />
                                            "Where are the project types defined?"
                                        </p>
                                    </div>
                                </div>
                            )}

                            {messages.map((m: any) => (
                                <div
                                    key={m.id}
                                    className={cn(
                                        "flex w-full mb-2",
                                        m.role === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                                            m.role === "user"
                                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                                : "bg-muted text-foreground rounded-tl-none border border-white/5"
                                        )}
                                    >
                                        {m.role === "assistant" && (
                                            <div className="flex items-center gap-2 mb-2 opacity-50 text-xs uppercase font-bold tracking-wider">
                                                <Terminal className="w-3 h-3" />
                                                AI Architect
                                            </div>
                                        )}
                                        <div className="whitespace-pre-wrap">{m.content}</div>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                        <span className="text-sm text-muted-foreground">Analyzing codebase...</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask a technical question..."
                                    className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <FileCode className="w-3 h-3 text-muted-foreground/50" />
                                <span className="text-[10px] text-muted-foreground/50">
                                    RAG enabled • Context window: 3 files
                                </span>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}


