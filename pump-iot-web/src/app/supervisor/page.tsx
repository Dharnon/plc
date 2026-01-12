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
            cell: (info) => <span className="font-mono text-sm text-muted-foreground truncate max-w-[150px] hidden lg:block">{info.getValue() || "-"}</span>,
        }),
        columnHelper.accessor("generalInfo.ordenTrabajo", {
            header: "Orden",
            cell: (info) => <span className="font-mono text-sm text-muted-foreground hidden xl:block">{info.getValue() || "-"}</span>,
        }),
        columnHelper.accessor("generalInfo.numeroBombas", {
            header: ({ column }) => <SortableHeader column={column}>Nº</SortableHeader>,
            cell: (info) => <span className="font-mono text-center hidden sm:block">{info.getValue()}</span>,
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
                            <p className="font-medium text-primary truncate max-w-[150px] sm:max-w-[200px]">{lastImport.filename}</p>
                        </div>
                    )}
                    <ImportModal onImportSuccess={handleImportSuccess} />
                </div>
            </div>

            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 shrink-0">
                <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setStatusFilter("all")}>
                    <CardHeader className="p-3 sm:p-6 pb-1 sm:pb-2">
                        <CardDescription className="text-xs sm:text-sm">Total</CardDescription>
                        <CardTitle className="text-xl sm:text-3xl">{tests.length}</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setStatusFilter("PENDING")}>
                    <CardHeader className="p-3 sm:p-6 pb-1 sm:pb-2">
                        <CardDescription className="text-xs sm:text-sm">Pendientes</CardDescription>
                        <CardTitle className="text-xl sm:text-3xl text-yellow-600">
                            {tests.filter(t => t.status === "PENDING").length}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setStatusFilter("IN_PROGRESS")}>
                    <CardHeader className="p-3 sm:p-6 pb-1 sm:pb-2">
                        <CardDescription className="text-xs sm:text-sm">En Proceso</CardDescription>
                        <CardTitle className="text-xl sm:text-3xl text-blue-600">
                            {tests.filter(t => t.status === "IN_PROGRESS").length}
                        </CardTitle>
                    </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary/50 transition-colors" onClick={() => setStatusFilter("GENERATED")}>
                    <CardHeader className="p-3 sm:p-6 pb-1 sm:pb-2">
                        <CardDescription className="text-xs sm:text-sm">Generados</CardDescription>
                        <CardTitle className="text-xl sm:text-3xl text-green-600">
                            {tests.filter(t => t.status === "GENERATED").length}
                        </CardTitle>
                    </CardHeader>
                </Card>
            </div>

            {/* Data Table - Flex Grow to Fill Space */}
            <Card className="flex-1 flex flex-col min-h-0 overflow-hidden">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0 pb-3 sm:pb-4 shrink-0">
                    <div>
                        <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                            <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5" />
                            Pruebas
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm">
                            {table.getFilteredRowModel().rows.length} de {tests.length} registros
                        </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        {/* Status Filter */}
                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-32 sm:w-40 text-xs sm:text-sm">
                                <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                                <SelectValue placeholder="Estado" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todos</SelectItem>
                                <SelectItem value="PENDING">Pendientes</SelectItem>
                                <SelectItem value="IN_PROGRESS">En Proceso</SelectItem>
                                <SelectItem value="GENERATED">Generados</SelectItem>
                            </SelectContent>
                        </Select>

                        {/* Search */}
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                            <Input
                                placeholder="Buscar..."
                                value={globalFilter}
                                onChange={(e) => setGlobalFilter(e.target.value)}
                                className="pl-7 sm:pl-9 w-full sm:w-48 lg:w-64 text-xs sm:text-sm"
                            />
                        </div>

                        <Button variant="outline" size="icon" onClick={fetchTests} disabled={loading} className="h-8 w-8 sm:h-9 sm:w-9">
                            <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 ${loading ? "animate-spin" : ""}`} />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col min-h-0 pb-4 overflow-hidden">
                    {loading ? (
                        <div className="flex-1 flex items-center justify-center">
                            <RefreshCw className="w-6 h-6 animate-spin text-muted-foreground" />
                        </div>
                    ) : table.getRowModel().rows.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center">
                            <Empty className="border border-dashed rounded-lg">
                                <EmptyHeader>
                                    <EmptyMedia variant="icon">
                                        <FileSpreadsheet />
                                    </EmptyMedia>
                                    <EmptyTitle>Sin pruebas registradas</EmptyTitle>
                                    <EmptyDescription>
                                        Importa un archivo Excel para comenzar a gestionar las pruebas de bombas.
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <ImportModal onImportSuccess={handleImportSuccess} />
                                </EmptyContent>
                            </Empty>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                            {/* Scrollable Table Container with native scroll for sticky support */}
                            <div className="flex-1 rounded-md border overflow-auto scrollbar-hover-only">
                                <Table>
                                    <TableHeader className="sticky top-0 z-20">
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id} className="hover:bg-transparent border-b">
                                                {headerGroup.headers.map((header) => (
                                                    <TableHead
                                                        key={header.id}
                                                        className="whitespace-nowrap text-xs sm:text-sm px-2 sm:px-4 bg-background"
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
                                                    <TableCell key={cell.id} className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>

                            {/* Pagination Controls - Responsive */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 sm:pt-4 border-t mt-3 sm:mt-4 shrink-0">
                                <div className="text-xs sm:text-sm text-muted-foreground">
                                    Pág. {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                                    <span className="ml-2">({filteredData.length} reg.)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Select
                                        value={String(table.getState().pagination.pageSize)}
                                        onValueChange={(value) => table.setPageSize(Number(value))}
                                    >
                                        <SelectTrigger className="w-16 sm:w-20 text-xs sm:text-sm h-8">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5">5</SelectItem>
                                            <SelectItem value="10">10</SelectItem>
                                            <SelectItem value="20">20</SelectItem>
                                            <SelectItem value="50">50</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => table.setPageIndex(0)}
                                        disabled={!table.getCanPreviousPage()}
                                    >
                                        <ChevronsLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => table.previousPage()}
                                        disabled={!table.getCanPreviousPage()}
                                    >
                                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                    <span className="px-2 sm:px-3 py-1 bg-muted rounded text-xs sm:text-sm font-mono">
                                        {table.getState().pagination.pageIndex + 1}
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => table.nextPage()}
                                        disabled={!table.getCanNextPage()}
                                    >
                                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                        disabled={!table.getCanNextPage()}
                                    >
                                        <ChevronsRight className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
