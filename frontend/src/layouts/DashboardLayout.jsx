import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-[#F9FAFB] font-sans text-gray-800">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#112D4E] flex items-center justify-between px-4 z-50">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dwpjwccxd/image/upload/v1777029177/smallbiz_cursor_obutfe.png" 
            alt="SmallBiz Logo" 
            className="h-10 w-auto object-contain cursor-pointer"
          />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
          {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay for Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Sidebar Wrapper */}
      <div 
        className={`fixed inset-y-0 left-0 z-50 transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out md:z-10`}
      >
        <DashboardSidebar onCloseMobile={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen w-full md:ml-[240px] pt-16 md:pt-0 overflow-x-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
