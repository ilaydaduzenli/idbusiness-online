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
                <h3 className="text-4xl font-medium tracking-tight">Proprietary Systems</h3>
            </div>

            <div className="flex flex-col gap-8">
                {modules.map((module, i) => (
                    <motion.div
                        key={module.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card rounded-2xl overflow-hidden"
                    >
                        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                            {/* Text Content */}
                            <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20">
                                <h4 className="text-3xl font-medium mb-4">{module.title}</h4>
                                <p className="text-zinc-400 text-lg mb-8 max-w-md">{module.desc}</p>
                                <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors group">
                                    {module.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            {/* Animated Visual */}
                            <div className="h-64 lg:h-auto min-h-[300px] relative overflow-hidden bg-white/5 flex items-center justify-center p-8">
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
                    className="w-32 h-48 bg-zinc-900 rounded-lg border border-white/10 relative overflow-hidden flex-shrink-0"
                    animate={{ x: [0, -100] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Play className="w-3 h-3 fill-white text-white" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

function InfluencerPreview() {
    return (
        <div className="w-full max-w-sm bg-zinc-900 rounded-xl border border-white/10 p-4 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10" />
                <div className="flex-1 space-y-2">
                    <div className="w-2/3 h-3 bg-white/10 rounded" />
                    <div className="w-1/3 h-3 bg-white/5 rounded" />
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/5" />
                    <div className="w-8 h-8 rounded-full bg-white/5" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs border border-emerald-500/20">
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
                    className="w-24 h-24 rounded-full border border-dashed border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
            </div>
            <div className="w-16 h-16 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center z-10">
                <Wand2 className="w-8 h-8 text-white" />
            </div>

            {/* Orbiting items */}
            {[0, 90, 180, 270].map((deg, i) => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded bg-white/5 border border-white/10"
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
                        rotate: deg,
                        translateX: 60
                    }}
                />
            ))}
        </div>
    )
}
