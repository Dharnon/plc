'use client';

import { useState, useEffect } from 'react';
import { OnboardingData, OpcUaConfig, OpcUaTag } from '@/lib/types';

interface OnboardingProps {
  isOpen: boolean;
  onComplete: (data: Partial<OnboardingData>) => void;
}

const steps = [
  {
    id: 0,
    title: 'Bienvenido',
    description: 'Sistema de Monitorización de Horno Industrial',
    icon: '🏭'
  },
  {
    id: 1,
    title: 'Conexión PLC',
    description: 'Configura la conexión al servidor OPC UA',
    icon: '🔌'
  },
  {
    id: 2,
    title: 'Variables',
    description: 'Selecciona las variables a monitorizar',
    icon: '📊'
  },
  {
    id: 3,
    title: 'Modelo 3D',
    description: 'Sube tu modelo o usa el predeterminado',
    icon: '🎨'
  },
  {
    id: 4,
    title: 'Completado',
    description: '¡Listo para comenzar!',
    icon: '✅'
  }
];

function WelcomeStep({ onNext }: { onNext: () => void }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '20px'
    }}>
      <div style={{
        fontSize: '64px',
        lineHeight: 1
      }}>
        🏭
      </div>
      
      <div style={{
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '8px'
        }}>
          Sistema de Monitorización
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '300px'
        }}>
          Panel de control industrial para hornos con simulación en tiempo real y visualización 3D
        </p>
      </div>

      <button
        onClick={onNext}
        style={{
          padding: '14px 32px',
          background: '#ffffff',
          color: '#000000',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '16px'
        }}
      >
        Comenzar Configuración
      </button>
    </div>
  );
}

