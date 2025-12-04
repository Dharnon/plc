import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import './App.css'

// Conectamos al servidor Node.js
// Asegúrate de que el puerto coincida con el del servidor (3001)
const socket = io('http://localhost:3001');

function App() {
  const [temperatura, setTemperatura] = useState(0);
  const [socketConectado, setSocketConectado] = useState(false);
  const [plcConectado, setPlcConectado] = useState(false);
  const [count, setCount] = useState(0);
  const [latency, setLatency] = useState(1000);

  useEffect(() => {
    // Escuchar evento de conexión
    socket.on('connect', () => {
      console.log("✅ Conectado al servidor Socket.io");
      setSocketConectado(true);
    });

    socket.on('disconnect', () => {
      console.log("❌ Desconectado del servidor");
      setSocketConectado(false);
      setPlcConectado(false);
    });

    // Nuevo evento para saber si Node.js está conectado al PLC real
    socket.on('plc-status', (status) => {
      setPlcConectado(status.connected);
    });

    // Escuchar datos del PLC
    socket.on('plc-data', (data) => {
      // console.log("Recibido:", data);
      setTemperatura(data.temperatura);
      setCount(prev => prev + 1);
    });

    // Limpieza al desmontar
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('plc-data');
    };
  }, []);

  // Calcular color basado en temperatura
  const getColor = (temp) => {
    if (temp < 30) return '#00ff00'; // Verde
    if (temp < 60) return '#ffff00'; // Amarillo
    return '#ff0000'; // Rojo
  };

  const changeLatency = (ms) => {
    setLatency(ms);
    socket.emit('change-interval', ms);
  };

  return (
    <div className="dashboard">
      <header>
        <h1>🏭 Monitor Industrial PLC</h1>
        <div className={`status-indicator ${plcConectado ? 'online' : 'offline'}`}>
          {plcConectado ? 'ONLINE' : 'OFFLINE'}
        </div>
      </header>

      <main>
        <div className="card">
          <h2>Temperatura Horno 1</h2>
          <div className="gauge" style={{ borderColor: getColor(temperatura) }}>
            <span className="value" style={{ color: getColor(temperatura) }}>
              {temperatura}°C
            </span>
          </div>
          <div className="counter-display">
            <p>Datos recibidos: <strong>{count}</strong></p>
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
