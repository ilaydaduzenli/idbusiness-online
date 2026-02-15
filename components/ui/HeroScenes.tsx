"use client";

import { motion } from "framer-motion";
import { Activity, BarChart, Check, Clock, Cloud, Cpu, Database, Download, FileVideo, Globe, Layers, Layout, Play, Settings, Share2, Sparkles, Users, Wand2, Zap } from "lucide-react";
import { clsx } from "clsx";

// Shared styles - Light/Dark compatible
const cardBase = "glass-card w-full h-[350px] lg:h-[450px] rounded-xl overflow-hidden relative border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 p-0 flex flex-col shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-zinc-300 dark:hover:border-white/20";
const iconBase = "w-4 h-4 text-zinc-500 dark:text-zinc-400";
const textSmall = "text-[10px] text-zinc-500 dark:text-zinc-500 font-mono uppercase tracking-wider font-semibold";
const borderBase = "border-zinc-200 dark:border-white/5";
const bgBase = "bg-zinc-50 dark:bg-white/5";
const bgHove = "hover:bg-zinc-100 dark:hover:bg-white/10";

export function HeroScenes({ index }: { index: number }) {
    const variant = index % 3;

    return (
        <motion.div
            className={cardBase}
            initial={{ opacity: 0.9 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
        >
            {/* Fine Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />

            {/* App Header (Common) */}
            <div className={`flex items-center justify-between px-4 py-3 border-b ${borderBase} bg-white/70 dark:bg-black/40 backdrop-blur-xl z-10`}>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-red-400 dark:hover:bg-red-500/80 transition-colors" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 hover:bg-amber-400 dark:hover:bg-amber-500/80 transition-colors" />
                    </div>
                    <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-300 flex items-center gap-2 tracking-tight">
                        {variant === 0 && <><Layout className="w-3 h-3 text-emerald-500" /> core_analytics.v4</>}
                        {variant === 1 && <><Zap className="w-3 h-3 text-emerald-500" /> automation_engine.x</>}
                        {variant === 2 && <><Wand2 className="w-3 h-3 text-emerald-500" /> creative_studio.ai</>}
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-1 text-[9px] font-mono text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        <Clock className="w-2.5 h-2.5" /> 12:45 PM
                    </div>
                </div>
            </div>

            <div className="flex-1 relative overflow-hidden flex">
                {/* Sidebar (Common across all for "App" feel) */}
                <div className={`w-12 border-r ${borderBase} flex flex-col items-center py-5 gap-5 bg-zinc-50/70 dark:bg-white/2 backdrop-blur-md`}>
                    {[Layout, BarChart, FileVideo, Wand2, Settings].map((Icon, i) => (
                        <div key={i} className={`p-2 rounded-xl transition-all duration-300 border ${i === variant ? 'bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white border-zinc-300 dark:border-white/10 shadow-sm' : 'text-zinc-400 dark:text-zinc-600 border-transparent hover:text-zinc-600 dark:hover:text-zinc-400'}`}>
                            <Icon className="w-4 h-4" />
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white/40 dark:bg-zinc-950/20 p-4 md:p-6 relative overflow-hidden">
                    {variant === 0 && <DashboardScene />}
                    {variant === 1 && <PipelineScene />}
                    {variant === 2 && <ProductionScene />}

                    {/* Subtle Radial Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
                </div>
            </div>

            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none mix-blend-overlay" />
        </motion.div>
    );
}

function DashboardScene() {
    return (
        <div className="flex flex-col gap-6 h-full">
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "Active Nodes", val: "1,204", trend: "+12.4%", color: "text-emerald-500" },
                    { label: "System Load", val: "24.2%", trend: "Stable", color: "text-blue-500" }
                ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${borderBase} bg-white dark:bg-white/3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)]`}>
                        <div className="flex justify-between items-start mb-1">
                            <span className={textSmall}>{item.label}</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white mt-1 tracking-tight">{item.val}</div>
                        <div className={`text-[9px] font-bold mt-2 ${item.color} bg-emerald-500/5 px-1.5 py-0.5 rounded-full inline-block`}>{item.trend}</div>
                    </div>
                ))}
            </div>

            <div className={`flex-1 rounded-xl border ${borderBase} bg-white dark:bg-white/2 p-4 relative overflow-hidden flex flex-col shadow-inner`}>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                        <Activity className="w-3 h-3 text-emerald-500" /> Network_Traffic
                    </span>
                    <div className="flex gap-2">
                        <div className="w-12 h-1.5 bg-emerald-500/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-emerald-500"
                                animate={{ width: ["20%", "80%", "40%"] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-end gap-1.5 min-h-[100px]">
                    {[40, 65, 45, 80, 55, 90, 100, 75, 60, 85, 45, 70, 95, 110, 85, 60, 40, 50, 80].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "10%" }}
                            animate={{ height: `${h * 0.8}%` }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.08,
                                ease: "circOut"
                            }}
                            className={clsx(
                                "flex-1 rounded-full transition-all duration-500",
                                i % 3 === 0 ? "bg-emerald-500" :
                                    i % 3 === 1 ? "bg-zinc-800 dark:bg-white/10" : "bg-zinc-300 dark:bg-white/30"
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PipelineScene() {
    const nodes = [
        { icon: Cloud, label: "Cloud_Link", status: "Done", delay: 0 },
        { icon: Cpu, label: "Core_GPU", status: "Active", delay: 0.2 },
        { icon: Database, label: "Data_Silo", status: "Pending", delay: 0.4 }
    ];

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between">
                <span className={textSmall}>Workflow_Monitor</span>
                <span className="text-[10px] text-zinc-400 font-mono">ID: 882-QX</span>
            </div>

            <div className="flex-1 flex items-center justify-center relative">
                {/* Visual Grid background */}
                <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-[0.05] pointer-events-none">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="w-px h-px bg-zinc-900 dark:bg-white border rounded-full border-zinc-200 dark:border-white/20" />
                    ))}
                </div>

                <div className="flex items-center gap-6 md:gap-10 relative z-10 w-full justify-center">
                    {/* Dynamic Connecting Lines */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-200 dark:bg-white/5 -z-10" />

                    {nodes.map((node, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: node.delay }}
                            className="flex flex-col items-center gap-4 relative"
                        >
                            <motion.div
                                className={clsx(
                                    "w-16 h-16 rounded-2xl border-2 flex items-center justify-center shadow-xl relative z-10 transition-all duration-500",
                                    node.status === "Active" ? "bg-emerald-500/10 border-emerald-500/50 shadow-emerald-500/10" : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-white/10"
                                )}
                                animate={node.status === "Active" ? { scale: [1, 1.05, 1] } : {}}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <node.icon className={clsx(
                                    "w-7 h-7",
                                    node.status === "Active" ? "text-emerald-500" : "text-zinc-300 dark:text-zinc-600"
                                )} />

                                {node.status === "Active" && (
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-900" />
                                )}
                            </motion.div>
                            <div className="text-center">
                                <div className="text-[11px] font-bold text-zinc-700 dark:text-zinc-200 tracking-tight">{node.label}</div>
                                <div className={clsx(
                                    "text-[9px] uppercase tracking-widest font-bold mt-1",
                                    node.status === "Active" ? "text-emerald-500" : "text-zinc-400 dark:text-zinc-600"
                                )}>{node.status}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-500">Processing Packet 94.2k</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 font-bold">98.2% Efficiency</span>
            </div>
        </div>
    );
}

function ProductionScene() {
    return (
        <div className="flex flex-col gap-5 h-full">
            <div className="flex items-center justify-between mb-1">
                <span className={textSmall}>Studio_Preview</span>
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">REC</span>
                </div>
            </div>

            {/* Video Canvas */}
            <div className={`flex-1 rounded-2xl border ${borderBase} bg-zinc-950 relative overflow-hidden group shadow-2xl`}>
                {/* Background Video Mockup */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-40" />

                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="text-white"
                    >
                        <Sparkles className="w-20 h-20" />
                    </motion.div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl cursor-pointer hover:scale-110 transition-all duration-300 group">
                        <Play className="w-6 h-6 text-white fill-white ml-1 group-hover:scale-105" />
                    </div>
                </div>

                {/* Info Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/10">
                    <div className="text-[10px] font-mono text-white/80">00:02:14 / 00:05:00</div>
                    <div className="flex gap-2">
                        <Share2 className="w-3 h-3 text-white/60" />
                        <Download className="w-3 h-3 text-white/60" />
                    </div>
                </div>
            </div>

            {/* Timeline Editor */}
            <div className="h-28 flex flex-col gap-3">
                {/* Tracks */}
                <div className={`flex-1 rounded-2xl border ${borderBase} bg-zinc-50 dark:bg-white/3 relative overflow-hidden flex flex-col justify-center gap-2 p-3 shadow-inner`}>
                    {/* Playhead */}
                    <motion.div
                        className="absolute top-0 bottom-0 w-px bg-red-500 z-30 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                        animate={{ left: ["5%", "95%"] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-2 h-2 bg-red-500 rounded-full -ml-[3.5px] -mt-1 shadow-lg" />
                    </motion.div>

                    {/* Track 1 (Visual) */}
                    <div className="h-5 w-full bg-zinc-100 dark:bg-white/5 rounded-md relative overflow-hidden border border-zinc-200 dark:border-white/5">
                        <div className="absolute left-[10%] w-[35%] h-full bg-emerald-500/20 border-l border-r border-emerald-500/50 flex items-center px-1">
                            <div className="h-1 w-full bg-emerald-500/50 rounded-full" />
                        </div>
                        <div className="absolute left-[50%] w-[25%] h-full bg-blue-500/20 border-l border-r border-blue-500/50 flex items-center px-1">
                            <div className="h-1 w-full bg-blue-500/50 rounded-full" />
                        </div>
                    </div>

                    {/* Track 2 (Audio) */}
                    <div className="h-5 w-full bg-zinc-100 dark:bg-white/5 rounded-md relative overflow-hidden border border-zinc-200 dark:border-white/5">
                        <div className="absolute left-[5%] w-[80%] h-full bg-purple-500/20 border-x border-purple-500/50 flex items-baseline justify-around px-1 pt-1 opacity-60">
                            {[1, 4, 2, 5, 3, 6, 2, 4, 1, 5, 3, 7, 2, 4].map((h, i) => (
                                <div key={i} className="w-0.5 bg-purple-500/40 rounded-full" style={{ height: `${h * 15}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
