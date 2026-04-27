import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-8">Welcome to your SmallBiz dashboard!</p>
      <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default DashboardPage;
