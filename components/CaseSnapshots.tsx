"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
    {
        client: "Global Beauty Brand",
        type: "B2C / Retail",
        deliverable: "AI Video Campaign",
        metric: "+40% Engagement",
        color: "bg-pink-500/10 text-pink-400"
    },
    {
        client: "Logistics Giant",
        type: "B2B / SaaS",
        deliverable: "Web Automation",
        metric: "2x Lead Velocity",
        color: "bg-blue-500/10 text-blue-400"
    },
    {
        client: "Luxury Travel",
        type: "Lifestyle",
        deliverable: "Brand Identity",
        metric: "Premium Repositioning",
        color: "bg-amber-500/10 text-amber-400"
    }
];

export function CaseSnapshots() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6 border-t border-white/5">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Selected Work</h2>
                    <h3 className="text-4xl font-medium tracking-tight">Recent Deployments</h3>
                </div>
                <button className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
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
                        {/* Thumbnail Placeholder */}
                        <div className="aspect-video bg-white/5 rounded-xl border border-white/5 mb-6 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <span className={`text-[10px] font-mono px-2 py-1 rounded border border-white/10 ${c.color} bg-black/50 backdrop-blur-md`}>
                                    {c.metric}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-start">
                                <h4 className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{c.client}</h4>
                                <span className="text-xs text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">{c.type}</span>
                            </div>
                            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{c.deliverable}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
