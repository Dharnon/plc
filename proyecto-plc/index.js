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
    maxDelay: 1000,       // Max delay mayor que initialDelay para evitar error de backoff
    maxRetry: 100000      // Reintentar indefinidamente
};

const client = opcua.OPCUAClient.create({
    applicationName: "MiClienteIndustrial",
    connectionStrategy: connectionStrategy,
    securityMode: opcua.MessageSecurityMode.Sign,
    securityPolicy: opcua.SecurityPolicy.Basic256Sha256,
    endpointMustExist: false
});

// Variables globales
let isSimulationMode = false;
let simulationInterval = null;
let currentInterval = 1000;
let globalMonitoredItem = null;
let globalSession = null;
let globalSubscription = null;

// EVENTOS DE CONEXIÓN (Logueo básico)
client.on("backoff", (number, delay) => {
    console.log(`⚠️ Reintentando conexión OPC UA... (Intento ${number})`);
    io.emit('plc-status', { connected: false });
});

client.on("connection_reestablished", () => {
    console.log("✅ ¡Conexión OPC UA restablecida!");
    io.emit('plc-status', { connected: true });
    iniciarMonitorizacion();
});

client.on("connection_lost", () => {
    console.log("❌ ¡Conexión OPC UA perdida!");
    io.emit('plc-status', { connected: false });
    // Limpieza
    if (globalSubscription) globalSubscription.terminate();
    if (globalSession) globalSession.close();
    globalMonitoredItem = null;
    globalSubscription = null;
    globalSession = null;
});

client.on("start_reconnection", () => {
    console.log("🔄 Iniciando reconexión...");
    io.emit('plc-status', { connected: false });
});

// DEFINICIÓN DE ENDPOINT (Recuperado)
const endpointUrl = process.env.PLC_URL || "opc.tcp://20.36.0.50:4840";
console.log(`🔌 Endpoint configurado: ${endpointUrl}`);

io.on('connection', (socket) => {
    console.log('Cliente Web conectado');
    socket.emit('plc-status', { connected: !!globalMonitoredItem });

    socket.on('change-interval', (newInterval) => {
        console.log(`Cambio de intervalo a ${newInterval}ms`);
        currentInterval = newInterval;

        if (isSimulationMode) {
            iniciarSimulacion(newInterval);
        } else if (globalMonitoredItem) {
            const parameters = {
                samplingInterval: newInterval,
                discardOldest: true,
                queueSize: 10
            };
            globalMonitoredItem.modify(parameters, (err, result) => {
                if (err) console.log("❌ Error modify:", err.message);
                else console.log(`✅ Intervalo modificado a ${newInterval}ms.`);
            });
        }
    });
});

// Función para establecer sesión y suscripción
async function iniciarMonitorizacion() {
    try {
        console.log("🔄 Configurando monitorización...");

        // 1. Crear Sesión
        const userIdentity = {
            type: opcua.UserTokenType.UserName,
            userName: "hexa",
            password: "Hexagono2025"
        };

        if (globalSession) {
            try { await globalSession.close(); } catch (e) { }
        }

        globalSession = await client.createSession(userIdentity);
        console.log("✅ Sesión creada");

        // 2. Crear Suscripción
        globalSubscription = await globalSession.createSubscription2({
            requestedPublishingInterval: 50,
            requestedLifetimeCount: 1000,
            requestedMaxKeepAliveCount: 20,
            maxNotificationsPerPublish: 10,
            publishingEnabled: true,
            priority: 10
        });
        console.log("✅ Suscripción activa");

        // 3. Monitorizar Item
        const itemToMonitor = {
            nodeId: 'ns=3;s="DB_Forzar"."Temperatura"',
            attributeId: opcua.AttributeIds.Value
        };

        const parameters = {
            samplingInterval: 100,
            discardOldest: true,
            queueSize: 10
        };

        globalMonitoredItem = opcua.ClientMonitoredItem.create(
            globalSubscription,
            itemToMonitor,
            parameters,
            opcua.TimestampsToReturn.Both
        );

        globalMonitoredItem.on("changed", (dataValue) => {
            const valorBase = parseFloat(dataValue.value.value);
            // Simular array de 500 basado en el valor real
            const datosArray = Array.from({ length: 500 }, (_, i) => {
                return parseFloat((valorBase + (Math.random() - 0.5) * 5).toFixed(1));
            });
            io.emit('plc-data', { temperatura: datosArray });
        });

    } catch (error) {
        console.log("❌ Error en monitorización:", error.message);
    }
}

async function conectarPLC() {
    try {
        console.log(`🔌 Conectando a ${endpointUrl}...`);
        // Dejamos que la librería maneje los reintentos
        await client.connect(endpointUrl);

        console.log("✅ ¡Conectado al PLC!");
        io.emit('plc-status', { connected: true });
        await iniciarMonitorizacion();

    } catch (error) {
        console.log("❌ Error fatal conexión inicial:", error.message);
        process.exit(1); // Reiniciar contenedor si falla arranque
    }
}

function iniciarSimulacion(interval = 1000) {
    if (!isSimulationMode) return;
    if (simulationInterval) clearInterval(simulationInterval);
    console.log(`🚀 SIMULACIÓN (${interval}ms)`);

    const generarDato = () => {
        const time = Date.now() / 1000;
        const baseTemp = 50 + Math.sin(time) * 20;
        const datosArray = Array.from({ length: 500 }, () =>
            parseFloat((baseTemp + Math.random() * 10).toFixed(1))
        );
        io.emit('plc-data', { temperatura: datosArray });
    };
    generarDato();
    simulationInterval = setInterval(generarDato, interval);
}

// ARRANQUE
conectarPLC();

server.listen(3001, () => {
    console.log('🚀 Servidor Node listo en http://localhost:3001');
});
