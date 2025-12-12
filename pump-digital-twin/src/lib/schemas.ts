import { z } from "zod";

export const technicalSpecsSchema = z.object({
    // Primary
    flowRate: z.coerce.number().min(0.1, "Requerido"),
    head: z.coerce.number().min(0.1, "Requerido"),
    rpm: z.coerce.number().int().min(1, "Requerido"),
    impellerDiameter: z.coerce.number().optional(),
    maxPower: z.coerce.number().optional(),

    // Fluid
    temperature: z.coerce.number().optional(),
    viscosity: z.coerce.number().optional(),
    density: z.coerce.number().optional(),

    // Performance
    npshr: z.coerce.number().optional(),
    efficiency: z.coerce.number().optional(),
    qMin: z.coerce.number().optional(),
    bepFlow: z.coerce.number().optional(),

    // Construction
    tolerance: z.string().optional(),
    sealType: z.string().optional(),
    suctionDiameter: z.coerce.number().optional(),
    dischargeDiameter: z.coerce.number().optional(),
});

export type TechnicalSpecsFormValues = z.infer<typeof technicalSpecsSchema>;
