import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: "default" | "interactive";
}

export function GlassCard({ children, className, variant = "default", ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-xl transition-all",
                variant === "interactive" && "hover:bg-slate-900/60 hover:border-cyan-500/30 cursor-pointer",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
