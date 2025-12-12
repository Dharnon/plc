import type { TestRequest } from "@/types";

export function generateMockTests(count = 5): TestRequest[] {
    const clientes = ['Flowserve SIHI Germany GmbH', 'Dragados Offshore S.A.U', 'Petrogal S.A.', 'Egyptian Maintenance company'];
    const modelos = ['1K1.5x1LF-82 M3 LF FPD - D4', 'H4x3-82RV M3 ST FPD - D4', '2K2x1-10ARV M3 LF FPD - D4'];

    return Array.from({ length: count }).map((_, i) => ({
        id: `MOCK-${1000 + i}-${i}`,
        status: i % 3 === 0 ? 'PENDING_PDF' : i % 3 === 1 ? 'GENERATED' : 'PENDING_PDF',
        generalInfo: {
            pedido: `${1345537 + i * 100}`,
            posicion: `${3000 + i * 100}`,
            cliente: clientes[i % clientes.length],
            modeloBomba: modelos[i % modelos.length],
            ordenTrabajo: `${90008264 + i}`,
            numeroBombas: Math.floor(Math.random() * 3) + 1,
        },
        createdAt: new Date().toISOString(),
    }));
}
