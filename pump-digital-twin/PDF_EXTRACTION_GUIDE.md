# Documentación Técnica: Lógica de Extracción de Datos 🧠

Esta guía detalla **cómo** y **por qué** hemos implementado la extracción de datos de la forma actual, desglosando el código utilizado tanto para PDFs como para Excel/CSV.

---

## 1. Extracción de Datos en PDF (Client-Side)

### **El Reto**
Los archivos PDF no tienen "filas" ni "columbas"; internamente son solo coordenadas. Si leemos el texto tal cual, a menudo obtenemos una "sopa de letras" donde la columna "Valor" aparece lejos de la columna "Etiqueta".

**Ejemplo de problema:**
```text
Suction Discharge 40 mm 25 mm
(El PDF lee primero las etiquetas de arriba y luego los valores de abajo)
```

### **Nuestra Solución: Reconstrucción Inteligente de Filas**
Implementamos un algoritmo en `src/services/pdfExtractionService.ts` que agrupa visualmente los textos que están a la misma altura.

#### **Paso A: Agrupación por Coordenada Y (Filas)**
Leemos todos los elementos de texto (`items`) y los agrupamos si su posición vertical (`item.transform[5]`) es similar (tolerancia ±5 píxeles).

```typescript
// src/services/pdfExtractionService.ts

// Agrupamos items en filas basándonos en Y
const rows: Record<number, { x: number; str: string }[]> = {};

items.forEach(item => {
    // Redondeamos la Y para evitar decimales minúsculos
    const y = Math.round(item.transform[5]); 
    // Buscamos si ya existe una fila cercana (±5px)
    const existingY = Object.keys(rows).map(Number).find(key => Math.abs(key - y) < yTolerance);
    
    if (existingY !== undefined) {
        rows[existingY].push({ x, str }); // Añadimos a la fila existente
    } else {
        rows[y] = [{ x, str }]; // Creamos nueva fila
    }
});
```

#### **Paso B: Ordenamiento y Unión**
Una vez agrupados, ordenamos las filas de arriba a abajo (`sort desc`) y los elementos dentro de la fila de izquierda a derecha (`sort asc`).

```typescript
// Ordenar filas de arriba a abajo
const sortedYs = Object.keys(rows).map(Number).sort((a, b) => b - a);

for (const y of sortedYs) {
    // Ordenar elementos de izquierda a derecha por X
    const rowItems = rows[y].sort((a, b) => a.x - b.x);
    // Unir texto: Ahora "Suction" y "40 mm" estarán juntos
    fullText += rowText + '\n';
}
```

### **Paso C: Extracción con Regex "Quirúrgica"**
Ahora que el texto está ordenado (`Suction 40 mm ...`), usamos Expresiones Regulares muy específicas para sacar los datos.

**Caso Especial: Succión y Descarga**
Usamos un "Wildcard Limitado" (`.{0,40}?`). Esto significa: "Busca un número, pero solo si está a menos de 40 caracteres de la palabra 'Suction'".

*   **¿Por qué?** Si usáramos solo `Suction .* (\d+)`, podría saltarse toda la línea y coger un número del final.
*   **Código:**

```typescript
specs.suctionDiameter = extractNumber([
    // "Suction" + (cualquier cosa hasta 40 chars) + (NUMERO) + "mm"
    /Suction.{0,40}?(\d+(?:\.\d+)?)\s*mm/i,
    /Suction\s+Size.{0,20}?(\d+(?:\.\d+)?)\s*mm/i
]);
```

---

## 2. Importación de Excel/CSV (`excelService.ts`)

Para importar listados masivos, procesamos el archivo directamente en el navegador usando la librería `xlsx`.

### **Mapeo de Columnas Estricto**
Los archivos Excel de origen tienen un formato fijo que debemos respetar.

#### **Código: Saltando la Cabecera**
Las primeras filas suelen tener logos o títulos que no nos sirven. Las saltamos.

```typescript
// src/services/excelService.ts

// Convertimos la hoja a array de arrays (matriz cruda)
const rawData = XLSX.utils.sheet_to_json<string[]>(sheet, { header: 1 });

// .slice(2) elimina las filas 0 y 1 (las dos primeras)
const dataRows = rawData.slice(2); 
```

#### **Código: Mapeo por Índices**
Accedemos a las columnas por su posición numérica (A=0, B=1, etc.) porque los nombres de cabecera pueden variar o estar repetidos.

```typescript
for (let i = 0; i < dataRows.length; i++) {
    const row = dataRows[i];

    // Columna B (index 1): PEDIDO-POSICIÓN (Ej: "4500123-10")
    const pedidoPosicion = String(row[1] || '').trim();
    
    // Separamos "4500123" y "10"
    const [pedido, posicion] = pedidoPosicion.includes('-')
        ? pedidoPosicion.split('-') // Cortamos por el guion
        : [pedidoPosicion, ''];

    // Columna M (index 12): MODELO BOMBA
    const modeloBomba = String(row[12] || '').trim();

    // Columna U (index 20): CANTIDAD
    const numeroBombasRaw = row[20];
}
```

---

## 3. Arquitectura: ¿Por qué en el Cliente?

Hemos decidido procesar **todo** en el navegador del usuario (Client-Side) en lugar de enviar el archivo a un servidor (Backend/Express).

### **Comparativa Técnica**

| Característica | **Cliente (Navegador)** ✅ _Elegido_ | **Backend (Express/Node)** ❌ |
| :--- | :--- | :--- |
| **Velocidad UX** | **Instantánea**. El usuario ve los datos parseados en milisegundos. | **Lenta**. Requiere subir el archivo (Upload) -> Procesar -> Bajar JSON. |
| **Coste Servidor** | **Cero**. Usa la CPU del usuario. | **Alto**. Si 100 usuarios suben Excel a la vez, el servidor sufre. |
| **Privacidad** | **Máxima**. El Excel original nunca sale del PC del usuario. Solo se envían los datos finales validados. | **Media**. El archivo debe viajar y almacenarse temporalmente en el servidor. |
| **Complejidad** | Baja. Librerías JS estándar (`xlsx`, `pdfjs-dist`). | Media. Requiere gestión de `multipart/form-data`, limpieza de temporales, etc. |

**Conclusión:** Para una aplicación moderna y ágil como este Dashboard, el procesamiento en cliente ofrece la mejor experiencia de usuario y reduce costes de infraestructura. Solo usaríamos backend si necesitáramos procesar archivos gigantes de fondo (Batch Processing) sin el usuario presente.
