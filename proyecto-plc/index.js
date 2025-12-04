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
    maxDelay: 1000,       // No esperar más de 1s entre intentos
    maxRetry: 100000      // Reintentar "infinitamente"
};

const client = opcua.OPCUAClient.create({
    applicationName: "MiClienteIndustrial",
    connectionStrategy: connectionStrategy,
    securityMode: opcua.MessageSecurityMode.Sign,
    securityPolicy: opcua.SecurityPolicy.Basic256Sha256,
    endpointMustExist: false
});

// EVENTOS DE CONEXIÓN (Para detección rápida)
client.on("backoff", (number, delay) => {
    console.log(`⚠️ Reintentando conexión... (Intento ${number})`);
    io.emit('plc-status', { connected: false });
});

client.on("connection_reestablished", () => {
    console.log("✅ ¡Conexión restablecida con el PLC!");
    io.emit('plc-status', { connected: true });
});

client.on("connection_lost", () => {
    console.log("❌ ¡Conexión perdida con el PLC!");
    io.emit('plc-status', { connected: false });
});

client.on("start_reconnection", () => {
    console.log("🔄 Iniciando proceso de reconexión...");
    io.emit('plc-status', { connected: false });
});

const endpointUrl = "opc.tcp://20.36.0.50:4840";

// Variable para controlar si estamos en modo simulación
let isSimulationMode = false;
let simulationInterval = null;
let currentInterval = 1000;
let globalMonitoredItem = null;

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    // Enviar estado actual al nuevo cliente
    socket.emit('plc-status', { connected: !!globalMonitoredItem }); // Si hay monitoredItem, asumimos conectado

    socket.on('change-interval', (newInterval) => {
        console.log(`Cambio de intervalo a ${newInterval}ms`);
        currentInterval = newInterval;

        if (isSimulationMode) {
            iniciarSimulacion(newInterval);
        } else if (globalMonitoredItem) {
            // Si estamos conectados al PLC real, modificamos el intervalo de muestreo
            const parameters = {
                samplingInterval: newInterval,
                discardOldest: true,
                queueSize: 10
            };
            globalMonitoredItem.modify(parameters, (err, result) => {
                if (err) {
                    console.log("❌ Error al modificar intervalo:", err.message);
                } else {
                    console.log(`✅ Intervalo modificado a ${newInterval}ms. Resultado PLC:`, result ? result.toString() : "OK");
                    if (result && result.revisedSamplingInterval) {
                        console.log(`   -> Intervalo real aplicado por PLC: ${result.revisedSamplingInterval}ms`);
                        if (result.revisedSamplingInterval > newInterval * 1.5) {
                            console.log("⚠️ AVISO: El PLC está limitando la velocidad. Revisa la configuración 'Minimum sampling interval' en TIA Portal.");
                        }
                    }
                }
            });
        }
    });
});

async function conectarPLC() {
    let conectado = false;

    while (!conectado) {
        try {
            console.log("🔌 Intentando conectar al PLC...");

            // El cliente intentará conectar según la connectionStrategy
            await client.connect(endpointUrl);

            console.log("✅ ¡Conectado al PLC!");
            io.emit('plc-status', { connected: true });
            conectado = true;

            // B. CREAR SESIÓN
            const userIdentity = {
                type: opcua.UserTokenType.UserName,
                userName: "hexa",
                password: "Hexagono2025"
            };

            const session = await client.createSession(userIdentity);
            console.log("✅ Sesión iniciada");

            const subscription = await session.createSubscription2({
                requestedPublishingInterval: 50, // Pedimos 50ms para ir sobrados
                requestedLifetimeCount: 1000,
                requestedMaxKeepAliveCount: 20,
                maxNotificationsPerPublish: 10,
                publishingEnabled: true,
                priority: 10
            });

            console.log("✅ Suscripción creada. Intervalo negociado:", subscription.publishingInterval, "ms");

            const itemToMonitor = {
                nodeId: 'ns=3;s="DB_Forzar"."Temperatura"',
                attributeId: opcua.AttributeIds.Value
            };

            const parameters = {
                samplingInterval: 100,
                discardOldest: true,
                queueSize: 10
            };

            const monitoredItem = opcua.ClientMonitoredItem.create(
                subscription,
                itemToMonitor,
                parameters,
                opcua.TimestampsToReturn.Both
            );

            // Guardamos el monitoredItem globalmente
            globalMonitoredItem = monitoredItem;

            monitoredItem.on("changed", (dataValue) => {
                const valor = dataValue.value.value;
                console.log("🔥 Nuevo dato del PLC:", valor);
                io.emit('plc-data', { temperatura: valor });
            });

            // Si llegamos aquí, salimos del bucle de intentos iniciales
            // El cliente gestionará reconexiones futuras automáticamente

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

    // Limpiar intervalo anterior si existe
    if (simulationInterval) clearInterval(simulationInterval);

    console.log(`🚀 MODO SIMULACIÓN ACTIVADO (${interval}ms)`);

    // Función generadora de datos
    const generarDato = () => {
        const time = Date.now() / 1000;
        const tempFalsa = (50 + Math.sin(time) * 20 + Math.random() * 2).toFixed(1);
        io.emit('plc-data', { temperatura: tempFalsa });
    };

    // 1. Emitir dato INMEDIATAMENTE (para no esperar al primer intervalo)
    generarDato();

    // 2. Configurar el bucle
    simulationInterval = setInterval(generarDato, interval);
}

// Arrancar la función principal
conectarPLC();

// Arrancar el servidor
server.listen(3001, () => {
    console.log('🚀 Servidor Node listo en http://localhost:3001');
});
