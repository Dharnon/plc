'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { OvenData } from '@/lib/types';

interface StatsProps {
  data: OvenData | null;
}

interface DataPoint {
  time: string;
  temperature: number;
  pressure: number;
  power: number;
  humidity: number;
}

const MAX_POINTS = 60;

const chartColors = {
  temperature: '#ff6b35',
  pressure: '#4488ff',
  power: '#00ff88',
  humidity: '#aa88ff'
};

function ChartSection({ 
  title, 
  data, 
  dataKey, 
  color, 
  unit,
  min,
  max 
}: { 
  title: string; 
  data: DataPoint[]; 
  dataKey: keyof DataPoint; 
  color: string;
  unit: string;
  min?: number;
  max?: number;
}) {
  const currentValue = data.length > 0 ? data[data.length - 1][dataKey] : 0;

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }}>
        <h3 style={{
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          color: 'rgba(255,255,255,0.4)',
          margin: 0
        }}>
          {title}
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '4px'
        }}>
          <span style={{
            fontSize: '24px',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: '300',
            color: color
          }}>
            {typeof currentValue === 'number' ? currentValue.toFixed(1) : currentValue}
          </span>
          <span style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)'
          }}>
            {unit}
          </span>
        </div>
      </div>

      <div style={{ height: '140px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id={`gradient-${dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="rgba(255,255,255,0.15)"
              fontSize={9}
              tickLine={false}
              axisLine={false}
              interval="preserveStartEnd"
            />
            <YAxis 
              stroke="rgba(255,255,255,0.15)"
              fontSize={9}
              tickLine={false}
              axisLine={false}
              domain={min !== undefined && max !== undefined ? [min, max] : ['auto', 'auto']}
            />
            <Tooltip
              contentStyle={{
                background: 'rgba(20, 20, 20, 0.95)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                fontSize: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}
              itemStyle={{ color }}
              formatter={(value: number) => [`${value.toFixed(2)} ${unit}`, title]}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color}
              strokeWidth={2}
              fill={`url(#gradient-${dataKey})`}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default function Stats({ data }: StatsProps) {
  const [history, setHistory] = useState<DataPoint[]>([]);

  useEffect(() => {
    if (data) {
      const time = new Date(data.timestamp).toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setHistory(prev => {
        const newPoint = {
          time,
          temperature: data.temperatureInside,
          pressure: data.pressure,
          power: data.power,
          humidity: data.humidity
        };
        const updated = [...prev, newPoint];
        return updated.slice(-MAX_POINTS);
      });
    }
  }, [data]);

  if (!data || history.length === 0) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '14px'
      }}>
        Esperando datos...
      </div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px',
      height: '100%',
      overflowY: 'auto'
    }}>
      <ChartSection 
        title="Temperatura Interior" 
        data={history} 
        dataKey="temperature" 
        color={chartColors.temperature}
        unit="°C"
      />
      
      <ChartSection 
        title="Presión" 
        data={history} 
        dataKey="pressure" 
        color={chartColors.pressure}
        unit="bar"
        min={0.5}
        max={2}
      />
      
      <ChartSection 
        title="Consumo Energético" 
        data={history} 
        dataKey="power" 
        color={chartColors.power}
        unit="kW"
        min={0}
      />
      
      <ChartSection 
        title="Humedad" 
        data={history} 
        dataKey="humidity" 
        color={chartColors.humidity}
        unit="%"
        min={0}
        max={100}
      />
    </div>
  );
}
