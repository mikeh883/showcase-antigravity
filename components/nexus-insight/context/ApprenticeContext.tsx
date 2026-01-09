"use client";

import React, { createContext, useContext, useState } from 'react';

// Initial Skills mock
const INITIAL_SKILLS = [
    { id: '1', name: 'Weekly Variance Logic', description: 'Auto-detect >10% variance in Midwest region', date: '2023-11-01' },
    { id: '2', name: 'Monday Morning Briefing', description: 'Auto-run "Midwest Recon" workflow at 8:00 AM on Mondays', date: '2023-11-15' },
    { id: '3', name: 'Formatting Preference', description: 'Highlight negative variance in Red-500', date: '2023-12-04' },
    { id: '4', name: 'Data Cleanse Rule', description: 'Exclude "Intercompany Transfers" from Gross Revenue calculations', date: '2024-01-02' },
];

interface Skill {
    id: string;
    name: string;
    description: string;
    date?: string;
}

interface Message {
    id: number | string;
    role: 'system' | 'assistant' | 'user';
    content: string;
}

interface ToastMessage {
    title: string;
    message: string;
}

interface ApprenticeContextType {
    isApprenticeMode: boolean;
    setIsApprenticeMode: (mode: boolean) => void;
    skills: Skill[];
    addSkill: (skill: Omit<Skill, 'id'>) => void;
    isInspectorOpen: boolean;
    setIsInspectorOpen: (isOpen: boolean) => void;
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    toastMessage: ToastMessage | null;
    setToastMessage: (msg: ToastMessage | null) => void;
}

const ApprenticeContext = createContext<ApprenticeContextType | undefined>(undefined);

export function ApprenticeProvider({ children }: { children: React.ReactNode }) {
    const [isApprenticeMode, setIsApprenticeMode] = useState(true);
    const [skills, setSkills] = useState<Skill[]>(INITIAL_SKILLS);
    const [isInspectorOpen, setIsInspectorOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

    // Simulated Chat Messages
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: 'system', content: 'Session init. Apprentice Mode active.' },
        { id: 2, role: 'assistant', content: 'I am observing your workflow. Actions like exporting data will help me learn your preferences.' }
    ]);

    const addSkill = (skill: Omit<Skill, 'id'>) => {
        // Avoid dupes for demo
        if (skills.some(s => s.name === skill.name)) return;

        setSkills(prev => [...prev, { ...skill, id: Date.now().toString(), date: new Date().toLocaleDateString() }]);

        // Trigger Toast
        setToastMessage({ title: 'New Skill Learned', message: `${skill.name}. Added to memory.` });

        // Add system message
        setMessages(prev => [...prev, { id: Date.now(), role: 'system', content: `🧠 Learned: ${skill.name}` }]);

        setTimeout(() => setToastMessage(null), 4000);
    };

    const value = {
        isApprenticeMode, setIsApprenticeMode,
        skills, addSkill,
        isInspectorOpen, setIsInspectorOpen,
        messages, setMessages,
        toastMessage, setToastMessage
    };

    return (
        <ApprenticeContext.Provider value={value}>
            {children}
        </ApprenticeContext.Provider>
    );
}

export const useApprentice = () => {
    const context = useContext(ApprenticeContext);
    if (!context) {
        throw new Error('useApprentice must be used within an ApprenticeProvider');
    }
    return context;
};
