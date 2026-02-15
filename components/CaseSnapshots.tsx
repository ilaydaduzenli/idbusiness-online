"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Network, Gem } from "lucide-react";

const cases = [
    {
        client: "Global Beauty Brand",
        type: "B2C / Retail",
        deliverable: "AI Video Campaign",
        metric: "+40% Engagement",
        color: "bg-pink-500/10 text-pink-400",
        accent: "from-pink-500/30 via-rose-500/10 to-transparent",
        icon: BarChart3,
    },
    {
        client: "Logistics Giant",
        type: "B2B / SaaS",
        deliverable: "Web Automation",
        metric: "2x Lead Velocity",
        color: "bg-blue-500/10 text-blue-400",
        accent: "from-blue-500/30 via-cyan-500/10 to-transparent",
        icon: Network,
    },
    {
        client: "Luxury Travel",
        type: "Lifestyle",
        deliverable: "Brand Identity",
        metric: "Premium Repositioning",
        color: "bg-amber-500/10 text-amber-400",
        accent: "from-amber-500/30 via-orange-500/10 to-transparent",
        icon: Gem,
    }
];

export function CaseSnapshots() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6 border-t border-zinc-200 dark:border-white/5">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Selected Work</h2>
                    <h3 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Recent Deployments</h3>
                </div>
                <button className="hidden md:flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    View full portfolio <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {cases.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group cursor-pointer"
                    >
                        {/* Rich Thumbnail */}
                        <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-white/5 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            {/* Abstract background pattern */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${c.accent}`} />
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
                                style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '12px 12px' }} />

                            {/* Centered icon composition */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur-md border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                                    <c.icon className="w-7 h-7 text-zinc-600 dark:text-zinc-300" />
                                </div>
                            </div>

                            {/* Decorative lines */}
                            <div className="absolute top-4 left-4 right-4 flex gap-2">
                                <div className="h-1 w-8 rounded-full bg-zinc-300/50 dark:bg-white/10" />
                                <div className="h-1 w-12 rounded-full bg-zinc-300/30 dark:bg-white/5" />
                            </div>

                            {/* Overlay with metric badge */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            <div className="absolute bottom-4 left-4">
                                <span className={`text-[10px] font-mono px-2 py-1 rounded border border-white/10 ${c.color} bg-black/50 backdrop-blur-md`}>
                                    {c.metric}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-200 group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">{c.client}</h4>
                                <span className="text-xs text-zinc-500 border border-zinc-200 dark:border-white/10 px-2 py-0.5 rounded-full">{c.type}</span>
                            </div>
                            <p className="text-sm text-zinc-600 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-400 transition-colors">{c.deliverable}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

