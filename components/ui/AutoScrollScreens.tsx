"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AutoScrollScreensProps {
    children: ReactNode;
    className?: string;
    speed?: "slow" | "medium" | "fast";
    direction?: "vertical" | "horizontal";
}

export function AutoScrollScreens({
    children,
    className,
    speed = "slow",
    direction = "vertical"
}: AutoScrollScreensProps) {

    const speeds = {
        slow: "60s",
        medium: "40s",
        fast: "20s"
    };

    const animationClass = direction === "vertical" ? "animate-scroll-y" : "animate-scroll-x";

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-zinc-100 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 to-transparent z-10 pointer-events-none" />

            <div
                className={cn("flex", direction === "vertical" ? "flex-col" : "flex-row")}
                style={{ "--duration": speeds[speed] } as any}
            >
                {/* First set */}
                <div className={cn(
                    "flex shrink-0",
                    direction === "vertical" ? "flex-col gap-6" : "flex-row gap-6",
                    animationClass
                )}>
                    {children}
                </div>
                {/* Duplicate set for loop */}
                <div className={cn(
                    "flex shrink-0",
                    direction === "vertical" ? "flex-col gap-6 pt-6" : "flex-row gap-6 pl-6",
                    animationClass
                )}
                    aria-hidden="true"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
