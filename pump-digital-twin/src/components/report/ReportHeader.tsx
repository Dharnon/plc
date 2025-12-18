
import React from 'react';

interface ReportHeaderProps {
    metadata: {
        orderNo: string;
        pumpModel: string;
        serialNo: string;
        customer: string;
        custOrderNo: string;
        itemNo: string;
    };
}

export const ReportHeader = ({ metadata }: ReportHeaderProps) => {
    return (
        <div className="mb-4 font-sans text-xs">
            <div className="flex justify-between items-end border-b-2 border-red-600 pb-2 mb-2">
                <img
                    src="/images/flowserve-logo.png"
                    alt="Flowserve Logo"
                    className="h-8 object-contain"
                />
                <div className="text-right font-bold text-gray-700">
                    {/* Placeholder for Dynamic Protocol No if needed */}
                    <div>Test Report</div>
                </div>
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-x-2 gap-y-1 mb-1 items-center">
                <span className="font-bold">General Data</span>
                <div className="border-b border-gray-300"></div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">Order No.:</span>
                        <span>{metadata.orderNo}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">Customer:</span>
                        <span>{metadata.customer}</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">Pump model:</span>
                        <span>{metadata.pumpModel}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">Cust. order No.:</span>
                        <span>{metadata.custOrderNo}</span>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">Serial No.:</span>
                        <span>{metadata.serialNo}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200">
                        <span className="font-semibold text-gray-600">ITEM No.:</span>
                        <span>{metadata.itemNo}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
