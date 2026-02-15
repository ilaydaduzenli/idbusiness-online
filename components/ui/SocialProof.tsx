"use client";

import { motion } from "framer-motion";
import { Star, BarChart3, Workflow, Palette, Cpu, Activity } from "lucide-react";

const previews = [
    { icon: BarChart3, label: "Analytics", gradient: "from-emerald-500/20 to-teal-500/10" },
    { icon: Workflow, label: "Pipeline", gradient: "from-blue-500/20 to-cyan-500/10" },
    { icon: Palette, label: "Studio", gradient: "from-violet-500/20 to-pink-500/10" },
    { icon: Cpu, label: "Systems", gradient: "from-amber-500/20 to-orange-500/10" },
    { icon: Activity, label: "Metrics", gradient: "from-rose-500/20 to-red-500/10" },
];

export function SocialProof() {
    return (
        <div className="flex flex-col items-center gap-5 py-6">
            {/* Circular UI preview thumbnails */}
            <div className="flex items-center -space-x-2">
                {previews.map((item, i) => (
                    <motion.div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-950 overflow-hidden relative shadow-md"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} bg-zinc-100 dark:bg-zinc-900`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center gap-1.5">
                <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="font-semibold text-zinc-900 dark:text-white">4.9/5</span> trusted by growing brands
                </p>
            </div>
        </div>
    );
}
