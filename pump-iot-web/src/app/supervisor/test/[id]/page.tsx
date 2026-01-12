"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Upload,
    Loader2,
    CheckCircle2,
    ChevronRight,
    Search,
    FileText,
    Activity,
    Zap,
    RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from "@/components/ui/resizable";
import { toast } from "sonner";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";

interface TestDetail {
    id: string;
    status: "SIN_PROCESAR" | "EN_PROCESO" | "GENERADO";
    generalInfo: {
        pedido: string;
        posicion?: string;
        cliente: string;
        modeloBomba?: string;
        ordenTrabajo?: string;
        numeroBombas: number;
        fecha?: string;
    };
    pdfData?: any;
    testsToPerform?: any;
}

export default function TestDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [test, setTest] = useState<TestDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [extracting, setExtracting] = useState(false);
    const [saving, setSaving] = useState(false);
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file && file.type === "application/pdf") {
            setPdfFile(file);
            setPdfUrl(URL.createObjectURL(file));
            toast.info("Documento cargado");
        } else if (file) {
            toast.error("Por favor sube un archivo PDF válido");
        }
    };

    const fetchTest = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:4000/api/tests/${params.id}`);
            if (!response.ok) throw new Error("Test not found");
            const data = await response.json();
            setTest(data);
        } catch (error) {
            console.error("Error fetching test:", error);
            toast.error("No se pudo cargar la prueba");
        } finally {
            setLoading(false);
        }
    }, [params.id]);

    useEffect(() => {
        if (params.id) {
            fetchTest();
        }
    }, [params.id, fetchTest]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type === "application/pdf") {
            setPdfFile(file);
            setPdfUrl(URL.createObjectURL(file));
            toast.info("Documento cargado");
        }
    };

    const handleAnalyze = async () => {
        if (!pdfFile) return;
        setExtracting(true);
        try {
            const formData = new FormData();
            formData.append("file", pdfFile);

            const response = await fetch("http://localhost:4000/api/extract-pdf", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Error en extracción");
            const result = await response.json();

            setTest(prev => {
                if (!prev) return null;
                return { ...prev, pdfData: result.data, status: "EN_PROCESO" };
            });
            toast.success("Datos extraídos correctamente");
        } catch (error) {
            console.error(error);
            toast.error("Error al analizar el PDF");
        } finally {
            setExtracting(false);
        }
    };

    const handleSave = async () => {
        if (!test) return;
        setSaving(true);
        try {
            const response = await fetch(`http://localhost:4000/api/tests/${test.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...test, status: "GENERADO" })
            });

            if (!response.ok) throw new Error("Error al guardar");
            toast.success("Prueba generada exitosamente");
            router.push("/supervisor");
        } catch (error) {
            console.error(error);
            toast.error("Error guardando datos");
        } finally {
            setSaving(false);
        }
    };

    const handlePdfDataChange = (field: string, value: string) => {
        setTest((prev) => {
            if (!prev) return null;
            return {
                ...prev,
                pdfData: {
                    ...prev.pdfData,
                    [field]: value
                }
            };
        });
    };

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (!test) {
        return (
            <div className="h-full flex items-center justify-center p-6">
                <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="icon"><FileText /></EmptyMedia>
                        <EmptyTitle>Prueba no encontrada</EmptyTitle>
                        <EmptyDescription>El registro solicitado no existe.</EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button onClick={() => router.push("/supervisor")}>Volver</Button>
                    </EmptyContent>
                </Empty>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col overflow-hidden bg-background">
            {/* Minimal Header */}
            <header className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-4 border-b bg-background/50 backdrop-blur-sm shrink-0 gap-4">
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <Button variant="ghost" size="icon" className="h-8 w-8 -ml-2 text-muted-foreground hover:text-foreground shrink-0" onClick={() => router.push("/supervisor")}>
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div className="min-w-0 overflow-hidden">
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium overflow-hidden">
                            <span className="truncate">Pruebas</span>
                            <ChevronRight className="w-3 h-3 shrink-0" />
                            <span className="truncate">{test.generalInfo.pedido}</span>
                        </div>
                        <h1 className="text-lg sm:text-xl font-bold tracking-tight text-foreground truncate" title={test.generalInfo.cliente}>
                            {test.generalInfo.cliente}
                        </h1>
                    </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                    <StatusBadge status={test.status} />
                    <Button
                        onClick={handleSave}
                        disabled={saving || test.status === "SIN_PROCESAR"}
                        size="sm"
                        className={test.status === "GENERADO" ? "hidden" : "bg-red-600 hover:bg-red-700 text-white shadow-md active:scale-95 transition-all text-xs font-semibold px-4 h-9"}
                    >
                        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
                        Finalizar Prueba
                    </Button>
                </div>
            </header>

            {/* Resizable Content Split */}
            <div className="flex-1 min-h-0 bg-slate-50/30">
                <ResizablePanelGroup direction={isMobile ? "vertical" : "horizontal"} key={isMobile ? "v" : "h"}>

                    {/* PDF Area - Minimalist & Resizable */}
                    <ResizablePanel defaultSize={45} minSize={30} className="relative flex flex-col bg-background transition-colors">
                        {pdfUrl ? (
                            <div className="flex-1 flex flex-col min-h-0">
                                {/* PDF Header - Full Width */}
                                <div className="flex flex-row items-center justify-between px-4 sm:px-6 py-3 sm:py-4 bg-background border-b shrink-0 gap-3">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center shrink-0">
                                            <FileText className="w-4 h-4 text-red-500" />
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider leading-none mb-1">Visualizando archivo</span>
                                            <span className="text-xs sm:text-sm font-semibold text-foreground truncate max-w-[200px] sm:max-w-[300px]" title={pdfFile?.name}>
                                                {pdfFile?.name}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 justify-end">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="h-8 py-0 px-3 text-[11px] font-semibold border-slate-200 hover:bg-slate-50 hover:text-red-600 transition-colors shadow-sm whitespace-nowrap"
                                            onClick={() => document.getElementById('pdf-upload')?.click()}
                                        >
                                            <RefreshCw className="w-3.5 h-3.5 mr-2" />
                                            Cambiar PDF
                                        </Button>
                                    </div>
                                </div>
                                {/* PDF Content - Full Width */}
                                <iframe src={pdfUrl} className="flex-1 w-full border-none bg-muted/20" title="PDF Preview" />
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col p-4 sm:p-8">
                                <div
                                    className={`
                                        flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-xl transition-all duration-200 select-none min-h-[300px]
                                        ${isDragging ? "border-red-400 bg-red-50/30" : "border-slate-200 hover:border-red-200 hover:bg-slate-50/50"}
                                    `}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-50 flex items-center justify-center mb-4 sm:mb-6">
                                        <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 px-4 text-center">Sube un reporte PDF</h3>
                                    <p className="text-sm sm:text-base text-slate-500 max-w-sm text-center mb-6 sm:mb-8 leading-relaxed px-6">
                                        Visualiza el reporte y extrae datos automáticamente.
                                    </p>
                                    <Button
                                        className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-4 sm:py-5 h-auto text-sm sm:text-base rounded-lg shadow-md hover:shadow-lg transition-all font-semibold"
                                        onClick={() => document.getElementById('pdf-upload')?.click()}
                                    >
                                        <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Seleccionar PDF
                                    </Button>
                                </div>
                            </div>
                        )}
                        <input type="file" id="pdf-upload" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Right Panel - Clean Data View */}
                    <ResizablePanel defaultSize={55} minSize={30} className="bg-background/50 backdrop-blur-sm">
                        <ScrollArea className="h-full">
                            <div className="p-6 md:p-8 space-y-8">

                                {/* Section 1: Info (Read Only) */}
                                <section className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                        <FileText className="w-4 h-4" />
                                        Detalles del Proyecto
                                    </h3>
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <InfoField label="Pedido" value={test.generalInfo.pedido} />
                                        <InfoField label="Posición" value={test.generalInfo.posicion || "3000"} />
                                        <InfoField label="Modelo" value={test.generalInfo.modeloBomba || "-"} className="col-span-2" />
                                        <InfoField label="Cantidad" value={`${test.generalInfo.numeroBombas} Unidades`} />
                                        <InfoField label="Orden Trabajo" value={test.generalInfo.ordenTrabajo || "-"} />
                                    </div>
                                </section>

                                <Separator />

                                {/* Section 2: Tests (Chips) */}
                                <section className="space-y-4">
                                    <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                        <Activity className="w-4 h-4" />
                                        pruebas requeridas
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        <ScopeChip label="Performance" active />
                                        <ScopeChip label="NPSH" />
                                        <ScopeChip label="Vibraciones" />
                                        <ScopeChip label="Ruido" />
                                        <ScopeChip label="MRT 1h" active />
                                        <ScopeChip label="MRT 4h" />
                                        <ScopeChip label="Homolog." />
                                    </div>
                                </section>

                                <Separator />

                                {/* Section 3: Extraction (Interactive & Editable) */}
                                <section className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                            <Zap className="w-4 h-4" />
                                            Parámetros Hidráulicos
                                        </h3>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="h-7 text-[10px] px-2"
                                            onClick={handleAnalyze}
                                            disabled={!pdfFile || extracting}
                                        >
                                            {extracting ? <Loader2 className="w-3 h-3 mr-1.5 animate-spin" /> : <Search className="w-3 h-3 mr-1.5" />}
                                            {extracting ? "Analizando..." : "Auto-Extraer"}
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-6 gap-y-4">
                                        <CleanInput
                                            label="Caudal"
                                            value={test.pdfData?.flowRate}
                                            unit="m³/h"
                                            onChange={(val) => handlePdfDataChange("flowRate", val)}
                                        />
                                        <CleanInput
                                            label="TDH"
                                            value={test.pdfData?.head}
                                            unit="m"
                                            onChange={(val) => handlePdfDataChange("head", val)}
                                        />
                                        <CleanInput
                                            label="RPM"
                                            value={test.pdfData?.rpm}
                                            unit="rpm"
                                            onChange={(val) => handlePdfDataChange("rpm", val)}
                                        />
                                        <CleanInput
                                            label="Eficiencia"
                                            value={test.pdfData?.efficiency}
                                            unit="%"
                                            onChange={(val) => handlePdfDataChange("efficiency", val)}
                                        />
                                        <CleanInput
                                            label="Potencia"
                                            value={test.pdfData?.maxPower}
                                            unit="kW"
                                            onChange={(val) => handlePdfDataChange("maxPower", val)}
                                        />
                                        <CleanInput
                                            label="NPSHr"
                                            value={test.pdfData?.npshr}
                                            unit="m"
                                            onChange={(val) => handlePdfDataChange("npshr", val)}
                                        />
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-tight">Construcción y Fluido</h4>
                                        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-x-6 gap-y-4">
                                            <CleanInput
                                                label="D. Impulsor"
                                                value={test.pdfData?.impellerDiameter}
                                                unit="mm"
                                                onChange={(val) => handlePdfDataChange("impellerDiameter", val)}
                                            />
                                            <CleanInput
                                                label="Viscosidad"
                                                value={test.pdfData?.viscosity}
                                                unit="cP"
                                                onChange={(val) => handlePdfDataChange("viscosity", val)}
                                            />
                                            <CleanInput
                                                label="Densidad"
                                                value={test.pdfData?.density}
                                                unit="kg/m³"
                                                onChange={(val) => handlePdfDataChange("density", val)}
                                            />
                                            <CleanInput
                                                label="Temperatura"
                                                value={test.pdfData?.temperature}
                                                unit="°C"
                                                onChange={(val) => handlePdfDataChange("temperature", val)}
                                            />
                                            <CleanInput
                                                label="Tipo de Sello"
                                                value={test.pdfData?.sealType}
                                                onChange={(val) => handlePdfDataChange("sealType", val)}
                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </ScrollArea>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}

