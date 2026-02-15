"use client";

import { motion } from "framer-motion";

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
                    className="text-lg text-zinc-400"
                >
                    An intersection of aesthetic perfection and autonomous systems.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {["AI Content", "Design System", "Automation", "Brand Identity"].map((item, i) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-8 rounded-2xl flex flex-col justify-between h-48 hover:bg-white/5 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-xl font-medium tracking-wide">{item}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
