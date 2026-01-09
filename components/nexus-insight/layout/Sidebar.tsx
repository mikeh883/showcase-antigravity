"use client";

import React from 'react';
import { ApprenticeHeader } from '../apprentice/ApprenticeHeader';
import { ChatInterface } from '../apprentice/ChatInterface';
import { LogicInspector } from '../apprentice/LogicInspector';

export function Sidebar() {
    return (
        <div className="h-full flex flex-col bg-zinc-950/50">
            <ApprenticeHeader />
            <ChatInterface />
            <LogicInspector />
        </div>
    );
}
