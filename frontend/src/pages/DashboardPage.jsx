import React from 'react';
import DashboardMain from '../components/dashboard/DashboardMain';
import QuickActionPanel from '../components/dashboard/QuickActionPanel';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col xl:flex-row flex-1 relative">
        <DashboardMain />
        <QuickActionPanel />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
