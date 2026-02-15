"use client";

import { motion } from "framer-motion";
import {
    Sparkles, Image, Video, User,
    Mic, Move, Bot,
    ArrowRight, Workflow, Clock, BarChart3,
    Database, Globe, Plug, FileJson
} from "lucide-react";

// ─── Card data ───────────────────────────────────────────────

const capabilities = [
    {
        title: "AI Content Generation",
        desc: "High-fidelity images, video, UGC, CGI, and avatar creation — at scale, on brand.",
        tags: ["OpenAI", "Midjourney", "Firefly", "Kling"],
        preview: "content",
    },
    {
        title: "AI Influencers & Digital Humans",
        desc: "Custom synthetic personas with cloned voice, motion capture, and autonomous posting.",
        tags: ["Pika/Veo", "ElevenLabs", "Blender", "Python"],
        preview: "influencer",
    },
    {
        title: "Automation Pipelines",
        desc: "End-to-end: content → render → schedule → publish → analytics. Zero manual steps.",
        tags: ["Node.js", "Zapier", "Make", "Python"],
        preview: "automation",
    },
    {
        title: "Data + Smart Systems",
        desc: "Real-time dashboards, intelligent forms, third-party integrations, and custom APIs.",
        tags: ["Next.js", "Vercel", "Stripe", "PostgreSQL"],
        preview: "data",
    },
];

// ─── Animated Previews ───────────────────────────────────────

function ContentPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center gap-3 p-4">
            {/* Image grid mockup */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
                {[Sparkles, Image, Video, User, Image, Sparkles].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="aspect-square rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.06] flex items-center justify-center shadow-sm"
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                    >
                        <Icon className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                    </motion.div>
                ))}
            </div>
            {/* Progress indicator */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                <div className="flex-1 h-1 rounded-full bg-zinc-200 dark:bg-white/5 overflow-hidden">
                    <motion.div
                        className="h-full bg-emerald-500/60 rounded-full"
                        animate={{ width: ["10%", "90%", "10%"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600">GEN</span>
            </div>
        </div>
    );
}

function InfluencerPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-3">
                {/* Avatar */}
                <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/20 flex items-center justify-center shadow-lg relative"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <Bot className="w-7 h-7 text-violet-400" />
                    {/* Pulse ring */}
                    <motion.div
                        className="absolute inset-0 rounded-2xl border border-violet-500/30"
                        animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
                {/* Waveform */}
                <div className="flex items-center gap-0.5 h-5">
                    {[2, 5, 3, 7, 4, 6, 2, 5, 3, 6, 4, 7].map((h, i) => (
                        <motion.div
                            key={i}
                            className="w-0.5 bg-violet-400/40 rounded-full"
                            animate={{ height: [`${h * 2}px`, `${h * 4}px`, `${h * 2}px`] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.08 }}
                        />
                    ))}
                </div>
                {/* Status chips */}
                <div className="flex gap-2">
                    {[{ icon: Mic, label: "Voice" }, { icon: Move, label: "Motion" }].map((s, i) => (
                        <div key={i} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                            <s.icon className="w-2.5 h-2.5" /> {s.label}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AutomationPreview() {
    const steps = [
        { icon: Video, label: "Capture" },
        { icon: Sparkles, label: "Render" },
        { icon: Clock, label: "Schedule" },
        { icon: BarChart3, label: "Analyze" },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="flex items-center gap-2 md:gap-3">
                {steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-2 md:gap-3">
                        <motion.div
                            className="flex flex-col items-center gap-1.5"
                            initial={{ opacity: 0.3 }}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
                        >
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.06] flex items-center justify-center shadow-sm">
                                <step.icon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                            </div>
                            <span className="text-[8px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">{step.label}</span>
                        </motion.div>
                        {i < steps.length - 1 && (
                            <motion.div
                                className="flex items-center"
                                animate={{ opacity: [0.2, 0.8, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                            >
                                <ArrowRight className="w-3 h-3 text-emerald-500/50" />
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
            {/* Animated connector line */}
            <div className="absolute bottom-3 left-4 right-4 h-px bg-zinc-200 dark:bg-white/5 overflow-hidden rounded-full">
                <motion.div
                    className="h-full w-1/4 bg-emerald-500/30 rounded-full"
                    animate={{ left: ["-25%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    style={{ position: "absolute" }}
                />
            </div>
        </div>
    );
}

function DataPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 gap-4">
            {/* Mini dashboard */}
            <div className="flex flex-col gap-2 w-full max-w-[220px]">
                {/* Stat row */}
                <div className="flex gap-2">
                    {[
                        { val: "12.4K", label: "Requests" },
                        { val: "99.8%", label: "Uptime" },
                    ].map((s, i) => (
                        <div key={i} className="flex-1 p-2.5 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.06]">
                            <div className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{s.val}</div>
                            <div className="text-[8px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-mono">{s.label}</div>
                        </div>
                    ))}
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-1 h-12 p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.06]">
                    {[30, 50, 40, 70, 55, 80, 65, 90, 75, 60, 85, 70].map((h, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-emerald-500/30 rounded-full"
                            initial={{ height: "20%" }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                        />
                    ))}
                </div>
                {/* Integration row */}
                <div className="flex gap-1.5">
                    {[Database, Globe, Plug, FileJson].map((Icon, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 p-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/[0.06] flex items-center justify-center"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                        >
                            <Icon className="w-3 h-3 text-zinc-400 dark:text-zinc-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const previewMap: Record<string, () => React.JSX.Element> = {
    content: ContentPreview,
    influencer: InfluencerPreview,
    automation: AutomationPreview,
    data: DataPreview,
};

// ─── Main Section ────────────────────────────────────────────

export function AICapabilities() {
    return (
        <section className="py-20 md:py-28 relative bg-white dark:bg-zinc-950 transition-colors overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-14 md:mb-20"
                >
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">AI Capabilities</h2>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4">
                        From generation to automation.
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        End-to-end AI systems that create, distribute, and optimize — autonomously.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {capabilities.map((cap, i) => {
                        const Preview = previewMap[cap.preview];
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded-2xl border border-zinc-200 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02] backdrop-blur-md shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Text content */}
                                <div className="p-6 md:p-8 pb-2 md:pb-3 flex flex-col gap-3 relative z-10">
                                    <h4 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight">{cap.title}</h4>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">{cap.desc}</p>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-1">
                                        {cap.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-500 border border-zinc-200/50 dark:border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Animated preview area */}
                                <div className="h-44 md:h-52 relative overflow-hidden">
                                    {/* Dot grid texture */}
                                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
                                        style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '14px 14px' }} />
                                    <Preview />
                                </div>

                                {/* Hover glow */}
                                <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-emerald-500/[0.03] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
