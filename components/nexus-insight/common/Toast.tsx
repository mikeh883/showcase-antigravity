"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain } from 'lucide-react';
import { useApprentice } from '../context/ApprenticeContext';

export function Toast() {
    const { toastMessage } = useApprentice();

    return (
        <AnimatePresence>
            {toastMessage && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 bg-zinc-900 border border-blue-500/30 rounded-full shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] backdrop-blur-md"
                >
                    <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-400">
                        <Brain size={16} />
                    </div>
                    <div>
                        <span className="font-semibold text-slate-200 text-sm">{toastMessage.title}: </span>
                        <span className="text-zinc-400 text-sm">{toastMessage.message}</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
