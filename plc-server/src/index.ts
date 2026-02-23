import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { OvenSimulator } from './simulator';
import { saveMetric, getHistory, getLatest, clearHistory, initDb } from './database';
import { ClientMessage, ServerMessage, OvenData } from './types';

const WS_PORT = 8080;
const API_PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);
const wss = new WebSocketServer({ port: WS_PORT });
const simulator = new OvenSimulator();

const clients: Set<WebSocket> = new Set();

console.log(`[Horno] Iniciando servidor...`);

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.get('/api/status', (_, res) => {
  res.json({
    connected: clients.size > 0,
    clientCount: clients.size,
    simulator: simulator.isActive(),
    config: simulator.getConfig()
  });
});

app.get('/api/data', (_, res) => {
  res.json(simulator.getData());
});

app.get('/api/history', (req, res) => {
  const from = req.query.from ? parseInt(req.query.from as string) : undefined;
  const to = req.query.to ? parseInt(req.query.to as string) : undefined;
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 100;
  
  const history = getHistory(from, to, limit);
  res.json(history);
});

app.get('/api/latest', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 30;
  const latest = getLatest(limit);
  res.json(latest);
});

app.post('/api/config', (req, res) => {
  const { targetTemperature, heatingEnabled, simulationSpeed } = req.body;
  
  if (targetTemperature !== undefined) {
    simulator.setTargetTemperature(targetTemperature);
  }
  if (heatingEnabled !== undefined) {
    simulator.setConfig({ heatingEnabled });
  }
  if (simulationSpeed !== undefined) {
    simulator.setConfig({ simulationSpeed });
  }
  
  res.json({ success: true, config: simulator.getConfig() });
});

app.post('/api/door/toggle', (_, res) => {
  simulator.toggleDoor();
  res.json({ success: true, doorOpen: simulator.getData().doorOpen });
});

app.post('/api/cycle/reset', (_, res) => {
  simulator.resetCycle();
  res.json({ success: true, cycleTime: 0 });
});

app.delete('/api/history', (_, res) => {
  clearHistory();
  res.json({ success: true });
});

server.listen(API_PORT, () => {
  console.log(`[Horno] Servidor API REST iniciado en puerto ${API_PORT}`);
});

function broadcast(message: ServerMessage): void {
  const data = JSON.stringify(message);
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}

function sendToClient(client: WebSocket, message: ServerMessage): void {
  if (client.readyState === WebSocket.OPEN) {
    client.send(JSON.stringify(message));
  }
}

async function startServer() {
  await initDb();
  console.log(`[Horno] Base de datos inicializada`);
  console.log(`[Horno] Servidor WebSocket iniciado en puerto ${WS_PORT}`);

  setInterval(() => {
    const data = simulator.update();
    
    try {
      saveMetric(data);
    } catch (err) {
      console.error('[Horno] Error guardando en BD:', err);
    }
    
    const message: ServerMessage = {
      type: 'data',
      payload: data
    };
    broadcast(message);
  }, 1000);

  wss.on('connection', (ws: WebSocket) => {
    clients.add(ws);
    console.log(`[Horno] Cliente WebSocket conectado. Total: ${clients.size}`);

    const statusMessage: ServerMessage = {
      type: 'status',
      payload: { connected: true, clientCount: clients.size }
    };
    sendToClient(ws, statusMessage);

    const initialData: ServerMessage = {
      type: 'data',
      payload: simulator.getData()
    };
    sendToClient(ws, initialData);

    ws.on('message', (data: Buffer) => {
      try {
        const message: ClientMessage = JSON.parse(data.toString());
        handleMessage(ws, message);
      } catch (err) {
        console.error('[Horno] Error al parsear mensaje:', err);
      }
    });

    ws.on('close', () => {
      clients.delete(ws);
      console.log(`[Horno] Cliente WebSocket desconectado. Total: ${clients.size}`);
      broadcast({
        type: 'status',
        payload: { connected: clients.size > 0, clientCount: clients.size }
      });
    });

    ws.on('error', (err) => {
      console.error('[Horno] Error en cliente:', err);
      clients.delete(ws);
    });
  });

  function handleMessage(ws: WebSocket, message: ClientMessage): void {
    switch (message.type) {
      case 'config':
        if (message.payload) {
          if (message.payload.targetTemperature !== undefined) {
            simulator.setTargetTemperature(message.payload.targetTemperature);
          }
          simulator.setConfig(message.payload);
          console.log('[Horno] Configuración actualizada:', message.payload);
        }
        break;

      case 'start':
        simulator.start();
        console.log('[Horno] Simulación iniciada');
        break;

      case 'stop':
        simulator.stop();
        console.log('[Horno] Simulación detenida');
        break;

      case 'toggleDoor':
        simulator.toggleDoor();
        console.log('[Horno] Puerta toggled');
        break;

      case 'setTarget':
        if (message.payload?.targetTemperature !== undefined) {
          simulator.setTargetTemperature(message.payload.targetTemperature);
          console.log('[Horno] Target temperature:', message.payload.targetTemperature);
        }
        break;

      case 'reset':
        simulator.resetCycle();
        console.log('[Horno] Ciclo reseteado');
        break;

      default:
        console.warn('[Horno] Tipo de mensaje desconocido:', message.type);
    }

    const response: ServerMessage = {
      type: 'status',
      payload: { connected: true, clientCount: clients.size, data: simulator.getData() }
    };
    sendToClient(ws, response);
  }
}

process.on('SIGINT', () => {
  console.log('\n[Horno] Cerrando servidor...');
  wss.close(() => {
    console.log('[Horno] WebSocket cerrado');
  });
  server.close(() => {
    console.log('[Horno] Servidor HTTP cerrado');
    process.exit(0);
  });
});

startServer().catch(console.error);
