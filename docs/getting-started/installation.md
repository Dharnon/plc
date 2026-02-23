# Instalación

## Requisitos Previos

- Node.js 18+
- npm o yarn

## Pasos de Instalación

### 1. Clonar el Proyecto

```bash
git clone <repo-url>
cd plc
```

### 2. Instalar Dependencias

```bash
# Instalar todas las dependencias
npm install

# O individualmente
cd plc-server && npm install
cd ../frontend && npm install
```

### 3. Ejecutar el Proyecto

```bash
# Modo desarrollo (ambos servidores)
npm run dev

# O individualmente
npm run dev:server  # Puerto 8080 (WebSocket) y 3001 (REST)
npm run dev:frontend # Puerto 3000
```

### 4. Acceder a la Aplicación

- **Frontend**: http://localhost:3000
- **API REST**: http://localhost:3001
- **WebSocket**: ws://localhost:8080

## Estructura del Proyecto

```
plc/
├── plc-server/     # Servidor Node.js con WebSocket y REST
├── frontend/       # Aplicación Next.js + Three.js
├── docs/           # Documentación VitePress
└── package.json    # Scripts raíz
```
