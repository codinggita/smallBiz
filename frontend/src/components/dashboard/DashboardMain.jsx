import React from 'react';
import { 
  FiSearch, FiBell, FiBriefcase, FiUsers, FiFileText, FiMessageCircle,
  FiTrendingUp, FiMoreHorizontal, FiCheckCircle, FiAlertCircle, FiClock
} from 'react-icons/fi';
import { Storage } from '../../utils/storage';

const DashboardMain = () => {
  const user = Storage.getLocal('USER') || Storage.getSession('USER') || {};
  const userName = user.name ? user.name.split(' ')[0] : 'Ravi';

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen p-4 md:p-8 xl:mr-[280px]">
      
      {/* Section 1 - Top bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#112D4E]">Dashboard</h1>
          <p className="text-[#3F72AF] text-sm font-medium mt-1">Good morning, {userName} 👋</p>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/20 focus:border-[#3F72AF] w-64 shadow-sm"
            />
          </div>
          <button className="relative p-2 text-gray-500 hover:text-[#3F72AF] transition-colors">
            <FiBell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#F9FAFB]"></span>
          </button>
        </div>
      </div>

      {/* Section 2 - KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-[#3F72AF] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 font-medium">Open Deals</p>
            <FiBriefcase className="text-gray-400 group-hover:text-[#3F72AF] transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">12</h3>
          <p className="text-sm text-gray-500 mt-1">₹2,40,000 total</p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-[#3F72AF] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 font-medium">Contacts this week</p>
            <FiUsers className="text-gray-400 group-hover:text-[#3F72AF] transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">18</h3>
          <div className="flex items-center mt-1 text-sm text-green-600 font-medium">
            <FiTrendingUp className="mr-1" /> +4 vs last week
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-[#3F72AF] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 font-medium">Invoices Pending</p>
            <FiFileText className="text-gray-400 group-hover:text-[#3F72AF] transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-orange-600">3</h3>
          <p className="text-sm text-gray-500 mt-1">₹45,000 total <span className="text-orange-600 font-medium">(1 overdue)</span></p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl border-l-4 border-[#3F72AF] shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 font-medium">Unread WhatsApp</p>
            <FiMessageCircle className="text-gray-400 group-hover:text-[#3F72AF] transition-colors" />
          </div>
          <h3 className="text-2xl font-bold text-green-600">5</h3>
          <p className="text-sm text-gray-500 mt-1">From 3 contacts</p>
        </div>
      </div>

      {/* Section 3 - Two-column middle section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Left panel - Activity Feed (65%) */}
        <div className="w-full lg:w-[65%] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Activity Feed</h2>
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-medium bg-white shadow-sm rounded-md text-gray-900">Today</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">This Week</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">This Month</button>
            </div>
          </div>
          <div className="p-5 flex-1 overflow-y-auto max-h-[300px]">
            <div className="space-y-4">
              <div className="flex gap-3 text-sm">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700">New contact <span className="font-semibold text-[#3F72AF] cursor-pointer hover:underline">Priya Mehta</span> added via WhatsApp</p>
                  <p className="text-xs text-gray-400 mt-0.5">10 mins ago</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="mt-1 w-2 h-2 rounded-full bg-gray-800 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700">Deal with <span className="font-semibold text-[#3F72AF] cursor-pointer hover:underline">Rajan Textiles</span> moved to Proposal Sent</p>
                  <p className="text-xs text-gray-400 mt-0.5">1 hour ago</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="mt-1 w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700">Invoice <span className="font-semibold text-[#3F72AF] cursor-pointer hover:underline">#0042</span> marked as paid</p>
                  <p className="text-xs text-gray-400 mt-0.5">3 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 text-sm">
                <div className="mt-1 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <p className="text-gray-700">Integration sync completed — 14 contacts updated from Excel</p>
                  <p className="text-xs text-gray-400 mt-0.5">Yesterday, 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-gray-100 text-center">
            <button className="text-[#3F72AF] text-sm font-medium hover:underline">View all activity</button>
          </div>
        </div>

        {/* Right panel - Upcoming Follow-ups (35%) */}
        <div className="w-full lg:w-[35%] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900 flex items-center gap-2">
              <FiClock className="text-[#3F72AF]" /> Follow-ups
            </h2>
            <button className="text-gray-400 hover:text-gray-600"><FiMoreHorizontal /></button>
          </div>
          <div className="p-0 flex-1 overflow-y-auto max-h-[300px]">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Contact</th>
                  <th className="px-4 py-3 font-medium">Reason</th>
                  <th className="px-4 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">A</div>
                      <span className="font-medium text-gray-900">Amit Singh</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Awaiting payment</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Message on WhatsApp">
                      <FiMessageCircle className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">N</div>
                      <span className="font-medium text-gray-900">Neha Gupta</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">Sent proposal</td>
                  <td className="px-4 py-3 text-right">
                    <button className="p-1.5 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Message on WhatsApp">
                      <FiMessageCircle className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Section 4 - Pipeline Snapshot */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h2 className="font-bold text-gray-900">Pipeline Snapshot</h2>
            <p className="text-sm text-gray-500 mt-1">This month's performance</p>
          </div>
          <button className="text-sm font-medium text-[#3F72AF] hover:underline">View Deals</button>
        </div>
        
        {/* Horizontal visual bar */}
        <div className="h-8 flex rounded-lg overflow-hidden cursor-pointer">
          <div className="bg-gray-200 hover:opacity-90 transition-opacity w-[20%] border-r border-white relative group">
            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Lead (5) • ₹40,000</div>
          </div>
          <div className="bg-blue-300 hover:opacity-90 transition-opacity w-[25%] border-r border-white relative group">
            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Contacted (6) • ₹75,000</div>
          </div>
          <div className="bg-blue-400 hover:opacity-90 transition-opacity w-[15%] border-r border-white relative group">
            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Proposal (2) • ₹30,000</div>
          </div>
          <div className="bg-blue-500 hover:opacity-90 transition-opacity w-[10%] border-r border-white relative group">
             <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Negotiation (1) • ₹25,000</div>
          </div>
          <div className="bg-[#3F72AF] hover:opacity-90 transition-opacity w-[20%] border-r border-white relative group">
            <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Won (4) • ₹1,20,000</div>
          </div>
          <div className="bg-[#DBE2EF] hover:opacity-90 transition-opacity w-[10%] relative group">
             <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-10 transition-opacity">Lost (2) • ₹10,000</div>
          </div>
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-medium text-gray-600">
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-gray-200"></div> Lead (5)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-300"></div> Contacted (6)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-400"></div> Proposal (2)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-500"></div> Negotiation (1)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#3F72AF]"></div> Won (4)</div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-[#DBE2EF]"></div> Lost (2)</div>
        </div>
      </div>

      {/* Section 5 - Bottom row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left - Recent Invoices (60%) */}
        <div className="w-full lg:w-[60%] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">Recent Invoices</h2>
            <button className="text-gray-400 hover:text-gray-600"><FiMoreHorizontal /></button>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                <tr>
                  <th className="px-5 py-3 font-medium">Client Name</th>
                  <th className="px-5 py-3 font-medium">Amount</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-gray-900">Rajan Textiles</td>
                  <td className="px-5 py-3 text-gray-600">₹24,000</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Paid</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-gray-400 hover:text-[#3F72AF] text-xs font-medium transition-colors">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-gray-900">Sharma Enterprises</td>
                  <td className="px-5 py-3 text-gray-600">₹12,500</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Pending</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-[#3F72AF] hover:text-blue-800 text-xs font-medium transition-colors">Send reminder</button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-gray-900">Tech Solutions Inc.</td>
                  <td className="px-5 py-3 text-gray-600">₹45,000</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">Overdue</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-[#3F72AF] hover:text-blue-800 text-xs font-medium transition-colors">Send reminder</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-3 border-t border-gray-100 text-center mt-auto">
            <button className="text-[#3F72AF] text-sm font-medium hover:underline">View all invoices</button>
          </div>
        </div>

        {/* Right - Integration Sync Status (40%) */}
        <div className="w-full lg:w-[40%] bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Integration Sync</h2>
          </div>
          <div className="p-5 space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center text-green-600">
                  <FiFileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Excel Contacts</p>
                  <p className="text-xs text-gray-500">Synced 10 mins ago</p>
                </div>
              </div>
              <FiCheckCircle className="text-green-500 w-5 h-5" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
                  <FiMessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">WhatsApp API</p>
                  <p className="text-xs text-gray-500">Real-time active</p>
                </div>
              </div>
              <FiCheckCircle className="text-green-500 w-5 h-5" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-50 flex items-center justify-center text-orange-600">
                  <FiFileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-900">Tally Billing</p>
                  <p className="text-xs text-red-500">Failed 2 hours ago</p>
                </div>
              </div>
              <FiAlertCircle className="text-red-500 w-5 h-5" />
            </div>

            <button className="w-full mt-2 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Sync now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashboardMain;
