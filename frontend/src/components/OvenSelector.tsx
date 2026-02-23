'use client';

import { Oven } from '@/lib/types';

interface OvenSelectorProps {
  ovens: Oven[];
  selectedOven: string;
  onSelect: (ovenId: string) => void;
  onAddOven: () => void;
}

const OvenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function OvenSelector({ ovens, selectedOven, onSelect, onAddOven }: OvenSelectorProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    }}>
      <div style={{
        display: 'flex',
        gap: '2px',
        background: 'rgba(255,255,255,0.05)',
        padding: '3px',
        borderRadius: '6px'
      }}>
        {ovens.map((oven) => (
          <button
            key={oven.id}
            onClick={() => onSelect(oven.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              background: selectedOven === oven.id ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none',
              borderRadius: '4px',
              color: selectedOven === oven.id ? '#ffffff' : 'rgba(255,255,255,0.4)',
              fontSize: '11px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <OvenIcon />
            {oven.name}
          </button>
        ))}
      </div>
      
      <button
        onClick={onAddOven}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          background: 'rgba(255,255,255,0.05)',
          border: '1px dashed rgba(255,255,255,0.2)',
          borderRadius: '6px',
          color: 'rgba(255,255,255,0.4)',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
