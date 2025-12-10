// 1. IMPORTAR LAS HERRAMIENTAS
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const opcua = require("node-opcua");

// 2. CONFIGURAR EL SERVIDOR WEB Y WEBSOCKET
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

// 3. CONFIGURAR EL CLIENTE OPC UA
const connectionStrategy = {
    initialDelay: 100,    // Reintentar muy rápido (100ms)
    maxDelay: 1000,       // CORREGIDO: Debe ser mayor que initialDelay (antes era 100)
    maxRetry: 100000      // Reintentar indefinidamente
};

const client = opcua.OPCUAClient.create({
    applicationName: "MiClienteIndustrial",
    connectionStrategy: connectionStrategy,
    securityMode: opcua.MessageSecurityMode.Sign, // Restaurado
    securityPolicy: opcua.SecurityPolicy.Basic256Sha256, // Restaurado
    endpointMustExist: false
});

// ... (código intermedio sin cambios) ...

// Función de conexión simplificada para evitar conflictos con el reconector interno
async function conectarPLC() {
    try {
        console.log(`🔌 Iniciando conexión OPC UA a: ${endpointUrl}`);

        // client.connect gestionará sus propios reintentos según connectionStrategy
        // No necesitamos envolverlo en un while loop manual agresivo
        await client.connect(endpointUrl);

        console.log("✅ ¡Conectado al PLC!");
        io.emit('plc-status', { connected: true });

        // Iniciar la lógica de sesión/suscripción una vez conectados
        await iniciarMonitorizacion();

    } catch (error) {
        console.log("❌ Error fatal al iniciar conexión:", error.message);
        // Si falla aquí, es probable que sea un error de configuración irrecuperable
        // o que el first connect falló y backend debe reiniciarse
        process.exit(1); // Dejamos que Docker reinicie el contenedor
    }
}

function iniciarSimulacion(interval = 1000) {
    if (!isSimulationMode) return;
    if (simulationInterval) clearInterval(simulationInterval);

    console.log(`🚀 MODO SIMULACIÓN ACTIVADO (${interval}ms)`);

    const generarDato = () => {
        const time = Date.now() / 1000;
        const baseTemp = 50 + Math.sin(time) * 20;

        // Generar Array de 500 temperaturas
        const datosArray = Array.from({ length: 500 }, () => {
            return parseFloat((baseTemp + Math.random() * 10).toFixed(1));
        });

        io.emit('plc-data', { temperatura: datosArray });
    };

    generarDato();
    simulationInterval = setInterval(generarDato, interval);
}

// Arrancar la función principal
conectarPLC();

// Arrancar el servidor
server.listen(3001, () => {
    console.log('🚀 Servidor Node listo en http://localhost:3001');
});
