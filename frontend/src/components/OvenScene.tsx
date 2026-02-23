'use client';

import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { OvenData } from '@/lib/types';

interface OvenModelProps {
  data: OvenData | null;
  onDoorClick: () => void;
  onControlPanelClick: () => void;
}

function MetalMaterial({ color = '#1a1a1a' }: { color?: string }) {
  return (
    <meshStandardMaterial 
      color={color} 
      metalness={0.85} 
      roughness={0.15}
    />
  );
}

function OvenBody({ data }: { data: OvenData | null }) {
  const temp = data?.temperatureInside ?? 25;
  const heating = data?.heatingOn ?? false;
  
  const bodyColor = useMemo(() => {
    if (heating) {
      const t = Math.min(temp / 400, 1);
      return new THREE.Color('#888888').lerp(new THREE.Color('#cc6633'), t);
    }
    return new THREE.Color('#999999');
  }, [temp, heating]);

  return (
    <group>
      <RoundedBox args={[2.4, 1.4, 1.4]} radius={0.03} smoothness={4} position={[0, 0.7, 0]}>
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.3} />
      </RoundedBox>
    </group>
  );
}

function OvenChamber({ data }: { data: OvenData | null }) {
  const heating = data?.heatingOn ?? false;
  const temp = data?.temperatureInside ?? 25;
  const intensity = heating ? Math.min(temp / 300, 1) : 0;

  return (
    <group position={[0, 0.7, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.2, 1.2, 1.2]} />
        <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh position={[0, 0, 0.61]}>
        <boxGeometry args={[2, 1, 0.02]} />
        <meshStandardMaterial 
          color="#444444" 
          metalness={0.9} 
          roughness={0.1}
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.02, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.02, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.1, 0, 0]}>
        <boxGeometry args={[0.02, 1, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.1, 0, 0]}>
        <boxGeometry args={[0.02, 1, 1]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh position={[0, 0, 0.61]}>
        <boxGeometry args={[2, 1, 0.02]} />
        <meshStandardMaterial 
          color="#111111" 
          metalness={0.95} 
          roughness={0.05}
          transparent
          opacity={0.7}
        />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[2, 0.02, 1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.5, 0]}>
        <boxGeometry args={[2, 0.02, 1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.1, 0, 0]}>
        <boxGeometry args={[0.02, 1, 1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[-1.1, 0, 0]}>
        <boxGeometry args={[0.02, 1, 1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>

      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[-0.8 + i * 0.4, 0.45, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.015, 0.8, 8]} />
          <meshStandardMaterial 
            color={heating ? '#ff3300' : '#222222'} 
            emissive={heating ? '#ff2200' : '#000000'}
            emissiveIntensity={intensity * 2}
          />
        </mesh>
      ))}
    </group>
  );
}

function Door({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  const doorRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (doorRef.current) {
      const targetRotation = isOpen ? -Math.PI / 3 : 0;
      doorRef.current.rotation.x = THREE.MathUtils.lerp(doorRef.current.rotation.x, targetRotation, 0.05);
    }
  });

  return (
    <group ref={doorRef} position={[0, 0.02, 0.62]}>
      <mesh
        position={[0, 0.7, 0]}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 1.2, 0.04]} />
        <meshStandardMaterial 
          color={hovered ? '#222222' : '#181818'} 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>

      <mesh position={[0.7, 0.7, 0.03]}>
        <boxGeometry args={[0.25, 0.4, 0.02]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[-0.85, 0.7, 0.025]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
        <meshStandardMaterial color="#333333" metalness={1} roughness={0.2} />
      </mesh>
      <mesh position={[-0.85, 0.5, 0.025]}>
        <cylinderGeometry args={[0.015, 0.015, 0.04, 16]} />
        <meshStandardMaterial color="#333333" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
}

