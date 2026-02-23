# REST API

## Base URL
```
http://localhost:3001
```

## Endpoints

### Ovens

#### GET /api/ovens
Lista todos los hornos.

```bash
curl http://localhost:3001/api/ovens
```

#### GET /api/ovens/:id
Obtiene un horno específico.

```bash
curl http://localhost:3001/api/ovens/oven-1
```

#### POST /api/ovens
Crea un nuevo horno.

```bash
curl -X POST http://localhost:3001/api/ovens \
  -H "Content-Type: application/json" \
  -d '{"name": "Horno 2", "opcua": {"endpoint": "opc.tcp://localhost:4840"}}'
```

#### PUT /api/ovens/:id
Actualiza un horno.

```bash
curl -X PUT http://localhost:3001/api/ovens/oven-1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Horno Principal Actualizado"}'
```

#### DELETE /api/ovens/:id
Elimina un horno.

```bash
curl -X DELETE http://localhost:3001/api/ovens/oven-1
```

### Configuración

#### GET /api/config
Obtiene la configuración global.

```bash
curl http://localhost:3001/api/config
```

#### PUT /api/config
Actualiza la configuración.

```bash
curl -X PUT http://localhost:3001/api/config \
  -H "Content-Type: application/json" \
  -d '{"simulation": {"enabled": true}}'
```

### Métricas

#### GET /api/ovens/:id/metrics
Obtiene métricas de un horno.

```bash
curl http://localhost:3001/api/ovens/oven-1/metrics
```

#### GET /api/ovens/:id/history
Obtiene historial de métricas.

```bash
curl "http://localhost:3001/api/ovens/oven-1/history?limit=100"
```
