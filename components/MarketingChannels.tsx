"use client";

import { motion } from "framer-motion";
import {
    Instagram, Heart, MessageCircle, Play,
    BarChart3, TrendingUp, DollarSign, Eye,
    FileText, Search, Gauge, Layout,
    Check
} from "lucide-react";

// ─── Card data ───────────────────────────────────────────────

const channels = [
    {
        title: "Instagram Content & Growth",
        desc: "Reels, Stories, and Grid systems powered by AI-generated UGC, CGI, and virtual influencers.",
        bullets: ["Automated Reels & Stories publishing", "AI-generated UGC at scale", "Grid aesthetic planning"],
        tags: ["Instagram", "Reels", "UGC", "AI"],
        preview: "instagram",
    },
    {
        title: "Meta Ads (Instagram + Facebook)",
        desc: "Full-funnel campaign structure — creatives, A/B testing, audience targeting, and scaling.",
        bullets: ["Dynamic creative testing", "Automated bid optimization", "Cross-platform attribution"],
        tags: ["Meta", "Facebook", "Ads Manager"],
        preview: "meta",
    },
    {
        title: "WordPress & Landing Pages",
        desc: "Campaign landing pages, SEO-optimized content hubs, and blazing-fast WordPress builds.",
        bullets: ["SEO-ready page architecture", "Sub-second load times", "Conversion-optimized layouts"],
        tags: ["WordPress", "SEO", "PageSpeed"],
        preview: "wordpress",
    },
];

// ─── Animated Previews ───────────────────────────────────────

