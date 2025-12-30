import { create } from 'zustand';
import type { TestRequest } from '@/types';
import { api } from '@/services/api';

interface PumpState {
    tests: TestRequest[];
    globalFilter: string;
    isLoading: boolean;

    // Actions
    setTests: (tests: TestRequest[]) => void;
    loadTests: () => Promise<void>;
    importExcel: (file: File) => Promise<void>;
    generateTest: (id: string, data: any) => Promise<void>;
    updateTest: (id: string, updates: Partial<TestRequest>) => void;
    setGlobalFilter: (filter: string) => void;

    // Helpers
    getStats: () => { total: number; pending: number; completed: number; nok: number };
}

export const usePumpStore = create<PumpState>((set, get) => ({
    tests: [],
    globalFilter: '',
    isLoading: false,

    setTests: (tests) => set({ tests }),

    loadTests: async () => {
        set({ isLoading: true });
        try {
            const data = await api.getTests();
            set({ tests: data });
        } catch (error) {
            console.error('Failed to load tests', error);
        } finally {
            set({ isLoading: false });
        }
    },

    importExcel: async (file) => {
        set({ isLoading: true });
        try {
            await api.uploadExcel(file);
            // Verify: Refresh list after import
            const data = await api.getTests();
            set({ tests: data });
        } catch (error) {
            console.error('Failed to import excel', error);
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    generateTest: async (id: string, data: any) => {
        set({ isLoading: true });
        try {
            await api.generateTest({ id, ...data });
            const list = await api.getTests();
            set({ tests: list });
        } catch (error) {
            console.error('Failed to generate test', error);
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

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
