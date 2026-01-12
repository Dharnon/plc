"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImportModal } from "@/components/import-modal";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import {
    FileSpreadsheet, RefreshCw, ChevronRight, Search,
    ChevronLeft, ChevronsLeft, ChevronsRight,
    Filter, ArrowUpDown, ArrowUp, ArrowDown, Upload
} from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,
    createColumnHelper,
    type SortingState,
    type Column,
} from "@tanstack/react-table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface TestItem {
    id: string;
    status: string;
    generalInfo: {
        pedido: string;
        posicion?: string;
        cliente: string;
        modeloBomba?: string;
        ordenTrabajo?: string;
        numeroBombas: number;
    };
}

const columnHelper = createColumnHelper<TestItem>();

// Status badge config
const statusConfig: Record<string, { label: string; className: string }> = {
    PENDING: { label: "Pendiente", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
    IN_PROGRESS: { label: "En Proceso", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
    GENERATED: { label: "Generado", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
    COMPLETED: { label: "Completado", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
};

// Fallback for unknown statuses
const getStatusConfig = (status: string) => statusConfig[status] || { label: status, className: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200" };

// Sortable header component
function SortableHeader({ column, children }: { column: Column<TestItem, unknown>; children: React.ReactNode }) {
    return (
        <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            {children}
            {column.getIsSorted() === "asc" ? (
                <ArrowUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
                <ArrowDown className="ml-2 h-4 w-4" />
            ) : (
                <ArrowUpDown className="ml-2 h-4 w-4 opacity-50" />
            )}
        </Button>
    );
}

/**
 * Dashboard - Fully Responsive with Data Table, Sticky Header, Sorting
 */
export default function DashboardPage() {
    const [tests, setTests] = useState<TestItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [globalFilter, setGlobalFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");
    const [sorting, setSorting] = useState<SortingState>([]);
    const [lastImport, setLastImport] = useState<{ filename: string; count: number; time: Date } | null>(null);
    const router = useRouter();

    // Table columns with sortable headers
    const columns = useMemo(() => [
        columnHelper.accessor("status", {
            header: ({ column }) => <SortableHeader column={column}>Estado</SortableHeader>,
            cell: (info) => {
                const config = getStatusConfig(info.getValue());
                return (
                    <Badge className={config.className}>
                        <span className="hidden sm:inline">{config.label}</span>
                        <span className="sm:hidden">{config.label.charAt(0)}</span>
                    </Badge>
                );
            },
            enableSorting: true,
        }),
        columnHelper.accessor("generalInfo.pedido", {
            header: ({ column }) => <SortableHeader column={column}>Pedido</SortableHeader>,
            cell: (info) => <span className="font-mono font-medium text-primary">{info.getValue()}</span>,
            enableSorting: true,
        }),
        columnHelper.accessor("generalInfo.posicion", {
            header: "Posición",
            cell: (info) => <span className="font-mono text-muted-foreground hidden md:block">{info.getValue() || "-"}</span>,
        }),
        columnHelper.accessor("generalInfo.cliente", {
            header: ({ column }) => <SortableHeader column={column}>Cliente</SortableHeader>,
            cell: (info) => <span className="font-medium truncate max-w-[100px] sm:max-w-[150px] lg:max-w-[200px] block">{info.getValue()}</span>,
            enableSorting: true,
        }),
        columnHelper.accessor("generalInfo.modeloBomba", {
            header: "Modelo",
            cell: (info) => <span className="font-mono text-[11px] sm:text-sm text-muted-foreground truncate max-w-[80px] sm:max-w-none block lg:max-w-[150px]">{info.getValue() || "-"}</span>,
        }),
        columnHelper.accessor("generalInfo.ordenTrabajo", {
            header: "Orden",
            cell: (info) => <span className="font-mono text-[11px] sm:text-sm text-muted-foreground hidden lg:block xl:block">{info.getValue() || "-"}</span>,
        }),
        columnHelper.accessor("generalInfo.numeroBombas", {
            header: ({ column }) => <SortableHeader column={column}>Nº</SortableHeader>,
            cell: (info) => <span className="font-mono text-[11px] sm:text-sm text-center block sm:hidden md:block lg:block">{info.getValue()}</span>,
            enableSorting: true,
        }),
        columnHelper.display({
            id: "actions",
            cell: () => <ChevronRight className="w-4 h-4 text-muted-foreground" />,
        }),
    ], []);

    // Filter by status
    const filteredData = useMemo(() => {
        if (statusFilter === "all") return tests;
        return tests.filter(t => t.status === statusFilter);
    }, [tests, statusFilter]);

    // Table instance
    const table = useReactTable({
        data: filteredData,
        columns,
        state: {
            globalFilter,
            sorting,
        },
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {
            pagination: {
                pageSize: 20,
            },
        },
    });

    // Fetch tests
    const fetchTests = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:4000/api/tests");
            const data = await response.json();
            setTests(data);
        } catch (error) {
            console.error("Error fetching tests:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchTests();
        const stored = localStorage.getItem("lastImport");
        if (stored) setLastImport(JSON.parse(stored));
    }, [fetchTests]);

    const handleImportSuccess = (filename: string, count: number) => {
        const importData = { filename, count, time: new Date() };
        setLastImport(importData);
        localStorage.setItem("lastImport", JSON.stringify(importData));
        fetchTests();
    };

    return (
        <div className="h-full flex flex-col gap-4 sm:gap-6 p-6 overflow-hidden">
            {/* Header - Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Gestión de pruebas de bombas
                    </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                    {lastImport && (
                        <div className="text-right text-xs sm:text-sm hidden sm:block">
                            <p className="text-muted-foreground">Último archivo:</p>
                            <p className="font-medium text-primary">{lastImport.filename}</p>
                        </div>
                    )}
                    <ImportModal onImportSuccess={handleImportSuccess} />
                </div>
            </div>

            {/* Stats Cards - Balanced Compact (Vertical but cleaner) */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 shrink-0">
                <Card className="cursor-pointer hover:border-primary/50 transition-colors sm:bg-card" onClick={() => setStatusFilter("all")}>
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-tight">Total</span>
                        <span className="text-2xl font-bold text-slate-900">{tests.length}</span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors sm:bg-card" onClick={() => setStatusFilter("PENDING")}>
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-tight">Pendientes</span>
                        <span className="text-2xl font-bold text-yellow-600">
                            {tests.filter(t => t.status === "PENDING").length}
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors sm:bg-card" onClick={() => setStatusFilter("IN_PROGRESS")}>
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-tight">En Proceso</span>
                        <span className="text-2xl font-bold text-blue-600">
                            {tests.filter(t => t.status === "IN_PROGRESS").length}
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors sm:bg-card" onClick={() => setStatusFilter("GENERATED")}>
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-tight">Generados</span>
                        <span className="text-2xl font-bold text-green-600">
                            {tests.filter(t => t.status === "GENERATED").length}
                        </span>
                    </div>
                </Card>
            </div>

            {/* Data Table Section - cleaner integrated look */}
            <div className="flex-1 flex flex-col min-h-0 space-y-4">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
                    <div>
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <FileSpreadsheet className="w-5 h-5 text-primary" />
                            Pruebas
                        </h2>
                        <p className="text-xs text-muted-foreground">
                            {table.getFilteredRowModel().rows.length} de {tests.length} registros
                        </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {/* Status Filter */}
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-32 sm:w-40 text-xs sm:text-sm h-9">
                                <Filter className="w-3.5 h-3.5 mr-2 opacity-70" />
                                <SelectValue placeholder="Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos los estados</SelectItem>
                                <SelectItem value="PENDING">Pendientes</SelectItem>
                                <SelectItem value="IN_PROGRESS">En Proceso</SelectItem>
                                <SelectItem value="GENERATED">Generados</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Search */}
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-70" />
                            <Input
                                placeholder="Buscar en la tabla..."
                                value={globalFilter}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                className="pl-9 w-full sm:w-48 lg:w-64 text-xs sm:text-sm h-9"
                            />
                        </div>

                        <Button variant="outline" size="icon" onClick={fetchTests} disabled={loading} className="h-9 w-9">
                            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                        </Button>
                    </div>
                </div>

                {/* Table Container - simple border, clean design */}
                <div className="flex-1 flex flex-col min-h-0">
                    {loading ? (
                        <div className="flex-1 flex items-center justify-center">
                            <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
                        </div>
                    ) : tests.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center p-8">
                            <Empty className="max-w-md">
                                <EmptyHeader>
                                    <EmptyMedia variant="icon" className="bg-primary/5 text-primary">
                                        <Upload className="w-8 h-8" />
                                    </EmptyMedia>
                                    <EmptyTitle>No hay pruebas registradas</EmptyTitle>
                                    <EmptyDescription>
                                        Importa tu primer archivo CSV o Excel para comenzar.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <ImportModal onImportSuccess={handleImportSuccess} />
                                </EmptyContent>
                            </Empty>
                        </div>
                    ) : (
                        <>
                            {/* Scrollable Table */}
                            <div className="flex-1 overflow-auto border rounded-lg scrollbar-hover-only">
                                <Table>
                                    <TableHeader className="sticky top-0 z-10 bg-muted/50">
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id} className="hover:bg-transparent">
                                                {headerGroup.headers.map((header) => (
                                                    <TableHead
                                                        key={header.id}
                                                        className="whitespace-nowrap text-xs px-4 h-10 bg-muted/50 font-medium"
                                                    >
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                                    </TableHead>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table.getRowModel().rows.map((row) => (
                                            <TableRow
                                                key={row.id}
                                                className="cursor-pointer hover:bg-muted/50"
                                                onClick={() => router.push(`/supervisor/test/${row.original.id}`)}
                                            >
                                                {row.getVisibleCells().map((cell) => (
                                                    <TableCell key={cell.id} className="px-4 py-3 text-sm">
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination - Compact Single Row */}
                            <div className="flex flex-col sm:flex-row items-center justify-between py-4 sm:py-6 gap-4 shrink-0 border-t mt-4">
                                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden lg:inline">Por página:</span>
                                        <Select
                                            value={String(table.getState().pagination.pageSize)}
                                            onValueChange={(value) => table.setPageSize(Number(value))}
                                        >
                                            <SelectTrigger className="w-[72px] h-7 text-[11px] border-slate-200">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="50">50</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-7 w-7 border-slate-200 shrink-0"
                                            onClick={() => table.setPageIndex(0)}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            <ChevronsLeft className="w-3.5 h-3.5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-7 w-7 border-slate-200 shrink-0"
                                            onClick={() => table.previousPage()}
                                            disabled={!table.getCanPreviousPage()}
                                        >
                                            <ChevronLeft className="w-3.5 h-3.5" />
                                        </Button>
                                        <div className="flex items-center justify-center px-2 min-w-[3rem] h-7 bg-muted/50 rounded text-[11px] font-bold">
                                            {table.getState().pagination.pageIndex + 1}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-7 w-7 border-slate-200 text-red-600 hover:text-red-700 hover:bg-red-50 shrink-0"
                                            onClick={() => table.nextPage()}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-7 w-7 border-slate-200 shrink-0"
                                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                            disabled={!table.getCanNextPage()}
                                        >
                                            <ChevronsRight className="w-3.5 h-3.5" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="text-[11px] text-muted-foreground font-medium text-center sm:text-right w-full sm:w-auto">
                                    Pág. <span className="text-foreground">{table.getState().pagination.pageIndex + 1}</span> de <span className="text-foreground">{table.getPageCount()}</span>
                                    <span className="ml-2 opacity-50">({filteredData.length} registros totales)</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
