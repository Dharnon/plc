'use client';

import { useState, useEffect } from 'react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  serverUrl: string;
  onSave: (url: string) => void;
  isConnected: boolean;
}

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ServerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const DatabaseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default function ConfigModal({ isOpen, onClose, serverUrl, onSave, isConnected }: ConfigModalProps) {
  const [wsUrl, setWsUrl] = useState(serverUrl);
  const [apiUrl, setApiUrl] = useState('http://localhost:3001');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      setWsUrl(serverUrl);
      setApiUrl(serverUrl.replace('ws://', 'http://').replace('wss://', 'https://').replace(':8080', ':3001'));
    }
  }, [isOpen, serverUrl]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(wsUrl);
    onClose();
  };

  const testConnection = async () => {
    setTestStatus('testing');
    try {
      const response = await fetch(`${apiUrl}/api/health`);
      if (response.ok) {
        setTestStatus('success');
      } else {
        setTestStatus('error');
      }
    } catch {
      setTestStatus('error');
    }
    setTimeout(() => setTestStatus('idle'), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        background: '#080808',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        padding: '28px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '16px',
            fontWeight: '500',
            color: '#ffffff',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <LinkIcon />
            Configuración de Conexión
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            <CloseIcon />
          </button>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            marginBottom: '8px'
          }}>
            <ServerIcon /> Servidor WebSocket
          </label>
          <input
            type="text"
            value={wsUrl}
            onChange={(e) => setWsUrl(e.target.value)}
            placeholder="ws://192.168.1.100:8080"
            style={{
              width: '100%',
              padding: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '13px',
              fontFamily: "'JetBrains Mono', monospace",
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            fontSize: '10px',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            marginBottom: '8px'
          }}>
            <DatabaseIcon /> Servidor API REST
          </label>
          <input
            type="text"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            placeholder="http://192.168.1.100:3001"
            style={{
              width: '100%',
              padding: '14px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '13px',
              fontFamily: "'JetBrains Mono', monospace",
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s'
            }}
          />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
          padding: '14px',
          background: isConnected ? 'rgba(0,255,136,0.08)' : 'rgba(255,68,68,0.08)',
          borderRadius: '8px',
          border: `1px solid ${isConnected ? 'rgba(0,255,136,0.2)' : 'rgba(255,68,68,0.2)'}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: isConnected ? '#00ff88' : '#ff4444',
              boxShadow: isConnected ? '0 0 10px #00ff88' : '0 0 10px #ff4444'
            }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '500',
              color: isConnected ? '#00ff88' : '#ff4444'
            }}>
              {isConnected ? 'Conectado al PLC' : 'Desconectado'}
            </span>
          </div>
          
          <button
            onClick={testConnection}
            disabled={testStatus === 'testing'}
            style={{
              padding: '8px 16px',
              background: testStatus === 'testing' 
                ? 'rgba(255,255,255,0.1)' 
                : testStatus === 'success' 
                  ? 'rgba(0,255,136,0.2)' 
                  : testStatus === 'error' 
                    ? 'rgba(255,68,68,0.2)' 
                    : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px',
              color: '#ffffff',
              fontSize: '11px',
              cursor: testStatus === 'testing' ? 'wait' : 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {testStatus === 'testing' ? 'Probando...' : 
             testStatus === 'success' ? 'OK' : 
             testStatus === 'error' ? 'Error' : 'Probar'}
          </button>
        </div>

        <button
          onClick={handleSave}
          style={{
            width: '100%',
            padding: '14px',
            background: '#ffffff',
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.1s'
          }}
        >
          Conectar
        </button>
      </div>
    </div>
  );
}
