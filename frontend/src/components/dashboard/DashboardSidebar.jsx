import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, FiUsers, FiBriefcase, FiFileText, 
  FiMessageSquare, FiSettings, FiPieChart, FiLink 
} from 'react-icons/fi';
import { Storage } from '../../utils/storage';

const DashboardSidebar = ({ onCloseMobile }) => {
  const location = useLocation();
  const user = Storage.getLocal('USER') || Storage.getSession('USER') || {};

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome className="w-5 h-5" /> },
    { name: 'Contacts', path: '/contacts', icon: <FiUsers className="w-5 h-5" /> },
    { name: 'Deals', path: '/deals', icon: <FiBriefcase className="w-5 h-5" /> },
    { name: 'Invoices', path: '/invoices', icon: <FiFileText className="w-5 h-5" /> },
    { name: 'WhatsApp', path: '/whatsapp', icon: <FiMessageSquare className="w-5 h-5" /> },
    { name: 'Integrations', path: '/integrations', icon: <FiLink className="w-5 h-5" /> },
    { name: 'Reports', path: '/reports', icon: <FiPieChart className="w-5 h-5" /> },
    { name: 'Settings', path: '/settings', icon: <FiSettings className="w-5 h-5" /> },
  ];

  return (
    <div className="w-[240px] flex-shrink-0 bg-[#112D4E] h-full flex flex-col">
      <div className="px-6 py-5 flex items-center">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dwpjwccxd/image/upload/v1777029177/smallbiz_cursor_obutfe.png" 
            alt="SmallBiz Logo" 
            className="h-16 w-auto object-contain scale-125 origin-left cursor-pointer"
          />
        </Link>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={onCloseMobile}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                  isActive 
                    ? 'bg-[#3F72AF] text-white' 
                    : 'text-[#DBE2EF] hover:bg-[#3F72AF]/50 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#3F72AF] text-white flex items-center justify-center font-bold overflow-hidden flex-shrink-0">
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user.name || 'User'}</p>
            <p className="text-xs text-[#DBE2EF] truncate">{user.businessName || 'Business'}</p>
          </div>
        </div>
        <button className="w-full py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
