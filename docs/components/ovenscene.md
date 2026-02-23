# Componente OvenScene

El componente `OvenScene.tsx` proporciona la visualización 3D del horno usando Three.js y React Three Fiber.

## Características

- **Modelo 3D**: Horno generado proceduralmente
- **Puerta Interactiva**: Se puede abrir/cerrar con click
- **Controles Visuales**: Panel de control en el modelo
- **Vents Animados**: Respiraderos que se mueven según el estado
- **Etiquetas**: Nubes de texto con valores en tiempo real

## Uso

```tsx
import { Canvas } from '@react-three/fiber';
import OvenScene from '@/components/OvenScene';

<Canvas>
  <OvenScene 
    ovenData={ovenData} 
    onDoorToggle={handleDoorToggle}
  />
</Canvas>
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| ovenData | OvenData | Datos actuales del horno |
| customModel | GLTFObject | Modelo 3D personalizado (opcional) |
| onDoorToggle | () => void | Callback al abrir/cerrar puerta |

## Integración con Three.js

- Usa `@react-three/fiber` para React integration
- Usa `@react-three/drei` para helpers (OrbitControls, Text, etc.)
- Geometry procedural para el horno base
- Carga modelos externos con `useGLTF`

## Carga de Modelos Personalizados

```tsx
import { useGLTF } from '@react-three/drei';

function CustomOvenModel({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}
```

## Rendimiento

- Usa `useFrame` para animaciones suaves
- Optimizado para 60fps
- Memoria gestionada automáticamente
