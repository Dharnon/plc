# Arquitectura del Proyecto - Pump IoT Platform (Frontend)

**Versión**: 1.1  
**Fecha**: 21 Enero 2026  
**Stack**: Next.js 16.1.1 + React 19 + TypeScript + Shadcn UI + Tailwind CSS 4

---

## 1. Resumen Ejecutivo

Este es el repositorio **frontend** de la plataforma de pruebas IoT para bombas industriales. Arquitectura de **microservicios**: frontend y backend operan como servicios independientes comunicándose vía REST API.

### Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Next.js | 16.1.1 | Framework SSR/SSG |
| React | 19.2.3 | UI Library |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 4.x | Utilidades CSS |
| Shadcn UI | latest | Componentes UI |
| Zod | 4.3.5 | Validación de schemas |
| TanStack Table | 8.21.3 | Tablas virtualizadas |
| pdfjs-dist | 5.4.530 | Extracción de PDFs |

---

## 2. Estructura del Proyecto

```
pump-iot-web/
├── src/
│   ├── app/                      # Next.js App Router (rutas)
│   │   ├── layout.tsx            # Layout raíz
│   │   ├── globals.css           # Sistema de diseño
│   │   ├── login/                # Autenticación
│   │   │   └── page.tsx          # Página de login (104 líneas)
│   │   └── supervisor/           # Área autenticada
│   │       ├── layout.tsx        # Layout con sidebar (146 líneas)
│   │       ├── page.tsx          # Dashboard principal (536 líneas)
│   │       ├── csv-list/         # Listados importados
│   │       │   └── page.tsx      # Vista de CSVs (138 líneas)
│   │       ├── pdf-extractor/    # Extracción de PDFs
│   │       │   └── page.tsx      # Extractor (204 líneas)
│   │       └── test/             # Detalles de pruebas
│   │           └── [id]/page.tsx # Vista de test individual
│   ├── components/
│   │   ├── ui/                   # 22 componentes Shadcn UI
│   │   ├── import-modal.tsx      # Modal de importación Excel (258 líneas)
│   │   └── theme-toggle.tsx      # Toggle dark/light mode
│   ├── lib/
│   │   ├── api.ts                # Cliente API centralizado (111 líneas)
│   │   ├── schemas.ts            # Schemas Zod (55 líneas)
│   │   ├── pdfExtractionService.ts # Extracción PDF (205 líneas)
│   │   └── utils.ts              # Utilidades (cn helper)
│   └── hooks/
│       └── use-mobile.ts         # Hook responsive (20 líneas)
├── public/                       # Assets estáticos
├── package.json
└── tsconfig.json
```

---

## 3. Diagramas de Arquitectura

### 3.1 Flujo de Usuario (Journey Map)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px', 'fontFamily': 'arial' }}}%%
flowchart TD
    subgraph ENTRY["🚪 ENTRADA"]
        direction TB
        USER(["👤 Usuario"])
        ROOT["/ (raíz)"]
    end

    subgraph AUTH["🔐 AUTENTICACIÓN"]
        direction TB
        LOGIN["LoginPage<br/>━━━━━━━━━━━<br/>• Form con usuario/password<br/>• Validación básica<br/>• Error feedback"]
        LOGIN_SUBMIT["login() → API"]
        TOKEN["localStorage<br/>token + user JSON"]
    end

    subgraph MAIN["📊 ÁREA SUPERVISOR"]
        direction TB
        LAYOUT["SupervisorLayout<br/>━━━━━━━━━━━━━━━<br/>• Sidebar colapsable<br/>• ThemeToggle<br/>• Auth check"]
        
        DASH["DashboardPage<br/>━━━━━━━━━━━━━<br/>• StatCards (4x)<br/>• DataTable TanStack<br/>• Filtros + Búsqueda<br/>• Paginación dinámica"]
        
        CSV["CsvListPage<br/>━━━━━━━━━━━━<br/>• Stats resumidos<br/>• Tabla de staging<br/>• Link a extractor"]
        
        PDF["PdfExtractorPage<br/>━━━━━━━━━━━━━━<br/>• Upload drag & drop<br/>• Preview iframe<br/>• Extracción JSON"]
        
        TEST["TestDetailPage<br/>━━━━━━━━━━━━━<br/>• Specs técnicas<br/>• Formulario Zod<br/>• Acciones CRUD"]
    end

    subgraph BACKEND["🖥️ BACKEND API"]
        direction TB
        BE_AUTH["POST /api/auth/login"]
        BE_TESTS["GET /api/tests"]
        BE_IMPORT["POST /api/import-excel"]
        BE_LISTADOS["GET /api/listados"]
    end

    USER --> ROOT
    ROOT --> |"Redirect"| LOGIN
    LOGIN --> |"Submit"| LOGIN_SUBMIT
    LOGIN_SUBMIT --> |"Success"| TOKEN
    TOKEN --> |"router.push"| LAYOUT
    
    LAYOUT --> DASH
    LAYOUT --> CSV
    LAYOUT --> PDF
    LAYOUT --> TEST
    
    LOGIN_SUBMIT -.-> BE_AUTH
    DASH -.-> BE_TESTS
    DASH -.-> BE_IMPORT
    CSV -.-> BE_LISTADOS
