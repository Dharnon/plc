import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    createColumnHelper,
    getFilteredRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";
import type { TestRequest } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { GlassCard } from "@/components/ui/GlassCard";
import { ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, ClipboardX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface TestTableProps {
    data: TestRequest[];
    filter: string;
}

const columnHelper = createColumnHelper<TestRequest>();

const columns = [
    columnHelper.accessor("status", {
        header: "Estado",
        cell: (info) => <StatusBadge status={info.getValue()} />,
        size: 140,
    }),
    columnHelper.accessor("generalInfo.pedido", {
        header: "Pedido",
        cell: (info) => <span className="font-mono text-cyan-400 font-medium">{info.getValue()}</span>,
        size: 100,
    }),
    columnHelper.accessor("generalInfo.posicion", {
        header: "Posición",
        cell: (info) => <span className="font-mono text-slate-300">{info.getValue() || '-'}</span>,
        size: 80,
    }),
    columnHelper.accessor("generalInfo.cliente", {
        header: "Cliente",
        cell: (info) => <span className="text-white font-medium truncate max-w-[200px] block">{info.getValue()}</span>,
        size: 200,
    }),
    columnHelper.accessor("generalInfo.modeloBomba", {
        header: "Modelo Bomba",
        cell: (info) => <span className="text-slate-300 font-mono text-sm truncate max-w-[180px] block">{info.getValue() || '-'}</span>,
        size: 180,
    }),
    columnHelper.accessor("generalInfo.ordenTrabajo", {
        header: "Orden Trabajo",
        cell: (info) => <span className="text-slate-400 font-mono text-sm">{info.getValue() || '-'}</span>,
        size: 120,
    }),
    columnHelper.accessor("generalInfo.numeroBombas", {
        header: "Nº Bombas",
        cell: (info) => <span className="text-white font-mono text-center block">{info.getValue()}</span>,
        size: 80,
    }),
    columnHelper.display({
        id: "actions",
        cell: () => <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />,
        size: 40,
    })
];

export function TestTable({ data, filter }: TestTableProps) {
    const navigate = useNavigate();
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
        state: {
            globalFilter: filter
        },
        onGlobalFilterChange: () => { },
    });

    return (
        <div className="w-full space-y-4">
            {/* Table Header */}
            <div className="grid gap-4 px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider bg-slate-900/30 rounded-lg border border-white/5"
                style={{ gridTemplateColumns: '140px 100px 80px 1fr 1fr 120px 80px 40px' }}>
                {table.getFlatHeaders().map((header) => (
                    <div key={header.id} className="truncate">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                ))}
            </div>

            {/* Table Body - Auto Height */}
            <div className="space-y-2">
                {table.getRowModel().rows.length === 0 ? (
                    <div className="text-center py-16 text-slate-500">
                        <ClipboardX className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        No hay pruebas registradas. Importa un archivo para comenzar.
                    </div>
                ) : (
                    table.getRowModel().rows.map((row) => (
                        <GlassCard
                            key={row.id}
                            variant="interactive"
                            className="grid gap-4 px-6 py-4 items-center group animate-in slide-in-from-bottom-1 fade-in duration-200"
                            style={{
                                gridTemplateColumns: '140px 100px 80px 1fr 1fr 120px 80px 40px',
                                animationDelay: `${Math.min(row.index, 10) * 30}ms`
                            }}
                            onClick={() => navigate(`/test/${row.original.id}`)}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <div key={cell.id} className={cn(cell.column.id === 'actions' && "flex justify-end")}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </div>
                            ))}
                        </GlassCard>
                    ))
                )}
            </div>

            {/* Pagination Controls */}
            {table.getPageCount() > 1 && (
                <div className="flex items-center justify-between px-2 pt-4 border-t border-white/5">
                    <div className="text-sm text-slate-500">
                        Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
                        <span className="ml-2 text-slate-600">({data.length} registros)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => table.setPageIndex(0)}
                            disabled={!table.getCanPreviousPage()}
                            className="p-2 rounded hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors"
                        >
                            <ChevronsLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className="p-2 rounded hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 bg-slate-800 rounded text-sm font-mono text-cyan-400">
                            {table.getState().pagination.pageIndex + 1}
                        </span>
                        <button
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                            className="p-2 rounded hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                            disabled={!table.getCanNextPage()}
                            className="p-2 rounded hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed text-slate-400 hover:text-white transition-colors"
                        >
                            <ChevronsRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
