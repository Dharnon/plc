import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { TestingProvider, useTesting } from '@/contexts/TestingContext';
import { Dashboard } from '@/views/Dashboard';
import { SetupModal } from '@/views/SetupModal';
import { Cockpit } from '@/views/Cockpit';
import { Analytics } from '@/views/Analytics';

const AppContent: React.FC = () => {
  const { currentView } = useTesting();

  return (
    <AnimatePresence mode="wait">
      {currentView === 'dashboard' && <Dashboard key="dashboard" />}
      {currentView === 'setup' && <SetupModal key="setup" />}
      {currentView === 'cockpit' && <Cockpit key="cockpit" />}
      {currentView === 'analytics' && <Analytics key="analytics" />}
    </AnimatePresence>
  );
};

const Index: React.FC = () => {
  return (
    <TestingProvider>
      <AppContent />
    </TestingProvider>
  );
};

export default Index;
