import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { useDebounce } from '../hooks/useDebounce';
import { useModal } from '../hooks/useModal';
import {
  FiSearch, FiFilter, FiPlus, FiList, FiGrid, FiChevronDown,
  FiMessageCircle, FiEdit2, FiMoreVertical, FiClock, FiUser,
  FiAlertCircle, FiSettings, FiAlignLeft, FiCalendar, FiPhone, FiX
} from 'react-icons/fi';

const mockDeals = [
  { id: '1', name: 'Website Redesign', contact: 'Priya Mehta', company: 'Freelance', stage: 'Proposal Sent', value: 45000, daysOpen: 16, closeDate: '2023-11-20', tags: ['High Value'], assigneeInitials: 'RK' },
  { id: '2', name: 'Bulk T-Shirt Order', contact: 'Amit Singh', company: 'Tech Solutions Inc.', stage: 'Won', value: 120000, daysOpen: 5, closeDate: '2023-10-15', tags: [], assigneeInitials: 'AS' },
  { id: '3', name: 'Consulting Retainer', contact: 'Neha Gupta', company: 'Sharma Enterprises', stage: 'Negotiation', value: 85000, daysOpen: 18, closeDate: '2023-11-05', tags: ['Urgent', 'Referral'], assigneeInitials: 'RK' },
  { id: '4', name: 'Office Supplies Q4', contact: 'Suresh Patel', company: 'Patel & Sons', stage: 'Lead', value: 15000, daysOpen: 2, closeDate: '2023-12-01', tags: [], assigneeInitials: 'AS' },
  { id: '5', name: 'Marketing Campaign', contact: 'Ravi Kumar', company: 'Rajan Textiles', stage: 'Contacted', value: 65000, daysOpen: 6, closeDate: '2023-11-15', tags: ['Q4'], assigneeInitials: 'RK' },
  { id: '6', name: 'Annual Server Maintenance', contact: 'John Doe', company: 'JD Corp', stage: 'Proposal Sent', value: 55000, daysOpen: 4, closeDate: '2023-11-10', tags: [], assigneeInitials: 'RK' }
];

