"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const advantages = [
    "Realistic AI Generation",
    "Brand Accuracy & Safety",
    "End-to-End Automated Systems",
    "Global Client Scalability",
    "Premium Design Execution"
];

export function WhyUs() {
    return (
        <section className="py-24 relative container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-zinc-500 font-medium tracking-widest text-sm mb-4 uppercase">Why idbusiness</h2>
                    <h3 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8">
                        We don't just generate.<br />
                        We engineer perfection.
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                        Most agencies offer tools. We offer a complete, autonomous digital ecosystem tailored to your brand's DNA.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {advantages.map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                        >
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-xl font-light tracking-wide">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
