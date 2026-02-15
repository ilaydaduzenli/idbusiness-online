"use client";

import { motion } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import Link from "next/link";
import { SocialProof } from "./ui/SocialProof";
import { HeroVisual } from "./ui/HeroVisual";

export function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] lg:min-h-[100dvh] overflow-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white flex flex-col transition-colors duration-500">
            {/* Status Strip */}
            <div className="w-full border-b border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm z-50 transition-colors">
                <div className="container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center text-[10px] lg:text-xs text-zinc-500 dark:text-zinc-500 font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available for new builds
                    </div>
                    <div className="hidden sm:flex gap-4">
                        <span>AI Content</span>
                        <span className="text-zinc-400 dark:text-zinc-700">•</span>
                        <span>Web</span>
                        <span className="text-zinc-400 dark:text-zinc-700">•</span>
                        <span>Automation</span>
                    </div>
                </div>
            </div>

            {/* Main Content — Centered */}
            <div className="relative z-10 container mx-auto px-4 lg:px-6 flex flex-col items-center pt-12 lg:pt-20 pb-8 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center max-w-4xl mx-auto"
                >
                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[0.9] text-zinc-900 dark:text-white mb-6">
                        The Agency <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-400 dark:from-white dark:to-white/40">of the Future.</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mb-8">
                        We design AI-powered content systems, automation pipelines, and premium digital experiences.
                    </p>

                    {/* CTAs — Glass Glow Pills */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
                        {/* Primary */}
                        <Link
                            href="/contact"
                            className="hero-btn-glass group flex items-center gap-3 pl-2 pr-7 py-2 rounded-full bg-zinc-900/90 dark:bg-white/[0.08] border border-zinc-700/50 dark:border-white/[0.12] backdrop-blur-xl text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer justify-center sm:justify-start"
                            style={{ "--glow-color": "rgba(16,185,129,0.2)" } as React.CSSProperties}
                        >
                            {/* Icon tile */}
                            <span className="w-10 h-10 rounded-xl bg-white/10 dark:bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                                <Sparkles className="w-4.5 h-4.5 text-emerald-400" />
                            </span>
                            <span className="text-base font-semibold tracking-wide">Start Project</span>
                        </Link>

                        {/* Secondary */}
                        <Link
                            href="/work"
                            className="hero-btn-glass hero-btn-glass-secondary group flex items-center gap-3 pl-2 pr-7 py-2 rounded-full bg-zinc-100/80 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/[0.08] backdrop-blur-xl text-zinc-900 dark:text-zinc-300 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:text-zinc-900 dark:hover:text-white cursor-pointer justify-center sm:justify-start"
                        >
                            {/* Icon tile */}
                            <span className="w-10 h-10 rounded-xl bg-zinc-200/60 dark:bg-white/[0.04] border border-zinc-300/50 dark:border-white/[0.06] flex items-center justify-center shrink-0 group-hover:bg-zinc-300/60 dark:group-hover:bg-white/[0.08] transition-colors">
                                <Eye className="w-4.5 h-4.5 text-zinc-500 dark:text-zinc-400" />
                            </span>
                            <span className="text-base font-semibold tracking-wide">View Work</span>
                        </Link>
                    </div>

                    {/* Social Proof */}
                    <SocialProof />
                </motion.div>

                {/* 3 Modular Floating Panels */}
                <HeroVisual />
            </div>
        </section>
    );
}
