import React from 'react';
import { ReportLayout } from '../components/report/ReportLayout';
import { ReportHeader } from '../components/report/ReportHeader';
import { TechnicalSpecsTable } from '../components/report/TechnicalSpecsTable';
import { PerformanceCharts } from '../components/report/PerformanceCharts';
import { MOCK_REPORT_DATA } from '../lib/mock-report-data';

export const ReportPreview = () => {
    // State to hold report data. Initialize with MOCK data, but allow overwriting.
    const [reportData, setReportData] = React.useState(MOCK_REPORT_DATA);

    React.useEffect(() => {
        // 1. Check if data was injected before React mounted (Puppeteer context)
        // @ts-ignore
        if (window.REPORT_DATA) {
            // @ts-ignore
            setReportData(window.REPORT_DATA);
        }

        // 2. Listen for real-time updates (useful if page is kept open)
        const handleDataUpdate = (event: CustomEvent) => {
            console.log('Received report data update:', event.detail);
            setReportData(event.detail);
        };

        // @ts-ignore
        window.addEventListener('REPORT_DATA_UPDATE', handleDataUpdate);
        return () => {
            // @ts-ignore
            window.removeEventListener('REPORT_DATA_UPDATE', handleDataUpdate);
        };
    }, []);

    return (
        <ReportLayout>
            <ReportHeader metadata={reportData.metadata} />
            <TechnicalSpecsTable data={reportData.metadata} />
            <PerformanceCharts data={reportData.results} />

            {/* Footer / Results Evaluation Placeholder */}
            <div className="mt-4 border-t-2 border-gray-400 pt-2 text-xs">
                <div className="font-bold mb-1">Results Evaluation</div>
                <div className="grid grid-cols-2 gap-4 border border-gray-300 p-2 text-center">
                    {/* Using safe access checks or mock data logic for formatted display */}
                    <div>TDH at Qrated: <span className="font-mono">#VARIANCE!</span> m</div>
                    <div>Power at Qrated: <span className="font-mono">#VARIANCE!</span> kW</div>
                </div>
            </div>

            {/* Floating Download Button (Testing Purpose) */}
            <button
                onClick={async () => {
                    try {
                        const response = await fetch('http://localhost:3000/api/generate-pdf', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(reportData)
                        });
                        if (!response.ok) throw new Error('Generation failed');

                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `report-${reportData.metadata.orderNo}.pdf`;
                        a.click();
                    } catch (e) {
                        console.error(e);
                        alert('Error generating PDF. Make sure server is running on port 3000');
                    }
                }}
                className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg print:hidden hover:bg-blue-700 transition"
                title="Download PDF"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </button>
        </ReportLayout>
    );
};
