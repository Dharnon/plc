'use client';

import { useState } from 'react';

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger' | 'success';
}

function ActionButton({ icon, label, onClick, variant = 'default' }: ActionButtonProps) {
  const colors = {
    default: { bg: 'rgba(255,255,255,0.1)', border: 'rgba(255,255,255,0.2)', hover: 'rgba(255,255,255,0.15)', text: '#ffffff' },
    danger: { bg: 'rgba(255,68,68,0.15)', border: 'rgba(255,68,68,0.3)', hover: 'rgba(255,68,68,0.25)', text: '#ff4444' },
    success: { bg: 'rgba(0,255,136,0.15)', border: 'rgba(0,255,136,0.3)', hover: 'rgba(0,255,136,0.25)', text: '#00ff88' }
  };
  const c = colors[variant];

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        padding: '12px 14px',
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: '10px',
        color: c.text,
        fontSize: '12px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.background = c.hover;
        e.currentTarget.style.transform = 'translateX(4px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.background = c.bg;
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      {icon}
      {label}
    </button>
  );
}

interface ActionsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleDoor: () => void;
  onResetCycle: () => void;
  onToggleHeating: () => void;
  heatingEnabled: boolean;
}

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const DoorIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  </svg>
);

const FlameIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const BookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

export default function ActionsPanel({ 
  isOpen, 
  onClose, 
  onToggleDoor, 
  onResetCycle, 
  onToggleHeating,
  heatingEnabled 
}: ActionsPanelProps) {
  return (
    <>
      {!isOpen && (
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            color: '#ffffff'
          }}
        >
          <MenuIcon />
        </button>
      )}

      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '280px',
          background: 'linear-gradient(180deg, rgba(30,30,30,0.98) 0%, rgba(20,20,20,0.98) 100%)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '16px',
          padding: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(255,255,255,0.03)',
          zIndex: 101,
          animation: 'slideIn 0.3s ease'
        }}>
          <style>{`
            @keyframes slideIn {
              from { opacity: 0; transform: translateY(20px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'rgba(255,255,255,0.5)'
            }}>
              Acciones
            </span>
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <ActionButton 
              icon={<FlameIcon />}
              label={heatingEnabled ? 'Apagar Calefacción' : 'Encender Calefacción'}
              onClick={onToggleHeating}
              variant={heatingEnabled ? 'success' : 'default'}
            />
            <ActionButton 
              icon={<DoorIcon />}
              label="Abrir/Cerrar Puerta"
              onClick={onToggleDoor}
            />
            <ActionButton 
              icon={<ResetIcon />}
              label="Resetear Ciclo"
              onClick={onResetCycle}
            />
            <ActionButton 
              icon={<BookIcon />}
              label="Documentación"
              onClick={() => window.open('http://localhost:5175', '_blank')}
            />
          </div>
        </div>
      )}
    </>
  );
}
