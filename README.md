# Galactic Magnetar - Full Stack Industrial IoT

Este es el repositorio raíz del proyecto "Galactic Magnetar", una solución completa para la monitorización y control industrial utilizando tecnologías web modernas.

## 📂 Estructura del Proyecto

El proyecto está dividido en micro-servicios y componentes bien diferenciados:

*   **`/proyecto-plc` (Backend & Middleware)**
    *   Contiene el servidor **Node.js**.
    *   Gestiona la conexión OPC UA con el PLC.
    *   Expone los datos vía WebSockets (Socket.IO).
    *   *Ver [Guía de Implementación](./proyecto-plc/GUIA_IMPLEMENTACION.md) para más detalles.*

*   **`/plc-dashboard` (Frontend)**
    *   Interfaz de usuario moderna construida con **React** y **Vite**.
    *   Visualiza datos en tiempo real.
    *   Permite enviar comandos al backend.

*   **`/nginx-lb` (Infraestructura)**
    *   Configuración de **NGINX** actuando como balanceador de carga.
    *   Ubicado para soportar arquitecturas redundantes (varias instancias del backend).

## 🐳 Docker y Despliegue

Este proyecto está "dockerizado" para facilitar su despliegue y orquestación.

### Archivo `docker-compose.yml`

En la raíz encontrarás el archivo `docker-compose.yml` que orquesta todo el sistema. Su función es levantar todos los servicios necesarios con un solo comando.

**Servicios definidos:**
1.  **Backend (Node.js)**: Se levantan múltiples réplicas (o una sola, según configuración) para asegurar disponibilidad.
2.  **Frontend (React)**: Containerizado para ser servido estáticamente o en modo dev.
3.  **Load Balancer (NGINX)**: Distribuye el tráfico entre las instancias del backend.

### Cómo ejecutar todo el sistema

Para levantar toda la arquitectura (Backend + Frontend + Load Balancer):

```bash
# Estando en la raíz del proyecto (donde está este README)
docker-compose up --build
```

Esto compilará las imágenes necesarias y arrancará los contenedores.

*   El **Frontend** debería ser accesible en: `http://localhost:5173` (o el puerto definido en el compose).
*   El **Backend** (Load Balancer) en: `http://localhost:80` (o puerto mapeado).

## 🔗 Referencias Rápidas

*   [Detalle de Implementación OPC UA](./proyecto-plc/GUIA_IMPLEMENTACION.md)
*   [Frontend README](./plc-dashboard/README.md)
