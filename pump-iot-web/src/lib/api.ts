/**
 * API Client for Pump IoT Platform
 * @description Centralizes all API calls to the backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
}

// --- Auth ---
export interface LoginResponse {
    success: boolean;
    user: { id: number; username: string; role: string };
    token: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
    return fetchApi<LoginResponse>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
    });
}

// --- Tests ---
export interface Test {
    id: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'GENERATED';
    generalInfo: {
        pedido: string;
        cliente: string;
        tipoDeBomba: string;
        ordenDeTrabajo: string;
        numeroBombas: number;
    };
    createdAt: string;
}

export async function getTests(): Promise<Test[]> {
    return fetchApi<Test[]>('/api/tests');
}

// --- Listados (CSV Data) ---
export interface Listado {
    pedido: string;
    cliente: string;
    tipoDeBomba: string;
    ordenDeTrabajo: string;
    numeroBombas: number;
}

export async function getListados(): Promise<Listado[]> {
    return fetchApi<Listado[]>('/api/listados');
}

// --- Import ---
export async function importExcel(file: File, sheet?: string): Promise<{ success: boolean; count: number }> {
    const formData = new FormData();
    formData.append('file', file);
    if (sheet) formData.append('sheet', sheet);

    const response = await fetch(`${API_BASE_URL}/api/import-excel`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to import Excel');
    }

    return response.json();
}

export async function importCsv(file: File): Promise<{ success: boolean; count: number }> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/api/import-csv`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to import CSV');
    }

    return response.json();
}

// --- PDF Storage ---
export interface PdfResponse {
    numeroprotocolo: number;
    success: boolean;
}

export async function uploadPdf(numeroProtocolo: number, file: File): Promise<PdfResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('numeroProtocolo', numeroProtocolo.toString());

    const response = await fetch(`${API_BASE_URL}/api/pdf/upload`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error('Failed to upload PDF to database');
    }

    return response.json();
}

// --- Health ---
export async function checkHealth(): Promise<{ status: string; version: string }> {
    return fetchApi('/api/health');
}
