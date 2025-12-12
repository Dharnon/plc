import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { usePumpStore } from "@/store/usePumpStore";
import { PDFViewerPlaceholder } from "@/components/enrichment/PDFViewerPlaceholder";
import { TechnicalSpecsForm } from "@/components/enrichment/TechnicalSpecsForm";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowLeft, ChevronRight, FileText, SearchX } from "lucide-react";

export default function TestDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const test = usePumpStore(s => s.tests.find(t => t.id === id));

    if (!test) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-500 bg-background">
                <div className="text-center space-y-4">
                    <SearchX className="w-16 h-16 mx-auto opacity-50" />
                    <p>Prueba no encontrada</p>
                    <button onClick={() => navigate("/")} className="text-cyan-400 hover:underline">
                        Volver al Dashboard
                    </button>
                </div>
            </div>
        );
    }

    const { generalInfo } = test;

    const [pdfFile, setPdfFile] = useState<File | null>(null);

    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col bg-background">
            {/* Top Navigation Bar */}
            <div className="h-14 border-b border-white/5 bg-slate-900/50 backdrop-blur flex items-center px-6 justify-between shrink-0 z-50">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-slate-500">Dashboard</span>
                        <ChevronRight className="w-4 h-4 text-slate-700" />
                        <span className="text-slate-300 font-medium">{generalInfo.cliente}</span>
                        <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-500 text-xs font-mono">
                            {generalInfo.pedido}-{generalInfo.posicion}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <StatusBadge status={test.status} />
                </div>
            </div>

            {/* Main Split Layout */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left: PDF Context ONLY */}
                <div className="w-1/2 h-full border-r border-white/5 bg-slate-900/20 flex flex-col">
                    <div className="flex-1 overflow-hidden">
                        <PDFViewerPlaceholder file={pdfFile} onFileSelect={setPdfFile} />
                    </div>
                </div>

                {/* Right: General Info + Technical Specs Form */}
                <div className="w-1/2 h-full bg-background relative z-10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] overflow-y-auto p-4 space-y-4">
                    {/* General Info Panel - Compact */}
                    <GlassCard className="p-4 animate-in slide-in-from-right-1 fade-in duration-300 bg-slate-800/40">
                        <div className="flex items-center gap-2 mb-3">
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <h2 className="text-sm font-semibold text-white">Información General</h2>
                            <span className="text-[10px] text-slate-500 ml-auto bg-slate-900/50 px-2 py-0.5 rounded border border-white/5">CSV</span>
                        </div>

                        <div className="grid grid-cols-4 gap-x-4 gap-y-2">
                            <InfoField label="Pedido" value={generalInfo.pedido} highlight />
                            <InfoField label="Posición" value={generalInfo.posicion} />
                            <InfoField label="Nº Bombas" value={String(generalInfo.numeroBombas)} highlight />
                            <InfoField label="Fecha" value={new Date().toLocaleDateString('es-ES')} />

                            <InfoField label="Cliente" value={generalInfo.cliente} className="col-span-2" />
                            <InfoField label="Modelo" value={generalInfo.modeloBomba} className="col-span-2" />

                            <InfoField label="Orden Trabajo" value={generalInfo.ordenTrabajo} />
                            <InfoField label="ITEM" value={generalInfo.item || '-'} />
                            <InfoField label="Ped. Cliente" value={generalInfo.pedidoCliente || '-'} />
                        </div>
                    </GlassCard>

                    {/* Forms */}
                    <TechnicalSpecsForm
                        testId={test.id}
                        initialValues={test.specs}
                        initialTests={test.testsToPerform}
                        pdfFile={pdfFile}
                    />
                </div>
            </div>
        </div>
    );
}

function InfoField({ label, value, highlight, className }: { label: string; value: string; highlight?: boolean; className?: string }) {
    return (
        <div className={className}>
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{label}</div>
            <div className={`text-sm font-medium ${highlight ? 'text-cyan-400 font-mono' : 'text-white'}`}>
                {value || '-'}
            </div>
        </div>
    );
}
