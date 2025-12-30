import type { TestRequest } from "@/types";

const API_BASE = '/api'; // Relative path, handled by Vite proxy or Express static serving

export const api = {
    // 1. Fetch all tests (Pending + Generated)
    getTests: async (): Promise<TestRequest[]> => {
        const response = await fetch(`${API_BASE}/tests`);
        if (!response.ok) {
            throw new Error('Failed to fetch tests');
        }
        return response.json();
    },

    // 2. Upload Excel file
    uploadExcel: async (file: File): Promise<{ success: boolean; count: number }> => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch(`${API_BASE}/import-excel`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload Excel');
        }
        return response.json();
    },

    // 3. Generate PDF
    generatePdf: async (data: any): Promise<Blob> => {
        const response = await fetch(`${API_BASE}/generate-pdf`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to generate PDF');
        }

        return response.blob();
    },

    // 4. Generate/Complete Test (move from Pending to Production)
    generateTest: async (data: any): Promise<void> => {
        const response = await fetch(`${API_BASE}/tests/generate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to generate test');
        }
    }
};
