
import React from 'react';

interface ReportLayoutProps {
  children: React.ReactNode;
}

export const ReportLayout = ({ children }: ReportLayoutProps) => {
  return (
    <div className="w-full h-full bg-gray-100 p-8 print:p-0 print:bg-white overflow-auto flex justify-center">
      <div className="w-[210mm] h-[297mm] bg-white shadow-lg print:shadow-none p-[10mm] relative box-border mx-auto print:mx-0 flex flex-col justify-between">
        {/* Print specific styles to ensure A4 sizing */}
        <style>{`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              background: white;
            }
          }
        `}</style>
        {children}
      </div>
    </div>
  );
};