```

### 3.2 Comunicación de Componentes (Dashboard)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%
flowchart TD
    subgraph PARENT["📄 supervisor/page.tsx (Dashboard)"]
        direction LR
        STATE["📦 Estado<br/>━━━━━━━━━━━<br/>tests: TestItem[]<br/>loading: boolean<br/>globalFilter: string<br/>statusFilter: string<br/>sorting: SortingState[]"]
        
        HANDLERS["🎯 Handlers<br/>━━━━━━━━━━━<br/>fetchTests()<br/>handleImportSuccess()<br/>setStatusFilter()"]
    end

    subgraph CHILDREN["🧩 COMPONENTES HIJOS"]
        direction TB
        
        HEADER["Header<br/>━━━━━━━<br/>SidebarTrigger<br/>Título<br/>LastImport info"]
        
        STATS["StatCards (x4)<br/>━━━━━━━━━━━━━━<br/>• Total<br/>• Pendientes (naranja)<br/>• En Proceso (azul)<br/>• Generados (verde)<br/><br/>onClick → setStatusFilter"]
        
        MODAL["ImportModal<br/>━━━━━━━━━━━━<br/>• Drag & Drop zone<br/>• Sheet selector<br/>• Progress states<br/>• Success feedback<br/><br/>onImportSuccess →<br/>handleImportSuccess"]
        
        TOOLBAR["Toolbar<br/>━━━━━━━━━<br/>• Select (status filter)<br/>• Input (search)<br/>• Button (refresh)"]
        
        TABLE["DataTable<br/>━━━━━━━━━━━━━━━━━<br/>• TanStack React Table<br/>• Sortable columns<br/>• Global filter<br/>• Pagination dinámica<br/>• ResizeObserver<br/><br/>onClick row →<br/>router.push(/test/:id)"]
        
        PAGINATION["Pagination<br/>━━━━━━━━━━━━<br/>First | Prev | Current | Next | Last"]
    end

    subgraph UI["🎨 COMPONENTES UI (Shadcn)"]
        direction LR
        CARD["Card"]
        BADGE["Badge"]
        BUTTON["Button"]
        INPUT["Input"]
        SELECT["Select"]
        TABLE_UI["Table"]
        DIALOG["Dialog"]
    end

    STATE --> |"tests[]"| STATS
    STATE --> |"loading"| TABLE
    STATE --> |"globalFilter"| TOOLBAR
    STATE --> |"statusFilter"| STATS
    
    STATS --> |"onClick"| HANDLERS
    MODAL --> |"onImportSuccess"| HANDLERS
    HANDLERS --> |"fetchTests()"| STATE
    TOOLBAR --> |"onChange"| STATE
    TABLE --> |"onClick"| ROUTER["router.push()"]
    
    HEADER --> BUTTON
    STATS --> CARD
    MODAL --> DIALOG
    TOOLBAR --> INPUT
    TOOLBAR --> SELECT
    TABLE --> TABLE_UI
    TABLE --> BADGE
```

