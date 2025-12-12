import { usePumpStore } from "@/store/usePumpStore";
import { TestTable } from "@/components/dashboard/TestTable";
import { ImportWizard } from "@/components/dashboard/ImportWizard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Activity, ClipboardList, AlertCircle, Plus, RefreshCw } from "lucide-react";
import { generateMockTests } from "@/lib/mockData";

export default function DashboardPage() {
    const { tests, getStats, addTests, setGlobalFilter, setTests, globalFilter } = usePumpStore();
    const stats = getStats();

    const clearAll = () => {
        if (confirm('¿Eliminar todos los registros?')) {
            setTests([]);
        }
    };

    return (
        <div className="min-h-screen bg-background p-8 space-y-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-background to-background">

            {/* Header / KPIs */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Centro de Control</h1>
                    <p className="text-slate-400">Gestión de Pruebas de Bombas Hidráulicas</p>
                </div>

                <div className="flex gap-4">
                    <KpiCard icon={ClipboardList} label="Total Pruebas" value={stats.total} color="text-blue-400" />
                    <KpiCard icon={Activity} label="Pendientes" value={stats.pending} color="text-yellow-400" />
                    <KpiCard icon={AlertCircle} label="Fallos" value={stats.nok} color="text-red-400" />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Sidebar: Import/Actions */}
                <div className="lg:col-span-1 space-y-6">
                    <ImportWizard />

                    <GlassCard className="p-6 space-y-4">
                        <h3 className="text-lg font-semibold text-white">Acciones Rápidas</h3>
                        <button
                            onClick={() => addTests(generateMockTests(10))}
                            className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-lg flex items-center justify-center gap-2 transition-colors border border-dashed border-cyan-500/30"
                        >
                            <Plus className="w-4 h-4" />
                            Simular 10 Registros
                        </button>
                        {tests.length > 0 && (
                            <button
                                onClick={clearAll}
                                className="w-full py-2 px-4 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Limpiar Todo
                            </button>
                        )}
                    </GlassCard>
                </div>

                {/* Right Area: Table */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-200">Cola de Pruebas</h2>
                        <input
                            type="search"
                            placeholder="Buscar por Pedido, Cliente..."
                            value={globalFilter}
                            className="bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-cyan-500 outline-none w-72 text-white placeholder:text-slate-600"
                            onChange={(e) => setGlobalFilter(e.target.value)}
                        />
                    </div>

                    <TestTable data={tests} filter={globalFilter} />
                </div>

            </main>
        </div>
    );
}

function KpiCard({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: number; color: string }) {
    return (
        <GlassCard className="px-5 py-3 flex items-center gap-4 min-w-[150px]">
            <div className={`p-2 rounded-lg bg-slate-800/50 ${color}`}>
                <Icon className="w-5 h-5" />
            </div>
            <div>
                <div className="text-2xl font-bold font-mono text-white leading-none">{value}</div>
                <div className="text-xs text-slate-500 uppercase font-medium mt-1">{label}</div>
            </div>
        </GlassCard>
    );
}
