"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImportModal } from "@/components/import-modal";
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    FileSpreadsheet, RefreshCw, ChevronRight, Search,
    ChevronLeft, ChevronsLeft, ChevronsRight,
    Filter, ArrowUpDown, ArrowUp, ArrowDown, Upload,
    CheckCircle2, Loader2, CircleDashed, AlertCircle
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
// Status badge config
const baseStatusClass = "border-slate-200 dark:border-slate-700 bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors";

const statusConfig: Record<string, { label: string; icon: React.ElementType; className: string; iconClassName: string }> = {
    PENDING: {
        label: "Pendiente",
        icon: CircleDashed,
        className: baseStatusClass,
        iconClassName: "text-orange-500 dark:text-orange-400"
    },
    IN_PROGRESS: {
        label: "En Proceso",
        icon: Loader2,
        className: baseStatusClass,
        iconClassName: "text-blue-500 dark:text-blue-400 animate-spin"
    },
    GENERATED: {
        label: "Generado",
        icon: CheckCircle2,
        className: baseStatusClass,
        iconClassName: "text-green-500 dark:text-green-400"
    },
    COMPLETED: {
        label: "Completado",
        icon: CheckCircle2,
        className: baseStatusClass,
        iconClassName: "text-green-500 dark:text-green-400"
    },
};

// Fallback for unknown statuses
const getStatusConfig = (status: string) => statusConfig[status] || {
    label: status,
    icon: AlertCircle,
    className: baseStatusClass,
    iconClassName: "text-slate-400"
};

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
    const tableContainerRef = useRef<HTMLDivElement>(null);

    // Table columns with sortable headers
    const columns = useMemo(() => [
        columnHelper.accessor("status", {
            header: ({ column }) => <SortableHeader column={column}>Estado</SortableHeader>,
            cell: (info) => {
                const config = getStatusConfig(info.getValue());
                const Icon = config.icon;
                return (
                    <Badge variant="outline" className={`rounded-full pl-1.5 pr-2.5 py-0.5 font-medium border ${config.className}`}>
                        <Icon className={`w-3.5 h-3.5 mr-1.5 ${config.iconClassName}`} />
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

    // Calculate responsive page size
    useEffect(() => {
        const calculatePageSize = () => {
            // Mobile: Fixed page size, allow window scroll
            if (window.innerWidth < 768) {
                if (table.getState().pagination.pageSize !== 20) {
                    table.setPageSize(20);
                }
                return;
            }

            // Desktop: Dynamic page size
            if (tableContainerRef.current) {
                const height = tableContainerRef.current.clientHeight;
                const headerHeight = 44; // Standard table header height
                const rowHeight = 44; // Adjusted for py-3 (24px) + text-sm (20px) + border
                const availableHeight = height - headerHeight;
                const newPageSize = Math.floor(availableHeight / rowHeight);
                // Ensure at least 3 rows to show something
                const safePageSize = Math.max(3, Math.min(newPageSize, 100));

                // Only update if changed significantly to avoid jitter
                if (safePageSize !== table.getState().pagination.pageSize) {
                    table.setPageSize(safePageSize);
                }
            }
        };

        // Initial calculation
        calculatePageSize();

        // Observer for container resize
        const observer = new ResizeObserver(calculatePageSize);
        if (tableContainerRef.current) {
            observer.observe(tableContainerRef.current);
        }

        // Listen to window resize for switching modes
        window.addEventListener('resize', calculatePageSize);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', calculatePageSize);
        };
    }, [table, tests.length]);

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
        <div className="h-full flex flex-col gap-4 sm:gap-6 p-6 overflow-y-auto md:overflow-hidden">
            {/* Header - Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shrink-0">
                <div className="flex items-center gap-2">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-sm sm:text-base text-muted-foreground">
                            Gestión de pruebas de bombas
                        </p>
                    </div>
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

            {/* Mobile Stats - Compact 2x2 Grid */}
            <div className="md:hidden grid grid-cols-2 gap-2 shrink-0 mb-2">
                <Card className="cursor-pointer hover:border-primary/50 transition-colors bg-muted/20 border-dashed shadow-none" onClick={() => setStatusFilter("all")}>
                    <div className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Total</span>
                        <span className="text-lg font-bold text-foreground">{tests.length}</span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-orange-200 transition-colors bg-orange-50/30 border-orange-100 dark:bg-orange-950/20 dark:border-orange-800/50 shadow-none" onClick={() => setStatusFilter("PENDING")}>
                    <div className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                        <span className="text-[10px] font-bold text-orange-600/80 dark:text-orange-400 uppercase tracking-wider">Pendientes</span>
                        <span className="text-lg font-bold text-orange-700 dark:text-orange-400">
                            {tests.filter(t => t.status === "PENDING").length}
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-blue-200 transition-colors bg-blue-50/30 border-blue-100 dark:bg-blue-950/20 dark:border-blue-800/50 shadow-none" onClick={() => setStatusFilter("IN_PROGRESS")}>
                    <div className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                        <span className="text-[10px] font-bold text-blue-600/80 dark:text-blue-400 uppercase tracking-wider">Proceso</span>
                        <span className="text-lg font-bold text-blue-700 dark:text-blue-400">
                            {tests.filter(t => t.status === "IN_PROGRESS").length}
                        </span>
                    </div>
                </Card>
                <Card className="cursor-pointer hover:border-green-200 transition-colors bg-green-50/30 border-green-100 dark:bg-green-950/20 dark:border-green-800/50 shadow-none" onClick={() => setStatusFilter("GENERATED")}>
                    <div className="p-2 flex flex-col items-center justify-center text-center gap-0.5">
                        <span className="text-[10px] font-bold text-green-600/80 dark:text-green-400 uppercase tracking-wider">Generados</span>
                        <span className="text-lg font-bold text-green-700 dark:text-green-400">
                            {tests.filter(t => t.status === "GENERATED").length}
                        </span>
                    </div>
                </Card>
            </div>

            {/* Desktop Stats - Full Cards */}
            <div className="hidden md:grid grid-cols-4 gap-4 shrink-0">
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
                            {/* Responsive Table View (No Scroll Vertical on Desktop, Auto Height on Mobile) */}
                            <div ref={tableContainerRef} className="flex-1 w-full overflow-x-auto min-h-[500px] md:min-h-0 md:overflow-y-hidden border rounded-lg bg-background">
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
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hidden lg:inline">Registros</span>
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
