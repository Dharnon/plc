<script setup>
const architectureChart = `
flowchart TB
    subgraph Frontend["Frontend (Next.js)"]
        A[OvenScene<br/>Three.js]
        B[Metrics Panel]
        C[Stats Charts]
        D[Onboarding Flow]
        E[useOvenData Hook]
    end

    subgraph Backend["plc-server (Node.js)"]
        F[WebSocket Server<br/>Port 8080]
        G[REST API<br/>Port 3001]
        H[Simulator<br/>OPC UA]
        I[JSON File Store]
    end

    E -->|WebSocket / REST| F
    E -->|Config| G
    F --> H
    G --> I
    H --> I
`
</script>

# Visión General de Arquitectura

## Diagrama de Arquitectura

<MermaidDiagram :chart="architectureChart" />

## Tecnologías

- **Frontend**: Next.js 14, React 18, Three.js, Recharts
- **Backend**: Node.js, Express, ws (WebSocket)
- **Comunicación**: WebSocket para datos en tiempo real, REST para configuración
- **Almacenamiento**: JSON files (alternativa a SQLite)
- **Documentación**: VitePress

## Flujo de Datos

1. **Tiempo Real**: PLC/Simulator → WebSocket → Frontend (useOvenData hook)
2. **Configuración**: Frontend → REST API → Server → JSON Storage
3. **Modelo 3D**: Custom GLB/GLTF → Frontend → Three.js Scene
