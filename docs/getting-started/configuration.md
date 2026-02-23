# Configuración

## Configuración del Sistema

### Variables de Entorno

El servidor utiliza un sistema de configuración basado en JSON:

```json
{
  "opcua": {
    "endpoint": "opc.tcp://localhost:4840",
    "securityPolicy": "None",
    "authenticationMode": "Anonymous"
  },
  "simulation": {
    "enabled": true,
    "updateInterval": 1000
  },
  "server": {
    "port": 3001,
    "websocketPort": 8080
  }
}
```

### Configuración OPC UA

Desde la interfaz puedes configurar:

1. **Endpoint**: URL del servidor OPC UA
2. **Política de Seguridad**: None, Basic128Rsa15, Basic256, Basic256Sha256
3. **Modo de Autenticación**: Anonymous, Username/Password

### Modo Simulación

Por defecto, el sistema trabaja en modo simulación:
- Genera datos aleatorios para temperatura, presión, etc.
- Permite probar la interfaz sin hardware real
- Toggle en el panel de acciones

## Configuración de Ovnes

### Agregar un Horno

1. Click en el selector de hornos
2. Click en "Agregar Horno"
3. Ingresa nombre y configuración OPC UA
4. Sube un modelo 3D (opcional)

### Modelos 3D Personalizados

Formatos soportados: `.glb`, `.gltf`

El modelo debe incluir:
- Geometry para el cuerpo del horno
- Puerta interactiva
- Controles visuales
