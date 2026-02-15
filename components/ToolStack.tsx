"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Layers, Share, Zap } from "lucide-react";

const tools = [
    {
        cat: "Development",
        tools: "Next.js 14 / Vercel",
        desc: "React Server Components architecture",
        icon: Code
    },
    {
        cat: "AI Models",
        tools: "OpenAI / Claude / Gemini",
        desc: "Multi-modal inference pipelines",
        icon: Cpu
    },
    {
        cat: "Creative",
        tools: "Adobe / Firefly / Midjourney",
        desc: "Generative asset production",
        icon: Layers
    },
    {
        cat: "Operations",
        tools: "Zapier / Make / Python",
        desc: "Event-driven workflow automation",
        icon: Zap
    },
    {
        cat: "Distribution",
        tools: "Meta / TikTok / Google",
        desc: "Programmatic ad scaling",
        icon: Share
    }
];

export function ToolStack() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Ecosystem</h2>
                    <h3 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-white">Powered by a modern stack</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tools.map((t, i) => (
                    <motion.div
                        key={t.cat}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -2, backgroundColor: "var(--hover-bg, rgba(255,255,255,0.03))" }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card p-6 rounded-xl border border-zinc-200 dark:border-white/5 flex flex-col gap-3 group cursor-default hover:border-zinc-300 dark:hover:border-white/10"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-2 bg-zinc-100 dark:bg-white/5 rounded-md text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                <t.icon className="w-5 h-5" />
                            </div>
                            {/* Tiny animated indicator */}
                            <div className="flex gap-1 items-center h-full">
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                    className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600"
                                />
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-zinc-900 dark:text-zinc-200">{t.tools}</h4>
                            <p className="text-xs text-zinc-500 font-mono uppercase tracking-wide mt-1">{t.cat}</p>
                        </div>

                        <div className="pt-3 border-t border-zinc-100 dark:border-white/5 mt-auto">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors">
                                {t.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {/* Last tile is a 'More' placeholder or custom CTA */}
                <div className="glass-card p-6 rounded-xl border border-zinc-200 dark:border-white/5 flex flex-col items-center justify-center text-center gap-4 group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-white/5 flex items-center justify-center border border-zinc-200 dark:border-white/5 group-hover:scale-110 transition-transform">
                        <span className="text-xl font-light text-zinc-600 dark:text-zinc-300">+</span>
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Custom Integrations Available</p>
                </div>
            </div>
        </section>
    );
}
