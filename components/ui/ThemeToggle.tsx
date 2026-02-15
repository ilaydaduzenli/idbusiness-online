"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className={cn("w-9 h-9 flex items-center justify-center rounded-full border border-white/5 bg-white/5", className)}>
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
                "relative w-9 h-9 flex items-center justify-center rounded-full border transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800",
                theme === "dark"
                    ? "border-white/10 bg-white/5 text-white"
                    : "border-zinc-200 bg-white text-zinc-900",
                className
            )}
            aria-label="Toggle theme"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </button>
    );
}
