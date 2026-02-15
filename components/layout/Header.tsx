"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

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
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tighter text-white z-50 relative">
                    idbusiness.co
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-white",
                                pathname === link.href ? "text-white" : "text-zinc-400"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="px-5 py-2 bg-white text-black text-xs font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 relative text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Nav Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute inset-0 top-0 h-screen bg-zinc-950 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-light tracking-tight text-white/80 hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full mt-4"
                        >
                            Start Project
                        </Link>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
