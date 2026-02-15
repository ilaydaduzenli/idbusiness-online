"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Download, Phone } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white z-50 relative">
                    idbusiness.co
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-emerald-500 dark:hover:text-emerald-400",
                                pathname === link.href ? "text-zinc-900 dark:text-white" : "text-zinc-500 dark:text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/deck"
                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        title="Download Deck"
                    >
                        <Download className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/contact"
                        className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        title="Book a Call"
                    >
                        <Phone className="w-5 h-5" />
                    </Link>

                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="ml-2 px-5 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-xs font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-500/10 dark:shadow-white/5"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Toggle & Actions */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="z-50 relative text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-0 h-screen bg-white dark:bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-light tracking-tight text-zinc-900 dark:text-white/80 hover:text-emerald-500 dark:hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-6 mt-4">
                            <Link
                                href="/deck"
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400"
                            >
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900">
                                    <Download className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Deck</span>
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col items-center gap-1 text-zinc-500 dark:text-zinc-400"
                            >
                                <div className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-xs">Call</span>
                            </Link>
                        </div>

                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-full mt-4"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
