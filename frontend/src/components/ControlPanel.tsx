'use client';

import { useState } from 'react';
import { OvenData, OvenConfig } from '@/lib/types';

interface ControlPanelProps {
  data: OvenData | null;
  config: OvenConfig;
  onConfigChange: (config: Partial<OvenConfig>) => void;
  onToggleDoor: () => void;
  onResetCycle: () => void;
}

const KnobIcon = ({ active }: { active: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#00ff88" : "currentColor"} strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

export default function ControlPanel({ 
  data, 
  config, 
  onConfigChange,
  onToggleDoor,
  onResetCycle 
}: ControlPanelProps) {
  const [localTarget, setLocalTarget] = useState(config.targetTemperature);

  const handleTargetChange = (value: number) => {
    setLocalTarget(value);
    onConfigChange({ targetTemperature: value });
  };

  const currentTemp = data?.temperatureInside ?? 0;
  const targetTemp = config.targetTemperature;
  const progress = Math.min(100, (currentTemp / targetTemp) * 100);

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '12px',
      padding: '16px'
    }}>
      <h3 style={{
        fontSize: '10px',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
        color: 'rgba(255,255,255,0.4)',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <KnobIcon active={data?.heatingOn ?? false} />
        Control
      </h3>

      <div style={{ marginBottom: '20px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
          fontSize: '11px'
        }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Target</span>
          <span style={{ 
            fontFamily: "'JetBrains Mono', monospace",
            color: '#ff6b35'
          }}>
            {targetTemp}°C
          </span>
        </div>
        
        <input
          type="range"
          min="0"
          max="500"
          value={localTarget}
          onChange={(e) => handleTargetChange(parseInt(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            appearance: 'none',
            background: `linear-gradient(90deg, #ff6b35 ${progress}%, rgba(255,255,255,0.1) ${progress}%)`,
            borderRadius: '3px',
            cursor: 'pointer'
          }}
        />
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4px',
          fontSize: '9px',
          color: 'rgba(255,255,255,0.3)'
        }}>
          <span>0°C</span>
          <span>500°C</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button
          onClick={() => onConfigChange({ heatingEnabled: !config.heatingEnabled })}
          style={{
            flex: 1,
            padding: '10px',
            background: config.heatingEnabled 
              ? 'linear-gradient(135deg, #ff6b35 0%, #ff3300 100%)' 
              : 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          {config.heatingEnabled ? 'Calefacción ON' : 'Calefacción OFF'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <button
          onClick={onToggleDoor}
          style={{
            flex: 1,
            padding: '10px',
            background: data?.doorOpen 
              ? 'rgba(255,68,68,0.2)' 
              : 'rgba(255,255,255,0.05)',
            border: `1px solid ${data?.doorOpen ? 'rgba(255,68,68,0.4)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: '8px',
            color: data?.doorOpen ? '#ff4444' : '#ffffff',
            fontSize: '11px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          {data?.doorOpen ? 'Cerrar Puerta' : 'Abrir Puerta'}
        </button>
      </div>

      <button
        onClick={onResetCycle}
        style={{
          width: '100%',
          padding: '10px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '8px',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '11px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <ResetIcon />
        Resetear Ciclo
      </button>

      <div style={{
        marginTop: '16px',
        padding: '12px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '8px',
        fontSize: '10px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '4px'
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>Velocidad</span>
          <span style={{ 
            fontFamily: "'JetBrains Mono', monospace",
            color: 'rgba(255,255,255,0.7)'
          }}>
            {config.simulationSpeed}x
          </span>
        </div>
        <input
          type="range"
          min="0.1"
          max="3"
          step="0.1"
          value={config.simulationSpeed}
          onChange={(e) => onConfigChange({ simulationSpeed: parseFloat(e.target.value) })}
          style={{
            width: '100%',
            height: '4px',
            appearance: 'none',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '2px',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
}
