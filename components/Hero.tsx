"use client";

import { motion } from "framer-motion";
import { HeroScenes } from "./ui/HeroScenes";
import { ArrowRight, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative w-full h-[100dvh] overflow-hidden bg-zinc-950 text-white flex flex-col">
            {/* Status Strip */}
            <div className="w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-sm z-50">
                <div className="container mx-auto px-4 lg:px-6 py-2 flex justify-between items-center text-[10px] lg:text-xs text-zinc-500 font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available for new builds
                    </div>
                    <div className="hidden sm:flex gap-4">
                        <span>AI Content</span>
                        <span className="text-zinc-700">•</span>
                        <span>Web</span>
                        <span className="text-zinc-700">•</span>
                        <span>Automation</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 h-full gap-12 items-center">
                {/* Left: Content */}
                <div className="flex flex-col justify-center gap-8 relative z-10 pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase flex items-center gap-2">
                            <Globe className="w-4 h-4" />
                            AI Powered . Human Refined
                        </h2>
                        <h1 className="text-6xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-white mb-6">
                            The Agency <br />
                            <span className="text-zinc-500">of the Future.</span>
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-md leading-relaxed mb-8">
                            We build intelligent systems, automated content engines, and premium digital experiences for forward-thinking brands.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="px-8 py-4 bg-white text-black rounded-full text-sm font-semibold tracking-wide hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                Start Project <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/work" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm">
                                View Work
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Vertical Animated Screens */}
                <div className="relative h-full hidden lg:block overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden w-full px-8">
                        {/* Scrolling Column 1 */}
                        <div className="w-full flex flex-col gap-6 animate-scroll-slow">
                            {[0, 1, 2, 0, 1, 2].map((i, idx) => (
                                <HeroScenes key={idx} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Fade masks for top/bottom smoothly */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
                </div>
            </div>
        </section>
    );
}
