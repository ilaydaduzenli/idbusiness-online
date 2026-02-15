"use client";

import { motion } from "framer-motion";
import { Contact } from "@/components/Contact"; // Reusing the existing Contact component
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-zinc-950 text-white pt-24 pb-24">
            <section className="container mx-auto px-4 lg:px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Start your<br />
                        <span className="text-zinc-500">transformation.</span>
                    </h1>
                </motion.div>
            </section>

            {/* Contact Info Strip */}
            <section className="container mx-auto px-4 lg:px-6 mb-12">
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-zinc-400">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Email</span>
                            <span className="text-white">hello@idbusiness.co</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                            <MapPin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Studio</span>
                            <span className="text-white">New York / London</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reuse Existing Contact Form Component */}
            {/* We pass a prop or wrap it to ensure it fits the page context if needed, but here it fits well directly */}
            <div id="form">
                <Contact />
            </div>
        </main>
    );
}
