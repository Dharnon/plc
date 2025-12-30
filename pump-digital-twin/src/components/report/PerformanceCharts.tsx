
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

interface PerformanceChartsProps {
    data: Array<{
        flow: number;
        tdh: number;
        power: number;
        efficiency: number;
    }>;
}

export const PerformanceCharts = ({ data }: PerformanceChartsProps) => {
    return (
        <div className="flex flex-col gap-2 mt-4 flex-1 min-h-0">

            {/* TDH Chart */}
            <div className="h-1/3 border border-gray-300 p-2">
                <div className="text-center font-bold text-xs mb-1">TDH</div>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} />
                        <XAxis dataKey="flow" type="number" hide />
                        <YAxis label={{ value: 'TDH (m)', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }} tick={{ fontSize: 10 }} />
                        <Line type="monotone" dataKey="tdh" stroke="#2563eb" strokeWidth={2} dot={true} isAnimationActive={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Power Chart */}
            <div className="h-1/3 border border-gray-300 p-2">
                <div className="text-center font-bold text-xs mb-1">Power</div>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} />
                        <XAxis dataKey="flow" type="number" hide />
                        <YAxis label={{ value: 'Power (kW)', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }} tick={{ fontSize: 10 }} />
                        <Line type="monotone" dataKey="power" stroke="#2563eb" strokeWidth={2} dot={true} isAnimationActive={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Efficiency Chart */}
            <div className="h-1/3 border border-gray-300 p-2">
                <div className="text-center font-bold text-xs mb-1">Efficiency</div>
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={true} />
                        <XAxis dataKey="flow" type="number" label={{ value: 'Flow (m³/h)', position: 'insideBottom', offset: -5, style: { fontSize: '10px' } }} tick={{ fontSize: 10 }} />
                        <YAxis label={{ value: 'Eff (%)', angle: -90, position: 'insideLeft', style: { fontSize: '10px' } }} tick={{ fontSize: 10 }} />
                        <Line type="monotone" dataKey="efficiency" stroke="#2563eb" strokeWidth={2} dot={true} isAnimationActive={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
