import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'

// Conectamos al servidor Node.js
// En desarrollo usa localhost:3001, en producción usa la variable de entorno o la misma URL del host
const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const socket = io(SOCKET_URL, {
  transports: ['websocket'], // Forzar WebSocket para evitar problemas de Sticky Session en LB
  upgrade: false
});

function App() {
  const [temperaturas, setTemperaturas] = useState([]); // Array de temperaturas
  const [socketConectado, setSocketConectado] = useState(false);
  const [plcConectado, setPlcConectado] = useState(false);
  const [count, setCount] = useState(0);
  const [latency, setLatency] = useState(1000);

  useEffect(() => {
    socket.on('connect', () => {
      console.log("✅ Conectado al servidor Socket.io");
      setSocketConectado(true);
    });

    socket.on('disconnect', () => {
      console.log("❌ Desconectado del servidor");
      setSocketConectado(false);
      setPlcConectado(false);
    });

    socket.on('plc-status', (status) => {
      setPlcConectado(status.connected);
    });

    socket.on('plc-data', (data) => {
      // data.temperatura ahora es un array
      if (Array.isArray(data.temperatura)) {
        setTemperaturas(data.temperatura);
      } else {
        // Fallback por si llega un solo valor
        setTemperaturas([data.temperatura]);
      }
      setCount(prev => prev + 1);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('plc-status');
      socket.off('plc-data');
    };
  }, []);

  const getColor = (temp) => {
    if (temp < 30) return '#00ff00'; // Verde
    if (temp < 60) return '#ffff00'; // Amarillo
    return '#ff0000'; // Rojo
  };

  const changeLatency = (ms) => {
    setLatency(ms);
    socket.emit('change-interval', ms);
  };

  // Cálculos estadísticos
  const maxTemp = temperaturas.length > 0 ? Math.max(...temperaturas).toFixed(1) : 0;
  const minTemp = temperaturas.length > 0 ? Math.min(...temperaturas).toFixed(1) : 0;
  const avgTemp = temperaturas.length > 0 ? (temperaturas.reduce((a, b) => a + b, 0) / temperaturas.length).toFixed(1) : 0;

  return (
    <div className="dashboard">
      <header>
        <h1>Monitor Térmico Industrial (500 Puntos)</h1>
        <div className={`status-indicator ${plcConectado ? 'online' : 'offline'}`}>
          {plcConectado ? 'ONLINE' : 'OFFLINE'}
        </div>
      </header>

      <main>
        <div className="card">
          <div className="stats-panel">
            <div className="stat-box">
              <h3>Máxima</h3>
              <span className="stat-value" style={{ color: getColor(maxTemp) }}>{maxTemp}°C</span>
            </div>
            <div className="stat-box">
              <h3>Promedio</h3>
              <span className="stat-value" style={{ color: getColor(avgTemp) }}>{avgTemp}°C</span>
            </div>
            <div className="stat-box">
              <h3>Mínima</h3>
              <span className="stat-value" style={{ color: getColor(minTemp) }}>{minTemp}°C</span>
            </div>
          </div>

          <div className="thermal-grid">
            {temperaturas.map((temp, index) => (
              <div
                key={index}
                className="thermal-cell"
                style={{ backgroundColor: getColor(temp) }}
                title={`Sensor ${index + 1}: ${temp}°C`}
              ></div>
            ))}
          </div>

          <div className="counter-display">
            <p>Paquetes recibidos: <strong>{count}</strong></p>
            <button className="reset-btn" onClick={() => setCount(0)}>🗑️ Reset</button>
          </div>
          <p>Latencia: <strong>{latency}ms</strong></p>

          <div className="controls">
            <h3>Frecuencia de Actualización</h3>
            <div className="button-group">
              <button onClick={() => changeLatency(1000)} disabled={latency === 1000}>1s</button>
              <button onClick={() => changeLatency(500)} disabled={latency === 500}>500ms</button>
              <button onClick={() => changeLatency(200)} disabled={latency === 200}>200ms</button>
              <button onClick={() => changeLatency(100)} disabled={latency === 100}>100ms</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
