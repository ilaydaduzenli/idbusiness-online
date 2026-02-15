"use client";

import { motion } from "framer-motion";
import { Activity, BarChart, Check, Clock, FileVideo, Globe, Layers, Layout, Play, Settings, Share2, Users, Wand2 } from "lucide-react";

// Shared styles
const cardBase = "glass-card w-full h-[450px] rounded-xl overflow-hidden relative border border-white/10 p-6 flex flex-col gap-4"; // Increased height
const iconBase = "w-4 h-4 text-zinc-400";
const textSmall = "text-[10px] text-zinc-500 font-mono uppercase tracking-wider";

export function HeroScenes({ index }: { index: number }) {
    const variant = index % 3;

    return (
        <motion.div
            className={cardBase}
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.01, opacity: 1, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ duration: 0.4 }}
        >
            {/* Header (Common) */}
            <div className="flex items-center justify-between mb-2 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${variant === 0 ? 'bg-emerald-500/50' : variant === 1 ? 'bg-blue-500/50' : 'bg-purple-500/50'}`} />
                    <span className="text-xs font-mono text-zinc-400">
                        {variant === 0 ? 'AI_DASHBOARD_V2.1' : variant === 1 ? 'WORKFLOW_PIPELINE' : 'CREATIVE_STUDIO'}
                    </span>
                </div>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
            </div>

            {variant === 0 && <DashboardScene />}
            {variant === 1 && <PipelineScene />}
            {variant === 2 && <ProductionScene />}

            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
        </motion.div>
    );
}

function DashboardScene() {
    return (
        <div className="flex flex-col gap-4 h-full relative">
            {/* KPI Row */}
            <div className="grid grid-cols-2 gap-3">
                {[
                    { label: "Generation Queue", val: "124", icon: Layers },
                    { label: "Render Velocity", val: "1.2s", icon: Activity }
                ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="flex justify-between items-start mb-2">
                            <span className={textSmall}>{item.label}</span>
                            <item.icon className={iconBase} />
                        </div>
                        <div className="text-2xl font-light text-zinc-200">{item.val}</div>
                    </div>
                ))}
            </div>

            {/* Main Chart Area */}
            <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-4 relative overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                    <span className={textSmall}>Performance</span>
                    <div className="flex gap-1">
                        {[1, 2, 3].map(d => <div key={d} className="w-1 h-3 bg-white/10 rounded-full" />)}
                    </div>
                </div>

                <div className="flex items-end gap-1 h-32 w-full mt-2">
                    {[30, 50, 45, 60, 80, 70, 90, 65, 55, 75, 85, 95, 60, 40].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: "10%" }}
                            animate={{ height: `${h}%` }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse",
                                delay: i * 0.1,
                                ease: "easeInOut"
                            }}
                            className="flex-1 bg-white/10 rounded-sm hover:bg-white/20 transition-colors"
                        />
                    ))}
                </div>

                {/* Floating Tag */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-4 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] text-emerald-400"
                >
                    +24% Efficiency
                </motion.div>
            </div>

            {/* Bottom List */}
            <div className="space-y-2">
                {["Model_v4 training completed", "New prompt style added"].map((txt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-500">
                        <Check className="w-3 h-3 text-emerald-500/50" />
                        {txt}
                    </div>
                ))}
            </div>
        </div>
    );
}

function PipelineScene() {
    const steps = ["Ingest", "Compose", "Render", "Schedule"];

    return (
        <div className="flex flex-col h-full relative p-2">
            <div className="flex justify-between items-center mb-6">
                <div className="px-2 py-1 bg-blue-500/10 text-blue-400 text-[10px] rounded border border-blue-500/20">
                    Active Run
                </div>
                <div className="text-[10px] text-zinc-600 font-mono">ID: #8821X</div>
            </div>

            <div className="flex-1 flex flex-col gap-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />

                {steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-4 relative z-10">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                backgroundColor: ["rgba(255,255,255,0.05)", "rgba(59, 130, 246, 0.2)", "rgba(255,255,255,0.05)"]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                            className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
                        >
                            <div className="w-2 h-2 rounded-full bg-white/30" />
                        </motion.div>

                        <div className="flex-1 bg-white/5 border border-white/5 p-3 rounded-lg flex justify-between items-center">
                            <span className="text-sm text-zinc-300">{step}</span>
                            {i === 2 ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                >
                                    <Clock className="w-3 h-3 text-zinc-500" />
                                </motion.div>
                            ) : (
                                <Check className="w-3 h-3 text-zinc-600" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Output Console */}
            <div className="mt-4 p-3 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] text-zinc-500 leading-relaxed">
                <span className="text-blue-400">{`>`}</span> init_sequence<br />
                <span className="text-zinc-600">{`>`}</span> vectors loaded caused by [module_7]<br />
                <span className="text-white/40 blink">_</span>
            </div>
        </div>
    );
}

function ProductionScene() {
    return (
        <div className="flex flex-col gap-3 h-full">
            {/* Toolbar */}
            <div className="flex gap-2 mb-2">
                {[Layout, Wand2, Settings, Share2].map((Icon, i) => (
                    <div key={i} className="p-2 bg-white/5 rounded-md hover:bg-white/10 transition-colors">
                        <Icon className={iconBase} />
                    </div>
                ))}
            </div>

            {/* Media Grid */}
            <div className="grid grid-cols-2 gap-2 flex-1">
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="bg-white/5 rounded-lg border border-white/5 relative overflow-hidden group"
                        whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            {i === 1 ? <FileVideo className="w-6 h-6 text-zinc-600" /> : <div className="w-full h-full bg-white/5" />}
                        </div>

                        {/* Status Label */}
                        <div className="absolute bottom-2 left-2 text-[9px] px-1.5 py-0.5 bg-black/60 rounded text-zinc-400 backdrop-blur-sm">
                            {i === 1 ? 'RENDERING' : 'READY'}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Timeline Strip */}
            <div className="h-12 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden flex items-center px-2">
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-purple-500/50 w-1/3"
                        animate={{ x: ["-100%", "300%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                </div>
                {[1, 2, 3, 4, 5].map(j => (
                    <div key={j} className="absolute top-0 bottom-0 w-px bg-white/5" style={{ left: `${j * 20}%` }} />
                ))}

                {/* Playhead */}
                <motion.div
                    className="absolute top-0 bottom-0 w-0.5 bg-purple-400 z-10"
                    animate={{ left: ["0%", "100%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="flex justify-between items-center text-[10px] text-zinc-500 px-1">
                <span>00:00:12:04</span>
                <span>4K / 60FPS</span>
            </div>
        </div>
    );
}
