'use client';

import { OvenData } from '@/lib/types';

interface MetricCardProps {
  label: string;
  value: number | string;
  unit: string;
  icon: React.ReactNode;
  warning?: boolean;
  trend?: 'up' | 'down' | 'stable';
}

function MetricCard({ label, value, unit, icon, warning, trend }: MetricCardProps) {
  const TrendIcon = () => {
    if (trend === 'up') return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    );
    if (trend === 'down') return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    );
    return null;
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
      border: `1px solid ${warning ? 'rgba(255,107,53,0.4)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: '10px',
      padding: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      transition: 'all 0.3s ease',
      boxShadow: warning ? '0 0 20px rgba(255,107,53,0.15)' : 'none'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        color: 'rgba(255,255,255,0.45)',
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1.2px'
      }}>
        {icon}
        {label}
        {trend && <TrendIcon />}
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '4px'
      }}>
        <span style={{
          fontSize: '28px',
          fontWeight: '300',
          fontFamily: "'JetBrains Mono', monospace",
          color: warning ? '#ff6b35' : '#ffffff',
          letterSpacing: '-1px'
        }}>
          {typeof value === 'number' ? value.toFixed(1) : value}
        </span>
        <span style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.35)'
        }}>
          {unit}
        </span>
      </div>
    </div>
  );
}

const TempIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

const PressureIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const PowerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const HumidityIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

const TimerIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DoorIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  </svg>
);

const FlameIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const TargetIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

interface MetricsProps {
  data: OvenData | null;
  prevData?: OvenData | null;
}

function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default function Metrics({ data, prevData }: MetricsProps) {
  const getTrend = (current: number, previous: number | undefined): 'up' | 'down' | 'stable' => {
    if (!previous) return 'stable';
    const diff = current - previous;
    if (diff > 0.5) return 'up';
    if (diff < -0.5) return 'down';
    return 'stable';
  };

  if (!data) {
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '10px'
      }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            padding: '14px',
            height: '72px',
            animation: 'pulse 2s infinite',
            animationDelay: `${i * 0.1}s`
          }} />
        ))}
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '10px'
    }}>
      <MetricCard
        label="Temperatura Interior"
        value={data.temperatureInside}
        unit="°C"
        icon={<TempIcon />}
        warning={data.temperatureInside > 300}
        trend={getTrend(data.temperatureInside, prevData?.temperatureInside)}
      />
      <MetricCard
        label="Temperatura Exterior"
        value={data.temperatureOutside}
        unit="°C"
        icon={<TempIcon />}
        trend={getTrend(data.temperatureOutside, prevData?.temperatureOutside)}
      />
      <MetricCard
        label="Presión"
        value={data.pressure}
        unit="bar"
        icon={<PressureIcon />}
        trend={getTrend(data.pressure, prevData?.pressure)}
      />
      <MetricCard
        label="Consumo"
        value={data.power}
        unit="kW"
        icon={<PowerIcon />}
        trend={getTrend(data.power, prevData?.power)}
      />
      <MetricCard
        label="Humedad"
        value={data.humidity}
        unit="%"
        icon={<HumidityIcon />}
        trend={getTrend(data.humidity, prevData?.humidity)}
      />
      <MetricCard
        label="Tiempo de Ciclo"
        value={formatTime(data.cycleTime)}
        unit=""
        icon={<TimerIcon />}
      />
      <MetricCard
        label="Puerta"
        value={data.doorOpen ? 'Abierta' : 'Cerrada'}
        unit=""
        icon={<DoorIcon />}
      />
      <MetricCard
        label="Calefacción"
        value={data.heatingOn ? 'Activa' : 'Inactiva'}
        unit=""
        icon={<FlameIcon />}
      />
    </div>
  );
}
