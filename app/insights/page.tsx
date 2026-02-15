"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
    {
        slug: "post-1",
        title: "The Death of SEO: Why AI Search Changes Everything",
        date: "Feb 10, 2026",
        cat: "Strategy",
        excerpt: "Traditional search engines are dying. Here is how to optimize for LLM discovery."
    },
    {
        slug: "post-2",
        title: "Building Automated Content Factories with Python",
        date: "Feb 02, 2026",
        cat: "Engineering",
        excerpt: "A technical deep dive into our proprietary video generation pipeline."
    },
    {
        slug: "post-3",
        title: "Brand Voice Cloning: Ethics and Implementation",
        date: "Jan 28, 2026",
        cat: "AI Ethics",
        excerpt: "How to safely scale executive presence using voice synthesis models."
    },
    {
        slug: "post-4",
        title: "Next.js 15 Server Actions: A Retrospective",
        date: "Jan 15, 2026",
        cat: "Development",
        excerpt: "Lessons learned migrating a massive e-commerce platform to the app router."
    },
    {
        slug: "post-5",
        title: "Why Minimal Design Wins in the Age of Noise",
        date: "Jan 04, 2026",
        cat: "Design",
        excerpt: "As content volume explodes, visual quiet becomes the ultimate luxury."
    },
    {
        slug: "post-6",
        title: "Automating Influencer Outreach at Scale",
        date: "Dec 12, 2025",
        cat: "Marketing",
        excerpt: "Using agents to negotiate and manage micro-influencer campaigns."
    }
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-24">
            <section className="container mx-auto px-4 lg:px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Insights
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                        Thoughts on the intersection of artificial intelligence, design, and autonomy.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 lg:px-6">
                <div className="grid gap-px bg-white/10 border border-white/10 overflow-hidden rounded-2xl">
                    {posts.map((post, i) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="bg-zinc-950 p-8 lg:p-12 hover:bg-zinc-900/50 transition-colors group cursor-pointer"
                        >
                            <Link href={`#${post.slug}`} className="block">
                                <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                                    <span className="text-xs font-mono text-zinc-500 w-32 flex-shrink-0">{post.date}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-3">
                                            <span className="text-xs uppercase tracking-wide text-emerald-400/80 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                                                {post.cat}
                                            </span>
                                        </div>
                                        <h2 className="text-2xl lg:text-3xl font-medium mb-3 group-hover:text-emerald-400 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-zinc-400 leading-relaxed max-w-2xl">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="md:self-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-2 duration-300">
                                        <ArrowRight className="w-6 h-6 text-emerald-400" />
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </section>
        </main>
    );
}
