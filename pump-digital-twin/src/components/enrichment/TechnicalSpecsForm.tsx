import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { technicalSpecsSchema } from "@/lib/schemas";
import type { TechnicalSpecsFormValues } from "@/lib/schemas";
import { usePumpStore } from "@/store/usePumpStore";
import type { TechnicalSpecs, TestsToPerform, GeneralInfo } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { UnitConverter } from "@/components/enrichment/UnitConverter";
import { Check, Loader2, Wand2, FlaskConical, FileCheck, Droplets, Ruler, Gauge, Settings2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TechnicalSpecsFormProps {
    testId: string;
    generalInfo: GeneralInfo;
    initialValues?: Partial<TechnicalSpecs>;
    initialTests?: TestsToPerform;
    pdfFile: File | null;
}

const TESTS_TO_PERFORM = [
    { key: 'performanceTest', label: 'Perf. Test' },
    { key: 'npsh', label: 'NPSH' },
    { key: 'vibraciones', label: 'Vibraciones' },
    { key: 'ruido', label: 'Ruido' },
    { key: 'mrt1h', label: 'MRT 1h' },
    { key: 'mrt4h', label: 'MRT 4h' },
    { key: 'homologacion', label: 'Homolog.' },
    { key: 'presenciada', label: 'Presenciada' },
    { key: 'motorDelPedido', label: 'Motor Pedido' },
] as const;


export function TechnicalSpecsForm({ testId, generalInfo, initialValues, initialTests, pdfFile }: TechnicalSpecsFormProps) {
    const navigate = useNavigate();
    const { generateTest } = usePumpStore(); // Removed unused updateTest
    const [testsToPerform, setTestsToPerform] = useState<TestsToPerform>(initialTests || {});
    const [isExtracting, setIsExtracting] = useState(false);

    const form = useForm<TechnicalSpecsFormValues>({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolver: zodResolver(technicalSpecsSchema) as any,
        defaultValues: {
            flowRate: initialValues?.flowRate || 0,
            head: initialValues?.head || 0,
            rpm: initialValues?.rpm || 0,
            impellerDiameter: initialValues?.impellerDiameter || 0,
            maxPower: initialValues?.maxPower || 0,
            temperature: initialValues?.temperature || 0,
            viscosity: initialValues?.viscosity || 0,
            density: initialValues?.density || 0,
            npshr: initialValues?.npshr || 0,
            efficiency: initialValues?.efficiency || 0,
            qMin: initialValues?.qMin || 0,
            bepFlow: initialValues?.bepFlow || 0,
            tolerance: initialValues?.tolerance || '',
            sealType: initialValues?.sealType || '',
            suctionDiameter: initialValues?.suctionDiameter || 0,
            dischargeDiameter: initialValues?.dischargeDiameter || 0,
        }
    });

    const onSubmit = async (data: TechnicalSpecsFormValues) => {
        try {
            await generateTest(testId, {
                generalInfo,
                specs: data as unknown as TechnicalSpecs,
                testsToPerform,
            });
            navigate("/");
        } catch (error) {
            console.error("Error generating test", error);
            alert("Error al generar la prueba. Revisa la conexión con el servidor.");
        }
    };

    const handlePdfExtraction = async () => {
        if (!pdfFile) {
            alert("Por favor, selecciona o arrastra un archivo PDF en el visor de la izquierda.");
            return;
        }

        setIsExtracting(true);
        try {
            const { extractSpecsFromPdf } = await import("@/services/pdfExtractionService");

            const specs = await extractSpecsFromPdf(pdfFile);
            console.log("Specs extraídas:", specs);

            if (specs.flowRate) form.setValue("flowRate", specs.flowRate);
            if (specs.head) form.setValue("head", specs.head);
            if (specs.rpm) form.setValue("rpm", specs.rpm);
            if (specs.maxPower) form.setValue("maxPower", specs.maxPower);
            if (specs.efficiency) form.setValue("efficiency", specs.efficiency);
            if (specs.npshr) form.setValue("npshr", specs.npshr);
            if (specs.qMin) form.setValue("qMin", specs.qMin);
            if (specs.bepFlow) form.setValue("bepFlow", specs.bepFlow);

            if (specs.temperature) form.setValue("temperature", specs.temperature);
            if (specs.viscosity) form.setValue("viscosity", specs.viscosity);
            if (specs.density) form.setValue("density", specs.density);

            if (specs.impellerDiameter) form.setValue("impellerDiameter", specs.impellerDiameter);
            if (specs.suctionDiameter) form.setValue("suctionDiameter", specs.suctionDiameter);
            if (specs.dischargeDiameter) form.setValue("dischargeDiameter", specs.dischargeDiameter);

            if (specs.tolerance) form.setValue("tolerance", specs.tolerance);
            if (specs.sealType) form.setValue("sealType", specs.sealType);

            setTestsToPerform(prev => ({
                ...prev,
                performanceTest: true,
                vibraciones: true,
                npsh: !!specs.npshr,
                mrt1h: specs.rpm ? specs.rpm > 2000 : false,
            }));

        } catch (error) {
            console.error("Error extraction:", error);
            alert("Error al leer el PDF. Asegúrate de que contiene texto seleccionable.");
        } finally {
            setIsExtracting(false);
        }
    };

    const toggleTest = (key: string) => {
        setTestsToPerform(prev => ({
            ...prev,
            [key]: !prev[key as keyof TestsToPerform]
        }));
    };

    return (
        <div className="space-y-4">
            {/* Tests to Perform */}
            <GlassCard className="p-4 animate-in slide-in-from-right-2 fade-in duration-300">
                <div className="flex items-center gap-2 mb-2">
                    <FlaskConical className="w-4 h-4 text-cyan-400" />
                    <h2 className="text-sm font-semibold text-white">Pruebas a Realizar</h2>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    {TESTS_TO_PERFORM.map(({ key, label }) => (
                        <label
                            key={key}
                            className={`flex flex-col items-center justify-center gap-1 p-2 rounded border cursor-pointer transition-all text-center h-full ${testsToPerform[key as keyof TestsToPerform]
                                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                                : 'bg-slate-800/30 border-white/5 text-slate-400 hover:border-white/10'
                                }`}
                        >
                            <input
                                type="checkbox"
                                checked={!!testsToPerform[key as keyof TestsToPerform]}
                                onChange={() => toggleTest(key)}
                                className="sr-only"
                            />
                            <div className={`w-3 h-3 rounded-sm border flex items-center justify-center transition-colors ${testsToPerform[key as keyof TestsToPerform]
                                ? 'bg-cyan-500 border-cyan-500'
                                : 'border-slate-500'
                                }`}>
                                {testsToPerform[key as keyof TestsToPerform] && (
                                    <Check className="w-2 h-2 text-white" />
                                )}
                            </div>
                            <span className="text-[10px] sm:text-xs font-medium leading-tight">{label}</span>
                        </label>
                    ))}
                </div>
            </GlassCard>

            {/* Technical Specs Form */}
            <GlassCard className="p-4 animate-in slide-in-from-right-4 fade-in duration-500">
                <div className="flex items-center justify-between mb-3 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-cyan-400" />
                        <h2 className="text-sm font-semibold text-white">Hoja de Datos PDF</h2>
                    </div>
                    <div>
                        <div>
                            <button
                                type="button"
                                onClick={handlePdfExtraction}
                                disabled={isExtracting}
                                className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded text-xs transition-colors"
                            >
                                {isExtracting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wand2 className="w-3 h-3" />}
                                <span>{isExtracting ? 'Analizando...' : 'Analizar PDF Real'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                    {/* Performance */}
                    <div className="space-y-2">
                        <SectionHeader icon={Gauge} title="Performance" />
                        <div className="grid grid-cols-4 gap-2">
                            <FormField label="Caudal" unit="m³/h" error={form.formState.errors.flowRate?.message}>
                                <input {...form.register("flowRate")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                            <FormField label="TDH" unit="m" error={form.formState.errors.head?.message}>
                                <input {...form.register("head")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                            <FormField label="RPM" unit="rpm" error={form.formState.errors.rpm?.message}>
                                <input {...form.register("rpm")} className="input-field-sm" placeholder="0" type="number" />
                            </FormField>
                            <FormField label="Potencia" unit="kW">
                                <input {...form.register("maxPower")} className="input-field-sm" placeholder="0" type="number" step="0.01" />
                            </FormField>

                            <FormField label="Eficiencia" unit="%">
                                <input {...form.register("efficiency")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                            <FormField label="NPSHr" unit="m">
                                <input {...form.register("npshr")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                            <FormField label="Q Min" unit="m³/h">
                                <input {...form.register("qMin")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                            <FormField label="Q BEP" unit="m³/h">
                                <input {...form.register("bepFlow")} className="input-field-sm" placeholder="0" type="number" step="0.1" />
                            </FormField>
                        </div>
                    </div>

                    {/* Fluid & Construction */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <SectionHeader icon={Droplets} title="Fluido" />
                            <div className="grid grid-cols-2 gap-2">
                                <FormField label="Temp." unit="°C">
                                    <input {...form.register("temperature")} className="input-field-sm" placeholder="0" type="number" />
                                </FormField>
                                <FormField label="Densidad" unit="kg/m³">
                                    <input {...form.register("density")} className="input-field-sm" placeholder="0" type="number" />
                                </FormField>
                                <FormField label="Viscosidad" unit="cP">
                                    <input {...form.register("viscosity")} className="input-field-sm" placeholder="0" type="number" step="0.01" />
                                </FormField>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <SectionHeader icon={Ruler} title="Construcción" />
                            <div className="grid grid-cols-2 gap-2">
                                <FormField label="D. Impulsor" unit="mm">
                                    <input {...form.register("impellerDiameter")} className="input-field-sm" placeholder="0" type="number" />
                                </FormField>
                                <FormField label="Aspiración" unit="mm">
                                    <input {...form.register("suctionDiameter")} className="input-field-sm" placeholder="0" type="number" />
                                </FormField>
                                <FormField label="Descarga" unit="mm">
                                    <input {...form.register("dischargeDiameter")} className="input-field-sm" placeholder="0" type="number" />
                                </FormField>
                            </div>
                        </div>
                    </div>

                    {/* Other */}
                    <div className="space-y-2">
                        <SectionHeader icon={Settings2} title="Otros" />
                        <div className="grid grid-cols-2 gap-2">
                            <FormField label="Tolerancia">
                                <input {...form.register("tolerance")} className="input-field-sm" placeholder="Ej: Grade 1B" />
                            </FormField>
                            <FormField label="Tipo Cierre">
                                <input {...form.register("sealType")} className="input-field-sm" placeholder="Ej: Single Seal" />
                            </FormField>
                        </div>
                    </div>

                    <div className="pt-3 border-t border-white/5">
                        <button
                            type="submit"
                            className="w-full py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded text-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                        >
                            <Check className="w-4 h-4" />
                            VALIDAR DATOS Y GENERAR PRUEBA
                        </button>
                    </div>
                </form>

                {/* Helper Widget */}
                <div className="mt-4 pt-3 border-t border-white/5">
                    <UnitConverter />
                </div>
            </GlassCard>
        </div>
    );
}

function SectionHeader({ icon: Icon, title }: { icon: React.ElementType, title: string }) {
    return (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-1">
            <Icon className="w-3 h-3 text-cyan-500" />
            <span>{title}</span>
        </div>
    );
}

function FormField({ label, unit, error, children }: { label: string; unit?: string; error?: string; children: React.ReactNode }) {
    return (
        <div className="space-y-0.5">
            <label className="text-[10px] font-bold text-slate-400 truncate block uppercase tracking-wider" title={label}>{label}</label>
            <div className="relative group">
                {children}
                {unit && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500/70 text-xs font-mono font-bold pointer-events-none group-focus-within:text-cyan-400 transition-colors">
                        {unit}
                    </div>
                )}
            </div>
            {error && <p className="text-[10px] text-red-400 leading-none">{error}</p>}
        </div>
    );
}
