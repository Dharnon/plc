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
            <header className="flex items-center justify-between px-6 py-4 border-b bg-background/50 backdrop-blur-sm shrink-0">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 -ml-2 text-muted-foreground hover:text-foreground" onClick={() => router.push("/supervisor")}>
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Pruebas</span>
                            <ChevronRight className="w-3 h-3" />
                            <span>{test.generalInfo.pedido}</span>
                        </div>
                        <h1 className="text-xl font-semibold tracking-tight">{test.generalInfo.cliente}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <StatusBadge status={test.status} />
                    <Button
                        onClick={handleSave}
                        disabled={saving || test.status === "SIN_PROCESAR"}
                        size="sm"
                        className={test.status === "GENERADO" ? "hidden" : "bg-primary text-primary-foreground shadow-sm"}
                    >
                        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <CheckCircle2 className="w-4 h-4 mr-2" />}
                        Finalizar Prueba
                    </Button>
                </div>
            </header>

            {/* Resizable Content Split */}
            <div className="flex-1 min-h-0">
                <ResizablePanelGroup direction="horizontal">

                    {/* PDF Area - Minimalist & Resizable */}
                    <ResizablePanel defaultSize={45} minSize={30} className="relative flex flex-col bg-muted/10">
                        {pdfUrl ? (
                            <>
                                <div className="absolute top-4 right-4 z-10 flex gap-2">
                                    <Button size="sm" variant="secondary" className="shadow-sm opacity-90 hover:opacity-100" onClick={() => document.getElementById('pdf-upload')?.click()}>
                                        <RefreshCw className="w-3.5 h-3.5 mr-2" />
                                        Cambiar PDF
                                    </Button>
                                </div>
                                <iframe src={pdfUrl} className="w-full h-full border-none" title="PDF Preview" />
                            </>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-muted/5">
                                <div
                                    className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6 cursor-pointer hover:bg-muted/80 transition-colors"
                                    onClick={() => document.getElementById('pdf-upload')?.click()}
                                >
                                    <Upload className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-medium mb-2">Sube la Hoja de Datos</h3>
                                <p className="text-sm text-muted-foreground max-w-xs mb-6">
                                    Carga el PDF para extraer automáticamente los parámetros de la bomba.
                                </p>
                                <Button variant="outline" onClick={() => document.getElementById('pdf-upload')?.click()}>
                                    Seleccionar Archivo
                                </Button>
                            </div>
                        )}
                        <input type="file" id="pdf-upload" className="hidden" accept=".pdf" onChange={handleFileUpload} />
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    {/* Right Panel - Clean Data View */}
                    <ResizablePanel defaultSize={55} minSize={30} className="bg-background/50 backdrop-blur-sm">
                        <ScrollArea className="h-full">
                            <div className="p-6 md:p-8 space-y-10">

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
                                            className="h-7 text-xs"
                                            onClick={handleAnalyze}
                                            disabled={!pdfFile || extracting}
                                        >
                                            {extracting ? <Loader2 className="w-3 h-3 mr-2 animate-spin" /> : <Search className="w-3 h-3 mr-2" />}
                                            {extracting ? "Analizando..." : "Auto-Extraer"}
                                        </Button>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
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
                                        <h4 className="text-xs font-medium text-muted-foreground">Construcción y Fluido</h4>
                                        <div className="grid grid-cols-2 gap-4">
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
                                        </div>
                                        <div className="pt-2">
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
