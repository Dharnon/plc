"use client";

import { useState, useCallback } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, Loader2, AlertCircle, CheckCircle2, ChevronRight } from "lucide-react";

interface ImportModalProps {
    onImportSuccess: (filename: string, count: number) => void;
}

type Step = "upload" | "select-sheet" | "importing" | "success";

/**
 * Import Modal - Two-step: 1) Upload & detect sheets, 2) Select sheet & import
 */
export function ImportModal({ onImportSuccess }: ImportModalProps) {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState<Step>("upload");
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // File & sheets state
    const [file, setFile] = useState<File | null>(null);
    const [sheets, setSheets] = useState<string[]>([]);
    const [selectedSheet, setSelectedSheet] = useState<string | null>(null);
    const [result, setResult] = useState<{ filename: string; count: number } | null>(null);

    const resetState = () => {
        setStep("upload");
        setFile(null);
        setSheets([]);
        setSelectedSheet(null);
        setError(null);
        setResult(null);
        setIsLoading(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        if (!newOpen) resetState();
    };

    const handleDrop = useCallback(async (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) await detectSheets(droppedFile);
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) await detectSheets(selectedFile);
        e.target.value = "";
    };

    // Step 1: Detect sheets in the Excel file
    const detectSheets = async (selectedFile: File) => {
        const validTypes = [".xlsx", ".xls"];
        const isValid = validTypes.some((ext) => selectedFile.name.toLowerCase().endsWith(ext));

        if (!isValid) {
            setError("Formato inválido. Solo .xlsx, .xls");
            return;
        }

        setIsLoading(true);
        setError(null);
        setFile(selectedFile);

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);

            const response = await fetch("http://localhost:4000/api/excel/sheets", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Error al leer el archivo");

            const data = await response.json();
            setSheets(data.sheets);

            // If only one sheet, auto-select and import
            if (data.sheets.length === 1) {
                setSelectedSheet(data.sheets[0]);
                await importWithSheet(selectedFile, data.sheets[0]);
            } else {
                setStep("select-sheet");
            }

        } catch (err) {
            setError("Error al leer el archivo Excel.");
        } finally {
            setIsLoading(false);
        }
    };

    // Step 2: Import with selected sheet
    const importWithSheet = async (fileToImport: File, sheet: string) => {
        setStep("importing");
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", fileToImport);
            formData.append("sheet", sheet);

            const response = await fetch("http://localhost:4000/api/import-excel", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Error al importar");

            const data = await response.json();
            setResult({ filename: fileToImport.name, count: data.count });
            setStep("success");
            onImportSuccess(fileToImport.name, data.count);

            // Close modal after 2s
            setTimeout(() => {
                handleOpenChange(false);
            }, 2000);

        } catch (err) {
            setError("Error al importar el archivo.");
            setStep("select-sheet");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSheetSelect = (sheet: string) => {
        setSelectedSheet(sheet);
        if (file) {
            importWithSheet(file, sheet);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button>
                    <Upload className="w-4 h-4 mr-2" />
                    Importar Excel
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        {step === "upload" && "Importar Excel"}
                        {step === "select-sheet" && "Seleccionar Hoja"}
                        {step === "importing" && "Importando..."}
                        {step === "success" && "¡Importación Exitosa!"}
                    </DialogTitle>
                    <DialogDescription>
                        {step === "upload" && "Arrastra un archivo Excel o haz clic para seleccionar"}
                        {step === "select-sheet" && `${file?.name} - Selecciona la hoja a importar`}
                        {step === "importing" && `Procesando ${selectedSheet}...`}
                        {step === "success" && `${result?.count} registros importados`}
                    </DialogDescription>
                </DialogHeader>

                {/* Step: Upload */}
                {step === "upload" && (
                    <div
                        className={`
              border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer
              ${isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"}
              ${isLoading ? "opacity-50 pointer-events-none" : ""}
            `}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById("import-file-input")?.click()}
                    >
                        <input
                            id="import-file-input"
                            type="file"
                            accept=".xlsx,.xls"
                            className="hidden"
                            onChange={handleFileChange}
                            disabled={isLoading}
                        />

                        {isLoading ? (
                            <>
                                <Loader2 className="w-10 h-10 mx-auto text-primary animate-spin mb-3" />
                                <p className="text-sm text-muted-foreground">Leyendo archivo...</p>
                            </>
                        ) : (
                            <>
                                <FileSpreadsheet className={`w-10 h-10 mx-auto mb-3 ${isDragging ? "text-primary" : "text-muted-foreground"}`} />
                                <p className={`text-sm font-medium ${isDragging ? "text-primary" : "text-muted-foreground"}`}>
                                    {isDragging ? "Suelta el archivo aquí" : "Arrastra o haz clic para importar"}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">.xlsx, .xls</p>
                            </>
                        )}
                    </div>
                )}

                {/* Step: Select Sheet */}
                {step === "select-sheet" && (
                    <div className="space-y-2">
                        <p className="text-sm text-muted-foreground mb-3">
                            {sheets.length} hojas encontradas:
                        </p>
                        {sheets.map((sheet) => (
                            <button
                                key={sheet}
                                onClick={() => handleSheetSelect(sheet)}
                                className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-accent hover:border-primary transition-colors text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <FileSpreadsheet className="w-5 h-5 text-muted-foreground" />
                                    <span className="font-medium">{sheet}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            </button>
                        ))}
                    </div>
                )}

                {/* Step: Importing */}
                {step === "importing" && (
                    <div className="text-center py-8">
                        <Loader2 className="w-10 h-10 mx-auto text-primary animate-spin mb-3" />
                        <p className="text-sm text-muted-foreground">Importando datos de "{selectedSheet}"...</p>
                    </div>
                )}

                {/* Step: Success */}
                {step === "success" && result && (
                    <div className="text-center py-8">
                        <CheckCircle2 className="w-12 h-12 mx-auto text-green-500 mb-3" />
                        <p className="text-lg font-medium text-green-600">
                            ¡{result.count} registros importados!
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">{result.filename}</p>
                    </div>
                )}

                {error && (
                    <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 px-3 py-2 rounded-md">
                        <AlertCircle className="w-4 h-4" />
                        {error}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
