"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Users, Wand2 } from "lucide-react";

const modules = [
    {
        title: "Hyper Quality UGC Engine",
        desc: "End-to-end creator management and video production at scale.",
        cta: "See how it works",
        type: "ugc"
    },
    {
        title: "AI Influencer System",
        desc: "Synthetic persona creation, voice cloning, and autonomous posting.",
        cta: "View personas",
        type: "influencer"
    },
    {
        title: "Automation Content Factory",
        desc: "300+ short-form reels per month generated from long-form assets.",
        cta: "Explore factory",
        type: "automation"
    }
];

export function FeaturedModules() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="mb-16">
                <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Live Modules</h2>
                <h3 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Proprietary Systems</h3>
            </div>

            <div className="flex flex-col gap-8">
                {modules.map((module, i) => (
                    <motion.div
                        key={module.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card rounded-2xl overflow-hidden border-zinc-200 dark:border-white/5"
                    >
                        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                            {/* Text Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-black/20">
                                <h4 className="text-3xl font-medium mb-4 text-zinc-900 dark:text-white">{module.title}</h4>
                                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-md">{module.desc}</p>
                                <button className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-zinc-300 transition-colors group">
                                    {module.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Animated Visual */}
                            <div className="h-64 lg:h-auto min-h-[300px] relative overflow-hidden bg-zinc-100 dark:bg-white/5 flex items-center justify-center p-8">
                                {module.type === 'ugc' && <UGCPreview />}
                                {module.type === 'influencer' && <InfluencerPreview />}
                                {module.type === 'automation' && <AutomationPreview />}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function UGCPreview() {
    return (
        <div className="w-full h-full relative flex gap-4 items-center justify-center">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="w-32 h-48 bg-zinc-200 dark:bg-zinc-800 rounded-xl border border-zinc-300 dark:border-white/10 relative overflow-hidden flex-shrink-0 shadow-lg"
                    animate={{ x: [0, -100] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    {/* Content mockup */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 dark:from-zinc-700 to-zinc-200 dark:to-zinc-800" />
                    {/* Waveform bars */}
                    <div className="absolute bottom-8 left-2 right-2 flex items-end gap-0.5">
                        {[3, 6, 4, 8, 5, 7, 3, 5, 6, 4].map((h, j) => (
                            <div key={j} className="flex-1 bg-zinc-400/30 dark:bg-white/20 rounded-full" style={{ height: `${h * 3}px` }} />
                        ))}
                    </div>
                    {/* Play badge */}
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-zinc-300/80 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center border border-zinc-400/30 dark:border-white/10">
                        <Play className="w-3 h-3 fill-zinc-700 dark:fill-white text-zinc-700 dark:text-white" />
                    </div>
                    {/* Creator avatar */}
                    <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                        <div className={`w-5 h-5 rounded-full ${i === 1 ? 'bg-pink-400' : i === 2 ? 'bg-blue-400' : 'bg-emerald-400'} flex items-center justify-center text-[8px] font-bold text-white`}>
                            {i === 1 ? 'A' : i === 2 ? 'B' : 'C'}
                        </div>
                        <div className="h-2 w-10 rounded-full bg-zinc-400/20 dark:bg-white/10" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

function InfluencerPreview() {
    return (
        <div className="w-full max-w-sm bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-white/10 p-5 relative overflow-hidden shadow-lg">
            <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 flex items-center justify-center text-sm font-bold text-white shadow-lg">AI</div>
                <div className="flex-1 space-y-2">
                    <div className="w-2/3 h-3 bg-zinc-200 dark:bg-white/10 rounded" />
                    <div className="w-1/3 h-3 bg-zinc-100 dark:bg-white/5 rounded" />
                </div>
            </div>
            {/* Stats row */}
            <div className="flex gap-3 mb-4">
                {[{ label: "Posts", val: "2.4K" }, { label: "Reach", val: "890K" }, { label: "ER", val: "8.2%" }].map((s, i) => (
                    <div key={i} className="flex-1 text-center p-2 rounded-lg bg-zinc-50 dark:bg-white/5 border border-zinc-100 dark:border-white/5">
                        <div className="text-xs font-bold text-zinc-900 dark:text-white">{s.val}</div>
                        <div className="text-[9px] text-zinc-500 uppercase tracking-wider">{s.label}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-end">
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
                        <Users className="w-3 h-3 text-zinc-400" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5 flex items-center justify-center">
                        <Wand2 className="w-3 h-3 text-zinc-400" />
                    </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/20 font-semibold">
                    Active
                </div>
            </div>

            {/* Scan line */}
            <motion.div
                className="absolute top-0 w-full h-px bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
        </div>
    )
}

function AutomationPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-24 h-24 rounded-full border border-dashed border-zinc-300 dark:border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <div className="w-16 h-16 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 flex items-center justify-center z-10 shadow-xl">
                <Wand2 className="w-8 h-8 text-zinc-600 dark:text-white" />
            </div>

            {/* Orbiting items */}
            {[
                { deg: 0, label: "API", color: "bg-emerald-500/10 border-emerald-500/20" },
                { deg: 90, label: "DB", color: "bg-blue-500/10 border-blue-500/20" },
                { deg: 180, label: "ML", color: "bg-purple-500/10 border-purple-500/20" },
                { deg: 270, label: "CMS", color: "bg-amber-500/10 border-amber-500/20" }
            ].map((item, i) => (
                <motion.div
                    key={i}
                    className={`absolute w-10 h-10 rounded-xl ${item.color} border backdrop-blur-sm flex items-center justify-center shadow-md`}
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        transformOrigin: "center center",
                        rotate: item.deg,
                        translateX: 60
                    }}
                >
                    <span className="text-[8px] font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">{item.label}</span>
                </motion.div>
            ))}
        </div>
    )
}

