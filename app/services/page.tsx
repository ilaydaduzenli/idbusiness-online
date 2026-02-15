"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code, Cpu, Layers, Share2, Sparkles, Workflow } from "lucide-react";
import { Process } from "@/components/Process";

const services = [
    {
        icon: Sparkles,
        title: "AI Content Production",
        desc: "Generative video, imagery, and copy at scale.",
        features: ["Custom Model Training", "Multi-modal Generation", "Brand Voice Calibration"],
        output: "Marketing Assets, Social Content, Ad Creatives"
    },
    {
        icon: Users, // Using Users as a proxy for UGC/Community
        title: "Hyper Quality UGC",
        desc: "Authentic creator content, managed/enhanced by AI.",
        features: ["Creator Matching", "AI Script Generation", "Performance Tracking"],
        output: "TikTok/Reels, Testimonials, Product Demos"
    },
    {
        icon: Bot,
        title: "AI Influencer Creation",
        desc: "Virtual personas for global reach and control.",
        features: ["Character Design", "Voice Cloning", "Autonomous Engagement"],
        output: "Virtual Brand Ambassadors, consistent IP"
    },
    {
        icon: Code,
        title: "Web Design & Dev",
        desc: "Award-winning immersive experiences.",
        features: ["Next.js / React", "3D / WebGL", "Headless CMS"],
        output: "Corporate Sites, E-commerce, Landing Pages"
    },
    {
        icon: Workflow,
        title: "Automation Systems",
        desc: "End-to-end workflow optimization.",
        features: ["Zapier / Make", "Custom Python Scripts", "CRM Integration"],
        output: "Lead Gen pipelines, Content scheduling"
    },
    {
        icon: Layers,
        title: "Brand Systems",
        desc: "Future-proof visual identity.",
        features: ["Logo & Type", "Motion Guidelines", "Design Systems"],
        output: "Full Brand Guidelines, UI Kits"
    }
];

import { Users } from "lucide-react"; // Import missing icon

export default function ServicesPage() {
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
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Services built for <br />
                        <span className="text-zinc-500">speed + quality.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        We replace traditional agency bloat with intelligent systems.
                        Our full-stack capabilities bridge the gap between creative vision and technical execution.
                    </p>
                </motion.div>
            </section>

            <div className="container mx-auto px-4 lg:px-6 mb-24">
                <div className="h-px w-full bg-white/10 mb-12" />
            </div>

            {/* Services Grid */}
            <section className="container mx-auto px-4 lg:px-6 mb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 rounded-2xl flex flex-col gap-6 group hover:bg-white/5 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                <s.icon className="w-6 h-6 text-zinc-300" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-medium mb-3">{s.title}</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">{s.desc}</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xs font-mono uppercase text-zinc-500 mb-2 tracking-wider">Includes</h4>
                                        <ul className="space-y-1">
                                            {s.features.map(f => (
                                                <li key={f} className="text-sm text-zinc-300 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-zinc-500" /> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-white/5">
                                        <h4 className="text-xs font-mono uppercase text-zinc-500 mb-2 tracking-wider">Output</h4>
                                        <p className="text-sm text-zinc-400">{s.output}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Strip */}
            <Process />

            {/* CTA */}
            <section className="container mx-auto px-4 lg:px-6 py-24 text-center">
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8">Ready to modernize?</h2>
                <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors"
                >
                    Start a Project <ArrowRight className="w-5 h-5" />
                </a>
            </section>
        </main>
    );
}
