# Dashboard PLC - Proyecto de Referencia OPC UA & Node.js

> **Conexión Industrial Full-Stack: De la Máquina a la Web**

Este proyecto sirve como una **plantilla de referencia y demostración técnica** de cómo modernizar la supervisión industrial conectando autómatas programables (PLC) mediante el estándar **OPC UA** con interfaces web modernas desarrolladas en **React**.

## 🎯 Propósito del Proyecto

El objetivo principal es cerrar la brecha entre la tecnología operativa (OT) y la tecnología de la información (IT) mediante una arquitectura abierta y escalable.

Sirve como ejemplo para:
1.  **Conectar**: Establecer comunicación con PLCs (Siemens S7-1200/1500, Omron, etc.) usando el protocolo estándar OPC UA.
2.  **Procesar**: Usar **Node.js** como middleware ligero para gestionar suscripciones, reconexiones y transformación de datos.
3.  **Visualizar**: Mostrar datos en tiempo real en un Dashboard atractivo y responsivo.
4.  **Controlar**: Ejemplo de cómo enviar comandos (cambio de parámetros) de vuelta a la máquina de forma segura.

## 🏗️ Arquitectura

El sistema se compone de dos partes principales:

*   **Backend (`/proyecto-plc`)**:
    *   Servidor Node.js con `node-opcua`.
    *   Gestión de sesiones y suscripciones OPC UA.
    *   Servidor Socket.IO para emitir datos al frontend.
    *   Lógica de reconexión automática y "Simulación" cuando no hay PLC físico.
*   **Frontend (`/plc-dashboard`)**:
    *   Aplicación React + Vite.
    *   Visualización de gráficos en tiempo real.
    *   Interfaz de usuario para enviar comandos (ej. cambiar intervalo de muestreo).

## 🚀 Características Clave

*   **Monitorización en Tiempo Real**: Visualización de variables (Temperatura, Estado) con latencia mínima.
*   **Modo Simulación**: Si el PLC no está conectado, el backend genera datos sintéticos para pruebas de desarrollo.
*   **Comunicación Bidireccional**: 
    *   *Lectura*: El HMI recibe datos del PLC.
    *   *Escritura*: El usuario puede modificar parámetros del proceso (ej. Frecuencia de muestreo) desde la web.
*   **Resiliencia**: El cliente OPC UA está configurado para reintentar conexiones infinitamente ("Backoff strategy"), vital en entornos industriales.

## 📚 Documentación Técnica

Para profundizar en la implementación del backend, ver la guía detallada:
👉 **[Guía de Implementación OPC UA y Node.js](../proyecto-plc/GUIA_IMPLEMENTACION.md)**

Esta guía incluye:
*   Esquemas de librerías.
*   Cómo añadir nuevas acciones (Arrancar motor, Reset, etc.).
*   Diagramas de flujo de datos.

## 🛠️ Instalación y Uso

### Prerrequisitos
*   Node.js instalado.
*   (Opcional) Un servidor OPC UA o simulador (ej. Prosys OPC UA Simulation Server).

### Ejecutar el Backend
```bash
cd proyecto-plc
npm install
npm start
``` 
*El servidor arranca en el puerto 3001.*

### Ejecutar el Frontend
```bash
cd plc-dashboard
npm install
npm run dev
```
*El dashboard estará disponible en http://localhost:5173.*

---
*Desarrollado como Template de Arquitectura Industrial.*
