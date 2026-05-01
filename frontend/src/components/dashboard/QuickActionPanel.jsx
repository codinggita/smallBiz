import React from 'react';
import { FiUserPlus, FiFileText, FiPhoneCall, FiMessageCircle, FiTrendingUp } from 'react-icons/fi';

const QuickActionPanel = () => {
  return (
    <div className="hidden xl:flex w-[280px] flex-shrink-0 bg-white min-h-screen border-l border-gray-200 flex-col fixed right-0 top-0 bottom-0 z-10">
      <div className="p-6 flex-1 overflow-y-auto">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Quick Actions</h3>
        
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl transition-colors border border-blue-100 text-left">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FiUserPlus className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">Add contact</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors border border-gray-100 text-left">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FiFileText className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">Create invoice</span>
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors border border-gray-100 text-left">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FiPhoneCall className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">Log a call</span>
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 text-green-700 rounded-xl transition-colors border border-green-100 text-left">
            <div className="p-2 bg-white rounded-lg shadow-sm">
              <FiMessageCircle className="w-5 h-5" />
            </div>
            <span className="font-medium text-sm">Send WhatsApp</span>
          </button>
        </div>

        <div className="mt-10">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <FiTrendingUp /> This month
          </h3>
          
          <div className="space-y-5 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div>
              <p className="text-xs text-gray-500 mb-1">Revenue collected</p>
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-gray-900">₹84,000</span>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded">+18%</span>
              </div>
            </div>
            
            <div className="h-px bg-gray-200"></div>

            <div>
              <p className="text-xs text-gray-500 mb-1">New contacts</p>
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-gray-900">42</span>
                <span className="text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded">+12%</span>
              </div>
            </div>

            <div className="h-px bg-gray-200"></div>

            <div>
              <p className="text-xs text-gray-500 mb-1">Deals closed</p>
              <div className="flex items-end justify-between">
                <span className="text-lg font-bold text-gray-900">8</span>
                <span className="text-xs font-medium text-red-600 bg-red-100 px-1.5 py-0.5 rounded">-2%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActionPanel;