// Minimal Components

function StatusBadge({ status }: { status: string }) {
    const styles = {
        SIN_PROCESAR: "bg-slate-100 text-slate-500 hover:bg-slate-100 border-slate-200",
        EN_PROCESO: "bg-blue-50 text-blue-600 hover:bg-blue-50 border-blue-200",
        GENERADO: "bg-green-50 text-green-600 hover:bg-green-50 border-green-200",
    };
    return (
        <Badge variant="outline" className={`${styles[status as keyof typeof styles]} border px-3 py-1 font-normal`}>
            {status.replace("_", " ")}
        </Badge>
    );
}

function InfoField({ label, value, className = "" }: { label: string, value: string | number, className?: string }) {
    return (
        <div className={className}>
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="font-medium text-sm text-foreground break-words">{value}</p>
        </div>
    );
}

function ScopeChip({ label, active = false }: { label: string, active?: boolean }) {
    return (
        <div className={`
            px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-default
            ${active
                ? "bg-primary/10 text-primary border-primary/20"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted"}
        `}>
            {label}
        </div>
    );
}

function CleanInput({ label, value, unit, onChange }: { label: string, value: any, unit?: string, onChange?: (val: string) => void }) {
    return (
        <div className="space-y-1.5">
            <div className="flex justify-between">
                <label className="text-xs text-muted-foreground">{label}</label>
            </div>
            <div className="relative">
                <Input
                    disabled={!onChange}
                    value={value ?? ""}
                    onChange={(e) => onChange && onChange(e.target.value)}
                    placeholder="-"
                    className="h-9 bg-muted/40 border-transparent hover:bg-muted/60 focus:bg-background focus:border-input transition-all pr-12 font-medium"
                />
                {unit && (
                    <span className="absolute right-3 top-2.5 text-xs text-muted-foreground font-medium pointer-events-none">
                        {unit}
                    </span>
                )}
            </div>
        </div>
    );
}
