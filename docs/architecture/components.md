# Componentes

## Frontend Components

### OvenScene.tsx
Componente principal de visualización 3D.
- Renderiza el modelo del horno con Three.js
- Puertas interactivas (apertura/cierre)
- Controles de temperatura visuales
- Vents animados

### Metrics.tsx
Panel de métricas flotante.
- Progress bars segmentados (20 segmentos)
- Estados: normal (azul), warning (borde rojo parpadeante), critical
- Temperatura, Presión, Humedad, Consumo

### ControlPanel.tsx
Panel de control del horno.
- Encendido/Apagado
- Ajuste de temperatura objetivo
- Modo de operación

### ActionsPanel.tsx
Panel de acciones flotante.
- Toggle simulación
- Abrir documentación
- Configuración
- Selector de idioma (futuro)

### ConfigModal.tsx
Modal de configuración OPC UA.
- Endpoint URL
- Security Policy
- Authentication Mode
- Test connection

### OvenSelector.tsx
Selector de múltiples hornos.
- Lista de hornos disponibles
- Agregar nuevo horno
- Eliminar horno

### ModelUploader.tsx
Cargador de modelos 3D.
- Arrastrar y soltar
- Formatos: .glb, .gltf
- Vista previa

### Onboarding.tsx
Flujo de configuración inicial.
- 5 pasos: Welcome, Connection, Tags, Model, Complete
- Configuración OPC UA
- Primera conexión

### Stats.tsx
Gráficos de tendencias.
- Temperatura vs Tiempo
- Presión vs Tiempo
- Consumo energético

## Backend Components

### index.ts
Servidor principal.
- Express REST API
- WebSocket Server
- Endpoints de configuración

### simulator.ts
Simulador de datos de horno.
- Generación de datos aleatorios
- Configurable por tags OPC UA

### database.ts
Almacenamiento JSON.
- Métodos: get, set, update
- Persistencia en archivos JSON

### types.ts
Definiciones TypeScript.
- Oven, Metric, Config interfaces
- Tipos OPC UA
