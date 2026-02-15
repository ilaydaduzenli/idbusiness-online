"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-16 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-zinc-950 transition-colors">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-4">idbusiness.co</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed">
                            A creative technology studio building intelligent systems, automated content engines, and premium digital experiences.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">Explore</h5>
                        <div className="flex flex-col gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                            <Link href="/work" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Work</Link>
                            <Link href="/services" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-zinc-900 dark:hover:text-white transition-colors">About</Link>
                            <Link href="/insights" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Insights</Link>
                        </div>
                    </div>

                    {/* Legal / Social */}
                    <div>
                        <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">Connect</h5>
                        <div className="flex gap-4 text-zinc-500 dark:text-zinc-400 mb-6">
                            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        </div>
                        <div className="flex flex-col gap-2 text-xs text-zinc-400 dark:text-zinc-600">
                            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-zinc-600">
                    <p>© 2026 idbusiness. All rights reserved.</p>
                    <p>Designed across dimensions.</p>
                </div>
            </div>
        </footer>
    );
}
