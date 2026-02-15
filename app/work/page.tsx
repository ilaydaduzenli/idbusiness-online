"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const works = [
    {
        client: "Nebula Cosmetics",
        role: "AI Video Campaign",
        year: "2025",
        tags: ["Generative Video", "Social Strategy"],
        image: "bg-pink-900/20"
    },
    {
        client: "Quant Logistics",
        role: "Automated CRM",
        year: "2025",
        tags: ["Python", "Salesforce API"],
        image: "bg-blue-900/20"
    },
    {
        client: "Velvet Travels",
        role: "Brand Identity",
        year: "2024",
        tags: ["Design System", "Webflow"],
        image: "bg-amber-900/20"
    },
    {
        client: "Echo Finance",
        role: "App UI/UX",
        year: "2024",
        tags: ["Product Design", "React Native"],
        image: "bg-emerald-900/20"
    },
    {
        client: "Synthetix Model",
        role: "Influencer Creation",
        year: "2024",
        tags: ["LoRA Training", "Instagram Growth"],
        image: "bg-purple-900/20"
    },
    {
        client: "Apex Gear",
        role: "E-commerce Build",
        year: "2023",
        tags: ["Shopify Plus", "3D Configurator"],
        image: "bg-zinc-800"
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-24">
            <section className="container mx-auto px-4 lg:px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Selected Work
                    </h1>
                </motion.div>

                <div className="flex gap-4 overflow-x-auto pb-4 border-b border-white/10">
                    <button className="text-sm font-medium text-white px-4 py-2 bg-white/10 rounded-full cursor-default">All</button>
                    <button className="text-sm font-medium text-zinc-400 px-4 py-2 hover:text-white transition-colors cursor-default">AI Content</button>
                    <button className="text-sm font-medium text-zinc-400 px-4 py-2 hover:text-white transition-colors cursor-default">Development</button>
                    <button className="text-sm font-medium text-zinc-400 px-4 py-2 hover:text-white transition-colors cursor-default">Automation</button>
                </div>
            </section>

            <section className="container mx-auto px-4 lg:px-6">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {works.map((w, i) => (
                        <motion.div
                            key={w.client}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[4/3] rounded-xl mb-6 overflow-hidden relative ${w.image}`}>
                                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/0 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center">
                                        <ArrowUpRight className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-medium group-hover:text-zinc-300 transition-colors">{w.client}</h3>
                                <span className="text-zinc-500 font-mono text-xs border border-white/10 px-2 py-1 rounded-full">{w.year}</span>
                            </div>
                            <p className="text-lg text-zinc-400 mb-3">{w.role}</p>
                            <div className="flex gap-2">
                                {w.tags.map(t => (
                                    <span key={t} className="text-xs text-zinc-500 bg-white/5 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Dynamic Link Placeholder */}
            <section className="container mx-auto px-4 lg:px-6 mt-24 pt-12 border-t border-white/10 flex justify-between items-center">
                <p className="text-zinc-500">More case studies available upon request.</p>
                <Link href="/contact" className="text-white hover:underline underline-offset-4">Contact Us</Link>
            </section>
        </main>
    );
}
