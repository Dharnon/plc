'use client';

import { useState, useRef } from 'react';

interface ModelUploaderProps {
  onModelLoad: (url: string) => void;
  currentModel?: string;
}

const UploadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const CubeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export default function ModelUploader({ onModelLoad, currentModel }: ModelUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file: File) => {
    if (!file.name.match(/\.(glb|gltf)$/i)) {
      alert('Solo se admiten archivos .glb o .gltf');
      return;
    }

    setLoading(true);
    const url = URL.createObjectURL(file);
    onModelLoad(url);
    setLoading(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,10,10,0.95)',
      zIndex: 50
    }}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".glb,.gltf"
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '40px',
          border: isDragging 
            ? '2px dashed #00ff88' 
            : '2px dashed rgba(255,255,255,0.2)',
          borderRadius: '16px',
          background: isDragging 
            ? 'rgba(0,255,136,0.05)' 
            : 'rgba(255,255,255,0.02)',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
      >
        {loading ? (
          <div style={{ color: 'rgba(255,255,255,0.5)' }}>Cargando modelo...</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <CubeIcon />
            <div style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '500'
            }}>
              Arrastra tu modelo 3D aquí
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)'
            }}>
              o haz click para seleccionar
            </div>
            <div style={{
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
              marginTop: '8px'
            }}>
              Formatos soportados: .glb, .gltf
            </div>
          </div>
        )}
      </div>

      {currentModel && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onModelLoad('');
          }}
          style={{
            marginTop: '16px',
            padding: '8px 16px',
            background: 'rgba(255,68,68,0.1)',
            border: '1px solid rgba(255,68,68,0.3)',
            borderRadius: '6px',
            color: '#ff4444',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Usar modelo por defecto
        </button>
      )}
    </div>
  );
}
