# Pump IoT Platform - Architecture Overview

## 1. High-Level Architecture (Monorepo)

The project follows a **Monorepo** architecture powered by **pnpm workspaces** and **Turborepo**. This strategy allows us to manage distinct applications with different technical requirements under a single unified codebase, sharing dependencies and ensuring atomic versioning.

### 🏗️ Structure
- **Root**: Orchestration layer (scripts, tooling, global configs).
- **`apps/supervisor`** (Next.js 16): The administrative and management layer.
- **`apps/operator`** (Vite + React 18): The high-performance HMI (Human-Machine Interface) layer.

---

## 2. Applications & Responsibilities

### 🏭 @pump-iot/supervisor (The "Brain")
- **Tech Stack**: Next.js 16 (App Router), React 19, Turbopack, TailwindCSS v4 (PostCSS).
- **Role**: Handles authentication, user management, historical data visualization, reporting, and broader platform orchestration.
- **Why Next.js?**: Leveraging Server Components (RSC) for dashboard performance and SEO-friendly structures (though private), plus robust routing for management views.

### 🔧 @pump-iot/operator (The "Hands")
- **Tech Stack**: Vite, React 18, Three.js (@react-three/fiber), Framer Motion.
- **Role**: Dedicated HMI for real-time pump testing, 3D visualization (Digital Twin), and live telemetry.
- **Why Vite + React 18?**: 
  - **Visualization Stability**: React 18 is explicitly chosen to maintain compatibility with the mature 3D ecosystem (Three.js/Drei) which has friction with React 19's hydration model.
  - **SPA Performance**: Pure Client-Side Rendering (CSR) is ideal for long-lived, interactive sessions like a test bench control panel.

---

## 3. Integration Strategy (Reverse Proxy)

To provide a seamless User Experience (UX), both applications are presented under a single domain origin, masking the distributed nature of the system.

### 🔄 The "Rewrite" Pattern
We utilize **Next.js Rewrites** in the Supervisor app to act as a Reverse Proxy for the Operator app.

- **Ingress**: User navigates to `domain.com/operator`
- **Proxy**: Next.js intercepts this route and transparently forwards the request to the internal Operator service (`localhost:8080` in dev).
- **Outcome**: The user perceives a single application, preserving login context (via shared cookies/localStorage domain scope) and simplifying network topology.

### 🚀 Client-Side Routing
- **Supervisor**: Handles `/`, `/login`, `/dashboard`, etc.
- **Operator**: Lives exclusively in `/operator/*`. Configured with `basename="/operator"` to respect its nested mounting point.

---

## 4. Key Design Decisions

1.  **Isolation of Concerns**: Heavy 3D rendering (Operator) is decoupled from the administrative dashboard (Supervisor). A crash in the WebGL context does not take down the entire platform management interface.
2.  **Version Flexibility**: We can leverage Bleeding Edge tech (React 19) for the management dashboard while keeping a Stable/LTS environment (React 18) for critical HMI components.
3.  **Unified Dev Experience**: A single `pnpm dev` command launches the entire ecosystem in parallel.

## 5. Future Scalability
- **Shared UI Library**: We can easily extract a `packages/ui` workspace to share Shadcn components between both apps.
- **Micro-frontends**: The current proxy structure paves the way for a micro-frontend approach if we need to inject the Operator view directly into a Supervisor layout in the future.
