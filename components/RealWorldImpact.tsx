"use client";

import { motion } from "framer-motion";
import {
    Globe, Layout, Monitor, Smartphone,
    Video, Calendar, Repeat, TrendingUp,
    Megaphone, Target, ShoppingBag, Rocket,
    ExternalLink
} from "lucide-react";

// ─── Card data ───────────────────────────────────────────────

const deployments = [
    {
        title: "Live Websites & Platforms",
        desc: "Production-grade dashboards, SaaS UI, booking systems, and client-facing portals.",
        tags: ["Vercel", "Next.js", "Stripe", "GitHub"],
        preview: "websites",
    },
    {
        title: "Automated Content Systems",
        desc: "Daily reels, UGC pipelines, scheduled publishing — running 24/7 with zero manual steps.",
        tags: ["Meta API", "Make", "Node.js", "OpenAI"],
        preview: "content",
    },
    {
        title: "Brand Deployments",
        desc: "Ad campaigns, conversion funnels, product launches — from creative to live in days.",
        tags: ["Google Ads", "Meta", "Stripe", "Analytics"],
        preview: "brand",
    },
];

// ─── Animated Previews ───────────────────────────────────────

function WebsitesPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-[240px] flex flex-col gap-2">
                {/* Browser chrome */}
                <div className="rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden shadow-md bg-white dark:bg-zinc-900">
                    {/* Toolbar */}
                    <div className="flex items-center gap-2 px-3 py-2 border-b border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                            <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        </div>
                        <div className="flex-1 h-4 rounded bg-zinc-100 dark:bg-white/5 mx-4" />
                        <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                    </div>
                    {/* Page body */}
                    <div className="p-3 space-y-2">
                        {/* Nav bar */}
                        <div className="flex items-center justify-between">
                            <div className="w-12 h-2 bg-zinc-200 dark:bg-white/10 rounded" />
                            <div className="flex gap-2">
                                {[1, 2, 3].map(n => (
                                    <div key={n} className="w-6 h-1.5 bg-zinc-100 dark:bg-white/5 rounded" />
                                ))}
                            </div>
                        </div>
                        {/* Hero block */}
                        <motion.div
                            className="h-10 rounded-lg bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 dark:from-white/5 dark:via-white/[0.02] dark:to-white/5"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        {/* Card row */}
                        <div className="flex gap-1.5">
                            {[Monitor, Globe, Smartphone].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 h-8 rounded-md bg-zinc-50 dark:bg-white/[0.03] border border-zinc-100 dark:border-white/5 flex items-center justify-center"
                                    animate={{ scale: [1, 1.03, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                >
                                    <Icon className="w-3 h-3 text-zinc-400 dark:text-zinc-600" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Live indicator */}
                <div className="flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">Live on Vercel</span>
                </div>
            </div>
        </div>
    );
}

function ContentSystemsPreview() {
    const items = [
        { icon: Video, label: "Reel #847", time: "09:00" },
        { icon: Calendar, label: "Scheduled", time: "12:00" },
        { icon: Repeat, label: "Pipeline", time: "15:00" },
        { icon: TrendingUp, label: "Analytics", time: "18:00" },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-[220px] flex flex-col gap-1.5">
                {items.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5"
                        initial={{ opacity: 0.3, x: -8 }}
                        animate={{ opacity: [0.3, 1, 0.3], x: [-8, 0, -8] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.8 }}
                    >
                        <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200/50 dark:border-white/5 flex items-center justify-center shrink-0">
                            <item.icon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300 truncate">{item.label}</div>
                        </div>
                        <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600 shrink-0">{item.time}</span>
                    </motion.div>
                ))}
                {/* Running indicator */}
                <div className="mt-1 h-1 rounded-full bg-zinc-200 dark:bg-white/5 overflow-hidden">
                    <motion.div
                        className="h-full w-1/3 bg-emerald-500/40 rounded-full"
                        animate={{ left: ["-33%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ position: "relative" }}
                    />
                </div>
            </div>
        </div>
    );
}

function BrandDeploymentsPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-[220px] flex flex-col gap-3">
                {/* Campaign card */}
                <div className="rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden bg-white dark:bg-zinc-900/50 shadow-sm">
                    {/* Visual */}
                    <motion.div
                        className="h-16 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-100 dark:from-white/5 dark:via-white/[0.02] dark:to-white/5 flex items-center justify-center relative overflow-hidden"
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <Megaphone className="w-6 h-6 text-zinc-300 dark:text-zinc-700" />
                    </motion.div>
                    {/* Info */}
                    <div className="p-3 space-y-1.5">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">Q1 Launch</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-mono">LIVE</span>
                        </div>
                        <div className="flex gap-1">
                            <div className="flex-1 h-1 rounded-full bg-emerald-500/30" />
                            <div className="flex-[0.7] h-1 rounded-full bg-blue-500/20" />
                            <div className="flex-[0.3] h-1 rounded-full bg-zinc-200 dark:bg-white/5" />
                        </div>
                    </div>
                </div>

                {/* KPI strip */}
                <div className="flex gap-2">
                    {[
                        { icon: Target, val: "3.2M", label: "Reach" },
                        { icon: ShoppingBag, val: "14K", label: "Conv." },
                        { icon: Rocket, val: "4.1x", label: "ROAS" },
                    ].map((kpi, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 text-center p-2 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                        >
                            <kpi.icon className="w-3 h-3 text-zinc-400 dark:text-zinc-600 mx-auto mb-1" />
                            <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">{kpi.val}</div>
                            <div className="text-[8px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-mono">{kpi.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const previewMap: Record<string, () => React.JSX.Element> = {
    websites: WebsitesPreview,
    content: ContentSystemsPreview,
    brand: BrandDeploymentsPreview,
};

// ─── Main Section ────────────────────────────────────────────

export function RealWorldImpact() {
    return (
        <section className="py-20 md:py-28 relative bg-zinc-50 dark:bg-zinc-950/80 transition-colors overflow-hidden">
            {/* Subtle top border */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/[0.06] to-transparent" />

            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-14 md:mb-20"
                >
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Real-World Impact</h2>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4">
                        We don&apos;t just generate. We deploy.
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Every system we build goes live — shipping real products, running real campaigns, driving real revenue.
                    </p>
                </motion.div>

                {/* Cards Grid — 3 columns */}
                <div className="grid md:grid-cols-3 gap-5 md:gap-6">
                    {deployments.map((dep, i) => {
                        const Preview = previewMap[dep.preview];
                        return (
                            <motion.div
                                key={dep.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded-2xl border border-zinc-200 dark:border-white/[0.06] bg-white/80 dark:bg-white/[0.02] backdrop-blur-md shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Text */}
                                <div className="p-6 md:p-7 pb-2 md:pb-3 flex flex-col gap-2.5 relative z-10">
                                    <h4 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">{dep.title}</h4>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{dep.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                                        {dep.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-500 border border-zinc-200/50 dark:border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="h-52 md:h-56 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
                                        style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '14px 14px' }} />
                                    <Preview />
                                </div>

                                {/* Hover glow */}
                                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-500/[0.04] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-white/[0.06] to-transparent" />
        </section>
    );
}