function InstagramPreview() {
    const posts = [
        { likes: "2.4K", comments: "148" },
        { likes: "5.1K", comments: "312" },
        { likes: "1.8K", comments: "96" },
        { likes: "3.7K", comments: "205" },
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            <div className="w-full max-w-[220px] flex flex-col gap-2">
                {/* IG Header bar */}
                <div className="flex items-center gap-2 px-1 mb-1">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-amber-500 flex items-center justify-center">
                        <Instagram className="w-3 h-3 text-white" />
                    </div>
                    <div className="flex-1">
                        <div className="w-16 h-2 bg-zinc-200 dark:bg-white/10 rounded" />
                    </div>
                    <div className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600">LIVE</div>
                </div>

                {/* Stories strip */}
                <div className="flex gap-1.5 mb-1 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            className="w-9 h-9 rounded-full border-2 border-pink-400/40 bg-zinc-100 dark:bg-white/5 flex items-center justify-center flex-shrink-0"
                            animate={{ scale: i === 1 ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                            <div className={`w-6 h-6 rounded-full ${i <= 2 ? 'bg-gradient-to-br from-pink-400/30 to-violet-400/30' : 'bg-zinc-200/50 dark:bg-white/5'}`} />
                        </motion.div>
                    ))}
                </div>

                {/* Feed grid — sliding */}
                <div className="grid grid-cols-2 gap-1.5">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            className="aspect-square rounded-lg bg-zinc-100 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5 relative overflow-hidden group/post"
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 4, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
                        >
                            {/* Gradient fill */}
                            <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-gradient-to-br from-pink-500/10 to-violet-500/10' : 'bg-gradient-to-br from-amber-500/10 to-rose-500/10'}`} />
                            {i === 0 && (
                                <div className="absolute top-1 right-1">
                                    <Play className="w-2.5 h-2.5 text-white/60 fill-white/60" />
                                </div>
                            )}
                            {/* Engagement overlay */}
                            <div className="absolute bottom-1 left-1 flex items-center gap-1.5">
                                <div className="flex items-center gap-0.5">
                                    <Heart className="w-2 h-2 text-pink-400" />
                                    <span className="text-[7px] font-bold text-zinc-500 dark:text-zinc-400">{post.likes}</span>
                                </div>
                                <div className="flex items-center gap-0.5">
                                    <MessageCircle className="w-2 h-2 text-zinc-400" />
                                    <span className="text-[7px] text-zinc-400 dark:text-zinc-500">{post.comments}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function MetaAdsPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-[230px] flex flex-col gap-2">
                {/* KPI Row */}
                <div className="flex gap-2">
                    {[
                        { icon: Eye, val: "1.2M", label: "Impr.", trend: "+18%" },
                        { icon: DollarSign, val: "$0.42", label: "CPC", trend: "-12%" },
                        { icon: TrendingUp, val: "4.8%", label: "CTR", trend: "+6%" },
                    ].map((kpi, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 p-2 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5 text-center"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                        >
                            <kpi.icon className="w-3 h-3 text-zinc-400 dark:text-zinc-600 mx-auto mb-1" />
                            <div className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200">{kpi.val}</div>
                            <div className="text-[8px] text-zinc-400 dark:text-zinc-600 uppercase tracking-wider font-mono">{kpi.label}</div>
                            <div className={`text-[8px] font-bold mt-0.5 ${kpi.trend.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>{kpi.trend}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mini chart */}
                <div className="h-12 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5 p-2 flex items-end gap-0.5 relative overflow-hidden">
                    {/* Chart line */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 48" fill="none" preserveAspectRatio="none">
                        <motion.path
                            d="M0 40 Q25 30, 50 28 T100 20 T150 15 T200 8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-emerald-500/40"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                </div>

                {/* Campaign rows */}
                <div className="space-y-1">
                    {[
                        { name: "Awareness Q1", status: "Active", spend: "$2.4K" },
                        { name: "Retarget Flow", status: "Learning", spend: "$890" },
                    ].map((campaign, i) => (
                        <motion.div
                            key={i}
                            className="flex items-center justify-between px-2.5 py-2 rounded-lg bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5"
                            animate={{ x: [-4, 0, -4] }}
                            transition={{ duration: 5, repeat: Infinity, delay: i * 1.2 }}
                        >
                            <div className="flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${campaign.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">{campaign.name}</span>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-600">{campaign.spend}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function WordPressPreview() {
    return (
        <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-[220px] flex flex-col gap-2">
                {/* Page wireframe */}
                <div className="rounded-xl border border-zinc-200 dark:border-white/[0.06] overflow-hidden bg-white dark:bg-zinc-900/50 shadow-sm">
                    {/* Nav */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-100 dark:border-white/5">
                        <div className="w-10 h-2 bg-zinc-200 dark:bg-white/10 rounded" />
                        <div className="flex gap-1.5">
                            {[1, 2, 3].map(n => (
                                <div key={n} className="w-5 h-1.5 bg-zinc-100 dark:bg-white/5 rounded" />
                            ))}
                        </div>
                    </div>
                    {/* Hero block */}
                    <div className="p-3 space-y-2">
                        <motion.div
                            className="h-8 rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-white/5 dark:to-white/[0.02]"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <div className="flex gap-1.5">
                            <div className="flex-1 h-5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5" />
                            <div className="flex-1 h-5 rounded bg-zinc-50 dark:bg-white/[0.02] border border-zinc-100 dark:border-white/5" />
                        </div>
                        {/* Content lines */}
                        <div className="space-y-1">
                            {[100, 85, 70].map((w, i) => (
                                <motion.div
                                    key={i}
                                    className="h-1.5 bg-zinc-100 dark:bg-white/5 rounded"
                                    style={{ width: `${w}%` }}
                                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Performance strip */}
                <div className="flex gap-2">
                    {[
                        { icon: Gauge, val: "98", label: "Speed" },
                        { icon: Search, val: "A+", label: "SEO" },
                        { icon: Layout, val: "100", label: "CLS" },
                    ].map((metric, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 text-center p-1.5 rounded-lg bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200/60 dark:border-white/5"
                            animate={{ scale: [1, 1.03, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                        >
                            <metric.icon className="w-3 h-3 text-zinc-400 dark:text-zinc-600 mx-auto mb-0.5" />
                            <div className="text-[11px] font-bold text-emerald-500">{metric.val}</div>
                            <div className="text-[7px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest font-mono">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const previewMap: Record<string, () => React.JSX.Element> = {
    instagram: InstagramPreview,
    meta: MetaAdsPreview,
    wordpress: WordPressPreview,
};

// ─── Main Section ────────────────────────────────────────────

export function MarketingChannels() {
    return (
        <section className="py-20 md:py-28 relative bg-white dark:bg-zinc-950 transition-colors overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mb-14 md:mb-20"
                >
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Marketing Channels</h2>
                    <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 dark:text-white mb-4">
                        Create, distribute, optimize.
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Instagram-first strategy backed by Meta Ads infrastructure and SEO-ready web properties.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {channels.map((ch, i) => {
                        const Preview = previewMap[ch.preview];
                        return (
                            <motion.div
                                key={ch.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group relative rounded-2xl border border-zinc-200 dark:border-white/[0.06] bg-white/70 dark:bg-white/[0.02] backdrop-blur-md shadow-sm hover:shadow-xl hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Text */}
                                <div className="p-6 md:p-7 pb-2 md:pb-3 flex flex-col gap-2.5 relative z-10">
                                    <h4 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">{ch.title}</h4>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{ch.desc}</p>

                                    {/* Bullets */}
                                    <ul className="space-y-1 mt-1">
                                        {ch.bullets.map((b) => (
                                            <li key={b} className="flex items-center gap-2 text-[11px] text-zinc-500 dark:text-zinc-500">
                                                <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-1">
                                        {ch.tags.map((tag) => (
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
                                <div className="h-56 md:h-60 relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
                                        style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '14px 14px' }} />
                                    <Preview />
                                </div>

                                {/* Hover glow */}
                                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-pink-500/[0.03] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