### 3.3 Flujo de Importación Excel

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '14px' }}}%%
sequenceDiagram
    autonumber
    participant U as 👤 Usuario
    participant IM as ImportModal
    participant API as lib/api.ts
    participant BE as Backend :4000
    participant DB as Base de Datos

    rect rgb(240, 248, 255)
        Note over U,IM: PASO 1: Subida de archivo
        U->>IM: Drag & Drop Excel (.xlsx/.xls)
        IM->>IM: Validar extensión
        
        alt Extensión inválida
            IM-->>U: ❌ "Solo .xlsx, .xls"
        end
    end

    rect rgb(255, 250, 240)
        Note over IM,BE: PASO 2: Detección de hojas
        IM->>API: detectSheets(file)
        API->>BE: POST /api/excel/sheets
        BE-->>API: { sheets: ["Hoja1", "Hoja2", ...] }
        API-->>IM: Lista de hojas
    end

    rect rgb(240, 255, 240)
        Note over U,IM: PASO 3: Selección de hoja
        alt Una sola hoja
            IM->>IM: Auto-selecciona
        else Múltiples hojas
            IM-->>U: Mostrar opciones
            U->>IM: Selecciona hoja
        end
    end

    rect rgb(255, 240, 245)
        Note over IM,DB: PASO 4: Importación
        IM->>API: importWithSheet(file, sheet)
        API->>BE: POST /api/import-excel
        BE->>DB: INSERT INTO tests
        DB-->>BE: { count: 15 }
        BE-->>API: { success: true, count: 15 }
        API-->>IM: Resultado
    end

    rect rgb(240, 255, 255)
        Note over IM,U: PASO 5: Feedback
        IM-->>U: ✅ "15 registros importados"
        IM->>IM: onImportSuccess(filename, count)
        Note over IM: Trigger fetchTests() en padre
    end
```

### 3.4 Arquitectura de Capas

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'fontSize': '16px' }}}%%
graph TB
    subgraph PRESENTATION["🎨 CAPA DE PRESENTACIÓN"]
        direction TB
        PAGES["Pages (App Router)<br/>━━━━━━━━━━━━━━━━<br/>• login/page.tsx<br/>• supervisor/page.tsx<br/>• supervisor/csv-list/page.tsx<br/>• supervisor/pdf-extractor/page.tsx"]
        
        LAYOUTS["Layouts<br/>━━━━━━━━━━━<br/>• RootLayout<br/>• SupervisorLayout"]
        
        COMPONENTS["Components<br/>━━━━━━━━━━━━━━━<br/>• ImportModal<br/>• ThemeToggle<br/>• UnitConverter"]
        
        UI_PRIMITIVES["UI Primitives (Shadcn)<br/>━━━━━━━━━━━━━━━━━━<br/>22 componentes base:<br/>Button, Card, Dialog,<br/>Table, Select, etc."]
    end

    subgraph BUSINESS["⚙️ CAPA DE LÓGICA DE NEGOCIO"]
        direction TB
        SCHEMAS["Validación (Zod)<br/>━━━━━━━━━━━━━━━━<br/>• technicalSpecsSchema<br/>• TestsToPerform interface<br/>• GeneralInfo interface"]
        
        SERVICES["Servicios<br/>━━━━━━━━━━━━━━━━<br/>• pdfExtractionService.ts<br/>  - extractSpecsFromPdf()<br/>  - parseTextToSpecs()"]
        
        HOOKS["Custom Hooks<br/>━━━━━━━━━━━━<br/>• useIsMobile()<br/>• useSidebar()"]
    end

    subgraph DATA["📡 CAPA DE DATOS"]
        direction TB
        API_CLIENT["API Client (lib/api.ts)<br/>━━━━━━━━━━━━━━━━━━━━<br/>• fetchApi\u003cT\u003e() wrapper<br/>• login(), getTests()<br/>• importExcel(), getListados()<br/>• checkHealth()"]
        
        LOCAL_STORAGE["Local Storage<br/>━━━━━━━━━━━━━━<br/>• token (JWT)<br/>• user (JSON)<br/>• lastImport"]
    end

    subgraph EXTERNAL["🌐 SERVICIOS EXTERNOS"]
        direction TB
        BACKEND["Backend REST API<br/>━━━━━━━━━━━━━━━<br/>localhost:4000<br/><br/>Endpoints:<br/>• POST /api/auth/login<br/>• GET /api/tests<br/>• POST /api/import-excel<br/>• GET /api/listados"]
    end

    PAGES --> LAYOUTS
    LAYOUTS --> COMPONENTS
    COMPONENTS --> UI_PRIMITIVES
    
    PAGES --> HOOKS
    PAGES --> SCHEMAS
    COMPONENTS --> SERVICES
    
    PAGES --> API_CLIENT
    COMPONENTS --> API_CLIENT
    PAGES --> LOCAL_STORAGE
    
    API_CLIENT --> BACKEND
```

