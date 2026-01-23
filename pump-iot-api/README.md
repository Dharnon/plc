# 🏭 Pump IoT Platform - Enterprise Backend API

> **Backend API de grado industrial** para la gestión de bancos de pruebas de bombas hidráulicas.  
> Diseñado específicamente para entornos **air-gapped** (sin conexión a internet) y despliegue como **Servicio de Windows**.

---

## 📑 Índice

1. [Resumen Ejecutivo](#-resumen-ejecutivo)
2. [Arquitectura del Sistema](#-arquitectura-del-sistema)
3. [Stack Tecnológico](#-stack-tecnológico)
4. [Análisis de Dependencias](#-análisis-de-dependencias)
5. [Modelo de Datos](#-modelo-de-datos)
6. [Endpoints API](#-endpoints-api)
7. [Seguridad Industrial](#-seguridad-industrial)
8. [Instalación y Configuración](#-instalación-y-configuración)
9. [Despliegue en Producción](#-despliegue-en-producción)
10. [Guía para Desarrolladores .NET](#-guía-para-desarrolladores-net)
11. [Mantenimiento y Operaciones](#-mantenimiento-y-operaciones)

---

## 🎯 Resumen Ejecutivo

### ¿Qué es esta aplicación?

Esta API REST gestiona el ciclo completo de pruebas hidráulicas en bancos de ensayo industriales:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        FLUJO OPERATIVO                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│  1. IMPORTACIÓN    →  Excel/CSV con órdenes de trabajo                      │
│  2. PREPARACIÓN    →  Ingeniero sube PDF, extrae especificaciones           │
│  3. EJECUCIÓN      →  Operario ejecuta prueba en banco físico               │
│  4. REGISTRO       →  Captura de datos reales (caudal, presión, etc.)       │
│  5. REPORTE        →  Generación de protocolo PDF oficial                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

### ¿Por qué Node.js/TypeScript para un entorno industrial?

| Preocupación IT | Respuesta Técnica |
|-----------------|-------------------|
| *"Node.js no es seguro"* | TypeScript provee tipado estático equivalente a C#. Validación Zod en cada endpoint. |
| *"No funciona offline"* | 100% operativo sin internet. Cero telemetría en runtime. |
| *"No es estable para servicios"* | Node.js LTS usado en producción por NASA, Microsoft, Netflix. PM2/NSSM para Windows Service. |
| *"No lo podemos mantener"* | Prisma ORM es equivalente a Entity Framework. TypeScript sintaxis similar a C#. |

---

## 🏗️ Arquitectura del Sistema

### Diagrama de Capas

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENTE                                         │
│                     (Next.js + Shadcn UI - Puerto 3000)                     │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTP/JSON
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         API REST (Este Repositorio)                          │
│                          Express 5.x - Puerto 4000                           │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Middleware │  │  Validación │  │   Logging   │  │    Rate Limiting    │ │
│  │   (CORS,    │  │    (Zod)    │  │  (Winston)  │  │ (express-rate-limit)│ │
│  │ Compression)│  │             │  │             │  │                     │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │    Auth     │  │    Tests    │  │   Import    │  │      Reports        │ │
│  │  Endpoints  │  │  Endpoints  │  │  Endpoints  │  │     Endpoints       │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────────────┘ │
├─────────────────────────────────────────────────────────────────────────────┤
│                          CAPA DE SERVICIOS                                   │
│  ┌─────────────────────────────┐  ┌─────────────────────────────────────┐   │
│  │       PdfService            │  │         ExcelService                │   │
│  │  (Extracción de specs PDF)  │  │    (Importación Excel/CSV)          │   │
│  └─────────────────────────────┘  └─────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────────────────┤
│                          CAPA DE DATOS                                       │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                      Prisma ORM 7.0                                  │    │
│  │              (Query Engine compilado en Rust)                        │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ TCP/IP (localhost)
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PostgreSQL 16                                       │
│                     Base de Datos Local                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Estructura del Proyecto

```
pump-iot-api/
├── prisma/
│   └── schema.prisma          # Definición de modelos (14 tablas)
├── src/
│   ├── main.ts                # Entry point + endpoints
│   ├── lib/
│   │   └── db.ts              # Cliente Prisma singleton
│   ├── services/
│   │   └── pdf.service.ts     # Extracción de datos PDF
│   └── utils/
│       └── logger.ts          # Configuración Winston
├── docs/
│   └── workflow.md            # Documentación del flujo
├── .env                       # Variables de entorno
├── package.json
├── tsconfig.json
└── README.md                  # Este archivo
```

---

## 🛠️ Stack Tecnológico

### Dependencias de Producción - Análisis Completo

| # | Paquete | Versión | Mantenedor | Descripción | Empresas que lo usan | Fiabilidad Air-Gap |
|---|---------|---------|------------|-------------|---------------------|---------------------|
| 1 | **express** | 5.2.1 | OpenJS Foundation (Linux Foundation) | Framework HTTP minimalista para APIs REST | IBM, Uber, Netflix, NASA | ✅ **Excelente** |
| 2 | **@prisma/adapter-pg** | 7.2.0 | Prisma Data Inc. | Adaptador PostgreSQL nativo | Mercedes-Benz, Siemens, Bosch | ✅ **Excelente** |
| 3 | **winston** | 3.19.0 | Flatiron / NodeJS Community | Logging estructurado multi-transporte | Netflix, Walmart, PayPal | ✅ **Excelente** |
| 4 | **cors** | 2.8.5 | Express.js Team | Middleware CORS | Toda app Express | ✅ **Excelente** |
| 5 | **compression** | 1.8.1 | Express.js Team | Compresión gzip/deflate | Toda app Express | ✅ **Excelente** |
| 6 | **dotenv** | 17.2.3 | Scott Motte | Variables de entorno desde .env | 35M+ descargas/semana | ✅ **Excelente** |
| 7 | **multer** | 2.0.2 | Express.js Team | Upload de archivos multipart | Apps con file upload | ⚠️ **Bueno** |
| 8 | **xlsx** | 0.18.5 | SheetJS LLC | Lectura/escritura Excel | Fortune 500 | ✅ **Excelente** |
| 9 | **pdfjs-dist** | 5.4.530 | Mozilla Foundation | Extracción de texto PDF | Firefox, Adobe | ✅ **Excelente** |
| 10 | **puppeteer** | 24.34.0 | Google Chrome Team | Generación PDF con Chromium | Google, Microsoft | ⚠️ **Aceptable** |
| 11 | **pg** | 8.16.3 | Brian Carlson | Driver PostgreSQL nativo | Toda app Node+PG | ✅ **Excelente** |
| 12 | **zod** | 4.3.5 | Colin McDonnell | Validación de esquemas TypeScript-first | Vercel, Stripe | ✅ **Excelente** |
| 13 | **bcrypt** | 6.0.0 | Kelektiv | Hashing de contraseñas | Industria estándar | ✅ **Excelente** |
| 14 | **jsonwebtoken** | 9.0.3 | Auth0 | Tokens JWT | Auth0, Okta | ✅ **Excelente** |
| 15 | **helmet** | 8.1.0 | Helmet Contributors | Headers de seguridad HTTP | OWASP recomendado | ✅ **Excelente** |
| 16 | **express-rate-limit** | 8.2.1 | Express Community | Protección contra DDoS | Apps en producción | ✅ **Excelente** |

### Análisis Profundo: Prisma ORM

> **¿Por qué Prisma es aceptable para entornos industriales?**

| Criterio | Evaluación | Justificación |
|----------|------------|---------------|
| **Empresa** | Prisma Data, Inc. | Berlín + San Francisco, $56M+ financiación |
| **Open Source** | ✅ Apache 2.0 | Licencia perpetua, sin costos |
| **Telemetría runtime** | ✅ Ninguna | Solo la CLI tiene telemetría (desactivable) |
| **Funciona offline** | ✅ 100% | App → Prisma Client → PostgreSQL (todo local) |
| **Binarios** | ✅ Precompilados | Query Engine se empaqueta en build, no descarga nada |
| **Empresas industriales** | ✅ Siemens, Bosch, Mercedes-Benz | Validado en producción industrial |

**Desactivar telemetría (para air-gap):**
```env
PRISMA_TELEMETRY_INFORMATION=false
CHECKPOINT_DISABLE=1
PRISMA_HIDE_UPDATE_MESSAGE=true
```

---

## 📊 Modelo de Datos

### Esquema Prisma (14 Modelos)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           MODELO ENTIDAD-RELACIÓN                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌──────────────────┐         ┌──────────────────┐                         │
│   │ ListadosProduccion│         │      banco       │                         │
│   │ (Importación)     │         │ (Bancos físicos) │                         │
│   └──────────────────┘         └────────┬─────────┘                         │
│                                         │ 1                                  │
│                                         │                                    │
│                                         ▼ N                                  │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                            prueba                                    │   │
│   │                    (Entidad Central - PK: numeroprotocolo)           │   │
│   └───────────────────────────────┬─────────────────────────────────────┘   │
│                                   │                                          │
│       ┌───────────────────────────┼───────────────────────────┐              │
│       │           │               │               │           │              │
│       ▼ 1         ▼ 1             ▼ 1             ▼ 1         ▼ 1            │
│   ┌────────┐  ┌────────┐    ┌──────────┐    ┌────────┐  ┌──────────┐        │
│   │ bomba  │  │ cliente│    │  motor   │    │ fluido │  │ detalles │        │
│   └────────┘  └────────┘    └──────────┘    └────────┘  └──────────┘        │
│                                   │                                          │
│                                   │ 1                                        │
│                                   ▼ N                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                    pruebaparametrovalor                              │   │
│   │            (Puntos de medición discretos)                            │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                   │                                          │
│                                   ▼ N                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                  pruebaparametrocontinuo                             │   │
│   │            (Datos de monitoreo en tiempo real)                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
│   ┌──────────────────┐         ┌──────────────────┐                         │
│   │     parametro    │◄────────│      unidad      │                         │
│   │ (Tipos de medida)│    N:1  │  (kW, m³/h, bar) │                         │
│   └──────────────────┘         └──────────────────┘                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Tablas Principales

| Tabla | Descripción | Campos Clave |
|-------|-------------|--------------|
| `prueba` | Entidad central, representa una prueba hidráulica | numeroprotocolo (PK), bancoid, fecha |
| `bomba` | Especificaciones de la bomba probada | tipobomba, diametrorodete, diametroaspiracion |
| `cliente` | Datos del cliente que solicita la prueba | nombre, direccion, contacto |
| `motor` | Datos del motor acoplado | marca, potencia, velocidad, rendimiento% |
| `fluido` | Condiciones del fluido de prueba | caudal, altura, viscosidad, densidad |
| `banco` | Bancos de prueba físicos disponibles | nombre, estado (activo/inactivo) |
| `parametro` | Catálogo de parámetros medibles | nombre, tipodato, obligatorio |
| `unidad` | Unidades de medida (kW, bar, m³/h) | nombre |

---

## 🔌 Endpoints API

### Resumen de Endpoints

| Método | Ruta | Descripción | Estado |
|--------|------|-------------|--------|
| GET | `/` | Información de la API | ✅ Implementado |
| GET | `/api/health` | Health check | ✅ Implementado |
| POST | `/api/auth/login` | Autenticación | ✅ Implementado |
| GET | `/api/tests` | Listar pruebas (pending + completed) | ✅ Implementado |
| GET | `/api/tests/:id` | Detalle de prueba | ✅ Implementado |
| POST | `/api/excel/sheets` | Obtener hojas de Excel | ✅ Implementado |
| POST | `/api/import-excel` | Importar desde Excel | ✅ Implementado |
| POST | `/api/import-csv` | Importar desde CSV | ✅ Implementado |
| GET | `/api/listados` | Listar importaciones | ✅ Implementado |
| GET | `/api/reports/:id` | Obtener reporte completo | ✅ Implementado |
| POST | `/api/reports/pdf` | Generar PDF | 🔄 Fase 2 |
| POST | `/api/extract-pdf` | Extraer specs de PDF | ✅ Implementado |

### Documentación Interactiva

Swagger UI disponible en desarrollo:
```
http://localhost:4000/api-docs
```

---

## 🔒 Seguridad Industrial

### Capas de Protección

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ARQUITECTURA DE SEGURIDAD                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  1. CAPA DE RED                                                              │
│     └── Air-Gap: Sin conexión a internet en runtime                         │
│                                                                              │
│  2. CAPA DE TRANSPORTE                                                       │
│     ├── Helmet: Headers HTTP seguros (X-Frame-Options, CSP, etc.)           │
│     └── CORS: Origen restringido a frontend autorizado                      │
│                                                                              │
│  3. CAPA DE APLICACIÓN                                                       │
│     ├── Rate Limiting: Máx 100 requests/15min por IP                        │
│     ├── Validación Zod: Esquemas estrictos en cada endpoint                 │
│     └── Sanitización: Limpieza de inputs                                    │
│                                                                              │
│  4. CAPA DE AUTENTICACIÓN                                                    │
│     ├── JWT: Tokens firmados con expiración de 8h                           │
│     └── Bcrypt: Hash de contraseñas (cost factor 12)                        │
│                                                                              │
│  5. CAPA DE DATOS                                                            │
│     ├── Prisma ORM: Queries parametrizadas (anti SQL Injection)             │
│     └── Least Privilege: Usuario DB con permisos mínimos                    │
│                                                                              │
│  6. CAPA DE OBSERVABILIDAD                                                   │
│     └── Winston: Logs estructurados para auditoría                          │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Configuración de Seguridad Aplicada

| Componente | Configuración | Propósito |
|------------|---------------|-----------|
| **Helmet** | Defaults + custom CSP | Prevenir XSS, clickjacking |
| **Rate Limit** | 100 req / 15 min | Prevenir DDoS/brute force |
| **CORS** | Origin específico | Restringir acceso cross-origin |
| **Zod** | Esquemas en cada endpoint | Validación de entrada |
| **JWT** | RS256, 8h expiry | Autenticación stateless |
| **Bcrypt** | Cost factor 12 | Hashing seguro de passwords |

---

## 🚀 Instalación y Configuración

### Requisitos del Sistema

| Componente | Versión Mínima | Recomendada |
|------------|----------------|-------------|
| Node.js | 18 LTS | 20 LTS |
| PostgreSQL | 14 | 16 |
| RAM | 4 GB | 8 GB |
| Disco | 10 GB | 50 GB |
| SO | Windows Server 2019 | Windows Server 2022 |

### Instalación Paso a Paso

```powershell
# 1. Clonar repositorio
git clone <repo-url>
cd pump-iot-api

# 2. Instalar dependencias
pnpm install

# 3. Configurar variables de entorno
copy .env.example .env
# Editar .env con valores de producción

# 4. Generar cliente Prisma
npx prisma generate

# 5. Aplicar migraciones
npx prisma migrate deploy

# 6. Iniciar en desarrollo
pnpm dev

# 7. Build para producción
pnpm build
pnpm start
```

### Variables de Entorno (.env)

```env
# Base de Datos
DATABASE_URL="postgresql://pump_user:SecurePassword123!@localhost:5432/pump_iot_db"

# Servidor
PORT=4000
NODE_ENV=production
FRONTEND_URL=http://localhost:3000

# Seguridad
JWT_SECRET="clave-secreta-de-minimo-32-caracteres-para-produccion"
JWT_EXPIRES_IN=8h

# Prisma Air-Gap
PRISMA_TELEMETRY_INFORMATION=false
CHECKPOINT_DISABLE=1
PRISMA_HIDE_UPDATE_MESSAGE=true
```

---

## 📦 Despliegue en Producción

### Opción A: PM2 (Recomendado)

```powershell
# Instalar PM2 globalmente
npm install pm2 -g
npm install pm2-windows-service -g

# Instalar como servicio Windows
pm2-service-install

# Iniciar aplicación
pm2 start dist/main.js --name "PumpIoT-API" --env production

# Guardar configuración
pm2 save

# Ver logs
pm2 logs PumpIoT-API

# Monitorear
pm2 monit
```

**Características PM2:**
- ✅ Reinicio automático ante crashes
- ✅ Cluster mode para multi-core
- ✅ Rotación de logs integrada
- ✅ Métricas de memoria/CPU

### Opción B: NSSM (Non-Sucking Service Manager)

```powershell
# Descargar NSSM de https://nssm.cc
# Instalar servicio
nssm install PumpIoT-API "C:\Program Files\nodejs\node.exe"
nssm set PumpIoT-API AppDirectory "C:\App\pump-iot-api"
nssm set PumpIoT-API AppParameters "dist\main.js"
nssm set PumpIoT-API DisplayName "Pump IoT Platform API"
nssm set PumpIoT-API Description "API REST para gestión de pruebas hidráulicas"
nssm set PumpIoT-API Start SERVICE_AUTO_START

# Configurar recuperación ante fallos
nssm set PumpIoT-API AppExit Default Restart
nssm set PumpIoT-API AppRestartDelay 5000

# Iniciar servicio
nssm start PumpIoT-API

# Ver estado
nssm status PumpIoT-API
```

### Verificación Post-Despliegue

```powershell
# Verificar servicio corriendo
Invoke-RestMethod -Uri http://localhost:4000/api/health

# Respuesta esperada:
# { "status": "ok", "timestamp": "...", "version": "1.0.0" }
```

---

## 🔄 Guía para Desarrolladores .NET

### Equivalencias Prisma ↔ Entity Framework

| Concepto | Entity Framework | Prisma |
|----------|------------------|--------|
| Contexto | `DbContext` | `PrismaClient` |
| Modelo | `public class Bomba {...}` | `model bomba {...}` |
| Relación | `[ForeignKey]` | `@relation(...)` |
| Migración | `Add-Migration` | `prisma migrate dev` |
| Query | LINQ | Prisma Client API |

### Ejemplo de Código Comparativo

**Entity Framework (C#):**
```csharp
var tests = await _context.Pruebas
    .Include(p => p.Cliente)
    .Include(p => p.Bomba)
    .OrderByDescending(p => p.Fecha)
    .ToListAsync();
```

**Prisma (TypeScript):**
```typescript
const tests = await prisma.prueba.findMany({
    include: { cliente: true, bomba: true },
    orderBy: { fecha: 'desc' }
});
```

### Equivalencias TypeScript ↔ C#

| C# | TypeScript | Notas |
|----|------------|-------|
| `interface ITest {...}` | `interface Test {...}` | Sintaxis casi idéntica |
| `string?` | `string \| null` | Nullable types |
| `async Task<T>` | `async (): Promise<T>` | Mismo patrón async/await |
| `var` | `const` / `let` | Inferencia de tipos |
| `List<T>` | `T[]` | Arrays genéricos |

---

## 🔧 Mantenimiento y Operaciones

### Comandos Útiles

```powershell
# Ver logs en tiempo real
pm2 logs PumpIoT-API --lines 100

# Reiniciar servicio
pm2 restart PumpIoT-API

# Ver métricas
pm2 monit

# Actualizar aplicación
git pull
pnpm install
pnpm build
pm2 restart PumpIoT-API

# Backup de base de datos
pg_dump -U pump_user pump_iot_db > backup_$(Get-Date -Format "yyyyMMdd").sql

# Restaurar backup
psql -U pump_user pump_iot_db < backup_20260123.sql
```

### Estructura de Logs

```
logs/
├── combined.log      # Todos los logs
├── error.log         # Solo errores
└── access.log        # Requests HTTP (opcional)
```

### Monitoreo de Salud

Endpoint de health check para monitoreo externo:

```
GET /api/health

Response (200 OK):
{
    "status": "ok",
    "timestamp": "2026-01-23T12:00:00.000Z",
    "version": "1.0.0"
}
```

---

## 📜 Licencia y Créditos

**Desarrollado por:** Flowserve - IoT Division  
**Uso:** Interno - Confidencial Industrial  
**Versión:** 1.0.0  
**Fecha:** Enero 2026

---

> 💡 **¿Preguntas?** Contactar al equipo de desarrollo IoT o consultar la documentación en `/docs/workflow.md`
