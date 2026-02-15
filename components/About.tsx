"use client";

import { motion } from "framer-motion";
import { Brain, Layout, Workflow, Fingerprint } from "lucide-react";

const capabilities = [
    { title: "AI Content", subtitle: "Generate at scale", icon: Brain, accent: "from-emerald-500/10 to-teal-500/5" },
    { title: "Design System", subtitle: "Pixel-perfect craft", icon: Layout, accent: "from-blue-500/10 to-cyan-500/5" },
    { title: "Automation", subtitle: "Autonomous workflows", icon: Workflow, accent: "from-purple-500/10 to-pink-500/5" },
    { title: "Brand Identity", subtitle: "DNA-level precision", icon: Fingerprint, accent: "from-amber-500/10 to-orange-500/5" },
];

export function About() {
    return (
        <section className="py-24 lg:py-32 relative container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-5xl font-medium tracking-tight mb-6"
                >
                    We architect digital intelligence.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-zinc-600 dark:text-zinc-400"
                >
                    An intersection of aesthetic perfection and autonomous systems.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 hover:bg-zinc-100/50 dark:hover:bg-white/5 transition-all group relative overflow-hidden"
                    >
                        {/* Subtle gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                        <div className="relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white shadow-sm">
                                <item.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-medium tracking-wide text-zinc-900 dark:text-white">{item.title}</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 font-mono uppercase tracking-wider">{item.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