---

## 4. Auditoría de Buenas Prácticas (Vercel React)

### 4.1 Reglas Cumplidas ✅

| Regla | Categoría | Estado | Evidencia |
|-------|-----------|--------|-----------|
| `rerender-memo` | Re-renders | ✅ | `useMemo` para columnas de tabla y datos filtrados |
| `rerender-functional-setstate` | Re-renders | ✅ | `setOpen((prev) => !prev)` en Sidebar |
| `rerender-lazy-state-init` | Re-renders | ✅ | useState con función en SidebarMenuSkeleton |
| `js-early-exit` | JavaScript | ✅ | Returns tempranos en handlers |
| `rendering-conditional-render` | Rendering | ✅ | Uso de ternarios para condicionales |
| `bundle-barrel-imports` | Bundle | ✅ | Imports directos, no barrel files |

### 4.2 Mejoras Recomendadas ⚠️

| Regla | Categoría | Estado | Recomendación |
|-------|-----------|--------|---------------|
| `bundle-dynamic-imports` | Bundle | ⚠️ | Importar dinámicamente componentes pesados como `pdfjs-dist` |
| `async-parallel` | Async | ⚠️ | Usar `Promise.all()` si hay múltiples fetches independientes |
| `server-cache-react` | Server | ⚠️ | Considerar React.cache() para data fetching en Server Components |
| `client-swr-dedup` | Client | ⚠️ | Considerar SWR para auto-deduplicación de requests |

### 4.3 Código de Ejemplo - Mejora Sugerida

```typescript
// ❌ Actual (carga síncrona de pdfjs)
import * as pdfjsLib from 'pdfjs-dist';

// ✅ Recomendado (carga dinámica)
const getPdfLib = async () => {
    const pdfjsLib = await import('pdfjs-dist');
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';
    return pdfjsLib;
};
```

---

## 5. Principios de Clean Code Aplicados

| Principio | Estado | Ejemplo |
|-----------|--------|---------|
| **SRP** (Single Responsibility) | ✅ | Cada componente hace una sola cosa |
| **DRY** (Don't Repeat Yourself) | ✅ | `fetchApi<T>` centraliza HTTP |
| **KISS** (Keep It Simple) | ✅ | Lógica directa, sin sobreingeniería |
| **Separation of Concerns** | ✅ | UI / Logic / Data en carpetas separadas |
| **Meaningful Names** | ✅ | `handleImportSuccess`, `technicalSpecsSchema` |
| **Small Functions** | ✅ | Funciones de 10-30 líneas promedio |
| **Comments for Why** | ⚠️ | Algunos TODOs pendientes |

---

## 6. Decisiones Arquitectónicas

### 6.1 ¿Por qué Next.js App Router?

- **File-based routing**: Rutas predecibles desde estructura de archivos
- **Server Components**: Optimización automática de bundle
- **Layouts anidados**: SupervisorLayout encapsula auth check

### 6.2 ¿Por qué Shadcn UI?

- **Código local**: 0% vendor lock-in (vs Telerik)
- **Radix primitives**: Accesibilidad WCAG 2.1 incluida
- **Customizable**: Puedes modificar cualquier componente

### 6.3 ¿Por qué Zod?

- **Zero dependencies**: Ideal para air-gapped
- **TypeScript-native**: Inferencia de tipos automática
- **Runtime validation**: Captura errores antes de enviar al backend

---

## 7. Issues Conocidos

| Issue | Severidad | Estado |
|-------|-----------|--------|
| PDF Worker carga desde CDN | 🔴 Alta | Ver [README_PDF_WORKER_FIX.md](./README_PDF_WORKER_FIX.md) |
| Sin tests automatizados | ⚠️ Media | Planificado |
| Console.log en lugar de logger | ⚠️ Media | Considerar pino |

---

## 8. Referencias

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Shadcn UI Components](https://ui.shadcn.com)
- [Vercel React Best Practices](https://vercel.com/blog/how-we-optimized-react)
- [Zod Documentation](https://zod.dev)
