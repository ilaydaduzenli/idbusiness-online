"use client";

import { motion } from "framer-motion";

export function AbstractScreen({ index }: { index: number }) {
    // Variations for "Abstract UI" using simple blocks
    const variant = index % 3;

    return (
        <motion.div
            className="glass-card w-full h-[400px] rounded-xl overflow-hidden relative border border-white/5 p-6 flex flex-col gap-4"
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.02, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* Header Mock */}
            <div className="flex items-center justify-between mb-2">
                <div className="w-1/3 h-3 bg-white/10 rounded-full" />
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400/20" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/20" />
                    <div className="w-2 h-2 rounded-full bg-green-400/20" />
                </div>
            </div>

            {variant === 0 && (
                <>
                    <div className="flex gap-4 h-full">
                        <div className="w-1/4 h-full bg-white/5 rounded-lg" />
                        <div className="w-3/4 flex flex-col gap-3">
                            <div className="w-full h-32 bg-white/5 rounded-lg" />
                            <div className="w-full h-12 bg-white/5 rounded-lg" />
                            <div className="w-1/2 h-8 bg-white/5 rounded-lg" />
                        </div>
                    </div>
                </>
            )}

            {variant === 1 && (
                <>
                    <div className="grid grid-cols-2 gap-4 h-full">
                        <div className="bg-white/5 rounded-lg col-span-2 h-40" />
                        <div className="bg-white/5 rounded-lg h-full" />
                        <div className="bg-white/5 rounded-lg h-full" />
                    </div>
                </>
            )}

            {variant === 2 && (
                <>
                    <div className="flex flex-col gap-2 h-full justify-center items-center">
                        <div className="w-24 h-24 rounded-full border-2 border-white/10 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/5" />
                        </div>
                        <div className="w-32 h-4 bg-white/10 rounded-full mt-4" />
                        <div className="w-24 h-3 bg-white/5 rounded-full" />
                    </div>
                </>
            )}

            {/* Subtle overlay reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
        </motion.div>
    );
}
