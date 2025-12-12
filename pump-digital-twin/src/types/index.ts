export type TestStatus = 'PENDING_PDF' | 'GENERATED' | 'COMPLETED_OK' | 'COMPLETED_NOK';

// Data from CSV/Excel import
export interface GeneralInfo {
    pedido: string;
    posicion: string;
    modeloBomba: string;
    ordenTrabajo: string;
    cliente: string;
    item?: string;
    pedidoCliente?: string;
    numeroBombas: number;
}

// Technical specs from PDF or manual entry
export interface TechnicalSpecs {
    flowRate?: number; // Caudal m3/h
    head?: number; // TDH Agua m
    rpm?: number;
    impellerDiameter?: number; // mm
    maxPower?: number; // kW

    // Fluid properties
    temperature?: number; // Cº
    viscosity?: number; // cst
    density?: number; // kg/m³

    // Performance
    npshr?: number; // m
    efficiency?: number; // %
    qMin?: number; // Minimum continuous flow m3/h
    bepFlow?: number; // Flow at BEP m3/h

    // Construction / Other
    tolerance?: string; // Test tolerance
    sealType?: string; // Seal configuration
    suctionDiameter?: number; // mm
    dischargeDiameter?: number; // mm
}

// Tests to perform
export interface TestsToPerform {
    performanceTest?: boolean;
    npsh?: boolean;
    vibraciones?: boolean;
    ruido?: boolean;
    mrt1h?: boolean;
    mrt4h?: boolean;
    homologacion?: boolean;
    presenciada?: boolean;
    motorDelPedido?: boolean;
}

export interface TestRequest {
    id: string;
    status: TestStatus;
    generalInfo: GeneralInfo;
    specs?: TechnicalSpecs;
    testsToPerform?: TestsToPerform;
    createdAt: string; // ISO Date
    assignedOperator?: string;
}
