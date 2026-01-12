import { logger } from '../utils/logger';

export interface Test {
    id: string;
    status: string;
    generalInfo: any;
    createdAt: string;
    [key: string]: any;
}

export interface ProductionRecord {
    pedido: string;
    cliente: string;
    tipoDeBomba: string;
    ordenDeTrabajo: string;
    numeroBombas: number;
}

class MemoryStore {
    private tests: Test[] = [];
    private listadosProduccion: ProductionRecord[] = [];

    constructor() {
        // Initialize with sample data if needed, or leave empty
        logger.info('MemoryStore initialized');
        this.tests = [
            {
                id: 'test-sample-01',
                status: 'COMPLETED',
                generalInfo: {
                    pedido: '4500123456',
                    posicion: '10',
                    cliente: 'Petrobras',
                    modeloBomba: 'HPX',
                    ordenTrabajo: 'OT-2024-001',
                    numeroBombas: 2
                },
                createdAt: new Date().toISOString()
            }
        ];
    }

    getTests() {
        return this.tests;
    }

    addTest(test: Test) {
        this.tests.push(test);
    }

    clearPendingTests() {
        this.tests = this.tests.filter(t => t.status !== 'PENDING');
    }

    setListadosProduccion(records: ProductionRecord[]) {
        this.listadosProduccion = records;
    }

    getListadosProduccion() {
        return this.listadosProduccion;
    }

    getReport(id: string) {
        return this.tests.find(t => t.id === id);
    }
}

export const memoryStore = new MemoryStore();