function ControlPanel({ data, onClick }: { data: OvenData | null; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const heating = data?.heatingOn ?? false;

  return (
    <group position={[-1.21, 0.9, 0]}>
      <mesh>
        <boxGeometry args={[0.05, 0.35, 0.6]} />
        <meshStandardMaterial color="#151515" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[0.03, 0.1, 0.15]} onClick={onClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <circleGeometry args={[0.04, 32]} />
        <meshStandardMaterial 
          color={heating ? '#00ff44' : '#114411'} 
          emissive={heating ? '#00ff44' : '#000000'}
          emissiveIntensity={heating ? 0.8 : 0}
        />
      </mesh>

      <mesh position={[0.03, 0.1, -0.1]}>
        <circleGeometry args={[0.025, 32]} />
        <meshStandardMaterial 
          color={data?.doorOpen ? '#ff3333' : '#331111'} 
          emissive={data?.doorOpen ? '#ff0000' : '#000000'}
          emissiveIntensity={data?.doorOpen ? 0.6 : 0}
        />
      </mesh>

      <mesh position={[0.03, -0.05, 0]}>
        <boxGeometry args={[0.02, 0.08, 0.15]} />
        <meshStandardMaterial color="#222222" metalness={0.7} roughness={0.3} />
      </mesh>

      <mesh position={[0.026, 0.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.08, 0.005, 0.01]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
    </group>
  );
}

function Vents() {
  return (
    <group>
      {[...Array(3)].map((_, row) => (
        [...Array(6)].map((_, col) => (
          <mesh key={`${row}-${col}`} position={[-0.6 + col * 0.2, 1.35, -0.4 + row * 0.15]}>
            <boxGeometry args={[0.12, 0.02, 0.08]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
          </mesh>
        ))
      ))}
      
      {[...Array(2)].map((_, row) => (
        [...Array(4)].map((_, col) => (
          <mesh key={`side-${row}-${col}`} position={[1.22, 0.3 + row * 0.4, -0.3 + col * 0.2]}>
            <boxGeometry args={[0.02, 0.15, 0.1]} />
            <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
          </mesh>
        ))
      ))}
    </group>
  );
}

function Base() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.08, 1.5]} />
        <meshStandardMaterial color="#0f0f0f" metalness={0.8} roughness={0.2} />
      </mesh>

      {[-1, 1].map((x) => (
        <mesh key={x} position={[x * 1.1, -0.08, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.1, 16]} />
          <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingMetric({ 
  value, 
  label, 
  unit, 
  position, 
  color,
  warning = false,
  progress = 0 
}: { 
  value: number | string; 
  label: string; 
  unit: string;
  position: [number, number, number];
  color: string;
  warning?: boolean;
  progress?: number;
}) {
  const segments = 20;
  const filledSegments = Math.round((progress / 100) * segments);
  
  return (
    <Html position={position} center distanceFactor={4} style={{ zIndex: 100 }}>
      <style>{`
        @keyframes warningBorder {
          0%, 100% { border-color: rgba(255,68,34,0.3); }
          50% { border-color: rgba(255,68,34,1); }
        }
      `}</style>
      <div style={{
        background: `linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(10,10,10,0.98) 100%)`,
        backdropFilter: 'blur(16px)',
        border: warning
          ? '2px solid rgba(255,68,34,0.5)'
          : `1px solid ${color}40`,
        borderRadius: '12px',
        padding: '12px 16px',
        minWidth: '120px',
        textAlign: 'center',
        boxShadow: warning ? 'none' : `0 8px 32px rgba(0,0,0,0.8), 0 0 20px ${color}20, inset 0 0 30px ${color}08`,
        animation: warning ? 'warningBorder 0.8s infinite' : 'none',
        transform: 'perspective(500px)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          marginBottom: '6px'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: color,
            boxShadow: warning ? 'none' : `0 0 8px ${color}`
          }} />
          <div style={{
            fontSize: '7px',
            color: 'rgba(255,255,255,0.5)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: '600'
          }}>
            {label}
          </div>
        </div>
        <div style={{
          fontSize: '24px',
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: '600',
          color: warning ? '#ff4422' : '#ffffff',
          textShadow: warning ? 'none' : `0 0 20px ${color}40`,
          lineHeight: 1
        }}>
          {typeof value === 'number' ? value.toFixed(1) : value}
        </div>
        <div style={{
          fontSize: '10px',
          color: 'rgba(255,255,255,0.4)',
          fontWeight: '500',
          marginTop: '2px'
        }}>
          {unit}
        </div>
        
        {progress > 0 && (
          <div style={{
            display: 'flex',
            gap: '2px',
            justifyContent: 'center',
            marginTop: '10px'
          }}>
            {[...Array(segments)].map((_, i) => (
              <div key={i} style={{
                width: '4px',
                height: '10px',
                borderRadius: '2px',
                background: i < filledSegments 
                  ? color 
                  : 'rgba(255,255,255,0.12)',
                boxShadow: i < filledSegments 
                  ? `0 0 8px ${color}` 
                  : 'none',
                transition: 'all 0.2s ease'
              }} />
            ))}
          </div>
        )}
      </div>
    </Html>
  );
}

function StatusIndicators({ data }: { data: OvenData | null }) {
  const heating = data?.heatingOn ?? false;
  const doorOpen = data?.doorOpen ?? false;

  return (
    <group position={[-1.15, 1.15, 0.5]}>
      <Float speed={3} rotationIntensity={0} floatIntensity={0.3}>
        <mesh position={[0, 0.08, 0]}>
          <circleGeometry args={[0.035, 32]} />
          <meshStandardMaterial 
            color={heating ? '#00ff66' : '#0a2a15'} 
            emissive={heating ? '#00ff44' : '#000000'}
            emissiveIntensity={heating ? 1.2 : 0}
          />
        </mesh>
        
        <mesh position={[0, -0.08, 0]}>
          <circleGeometry args={[0.035, 32]} />
          <meshStandardMaterial 
            color={doorOpen ? '#ff4444' : '#2a0a0a'} 
            emissive={doorOpen ? '#ff2222' : '#000000'}
            emissiveIntensity={doorOpen ? 1 : 0}
          />
        </mesh>
      </Float>
    </group>
  );
}

function OvenModel({ data, onDoorClick, onControlPanelClick }: OvenModelProps) {
  const tempProgress = data ? Math.min((data.temperatureInside / data.targetTemperature) * 100, 100) : 0;
  const powerProgress = data ? Math.min((data.power / 15) * 100, 100) : 0;
  
  return (
    <group>
      <OvenBody data={data} />
      <OvenChamber data={data} />
      <Door isOpen={data?.doorOpen ?? false} onClick={onDoorClick} />
      <ControlPanel data={data} onClick={onControlPanelClick} />
      <Vents />
      <Base />
      <StatusIndicators data={data} />

      {data && (
        <>
          <FloatingMetric
            value={data.temperatureInside}
            label="Temperatura"
            unit="°C"
            position={[0, 2.1, 0]}
            color="#ff6b35"
            warning={data.temperatureInside > 300}
            progress={tempProgress}
          />
          <FloatingMetric
            value={data.power}
            label="Potencia"
            unit="kW"
            position={[1.8, 0.7, 0]}
            color="#00ff88"
            progress={powerProgress}
          />
          <FloatingMetric
            value={data.pressure}
            label="Presión"
            unit="bar"
            position={[-1.8, 0.7, 0]}
            color="#4488ff"
          />
        </>
      )}
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.12, 0]} receiveShadow>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial color="#1a1a1a" />
    </mesh>
  );
}

function GridFloor() {
  return (
    <gridHelper args={[15, 30, '#252525', '#1a1a1a']} position={[0, -0.11, 0]} />
  );
}

function Scene({ data, onDoorClick, onControlPanelClick }: OvenModelProps) {
  const heating = data?.heatingOn ?? false;
  const heatIntensity = heating ? (data?.power ?? 0) / 15 : 0;
  
  return (
    <>
      <hemisphereLight intensity={0.8} color="#e8e8e8" groundColor="#444444" />
      <ambientLight intensity={1.0} />
      <directionalLight 
        position={[8, 15, 8]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight 
        position={[-8, 10, -8]} 
        intensity={0.8} 
        color="#cccccc"
      />
      <directionalLight 
        position={[0, -5, 8]} 
        intensity={0.4} 
        color="#ffffff"
      />
      <pointLight position={[-6, 4, -6]} intensity={0.8} color="#6688aa" />
      <pointLight position={[6, 5, 6]} intensity={0.6 + heatIntensity * 0.8} color="#ff6b35" />
      <pointLight position={[0, 10, 0]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-5, 2, 5]} intensity={0.5} color="#88aacc" />
      <spotLight 
        position={[0, 15, 8]} 
        angle={0.7} 
        penumbra={1} 
        intensity={1.0} 
        color="#ffffff"
        castShadow
      />
      
      <OvenModel 
        data={data} 
        onDoorClick={onDoorClick} 
        onControlPanelClick={onControlPanelClick}
      />
      
      <Floor />
      <GridFloor />
      
      <ContactShadows 
        position={[0, 0, 0]} 
        opacity={0.7} 
        scale={12} 
        blur={3} 
        far={6}
      />
      
      <Environment preset="night" />
      <OrbitControls 
        enablePan={true}
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI / 2.05}
        minDistance={2}
        maxDistance={12}
        autoRotate={false}
        autoRotateSpeed={0.3}
        dampingFactor={0.05}
        enableDamping
      />
    </>
  );
}

interface Oven3DSceneProps {
  data: OvenData | null;
  onDoorClick: () => void;
  onControlPanelClick?: () => void;
}

export default function Oven3DScene({ data, onDoorClick, onControlPanelClick }: Oven3DSceneProps) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', position: 'relative' }}>
      <Canvas
        camera={{ position: [5, 4, 5], fov: 35 }}
        style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)' }}
        shadows
        dpr={[1, 2]}
      >
        <Scene 
          data={data} 
          onDoorClick={onDoorClick} 
          onControlPanelClick={onControlPanelClick || onDoorClick}
        />
      </Canvas>
    </div>
  );
}
