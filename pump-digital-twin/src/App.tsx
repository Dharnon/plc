import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '@/pages/DashboardPage';
import TestDetail from '@/pages/TestDetail';
import { ReportPreview } from '@/pages/ReportPreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/test/:id" element={<TestDetail />} />
        <Route path="/report/preview" element={<ReportPreview />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
