"use client";

import { motion } from "framer-motion";
import { ToolStack } from "@/components/ToolStack"; // Reusing the ToolStack component

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-24">
            {/* Hero */}
            <section className="container mx-auto px-4 lg:px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-12 text-white">
                        We engineer<br />
                        <span className="text-zinc-500">digital autonomy.</span>
                    </h1>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 text-lg text-zinc-400 leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        idbusiness was founded on a simple premise: technology should liberate creativity, not complicate it.
                        We operate at the bleeding edge of Generative AI and automation, building systems that allow brands to scale content and operations without scaling headcount.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        We are not just a design agency. We are a technical partner. From configuring local LLMs to designing award-winning web interfaces, we handle the full spectrum of modern digital needs.
                    </motion.p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="container mx-auto px-4 lg:px-6 mb-24">
                <div className="h-px w-full bg-white/10 mb-12" />
                <h2 className="text-sm font-mono uppercase text-zinc-500 mb-8 tracking-widest">Core Values</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Radical Transparency", desc: "No black boxes. We build systems you own and understand." },
                        { title: "Aesthetic Precision", desc: "Beauty is a function of utility. We don't ship ugly code." },
                        { title: "Automate Everything", desc: "If it happens twice, we write a script for it." }
                    ].map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 rounded-xl border border-white/5"
                        >
                            <h3 className="text-xl font-medium mb-4">{v.title}</h3>
                            <p className="text-zinc-400">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Reusing Tool Stack */}
            <ToolStack />

            {/* Team Placeholders */}
            <section className="container mx-auto px-4 lg:px-6 py-24 border-t border-white/5">
                <h2 className="text-sm font-mono uppercase text-zinc-500 mb-12 tracking-widest">Leadership</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group">
                            <div className="aspect-square bg-white/5 rounded-xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-gradient-to-tr from-white/5 to-transparent" />
                            </div>
                            <h4 className="text-lg font-medium">Member Name</h4>
                            <p className="text-sm text-zinc-500">Role Title</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
