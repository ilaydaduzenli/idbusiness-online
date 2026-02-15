"use client";

import { motion } from "framer-motion";
import {
    Activity, BarChart3, TrendingUp,
    Cloud, Cpu, Database, ArrowRight,
    Sparkles, Play, Layers, GitBranch
} from "lucide-react";

// ─── Shared styles ───────────────────────────────────────────

const panelBase = "rounded-2xl border border-zinc-200 dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] backdrop-blur-xl shadow-xl overflow-hidden relative";
const textMono = "text-[9px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600";
const statCard = "p-3 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5";

// ─── Analytics Panel (Left) ─────────────────────────────────

function AnalyticsPanel() {
    return (
        <motion.div
            className={`${panelBase} w-full lg:w-[300px] h-[260px] md:h-[280px] flex flex-col`}
            initial={{ opacity: 0, y: 30, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 tracking-tight">Analytics Overview</span>
                </div>
                <span className={textMono}>Live</span>
            </div>

            {/* Stats */}
            <div className="p-4 flex flex-col gap-3 flex-1">
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { label: "Revenue", val: "$48.2K", trend: "+18.4%", up: true },
                        { label: "Visitors", val: "12.4K", trend: "+6.2%", up: true },
                    ].map((s, i) => (
                        <div key={i} className={statCard}>
                            <div className={textMono}>{s.label}</div>
                            <div className="text-lg font-bold text-zinc-900 dark:text-white mt-1 tracking-tight">{s.val}</div>
                            <div className={`text-[10px] font-bold mt-1 ${s.up ? 'text-emerald-500' : 'text-red-400'}`}>{s.trend}</div>
                        </div>
                    ))}
                </div>

                {/* Mini bar chart */}
                <div className="flex-1 flex items-end gap-1 px-1">
                    {[35, 55, 40, 70, 50, 80, 60, 90, 75, 55, 85, 65].map((h, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 rounded-full bg-zinc-200 dark:bg-white/10"
                            initial={{ height: "10%" }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: i * 0.08, ease: "easeInOut" }}
                        />
                    ))}
                </div>
            </div>

            {/* Floating glow */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-emerald-500/[0.06] blur-[40px] pointer-events-none" />
        </motion.div>
    );
}

// ─── Workflow Panel (Center) ─────────────────────────────────

function WorkflowPanel() {
    const nodes = [
        { icon: Cloud, label: "Ingest", status: "done" },
        { icon: Cpu, label: "Process", status: "active" },
        { icon: Database, label: "Store", status: "pending" },
        { icon: TrendingUp, label: "Analyze", status: "pending" },
    ];

    return (
        <motion.div
            className={`${panelBase} w-full lg:w-[340px] h-[260px] md:h-[280px] flex flex-col`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 tracking-tight">Automation Pipeline</span>
                </div>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-mono font-bold">Running</span>
            </div>

            {/* Pipeline nodes */}
            <div className="flex-1 flex items-center justify-center px-4 relative">
                {/* Connector line */}
                <div className="absolute top-1/2 left-8 right-8 h-px bg-zinc-200 dark:bg-white/5" />
                <motion.div
                    className="absolute top-1/2 left-8 h-px bg-emerald-500/30"
                    animate={{ width: ["0%", "60%", "0%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="flex items-center gap-4 md:gap-6 relative z-10">
                    {nodes.map((node, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <motion.div
                                className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${node.status === "active"
                                        ? "bg-emerald-500/10 border-emerald-500/30 shadow-lg shadow-emerald-500/10"
                                        : node.status === "done"
                                            ? "bg-zinc-100 dark:bg-white/5 border-zinc-200 dark:border-white/10"
                                            : "bg-zinc-50 dark:bg-white/[0.02] border-zinc-200/50 dark:border-white/5"
                                    }`}
                                animate={node.status === "active" ? { scale: [1, 1.08, 1] } : {}}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <node.icon className={`w-5 h-5 ${node.status === "active" ? "text-emerald-500"
                                        : node.status === "done" ? "text-zinc-600 dark:text-zinc-400"
                                            : "text-zinc-300 dark:text-zinc-700"
                                    }`} />
                            </motion.div>
                            <span className={`text-[9px] font-mono uppercase tracking-widest ${node.status === "active" ? "text-emerald-500 font-bold" : "text-zinc-400 dark:text-zinc-600"
                                }`}>{node.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Status bar */}
            <div className="px-4 py-2.5 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-500">Processing node 2 of 4</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 font-bold">82.1% Done</span>
            </div>
        </motion.div>
    );
}

// ─── Creative Studio Panel (Right) ──────────────────────────

function CreativePanel() {
    return (
        <motion.div
            className={`${panelBase} w-full lg:w-[280px] h-[260px] md:h-[280px] flex flex-col`}
            initial={{ opacity: 0, y: 30, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-white/5">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 tracking-tight">Creative Studio</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-red-400 font-bold">REC</span>
                </div>
            </div>

            {/* Canvas */}
            <div className="flex-1 relative overflow-hidden bg-zinc-50 dark:bg-zinc-900/50 m-3 rounded-xl border border-zinc-200/50 dark:border-white/5">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 dark:from-zinc-800/50 dark:via-zinc-900/50 dark:to-zinc-800/50" />

                {/* Sparkle animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ opacity: [0.15, 0.4, 0.15], scale: [1, 1.1, 1] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    >
                        <Sparkles className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
                    </motion.div>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md flex items-center justify-center border border-zinc-200 dark:border-white/10 shadow-lg">
                        <Play className="w-4 h-4 text-zinc-700 dark:text-white fill-zinc-700 dark:fill-white ml-0.5" />
                    </div>
                </div>

                {/* Timeline */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-md rounded-lg px-2 py-1.5 border border-zinc-200/50 dark:border-white/5">
                    <span className="text-[8px] font-mono text-zinc-500">00:14</span>
                    <div className="flex-1 h-1 bg-zinc-200 dark:bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500/50 rounded-full"
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <span className="text-[8px] font-mono text-zinc-500">01:00</span>
                </div>
            </div>

            {/* Toolbar */}
            <div className="px-4 py-2.5 border-t border-zinc-100 dark:border-white/5 flex items-center gap-2">
                {[Layers, Sparkles, Activity].map((Icon, i) => (
                    <div key={i} className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 flex items-center justify-center">
                        <Icon className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
                    </div>
                ))}
                <div className="flex-1" />
                <span className="text-[9px] font-mono text-zinc-400">4K · 60fps</span>
            </div>
        </motion.div>
    );
}

// ─── Exported Component ──────────────────────────────────────

export function HeroVisual() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-6xl mx-auto mt-10 md:mt-14 relative"
        >
            {/* 3-panel grid */}
            <div className="flex flex-col lg:flex-row gap-4 md:gap-5 items-stretch justify-center px-2">
                <AnalyticsPanel />
                <WorkflowPanel />
                <CreativePanel />
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent pointer-events-none transition-colors" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/[0.02] blur-[100px] rounded-full pointer-events-none" />
        </motion.div>
    );
}
