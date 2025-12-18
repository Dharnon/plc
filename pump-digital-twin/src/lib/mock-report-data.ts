
export const MOCK_REPORT_DATA = {
    // Data derived from the "General Data" & "Customer Conditions" section of the PDF
    metadata: {
        orderNo: "2023-001-A",
        pumpModel: "SIHI-X200",
        serialNo: "SN-998877",
        customer: "Acme Corp Industrial",
        custOrderNo: "PO-554433",
        itemNo: "001",
        fluid: "Water",
        viscosity: "1.0",
        density: "998",
        capacity: "150",
        head: "45",
        power: "22.5", // Added missing power field
        pumpSpeed: "1450",
        impellerDiameter: "210",
        suctionDiameter: "100",
        dischargeDiameter: "80",
        motorPower: "30",
        motorSpeed: "1480",
        efficiency: "75",
    },
    // Simulation results - Curve Data
    results: [
        { flow: 10, tdh: 52.0, power: 12.5, efficiency: 35.0 },
        { flow: 30, tdh: 51.5, power: 14.2, efficiency: 48.0 },
        { flow: 50, tdh: 50.8, power: 16.5, efficiency: 58.5 },
        { flow: 70, tdh: 49.5, power: 18.8, efficiency: 65.0 },
        { flow: 90, tdh: 48.0, power: 20.5, efficiency: 69.5 },
        { flow: 110, tdh: 46.2, power: 22.0, efficiency: 72.0 },
        { flow: 130, tdh: 44.0, power: 23.2, efficiency: 73.5 },
        { flow: 150, tdh: 41.5, power: 24.1, efficiency: 74.0 }, // Rated point area
        { flow: 170, tdh: 38.5, power: 24.8, efficiency: 72.5 },
        { flow: 190, tdh: 35.0, power: 25.2, efficiency: 69.0 },
    ],
    // Raw measurement points for table
    measurements: [
        { point: 1, capacity: 10, suctionHead: 0.5, dischHead: 52.5, speed: 1450, torque: 80, power: 12.1 },
        { point: 2, capacity: 30, suctionHead: 0.4, dischHead: 51.9, speed: 1450, torque: 92, power: 13.9 },
        { point: 3, capacity: 50, suctionHead: 0.4, dischHead: 51.2, speed: 1450, torque: 105, power: 15.9 },
        { point: 4, capacity: 70, suctionHead: 0.3, dischHead: 49.8, speed: 1450, torque: 120, power: 18.2 },
        { point: 5, capacity: 90, suctionHead: 0.3, dischHead: 48.3, speed: 1450, torque: 132, power: 20.0 },
        // ... more points
    ]
};
