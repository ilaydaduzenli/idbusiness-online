"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const services = [
    { title: "AI Content Production", desc: "Generative video & imagery at scale." },
    { title: "Hyper Quality UGC", desc: "Authentic creator content, managed by AI." },
    { title: "AI Influencer Creation", desc: "Virtual personas for global reach." },
    { title: "Web Design (Wix Studio)", desc: "Awards-winning immersive web experiences." },
    { title: "Automation Systems", desc: "Zapier, Make, and Python workflows." },
    { title: "Brand Digital Identity", desc: "Logos, type, and voice for the AI era." },
];

export function Services() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Services</h2>
                    <h3 className="text-4xl font-medium tracking-tight">Full-Stack Capabilities</h3>
                </div>
                <Link href="/services" className="text-sm font-medium border-b border-white/20 pb-1 hover:border-white transition-colors">
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
                        className="glass-card p-8 rounded-xl flex flex-col gap-4 group cursor-pointer"
                    >
                        <div className="flex justify-between items-start">
                            <h4 className="text-xl font-medium max-w-[70%]">{service.title}</h4>
                            <MoveRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                            {service.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
