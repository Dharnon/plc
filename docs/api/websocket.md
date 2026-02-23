# WebSocket API

## Conexión

```javascript
const ws = new WebSocket('ws://localhost:8080');
```

## Eventos del Servidor

### oven:update
Datos actualizados del horno.

```json
{
  "type": "oven:update",
  "data": {
    "id": "oven-1",
    "name": "Horno Principal",
    "temperature": 150,
    "targetTemperature": 180,
    "pressure": 2.5,
    "humidity": 45,
    "power": 75,
    "status": "running",
    "doorOpen": false,
    "timestamp": "2024-01-15T10:30:00Z"
  }
}
```

### metrics:history
Historial de métricas.

```json
{
  "type": "metrics:history",
  "data": {
    "ovenId": "oven-1",
    "metrics": [
      { "timestamp": "2024-01-15T10:25:00Z", "temperature": 145, "pressure": 2.3 },
      { "timestamp": "2024-01-15T10:26:00Z", "temperature": 147, "pressure": 2.4 }
    ]
  }
}
```

## Comandos del Cliente

### subscribe
Suscribirse a un horno.

```json
{
  "type": "subscribe",
  "ovenId": "oven-1"
}
```

### control
Enviar comando de control.

```json
{
  "type": "control",
  "action": "setTemperature",
  "value": 200
}
```

### setSimulation
Toggle simulación.

```json
{
  "type": "setSimulation",
  "enabled": true
}
```
