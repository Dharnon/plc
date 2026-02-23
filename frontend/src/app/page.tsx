'use client';

import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useOvenData } from '@/hooks/useOvenData';
import Metrics from '@/components/Metrics';
import Stats from '@/components/Stats';
import ConfigModal from '@/components/ConfigModal';
import ControlPanel from '@/components/ControlPanel';
import ActionsPanel from '@/components/ActionsPanel';
import OvenSelector from '@/components/OvenSelector';
import ModelUploader from '@/components/ModelUploader';
import Onboarding from '@/components/Onboarding';
import { ViewMode, OvenConfig, Oven, OnboardingData } from '@/lib/types';

const DEFAULT_OVENS: Oven[] = [
  { id: 'oven-1', name: 'Horno 1' },
  { id: 'oven-2', name: 'Horno 2' },
  { id: 'oven-3', name: 'Horno 3' }
];

const Oven3DScene = dynamic(() => import('@/components/OvenScene'), { 
  ssr: false,
  loading: () => (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at center, #252525 0%, #151515 100%)',
      color: 'rgba(255,255,255,0.3)'
    }}>
      Cargando modelo 3D...
    </div>
  )
});

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
  </svg>
);

const BoxIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export default function Home() {
  const [view, setView] = useState<ViewMode>('3d');
  const [configOpen, setConfigOpen] = useState(false);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [showModelUploader, setShowModelUploader] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [customModelUrl, setCustomModelUrl] = useState<string>('');
  const [ovens, setOvens] = useState<Oven[]>(DEFAULT_OVENS);
  const [selectedOven, setSelectedOven] = useState('oven-1');
  const [prevData, setPrevData] = useState<any>(null);
  const [config, setConfig] = useState<OvenConfig>({
    targetTemperature: 200,
    heatingEnabled: true,
    simulationSpeed: 1
  });
  
  const { data, isConnected, clientCount, serverUrl, setServerUrl, sendMessage } = useOvenData();

  useEffect(() => {
    const onboardingData = localStorage.getItem('onboarding');
    if (!onboardingData) {
      setShowOnboarding(true);
    }
  }, []);

  useEffect(() => {
    if (data && prevData) {
      setPrevData(data);
    } else if (data) {
      setPrevData(data);
    }
  }, [data]);

  const handleOnboardingComplete = (onboardingData: Partial<OnboardingData>) => {
    setShowOnboarding(false);
  };

  const handleConfigChange = useCallback((newConfig: Partial<OvenConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
    sendMessage({ type: 'config', payload: newConfig });
  }, [sendMessage]);

  const handleToggleDoor = useCallback(() => {
    sendMessage({ type: 'toggleDoor' });
  }, [sendMessage]);

  const handleResetCycle = useCallback(() => {
    sendMessage({ type: 'reset' });
  }, [sendMessage]);

  const handleToggleHeating = useCallback(() => {
    const newValue = !config.heatingEnabled;
    setConfig(prev => ({ ...prev, heatingEnabled: newValue }));
    sendMessage({ type: 'config', payload: { heatingEnabled: newValue } });
  }, [config.heatingEnabled, sendMessage]);

  const handleDoorClick = useCallback(() => {
    handleToggleDoor();
  }, [handleToggleDoor]);

  const handleAddOven = useCallback(() => {
    const newId = `oven-${ovens.length + 1}`;
    setOvens(prev => [...prev, { id: newId, name: `Horno ${ovens.length + 1}` }]);
    setSelectedOven(newId);
  }, [ovens.length]);

  const handleModelLoad = useCallback((url: string) => {
    setCustomModelUrl(url);
    setShowModelUploader(false);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#121212'
    }}>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.02); }
        }
        @keyframes warningPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,68,34,0.3); }
          50% { box-shadow: 0 0 35px rgba(255,68,34,0.6); }
        }
        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2); }
        }
      `}</style>

      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(30,30,30,0.8)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <h1 style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '1.5px',
            color: '#ffffff'
          }}>
            HORNO INDUSTRIAL
          </h1>
          
          <OvenSelector 
            ovens={ovens} 
            selectedOven={selectedOven} 
            onSelect={setSelectedOven}
            onAddOven={handleAddOven}
          />
          
          <span style={{
            fontSize: '9px',
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '4px 8px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '4px'
          }}>
            Banco de Pruebas
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px',
            background: isConnected ? 'rgba(0,255,136,0.08)' : 'rgba(255,68,68,0.08)',
            borderRadius: '6px',
            border: `1px solid ${isConnected ? 'rgba(0,255,136,0.2)' : 'rgba(255,68,68,0.2)'}`
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: isConnected ? '#00ff88' : '#ff4444',
              boxShadow: isConnected ? '0 0 8px #00ff88' : '0 0 8px #ff4444'
            }} />
            <span style={{
              fontSize: '10px',
              fontWeight: '600',
              fontFamily: "'JetBrains Mono', monospace",
              color: isConnected ? '#00ff88' : '#ff4444',
              letterSpacing: '1px'
            }}>
              {isConnected ? 'ONLINE' : 'OFFLINE'}
            </span>
          </div>

          <nav style={{
            display: 'flex',
            gap: '2px',
            background: 'rgba(255,255,255,0.03)',
            padding: '3px',
            borderRadius: '6px'
          }}>
            <button
              onClick={() => setView('3d')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: view === '3d' ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                borderRadius: '4px',
                color: view === '3d' ? '#ffffff' : 'rgba(255,255,255,0.4)',
                fontSize: '11px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <BoxIcon />
              Vista 3D
            </button>
            <button
              onClick={() => setView('stats')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                background: view === 'stats' ? 'rgba(255,255,255,0.1)' : 'transparent',
                border: 'none',
                borderRadius: '4px',
                color: view === 'stats' ? '#ffffff' : 'rgba(255,255,255,0.4)',
                fontSize: '11px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <ChartIcon />
              Gráficos
            </button>
          </nav>

          <button
            onClick={() => setConfigOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <SettingsIcon />
          </button>
        </div>
      </header>

      <main style={{
        flex: 1,
        display: 'flex',
        gap: '20px',
        padding: '20px'
      }}>
        <div style={{
          flex: 1,
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}>
          {showModelUploader && (
            <ModelUploader 
              onModelLoad={handleModelLoad} 
              currentModel={customModelUrl}
            />
          )}
          
          {view === '3d' ? (
            <>
              <Oven3DScene data={data} onDoorClick={handleDoorClick} />
              <button
                onClick={() => setShowModelUploader(true)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '6px',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '11px',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                Cambiar Modelo 3D
              </button>
            </>
          ) : (
            <Stats data={data} />
          )}
        </div>

        <div style={{
          width: '340px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <Metrics data={data} prevData={prevData} />
          
          <ControlPanel 
            data={data}
            config={config}
            onConfigChange={handleConfigChange}
            onToggleDoor={handleToggleDoor}
            onResetCycle={handleResetCycle}
          />

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '14px'
          }}>
            <h3 style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '12px'
            }}>
              Información del Sistema
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              fontSize: '11px'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Servidor WebSocket</span>
                <span style={{ 
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'rgba(255,255,255,0.6)'
                }}>
                  {serverUrl}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Clientes Conectados</span>
                <span style={{ 
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'rgba(255,255,255,0.6)'
                }}>
                  {clientCount}
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Target Temperature</span>
                <span style={{ 
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#ff6b35'
                }}>
                  {data?.targetTemperature ?? '--'}°C
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Última Actualización</span>
                <span style={{ 
                  fontFamily: "'JetBrains Mono', monospace",
                  color: 'rgba(255,255,255,0.6)'
                }}>
                  {data ? new Date(data.timestamp).toLocaleTimeString() : '--:--:--'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <ConfigModal
        isOpen={configOpen}
        onClose={() => setConfigOpen(false)}
        serverUrl={serverUrl}
        onSave={setServerUrl}
        isConnected={isConnected}
      />

      <ActionsPanel
        isOpen={actionsOpen}
        onClose={() => setActionsOpen(!actionsOpen)}
        onToggleDoor={handleToggleDoor}
        onResetCycle={handleResetCycle}
        onToggleHeating={handleToggleHeating}
        heatingEnabled={config.heatingEnabled}
      />

      <Onboarding 
        isOpen={showOnboarding} 
        onComplete={handleOnboardingComplete}
      />
    </div>
  );
}
