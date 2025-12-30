import { useState, useCallback } from 'react';
import { usePumpStore } from '@/store/usePumpStore';
import { GlassCard } from '@/components/ui/GlassCard';
import { Upload, Loader2, AlertCircle } from 'lucide-react';

export function ImportWizard() {
    const [isDragging, setIsDragging] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { importExcel, isLoading } = usePumpStore();

    const processFile = async (file: File) => {
        setErrorMessage(null);
        try {
            await importExcel(file);
        } catch (err) {
            console.error("Error processing file", err);
            setErrorMessage("Error al subir el archivo. Revisa el formato.");
        }
    };

    const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.[0]) return;
        await processFile(e.target.files[0]);
        // Reset input
        e.target.value = '';
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
                setErrorMessage("Formato inválido. Solo .xlsx, .xls, .csv");
            }
        }
    }, []);

    return (
        <GlassCard
            className={`p-1 group relative overflow-hidden transition-all ${isDragging ? 'border-cyan-500 bg-cyan-500/10' : 'hover:border-cyan-500/30'}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label className="flex flex-col items-center justify-center p-6 cursor-pointer border-2 border-dashed border-white/10 rounded-lg hover:bg-slate-800/50 transition-colors min-h-[120px]">
                {isLoading ? (
                    <Loader2 className="w-8 h-8 text-cyan-500 animate-spin mb-2" />
                ) : (
                    <Upload className={`w-8 h-8 mb-2 transition-colors ${isDragging ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-400'}`} />
                )}
                <span className={`text-sm font-medium transition-colors ${isDragging ? 'text-cyan-300' : 'text-slate-300 group-hover:text-cyan-300'}`}>
                    {isLoading ? 'Procesando en servidor...' : isDragging ? 'Suelta el archivo aquí' : 'Arrastra o haz clic para importar'}
                </span>
                <span className="text-xs text-slate-500 mt-1">.xlsx, .xls, .csv</span>

                {errorMessage && (
                    <div className="flex items-center gap-2 mt-2 text-red-400 text-xs font-medium bg-red-400/10 px-2 py-1 rounded">
                        <AlertCircle className="w-3 h-3" />
                        {errorMessage}
                    </div>
                )}

                <input
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    className="hidden"
                    onChange={handleFileInput}
                    disabled={isLoading}
                />
            </label>
        </GlassCard>
    );
}

