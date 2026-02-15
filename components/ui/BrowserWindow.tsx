"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BrowserWindowProps {
    children: ReactNode;
    url?: string;
    className?: string;
}

export function BrowserWindow({ children, url = "idbusiness.co/ai-systems", className }: BrowserWindowProps) {
    return (
        <div className={cn(
            "w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl shadow-black/50 flex flex-col",
            className
        )}>
            {/* Browser Toolbar */}
            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-4 shrink-0">
                {/* Traffic Lights */}
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>

                {/* Address Bar */}
                <div className="flex-1 max-w-md mx-auto h-6 bg-black/20 rounded-md border border-white/5 flex items-center justify-center text-[10px] text-zinc-500 font-mono">
                    <span className="opacity-50 mr-1">https://</span>
                    <span className="text-zinc-400">{url}</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="relative w-full flex-1 overflow-hidden bg-zinc-950/30">
                {children}
            </div>
        </div>
    );
}
