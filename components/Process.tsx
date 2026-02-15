"use client";

import { motion } from "framer-motion";

const steps = [
    { id: "01", title: "Discover", desc: "Audit & Strategy" },
    { id: "02", title: "Design", desc: "UX & Visual Systems" },
    { id: "03", title: "Build", desc: "Development & Integration" },
    { id: "04", title: "Automate", desc: "AI Workflows" },
    { id: "05", title: "Scale", desc: "Growth & Optimization" },
];

export function Process() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6 border-t border-white/5">
            <div className="mb-16">
                <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Process</h2>
                <h3 className="text-4xl font-medium tracking-tight">From Concept to Autonomy</h3>
            </div>

            <div className="relative">
                {/* Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex flex-col gap-4 group"
                        >
                            {/* Dot on line */}
                            <div className="hidden lg:flex items-center justify-center w-6 h-6 rounded-full bg-zinc-950 border border-white/20 z-10 group-hover:border-white transition-colors group-hover:scale-110 duration-300 mx-auto lg:mx-0 lg:mb-6">
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>

                            <span className="text-4xl font-light text-zinc-700 group-hover:text-zinc-500 transition-colors">
                                {step.id}
                            </span>
                            <div>
                                <h4 className="text-xl font-medium mb-1">{step.title}</h4>
                                <p className="text-zinc-500 text-sm">{step.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
