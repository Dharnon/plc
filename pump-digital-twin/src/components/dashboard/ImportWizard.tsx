import { useState, useCallback } from 'react';
import { excelService } from '@/services/excelService';
import { usePumpStore } from '@/store/usePumpStore';
import { GlassCard } from '@/components/ui/GlassCard';
import { Upload, FileSpreadsheet, ArrowRight, Loader2, X } from 'lucide-react';
import * as XLSX from 'xlsx';

export function ImportWizard() {
    const [step, setStep] = useState<'IDLE' | 'SHEET_SELECTION' | 'PROCESSING'>('IDLE');
    const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null);
    const [sheets, setSheets] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const addTests = usePumpStore((state) => state.addTests);

    const processFile = async (file: File) => {
        setStep('PROCESSING');
        try {
            const wb = await excelService.readWorkbook(file);
            const sheetNames = excelService.getWorksheetNames(wb);

            setWorkbook(wb);
            setSheets(sheetNames);

            // If only one sheet, auto-select it
            if (sheetNames.length === 1) {
                handleSheetSelect(sheetNames[0], wb);
            } else {
                setStep('SHEET_SELECTION');
            }
        } catch (err) {
            console.error("Error reading file", err);
            setStep('IDLE');
        }
    };

    const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        await processFile(e.target.files[0]);
    };

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            const validTypes = ['.xlsx', '.xls', '.csv'];
            const isValid = validTypes.some(ext => file.name.toLowerCase().endsWith(ext));
            if (isValid) {
                await processFile(file);
            } else {
                console.error("Invalid file type");
            }
        }
    }, []);

    const handleSheetSelect = (sheetName: string, wb?: XLSX.WorkBook) => {
        const activeWorkbook = wb || workbook;
        if (!activeWorkbook) return;
        setStep('PROCESSING');

        setTimeout(() => {
            const tests = excelService.parseSheet(activeWorkbook, sheetName);
            addTests(tests);
            setStep('IDLE');
            setWorkbook(null);
            setSheets([]);
        }, 300);
    };

    const cancelSelection = () => {
        setStep('IDLE');
        setWorkbook(null);
        setSheets([]);
    };

    if (step === 'SHEET_SELECTION') {
        return (
            <GlassCard className="p-6 w-full space-y-4 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-cyan-400">
                        <FileSpreadsheet className="w-6 h-6" />
                        <h3 className="text-lg font-semibold">Selecciona la Hoja</h3>
                    </div>
                    <button onClick={cancelSelection} className="p-1 hover:bg-white/10 rounded">
                        <X className="w-4 h-4 text-slate-400" />
                    </button>
                </div>
                <p className="text-sm text-slate-400">
                    El archivo tiene {sheets.length} pestañas. ¿Cuál contiene la planificación?
                </p>
                <div className="grid gap-2 max-h-48 overflow-y-auto">
                    {sheets.map((sheet) => (
                        <button
                            key={sheet}
                            onClick={() => handleSheetSelect(sheet)}
                            className="px-4 py-3 text-left bg-slate-800/50 hover:bg-slate-700 hover:text-cyan-400 border border-white/5 rounded-lg transition-colors flex items-center justify-between group"
                        >
                            <span className="text-sm font-medium truncate">{sheet}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        </button>
                    ))}
                </div>
            </GlassCard>
        );
    }

    return (
        <GlassCard
            className={`p-1 group relative overflow-hidden transition-all ${isDragging ? 'border-cyan-500 bg-cyan-500/10' : 'hover:border-cyan-500/30'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label className="flex flex-col items-center justify-center p-6 cursor-pointer border-2 border-dashed border-white/10 rounded-lg hover:bg-slate-800/50 transition-colors min-h-[120px]">
                {step === 'PROCESSING' ? (
                    <Loader2 className="w-8 h-8 text-cyan-500 animate-spin mb-2" />
                ) : (
                    <Upload className={`w-8 h-8 mb-2 transition-colors ${isDragging ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'}`} />
                )}
                <span className={`text-sm font-medium transition-colors ${isDragging ? 'text-cyan-300' : 'text-slate-300 group-hover:text-cyan-300'}`}>
                    {step === 'PROCESSING' ? 'Procesando...' : isDragging ? 'Suelta el archivo aquí' : 'Arrastra o haz clic para importar'}
                </span>
                <span className="text-xs text-slate-500 mt-1">.xlsx, .xls, .csv</span>
                <input
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    className="hidden"
                    onChange={handleFileInput}
                    disabled={step === 'PROCESSING'}
                />
            </label>
        </GlassCard>
    );
}
