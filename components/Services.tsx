"use client";

import { motion } from "framer-motion";
import { MoveRight, Video, Sparkles, User, Globe, Zap, Palette } from "lucide-react";
import Link from "next/link";

const services = [
    { title: "AI Content Production", desc: "Generative video & imagery at scale.", icon: Video, accent: "from-emerald-500/20 to-teal-500/20" },
    { title: "Hyper Quality UGC", desc: "Authentic creator content, managed by AI.", icon: Sparkles, accent: "from-purple-500/20 to-pink-500/20" },
    { title: "AI Influencer Creation", desc: "Virtual personas for global reach.", icon: User, accent: "from-blue-500/20 to-cyan-500/20" },
    { title: "Web Design (Wix Studio)", desc: "Awards-winning immersive web experiences.", icon: Globe, accent: "from-amber-500/20 to-orange-500/20" },
    { title: "Automation Systems", desc: "Zapier, Make, and Python workflows.", icon: Zap, accent: "from-rose-500/20 to-red-500/20" },
    { title: "Brand Digital Identity", desc: "Logos, type, and voice for the AI era.", icon: Palette, accent: "from-indigo-500/20 to-violet-500/20" },
];

export function Services() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Services</h2>
                    <h3 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Full-Stack Capabilities</h3>
                </div>
                <Link href="/services" className="text-sm font-medium border-b border-zinc-300 dark:border-white/20 pb-1 hover:border-zinc-900 dark:hover:border-white transition-colors text-zinc-900 dark:text-zinc-200">
                    View all services
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card p-0 rounded-xl flex flex-col group cursor-pointer overflow-hidden"
                    >
                        {/* Accent gradient strip */}
                        <div className={`h-1 w-full bg-gradient-to-r ${service.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                        <div className="p-8 flex flex-col gap-4">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:border-zinc-300 dark:group-hover:border-white/20 transition-all shadow-sm group-hover:shadow-md">
                                <service.icon className="w-5 h-5" />
                            </div>
                            <div className="flex justify-between items-start">
                                <h4 className="text-xl font-medium max-w-[70%] text-zinc-900 dark:text-white">{service.title}</h4>
                                <MoveRight className="w-5 h-5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                            </div>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