const STAGES = ['Lead', 'Contacted', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'];

const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

const DealsPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('kanban'); // 'kanban' or 'list'
  
  // Custom Hooks integration
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const newDealModal = useModal();

  // Filter deals based on debounced search
  const filteredDeals = useMemo(() => {
    if (!debouncedSearchTerm) return mockDeals;
    return mockDeals.filter(deal => 
      deal.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      deal.contact.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      deal.company.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  // Computed stats using filteredDeals
  const totalPipelineValue = filteredDeals.filter(d => d.stage !== 'Won' && d.stage !== 'Lost').reduce((acc, d) => acc + d.value, 0);
  const openDealsCount = filteredDeals.filter(d => d.stage !== 'Won' && d.stage !== 'Lost').length;
  const avgDealSize = openDealsCount > 0 ? totalPipelineValue / openDealsCount : 0;
  const wonDealsCount = filteredDeals.filter(d => d.stage === 'Won').length;
  const winRate = filteredDeals.length > 0 ? Math.round((wonDealsCount / filteredDeals.length) * 100) : 0;

  const getStageColor = (stage) => {
    switch (stage) {
      case 'Lead': return 'bg-[#DBE2EF] text-[#112D4E]';
      case 'Contacted': return 'bg-blue-100 text-blue-800';
      case 'Proposal Sent': return 'bg-indigo-100 text-indigo-800';
      case 'Negotiation': return 'bg-orange-100 text-orange-800';
      case 'Won': return 'bg-[#3F72AF] text-white';
      case 'Lost': return 'bg-[#112D4E] text-[#F9F7F7]';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderKanbanBoard = () => {
    return (
      <div className="space-y-8 pb-10">
        {STAGES.map(stage => {
          const stageDeals = filteredDeals.filter(d => d.stage === stage);
          const stageValue = stageDeals.reduce((acc, d) => acc + d.value, 0);
          const isWon = stage === 'Won';
          const isLost = stage === 'Lost';

          return (
            <div key={stage} className={`${isLost ? 'opacity-60' : ''}`}>
              {/* Stage Header Row */}
              <div className="flex items-center gap-4 mb-4 px-1">
                <div className={`px-4 py-1.5 rounded-full text-[13px] font-extrabold uppercase tracking-widest border ${
                  isWon ? 'bg-[#3F72AF] text-white border-[#3F72AF]' :
                  isLost ? 'bg-[#112D4E] text-white border-[#112D4E]' :
                  'bg-[#DBE2EF] text-[#112D4E] border-[#cdd6e8]'
                }`}>
                  {stage}
                </div>
                <div className="bg-[#3F72AF] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                  {stageDeals.length}
                </div>
                <div className="text-[#3F72AF] text-[14px] font-bold">
                  {formatCurrency(stageValue)}
                </div>
                <div className="flex-1 h-px bg-[#DBE2EF] mx-2" />
                <button 
                  onClick={newDealModal.open}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[#3F72AF] text-[13px] font-bold border border-dashed border-[#a3b8d7] hover:bg-[#DBE2EF] rounded-lg transition-colors"
                >
                  <FiPlus className="w-3.5 h-3.5" /> Add
                </button>
              </div>

              {/* Deal Cards — Horizontal Row per card */}
              {stageDeals.length === 0 ? (
                <div className="bg-white/60 border border-dashed border-slate-200 rounded-2xl py-6 text-center text-slate-400 text-[13px] font-medium">
                  No deals in this stage
                </div>
              ) : (
                <div className="space-y-3">
                  {stageDeals.map(deal => {
                    const isStalled = deal.daysOpen > 14 && !isWon && !isLost;
                    return (
                      <div
                        key={deal.id}
                        className="bg-white border border-[#e2e8f0] rounded-2xl px-6 py-4 flex items-center gap-6 cursor-grab hover:shadow-lg hover:-translate-y-0.5 hover:border-[#3F72AF]/30 transition-all duration-200 group relative overflow-hidden"
                      >
                        {/* Left accent bar for Won */}
                        {isWon && <div className="absolute left-0 top-0 h-full w-1 bg-[#3F72AF] rounded-l-2xl" />}

                        {/* Deal Name + Tags */}
                        <div className="flex-[2] min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            {isStalled && (
                              <div className="bg-orange-100 text-orange-600 rounded-full p-1 shrink-0" title="Stalled 14+ days">
                                <FiClock className="w-3 h-3" />
                              </div>
                            )}
                            <h4 className="text-[#112D4E] text-[15px] font-bold truncate">
                              {deal.name}
                            </h4>
                          </div>
                          {deal.tags.length > 0 && (
                            <div className="flex gap-1.5 flex-wrap">
                              {deal.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded-md text-[10px] font-extrabold uppercase tracking-wider">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Contact */}
                        <div className="flex-[1.5] min-w-0 flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                            <FiUser className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[#3F72AF] text-[13px] font-bold truncate hover:underline cursor-pointer">{deal.contact}</p>
                            <p className="text-slate-400 text-[12px] truncate font-medium">{deal.company}</p>
                          </div>
                        </div>

                        {/* Value */}
                        <div className="shrink-0">
                          <div className="px-4 py-1.5 bg-[#112D4E] text-[#F9F7F7] rounded-xl text-[15px] font-extrabold tracking-wide shadow-sm whitespace-nowrap">
                            {formatCurrency(deal.value)}
                          </div>
                        </div>

                        {/* Days Open */}
                        <div className="shrink-0 text-center w-20">
                          <span className={`text-[13px] font-bold px-2.5 py-1 rounded-lg ${
                            isStalled ? 'text-orange-600 bg-orange-50 border border-orange-200' : 'text-[#3F72AF] bg-blue-50'
                          }`}>
                            Day {deal.daysOpen}
                          </span>
                        </div>

                        {/* Close Date */}
                        <div className="shrink-0 flex items-center gap-1.5 text-slate-500 text-[13px] font-semibold w-24">
                          <FiCalendar className="w-3.5 h-3.5 text-slate-400" />
                          {new Date(deal.closeDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                        </div>

                        {/* Assignee + Actions */}
                        <div className="shrink-0 flex items-center gap-2">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100 shadow-sm">
                            <button className="p-1.5 text-slate-500 hover:text-[#3F72AF] hover:bg-white rounded-lg transition-colors"><FiEdit2 className="w-4 h-4" /></button>
                            <button className="p-1.5 text-green-600 hover:bg-white rounded-lg transition-colors"><FiMessageCircle className="w-4 h-4" /></button>
                            <button className="p-1.5 text-slate-400 hover:bg-white rounded-lg transition-colors"><FiMoreVertical className="w-4 h-4" /></button>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[12px] font-bold shadow-sm">
                            {deal.assigneeInitials}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderListView = () => {
    return (
      <div className="bg-white rounded-xl border border-[#DBE2EF] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-[#DBE2EF] text-[#112D4E] text-xs uppercase tracking-wider">
                <th className="px-5 py-3.5 w-12 text-center whitespace-nowrap">
                  <input type="checkbox" className="rounded border-gray-400 text-[#3F72AF] focus:ring-[#3F72AF] w-4 h-4" />
                </th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Deal Name</th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Contact & Company</th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Stage</th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Value</th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Close Date</th>
                <th className="px-5 py-3.5 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Days Open</th>
                <th className="px-5 py-3.5 font-semibold whitespace-nowrap">Owner</th>
                <th className="px-5 py-3.5 w-24"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredDeals.map((deal, idx) => (
                <tr key={deal.id} className={`group transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F7]'} hover:bg-[#DBE2EF]/30`}>
                  <td className="px-5 py-4 text-center w-12">
                    <input type="checkbox" className="rounded border-gray-400 text-[#3F72AF] focus:ring-[#3F72AF] w-4 h-4" />
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="font-semibold text-[#112D4E] text-[14px] hover:text-[#3F72AF]">{deal.name}</span>
                    {deal.tags.length > 0 && (
                      <div className="flex gap-1 mt-1.5">
                        {deal.tags.map(tag => <span key={tag} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold uppercase tracking-wider">{tag}</span>)}
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-[#3F72AF] text-[13px] font-medium hover:underline">{deal.contact}</div>
                    <div className="text-gray-500 text-[12px]">{deal.company}</div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${getStageColor(deal.stage)}`}>
                      {deal.stage}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap font-bold text-[#112D4E] text-[14px]">
                    {formatCurrency(deal.value)}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-[#112D4E] text-[13px]">
                    {new Date(deal.closeDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-[13px]">
                    <span className={deal.daysOpen > 14 && deal.stage !== 'Won' && deal.stage !== 'Lost' ? 'text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded-md' : 'text-[#3F72AF] font-medium'}>
                      {deal.daysOpen} days
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="w-7 h-7 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[10px] font-bold" title="Assignee">
                      {deal.assigneeInitials}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right w-24">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-500 hover:text-[#3F72AF] hover:bg-blue-50 rounded-md transition-colors"><FiEdit2 className="w-4 h-4" /></button>
                      <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors"><FiMoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col min-h-0 relative w-full">
        {/* Top Header */}
        <div className="bg-white border-b border-slate-200 px-6 lg:px-8 py-5 flex-shrink-0 z-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-[24px] font-bold text-[#112D4E] leading-none">Deals</h1>
              <span className="text-[13px] font-bold text-[#3F72AF] bg-blue-50/80 px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                {formatCurrency(totalPipelineValue)} in pipeline
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search deals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-[13px] focus:outline-none focus:border-[#3F72AF] focus:ring-1 focus:ring-[#3F72AF] w-48 lg:w-64 bg-slate-50 focus:bg-white transition-all font-medium"
                />
              </div>

              <button className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-lg text-[#112D4E] text-[13px] font-bold hover:bg-slate-50 transition-colors bg-white shadow-sm">
                <FiFilter className="w-4 h-4 text-slate-500" /> Filter
              </button>

              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setView('kanban')}
                  className={`p-1.5 rounded-md transition-all ${view === 'kanban' ? 'bg-white shadow-sm text-[#3F72AF]' : 'text-slate-500 hover:text-[#112D4E]'}`}
                  title="Kanban Board"
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-white shadow-sm text-[#3F72AF]' : 'text-slate-500 hover:text-[#112D4E]'}`}
                  title="List View"
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>

              <button onClick={newDealModal.open} className="flex items-center gap-1.5 px-4 py-2 bg-[#3F72AF] text-white rounded-lg text-[13px] font-bold hover:bg-blue-700 transition-colors shadow-sm">
                <FiPlus className="w-4 h-4" /> New deal
              </button>
            </div>
          </div>

          {/* Summary Strip */}
          <div className="bg-[#f8fafc] rounded-xl p-4 flex flex-wrap gap-4 lg:gap-8 border border-slate-200 shadow-sm">
            <div className="flex-1 min-w-[120px] lg:border-r border-slate-200 pr-4 last:border-0">
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Total Open Deals</p>
              <p className="text-[#112D4E] text-[20px] font-bold leading-none">{openDealsCount}</p>
            </div>
            <div className="flex-1 min-w-[120px] lg:border-r border-slate-200 pr-4 last:border-0">
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Closing This Month</p>
              <p className="text-[#112D4E] text-[20px] font-bold leading-none">2</p>
            </div>
            <div className="flex-1 min-w-[120px] lg:border-r border-slate-200 pr-4 last:border-0">
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Avg Deal Size</p>
              <p className="text-[#112D4E] text-[20px] font-bold leading-none">{formatCurrency(avgDealSize)}</p>
            </div>
            <div className="flex-1 min-w-[120px] lg:border-r border-slate-200 pr-4 last:border-0">
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Win Rate</p>
              <div className="flex items-center gap-2">
                <p className="text-[#112D4E] text-[20px] font-bold leading-none">{winRate}%</p>
                <span className="text-[11px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">+5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 lg:p-8 overflow-hidden flex flex-col min-h-0 relative">

          {/* Board-level filters */}
          <div className="flex gap-2.5 mb-6 flex-shrink-0 overflow-x-auto pb-2 -mx-2 px-2">
            <button className="px-4 py-1.5 bg-[#112D4E] text-white rounded-full text-[13px] font-bold shadow-sm whitespace-nowrap">All deals</button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-[#3F72AF] hover:bg-blue-50 rounded-full text-[13px] font-bold shadow-sm transition-colors whitespace-nowrap">My deals</button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-[#3F72AF] hover:bg-blue-50 rounded-full text-[13px] font-bold shadow-sm transition-colors whitespace-nowrap">Closing this month</button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 text-orange-600 hover:bg-orange-50 rounded-full text-[13px] font-bold shadow-sm transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <FiClock className="w-3.5 h-3.5" /> Stalled (14+ days)
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2">
            {view === 'kanban' ? renderKanbanBoard() : renderListView()}
          </div>
        </div>
        
        {/* New Deal Modal (Using useModal hook) */}
        {newDealModal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                <h3 className="text-[16px] font-bold text-[#112D4E]">Create New Deal</h3>
                <button onClick={newDealModal.close} className="text-slate-400 hover:text-slate-600 p-1">
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-[13px] font-semibold text-[#112D4E] mb-1.5">Deal Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[14px] focus:outline-none focus:border-[#3F72AF] focus:ring-1 focus:ring-[#3F72AF]" placeholder="e.g. Website Redesign" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-[#112D4E] mb-1.5">Value (₹)</label>
                    <input type="number" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[14px] focus:outline-none focus:border-[#3F72AF] focus:ring-1 focus:ring-[#3F72AF]" placeholder="0.00" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-[#112D4E] mb-1.5">Stage</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-[14px] focus:outline-none focus:border-[#3F72AF] focus:ring-1 focus:ring-[#3F72AF]">
                      {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
                <button onClick={newDealModal.close} className="px-4 py-2 text-[13px] font-bold text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">Cancel</button>
                <button onClick={newDealModal.close} className="px-4 py-2 text-[13px] font-bold text-white bg-[#3F72AF] hover:bg-blue-700 rounded-lg transition-colors shadow-sm">Save Deal</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DealsPage;
