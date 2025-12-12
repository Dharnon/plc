import { cn } from "@/lib/utils";

interface ProgressBarProps {
    value: number; // 0 to 100
    className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
    return (
        <div className={cn("h-1.5 w-full bg-slate-800 rounded-full overflow-hidden", className)}>
            <div
                className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] transition-all duration-500 ease-out"
                style={{ width: `${value}%` }}
            />
        </div>
    );
}
