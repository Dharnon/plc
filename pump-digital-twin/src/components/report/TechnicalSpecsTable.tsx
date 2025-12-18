
import React from 'react';

interface TechnicalSpecsTableProps {
    data: {
        fluid: string;
        viscosity: string;
        density: string;
        capacity: string;
        head: string;
        pumpSpeed: string;
        power: string;
        efficiency: string;
        impellerDiameter: string;
        suctionDiameter: string;
        dischargeDiameter: string;
        ambientTemp?: string;
        waterTemp?: string;
        motorPower: string;
        motorSpeed: string;
        motorCurrent?: string;
    };
}

export const TechnicalSpecsTable = ({ data }: TechnicalSpecsTableProps) => {
    return (
        <div className="text-[10px] font-sans">
            {/* Customer Conditions */}
            <div className="flex items-center gap-2 mb-1 mt-2">
                <div className="font-bold min-w-[100px]">Customer Conditions</div>
                <div className="h-px bg-gray-300 w-full"></div>
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-1 mb-2">
                <div className="grid grid-cols-[1fr_40px_40px] gap-1">
                    <div className="text-right text-gray-600">Fluid:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.fluid}</div>
                    <div></div>

                    <div className="text-right text-gray-600">Capacity:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.capacity}</div>
                    <div className="text-gray-500">m³/h</div>

                    <div className="text-right text-gray-600">Power:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.power}</div>
                    <div className="text-gray-500">kW</div>
                </div>

                <div className="grid grid-cols-[1fr_40px_40px] gap-1">
                    <div className="text-right text-gray-600">Viscosity:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.viscosity}</div>
                    <div className="text-gray-500">cst</div>

                    <div className="text-right text-gray-600">Head:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.head}</div>
                    <div className="text-gray-500">m</div>

                    <div className="text-right text-gray-600">Efficiency:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.efficiency}</div>
                    <div className="text-gray-500">%</div>
                </div>

                <div className="grid grid-cols-[1fr_40px_40px] gap-1">
                    <div className="text-right text-gray-600">Density:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.density}</div>
                    <div className="text-gray-500">kg/m³</div>

                    <div className="text-right text-gray-600">Pump speed:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.pumpSpeed}</div>
                    <div className="text-gray-500">rpm</div>

                    <div className="text-right text-gray-600">Impeller Ø:</div>
                    <div className="text-center font-medium border-b border-gray-200">{data.impellerDiameter}</div>
                    <div className="text-gray-500">mm</div>
                </div>
            </div>

            {/* Driver Data */}
            <div className="flex items-center gap-2 mb-1 mt-2">
                <div className="font-bold min-w-[100px]">Driver Data</div>
                <div className="h-px bg-gray-300 w-full"></div>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-2">
                <div className="grid grid-cols-[80px_1fr] gap-1">
                    <div className="text-right text-gray-600">Manufacturer:</div>
                    <div className="text-left font-medium border-b border-gray-200 pl-2">SIEMENS</div>
                </div>
                <div className="grid grid-cols-3 gap-1">
                    <div className="grid grid-cols-[1fr_40px_30px]">
                        <div className="text-right text-gray-600">Power:</div>
                        <div className="text-center font-medium border-b border-gray-200">{data.motorPower}</div>
                        <div className="text-gray-500">kW</div>
                    </div>
                    <div className="grid grid-cols-[1fr_40px_30px]">
                        <div className="text-right text-gray-600">Speed:</div>
                        <div className="text-center font-medium border-b border-gray-200">{data.motorSpeed}</div>
                        <div className="text-gray-500">rpm</div>
                    </div>
                </div>
            </div>

        </div>
    );
};
