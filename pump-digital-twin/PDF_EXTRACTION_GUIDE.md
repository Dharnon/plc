# Guía de Extracción de Datos PDF

Esta funcionalidad simula el proceso de extracción automática de datos desde una hoja técnica (Datasheet) en formato PDF hacia el formulario de especificaciones.

## Flujo de Trabajo Simulado

1.  **Carga del PDF:** El usuario sube el archivo PDF en el panel izquierdo.
2.  **Visualización:** El PDF se muestra integradamente usando un `iframe` nativo.
3.  **Extracción (Boton "Auto-Completar"):**
    *   Al hacer clic, el sistema simula un procesamiento inteligente.
    *   **En el código:** La función `simulateAIExtraction` en `TechnicalSpecsForm.tsx` rellena el formulario.
    *   **Datos:** Los valores corresponden exactamente a la "Hoja de Datos" de ejemplo (Pump 1K40-25-125A-OP).

## Implementación Real (Futura)

Para llevar esto a producción, se recomienda:

### 1. Backend Service
Crear un endpoint (ej: `POST /api/extract-pdf`) que reciba el archivo.

### 2. OCR / Modelos IA
Utilizar servicios especializados para extraer pares clave-valor:
*   **Azure Document Intelligence (Form Recognizer):** Excelente para tablas y formularios estructurados.
*   **AWS Textract:** Similar, muy robusto para datos técnicos.
*   **GPT-4o / Claude 3.5 Sonnet:** Se puede enviar la imagen del PDF al modelo con un prompt específico para que devuelva un JSON estructurado.

**Ejemplo de Prompt para LLM:**
> "Extrae los siguientes campos técnicos de esta hoja de datos de bomba hidráulica en formato JSON: Caudal (Capacity), TDH (Head), RPM, Potencia (Rated Power), Eficiencia, Temperatura, Viscosidad, Diámetros de rodete/aspiración/descarga..."

### 3. Mapeo
El frontend recibiría este JSON y usaría `form.setValue()` (de React Hook Form) para poblar los campos, tal como hace la simulación actual.

## Campos Mapeados

| Campo Formulario | Campo en PDF (Datasheet) | Unidad |
| :--- | :--- | :--- |
| `flowRate` | Capacity (rated/normal) | m³/h |
| `head` | Total developed head | m |
| `rpm` | Pump speed | rpm |
| `maxPower` | Rated brake power | kW |
| `efficiency` | Pump overall efficiency | % |
| `npshr` | NPSH required | m |
| `qMin` | Minimum continuous flow | m³/h |
| `bepFlow` | Flow at BEP | m³/h |
| `temperature` | Temperature | °C |
| `viscosity` | Viscosity | cP |
| `density` | Density | kg/m³ |
| `impellerDiameter` | Rated Impeller Diameter | mm |
| `suctionDiameter` | Suction Size | mm |
| `dischargeDiameter` | Discharge Size | mm |
