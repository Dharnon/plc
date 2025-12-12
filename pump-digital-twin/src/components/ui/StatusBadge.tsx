import { cn } from "@/lib/utils";
import type { TestStatus } from "@/types";
import { CircleDashed, CheckCircle2, AlertCircle, Cpu } from "lucide-react";

interface StatusBadgeProps {
    status: TestStatus;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const config = {
        PENDING_PDF: {
            label: "SIN PROCESAR",
            color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
            icon: CircleDashed,
        },
        GENERATED: {
            label: "GENERADO",
            color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
            icon: Cpu,
        },
        COMPLETED_OK: {
            label: "OK",
            color: "bg-green-500/10 text-green-400 border-green-500/20",
            icon: CheckCircle2,
        },
        COMPLETED_NOK: {
            label: "NOK",
            color: "bg-red-500/10 text-red-400 border-red-500/20",
            icon: AlertCircle,
        },
    };

    const { label, color, icon: Icon } = config[status];

    return (
        <div
            className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border uppercase tracking-wider",
                color,
                className
            )}
        >
            <Icon className="w-3.5 h-3.5" />
            {label}
        </div>
    );
}