function ConnectionStep({ 
  config, 
  onChange, 
  onNext,
  onBack 
}: { 
  config: Partial<OpcUaConfig>;
  onChange: (config: Partial<OpcUaConfig>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <span style={{ fontSize: '32px' }}>🔌</span>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Conexión OPC UA
          </h3>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            margin: 0
          }}>
            Configura la conexión al servidor PLC
          </p>
        </div>
      </div>

      <div>
        <label style={{
          display: 'block',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '6px'
        }}>
          Endpoint OPC UA
        </label>
        <input
          type="text"
          value={config.endpoint || ''}
          onChange={(e) => onChange({ endpoint: e.target.value })}
          placeholder="opc.tcp://192.168.1.100:4840"
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: '#ffffff',
            fontSize: '13px',
            fontFamily: "'JetBrains Mono', monospace"
          }}
        />
      </div>

      <div>
        <label style={{
          display: 'block',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '6px'
        }}>
          Seguridad
        </label>
        <select
          value={config.securityPolicy || 'None'}
          onChange={(e) => onChange({ securityPolicy: e.target.value as any })}
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: '#ffffff',
            fontSize: '13px'
          }}
        >
          <option value="None">Ninguna</option>
          <option value="Basic128Rsa15">Basic128Rsa15</option>
          <option value="Basic256">Basic256</option>
          <option value="Basic256Sha256">Basic256Sha256</option>
        </select>
      </div>

      <div>
        <label style={{
          display: 'block',
          fontSize: '11px',
          color: 'rgba(255,255,255,0.5)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '6px'
        }}>
          Autenticación
        </label>
        <select
          value={config.authenticationMode || 'Anonymous'}
          onChange={(e) => onChange({ authenticationMode: e.target.value as any })}
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: '#ffffff',
            fontSize: '13px'
          }}
        >
          <option value="Anonymous">Anónima</option>
          <option value="Username">Usuario y Contraseña</option>
        </select>
      </div>

      {config.authenticationMode === 'Username' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '6px'
            }}>
              Usuario
            </label>
            <input
              type="text"
              value={config.username || ''}
              onChange={(e) => onChange({ username: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '13px'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '6px'
            }}>
              Contraseña
            </label>
            <input
              type="password"
              value={config.password || ''}
              onChange={(e) => onChange({ password: e.target.value })}
              style={{
                width: '100%',
                padding: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '6px',
                color: '#ffffff',
                fontSize: '13px'
              }}
            />
          </div>
        </div>
      )}

      <div style={{
        padding: '12px',
        background: 'rgba(255,170,0,0.1)',
        border: '1px solid rgba(255,170,0,0.3)',
        borderRadius: '6px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontSize: '14px' }}>ℹ️</span>
          <span style={{ fontSize: '12px', color: '#ffaa00' }}>
            Modo Simulación
          </span>
        </div>
        <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
          Por ahora se usará simulación. Podrás conectar a un PLC real más tarde.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          Atrás
        </button>
        <button
          onClick={onNext}
          style={{
            flex: 1,
            padding: '12px',
            background: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            color: '#000000',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function TagsStep({ 
  selectedTags, 
  onChange, 
  onNext,
  onBack 
}: { 
  selectedTags: string[];
  onChange: (tags: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const availableTags = [
    { id: 'temperature', name: 'Temperatura Interior', unit: '°C', icon: '🌡️' },
    { id: 'temperatureOutside', name: 'Temperatura Exterior', unit: '°C', icon: '🌡️' },
    { id: 'pressure', name: 'Presión', unit: 'bar', icon: '🔵' },
    { id: 'power', name: 'Consumo Energético', unit: 'kW', icon: '⚡' },
    { id: 'humidity', name: 'Humedad', unit: '%', icon: '💧' },
    { id: 'cycleTime', name: 'Tiempo de Ciclo', unit: 's', icon: '⏱️' },
    { id: 'doorOpen', name: 'Estado Puerta', unit: '', icon: '🚪' },
    { id: 'heatingOn', name: 'Calefacción', unit: '', icon: '🔥' }
  ];

  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onChange(selectedTags.filter(t => t !== tagId));
    } else {
      onChange([...selectedTags, tagId]);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <span style={{ fontSize: '32px' }}>📊</span>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Variables del Horno
          </h3>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            margin: 0
          }}>
            Selecciona las variables a monitorizar
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px'
      }}>
        {availableTags.map(tag => (
          <button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px',
              background: selectedTags.includes(tag.id) 
                ? 'rgba(0,255,136,0.1)' 
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${selectedTags.includes(tag.id) 
                ? 'rgba(0,255,136,0.4)' 
                : 'rgba(255,255,255,0.08)'}`,
              borderRadius: '8px',
              cursor: 'pointer',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '16px' }}>{tag.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '12px',
                color: selectedTags.includes(tag.id) ? '#00ff88' : '#ffffff',
                fontWeight: '500'
              }}>
                {tag.name}
              </div>
              {tag.unit && (
                <div style={{
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.4)'
                }}>
                  {tag.unit}
                </div>
              )}
            </div>
            {selectedTags.includes(tag.id) && (
              <div style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#00ff88',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: '#000000'
              }}>
                ✓
              </div>
            )}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          Atrás
        </button>
        <button
          onClick={onNext}
          style={{
            flex: 1,
            padding: '12px',
            background: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            color: '#000000',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function ModelStep({ 
  hasCustomModel, 
  onChange, 
  onNext,
  onBack,
  onOpenUploader
}: { 
  hasCustomModel: boolean;
  onChange: (hasModel: boolean) => void;
  onNext: () => void;
  onBack: () => void;
  onOpenUploader: () => void;
}) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <span style={{ fontSize: '32px' }}>🎨</span>
        <div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            margin: 0
          }}>
            Modelo 3D
          </h3>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.5)',
            margin: 0
          }}>
            Elige el modelo visual para el horno
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <button
          onClick={() => onChange(false)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '20px',
            background: !hasCustomModel 
              ? 'rgba(0,255,136,0.1)' 
              : 'rgba(255,255,255,0.03)',
            border: `1px solid ${!hasCustomModel 
              ? 'rgba(0,255,136,0.4)' 
              : 'rgba(255,255,255,0.08)'}`,
            borderRadius: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '40px' }}>🏭</span>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '14px',
              color: !hasCustomModel ? '#00ff88' : '#ffffff',
              fontWeight: '500'
            }}>
              Modelo Predeterminado
            </div>
            <div style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '4px'
            }}>
              Horno industrial genérico
            </div>
          </div>
        </button>

        <button
          onClick={onOpenUploader}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            padding: '20px',
            background: hasCustomModel 
              ? 'rgba(0,255,136,0.1)' 
              : 'rgba(255,255,255,0.03)',
            border: `1px solid ${hasCustomModel 
              ? 'rgba(0,255,136,0.4)' 
              : 'rgba(255,255,255,0.08)'}`,
            borderRadius: '12px',
            cursor: 'pointer'
          }}
        >
          <span style={{ fontSize: '40px' }}>📁</span>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '14px',
              color: hasCustomModel ? '#00ff88' : '#ffffff',
              fontWeight: '500'
            }}>
              Subir Modelo
            </div>
            <div style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '4px'
            }}>
              Arrastra archivo .glb/.gltf
            </div>
          </div>
        </button>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        <button
          onClick={onBack}
          style={{
            flex: 1,
            padding: '12px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '6px',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          Atrás
        </button>
        <button
          onClick={onNext}
          style={{
            flex: 1,
            padding: '12px',
            background: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            color: '#000000',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

function CompleteStep({ onFinish }: { onFinish: () => void }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        boxShadow: '0 0 40px rgba(0,255,136,0.4)'
      }}>
        ✓
      </div>
      
      <div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: '#ffffff',
          marginBottom: '8px'
        }}>
          ¡Configuración Completada!
        </h2>
        <p style={{
          fontSize: '14px',
          color: 'rgba(255,255,255,0.5)',
          maxWidth: '300px'
        }}>
          El sistema está listo para usar. Puedes cambiar la configuración en cualquier momento.
        </p>
      </div>

      <button
        onClick={onFinish}
        style={{
          padding: '14px 48px',
          background: '#ffffff',
          color: '#000000',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          marginTop: '16px'
        }}
      >
        Ir al Dashboard
      </button>
    </div>
  );
}

export default function Onboarding({ isOpen, onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [config, setConfig] = useState<Partial<OpcUaConfig>>({
    endpoint: 'opc.tcp://localhost:4840',
    securityPolicy: 'None',
    authenticationMode: 'Anonymous'
  });
  const [selectedTags, setSelectedTags] = useState<string[]>([
    'temperature', 'pressure', 'power', 'doorOpen', 'heatingOn'
  ]);
  const [hasCustomModel, setHasCustomModel] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('onboarding');
    if (saved && !isOpen) return;
    
    const step = localStorage.getItem('onboardingStep');
    if (step) setCurrentStep(parseInt(step));
  }, [isOpen]);

  const handleNext = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    localStorage.setItem('onboardingStep', nextStep.toString());
    
    if (nextStep === 4) {
      const data: OnboardingData = {
        completed: true,
        currentStep: 0,
        configId: config.id,
        selectedTags,
        hasCustomModel
      };
      localStorage.setItem('onboarding', JSON.stringify(data));
      localStorage.setItem('opcuaConfig', JSON.stringify(config));
      onComplete(data);
    }
  };

  const handleBack = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    localStorage.setItem('onboardingStep', prevStep.toString());
  };

  const handleFinish = () => {
    const data: OnboardingData = {
      completed: true,
      currentStep: 0,
      configId: config.id,
      selectedTags,
      hasCustomModel
    };
    localStorage.setItem('onboarding', JSON.stringify(data));
    localStorage.setItem('opcuaConfig', JSON.stringify(config));
    onComplete(data);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.9)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: '#0a0a0a',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '16px',
        overflow: 'hidden'
      }}>
        <div style={{
          display: 'flex',
          padding: '16px 20px',
          gap: '8px',
          borderBottom: '1px solid rgba(255,255,255,0.06)'
        }}>
          {steps.map((step, index) => (
            <div
              key={step.id}
              style={{
                flex: 1,
                height: '4px',
                borderRadius: '2px',
                background: index <= currentStep 
                  ? index === currentStep ? '#ffffff' : '#00ff88'
                  : 'rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        {currentStep === 0 && <WelcomeStep onNext={handleNext} />}
        {currentStep === 1 && (
          <ConnectionStep 
            config={config} 
            onChange={setConfig} 
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 2 && (
          <TagsStep 
            selectedTags={selectedTags}
            onChange={setSelectedTags}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {currentStep === 3 && (
          <ModelStep 
            hasCustomModel={hasCustomModel}
            onChange={setHasCustomModel}
            onNext={handleNext}
            onBack={handleBack}
            onOpenUploader={() => {}}
          />
        )}
        {currentStep === 4 && <CompleteStep onFinish={handleFinish} />}
      </div>
    </div>
  );
}
