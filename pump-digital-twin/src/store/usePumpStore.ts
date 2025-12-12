import { create } from 'zustand';
import type { TestRequest } from '@/types';

interface PumpState {
    tests: TestRequest[];
    globalFilter: string;

    // Actions
    setTests: (tests: TestRequest[]) => void;
    addTests: (newTests: TestRequest[]) => void;
    updateTest: (id: string, updates: Partial<TestRequest>) => void;
    setGlobalFilter: (filter: string) => void;

    // Helpers
    getStats: () => { total: number; pending: number; completed: number; nok: number };
}

export const usePumpStore = create<PumpState>((set, get) => ({
    tests: [],
    globalFilter: '',

    setTests: (tests) => set({ tests }),

    addTests: (newTests) => set((state) => ({
        tests: [...state.tests, ...newTests]
    })),

    updateTest: (id, updates) => set((state) => ({
        tests: state.tests.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

    setGlobalFilter: (filter) => set({ globalFilter: filter }),

    getStats: () => {
        const { tests } = get();
        return {
            total: tests.length,
            pending: tests.filter(t => t.status === 'PENDING_PDF').length,
            completed: tests.filter(t => t.status === 'COMPLETED_OK').length,
            nok: tests.filter(t => t.status === 'COMPLETED_NOK').length,
        };
    }
}));
