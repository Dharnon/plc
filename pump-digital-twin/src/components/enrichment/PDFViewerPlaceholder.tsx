import { FileText, Upload, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { DragEvent } from "react";

interface PDFViewerPlaceholderProps {
    file: File | null;
    onFileSelect: (file: File | null) => void;
}

export function PDFViewerPlaceholder({ file, onFileSelect }: PDFViewerPlaceholderProps) {
    const [fileUrl, setFileUrl] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Sync file prop with internal URL for iframe
    useEffect(() => {
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            return () => URL.revokeObjectURL(url);
        } else {
            setFileUrl(null);
        }
    }, [file]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            onFileSelect(selectedFile);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile && droppedFile.type === "application/pdf") {
            onFileSelect(droppedFile);
        }
    };

    const handleClear = () => {
        onFileSelect(null);
    };

    if (!fileUrl) {
        return (
            <div
                className={`h-full flex flex-col items-center justify-center p-8 border-r border-white/5 relative group transition-colors ${isDragging ? 'bg-cyan-900/20 border-cyan-500/50' : 'bg-slate-900/50'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-10"></div>

                <div className="text-center space-y-4 z-10">
                    <div
                        className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ring-1 transition-all cursor-pointer ${isDragging
                            ? 'bg-cyan-500/20 ring-cyan-500 text-cyan-400'
                            : 'bg-slate-800 ring-white/10 group-hover:ring-cyan-500/50 text-slate-500 group-hover:text-cyan-400'
                            }`}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <Upload className="w-8 h-8 transition-colors" />
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-white">Documentación Técnica</h3>
                        <p className="text-sm text-slate-400 max-w-[200px] mx-auto">
                            {isDragging ? 'Suelta el PDF aquí' : 'Arrastra o selecciona el PDF de la hoja de datos.'}
                        </p>
                    </div>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-cyan-400 text-sm rounded-lg border border-white/5 transition-colors"
                    >
                        Seleccionar Archivo
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-slate-800/30">
            {/* Toolbar */}
            <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-slate-900/50 shrink-0">
                <div className="flex items-center gap-2 text-slate-300">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono truncate max-w-[200px]">{file?.name}</span>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={handleClear} className="p-1.5 hover:bg-red-500/10 rounded text-slate-400 hover:text-red-400" title="Cerrar PDF">
                        <Trash className="w-3 h-3" />
                    </button>
                </div>
            </div>

            {/* Content using iframe for native PDF viewing */}
            <div className="flex-1 w-full h-full bg-slate-900">
                <iframe
                    src={fileUrl}
                    className="w-full h-full border-none"
                    title="PDF Viewer"
                />
            </div>
        </div>
    );
}
