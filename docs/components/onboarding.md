# Componente Onboarding

El componente `Onboarding.tsx` guía a los usuarios nuevos a través de la configuración inicial del sistema.

## Características

- **5 Pasos**:
  1. Welcome - Bienvenida e introducción
  2. Connection - Configuración de conexión OPC UA
  3. Tags - Configuración de tags/tags a monitorear
  4. Model - Carga de modelo 3D opcional
  5. Complete - Finalización y resumen

- **Diseño**:
  - Modal flotante con pasos progreso
  - Validación de campos
  - Persistencia de estado
  - Botones de navegación (Atrás/Siguiente)

## Uso

```tsx
import Onboarding from '@/components/Onboarding';

<Onboarding isOpen={showOnboarding} onComplete={handleComplete} />
```

## Props

| Prop | Tipo | Descripción |
|------|------|-------------|
| isOpen | boolean | Controla visibilidad del modal |
| onComplete | () => void | Callback al completar onboarding |
| onSkip | () => void | Callback al omitir (opcional) |

## Estado Guardado

El estado del onboarding se guarda en localStorage:
- `onboarding:completed` - Indica si ya se completó
- `onboarding:config` - Configuración introducida
