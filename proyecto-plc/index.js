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
    maxDelay: 100,        // Máximo 500ms entre intentos (Más agresivo)
    maxRetry: 100000      // Reintentar "infinitamente"
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

// EVENTOS DE CONEXIÓN (Para detección rápida)
client.on("backoff", (number, delay) => {
    console.log(`⚠️ Reintentando conexión... (Intento ${number})`);
    io.emit('plc-status', { connected: false });
});

client.on("connection_reestablished", () => {
    console.log("✅ ¡Conexión restablecida con el PLC!");
    io.emit('plc-status', { connected: true });
    // REINICIAR MONITORIZACIÓN AL RECONECTAR
    iniciarMonitorizacion();
});

client.on("connection_lost", () => {
    console.log("❌ ¡Conexión perdida con el PLC!");
    io.emit('plc-status', { connected: false });
    // Limpiar objetos antiguos
    if (globalSubscription) globalSubscription.terminate();
    if (globalSession) globalSession.close();
    globalMonitoredItem = null;
    globalSubscription = null;
    globalSession = null;
});

client.on("start_reconnection", () => {
    console.log("🔄 Iniciando proceso de reconexión...");
    io.emit('plc-status', { connected: false });
});

const endpointUrl = "opc.tcp://20.36.0.50:4840";

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    // Enviar estado actual al nuevo cliente
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
                if (err) {
                    console.log("❌ Error al modificar intervalo:", err.message);
                } else {
                    console.log(`✅ Intervalo modificado a ${newInterval}ms.`);
                }
            });
        }
    });
});

// Función para establecer sesión y suscripción (Modularizada)
async function iniciarMonitorizacion() {
    try {
        console.log("🔄 Iniciando configuración de monitorización...");

        // 1. Crear Sesión
        const userIdentity = {
            type: opcua.UserTokenType.UserName,
            userName: "hexa",
            password: "Hexagono2025"
        };

        // Si ya existe sesión, intentar cerrarla por si acaso
        if (globalSession) {
            try { await globalSession.close(); } catch (e) { }
        }

        globalSession = await client.createSession(userIdentity);
        console.log("✅ Sesión iniciada");

        // 2. Crear Suscripción
        globalSubscription = await globalSession.createSubscription2({
            requestedPublishingInterval: 50,
            requestedLifetimeCount: 1000,
            requestedMaxKeepAliveCount: 20,
            maxNotificationsPerPublish: 10,
            publishingEnabled: true,
            priority: 10
        });

        console.log("✅ Suscripción creada. Intervalo:", globalSubscription.publishingInterval, "ms");

        // 3. Monitorizar Item (Array de 500)

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
            // Generamos 500 valores variando ligeramente del valor base real
            const datosArray = Array.from({ length: 500 }, (_, i) => {
                return parseFloat((valorBase + (Math.random() - 0.5) * 5).toFixed(1));
            });

            // console.log("🔥 Nuevo dato del PLC (Base):", valorBase);
            io.emit('plc-data', { temperatura: datosArray }); // Enviamos Array
        });

    } catch (error) {
        console.log("❌ Error en iniciarMonitorizacion:", error.message);
    }
}

async function conectarPLC() {
    let conectado = false;
    while (!conectado) {
        try {
            console.log("🔌 Intentando conectar al PLC...");
            await client.connect(endpointUrl);
            console.log("✅ ¡Conectado al PLC!");
            io.emit('plc-status', { connected: true });
            conectado = true;

            // Iniciar la lógica de sesión/suscripción
            await iniciarMonitorizacion();

        } catch (error) {
            console.log("❌ Error al conectar:", error.message);
            io.emit('plc-status', { connected: false });
            console.log("⏳ Reintentando en 2 segundos...");
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
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
