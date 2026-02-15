"use client";

import { motion } from "framer-motion";
import {
    Code, FileCode, Braces, Terminal,
    Globe, GitBranch, Server, CreditCard,
    Sparkles, Wand2, Palette, Video,
    PenTool, Box, Zap, Cpu
} from "lucide-react";

// Row 1: Tech & Infrastructure
const techStack = [
    { label: "Node.js", subtitle: "Runtime", icon: Terminal, color: "text-emerald-500" },
    { label: "JavaScript", subtitle: "Language", icon: Braces, color: "text-amber-400" },
    { label: "TypeScript", subtitle: "Types", icon: FileCode, color: "text-blue-400" },
    { label: "Python", subtitle: "Backend", icon: Code, color: "text-sky-400" },
    { label: "Next.js", subtitle: "Framework", icon: Globe, color: "text-zinc-600 dark:text-zinc-300" },
    { label: "React", subtitle: "UI", icon: Cpu, color: "text-cyan-400" },
    { label: "Vercel", subtitle: "Deploy", icon: Server, color: "text-zinc-600 dark:text-zinc-300" },
    { label: "GitHub", subtitle: "Source", icon: GitBranch, color: "text-purple-400" },
    { label: "GoDaddy", subtitle: "Domains", icon: Globe, color: "text-teal-400" },
    { label: "Stripe", subtitle: "Payments", icon: CreditCard, color: "text-violet-400" },
];

// Row 2: AI & Creative Tools
const creativeStack = [
    { label: "OpenAI", subtitle: "LLM", icon: Sparkles, color: "text-emerald-400" },
    { label: "Midjourney", subtitle: "Gen", icon: Wand2, color: "text-indigo-400" },
    { label: "Adobe Firefly", subtitle: "Create", icon: Palette, color: "text-red-400" },
    { label: "Kling", subtitle: "Video AI", icon: Video, color: "text-pink-400" },
    { label: "Pika / Veo", subtitle: "Motion", icon: Video, color: "text-orange-400" },
    { label: "Figma", subtitle: "Design", icon: PenTool, color: "text-violet-400" },
    { label: "Blender", subtitle: "3D", icon: Box, color: "text-amber-500" },
    { label: "Automation", subtitle: "Workflows", icon: Zap, color: "text-rose-400" },
];

interface ChipProps {
    label: string;
    subtitle: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}

function Chip({ label, subtitle, icon: Icon, color }: ChipProps) {
    return (
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.06] backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-105 hover:bg-white/80 dark:hover:bg-white/[0.07] hover:border-zinc-300 dark:hover:border-white/15 transition-all duration-300 cursor-default select-none whitespace-nowrap group">
            <div className={`w-7 h-7 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                <Icon className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-zinc-800 dark:text-zinc-200 leading-tight tracking-tight">{label}</span>
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-medium leading-tight">{subtitle}</span>
            </div>
        </div>
    );
}

interface MarqueeRowProps {
    items: ChipProps[];
    reverse?: boolean;
    speed?: string;
}

function MarqueeRow({ items, reverse = false, speed = "45s" }: MarqueeRowProps) {
    const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

    return (
        <div className="relative overflow-hidden w-full">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-20 pointer-events-none transition-colors" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-20 pointer-events-none transition-colors" />

            <div
                className="flex pause-on-hover"
                style={{ "--marquee-speed": speed } as React.CSSProperties}
            >
                {/* First set */}
                <div className={`flex gap-3 shrink-0 ${animClass}`}>
                    {items.map((item, i) => (
                        <Chip key={`a-${i}`} {...item} />
                    ))}
                </div>
                {/* Duplicate for seamless loop */}
                <div className={`flex gap-3 shrink-0 pl-3 ${animClass}`} aria-hidden="true">
                    {items.map((item, i) => (
                        <Chip key={`b-${i}`} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export function StackMarquee() {
    return (
        <section className="relative py-10 md:py-14 overflow-hidden bg-white dark:bg-zinc-950 border-y border-zinc-200/50 dark:border-white/[0.03] transition-colors">
            {/* Section label */}
            <div className="container mx-auto px-4 lg:px-6 mb-6">
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600 text-center">
                    Powered by
                </p>
            </div>

            {/* Two-row marquee */}
            <div className="flex flex-col gap-3">
                <MarqueeRow items={techStack} speed="45s" />
                <MarqueeRow items={creativeStack} reverse speed="40s" />
            </div>

            {/* Subtle center glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div className="w-96 h-32 bg-emerald-500/[0.03] blur-[80px] rounded-full" />
            </div>
        </section>
    );
}
