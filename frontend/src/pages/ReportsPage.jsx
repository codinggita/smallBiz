import React, { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  FiCalendar, FiDownload, FiChevronDown, FiTrendingUp, FiTrendingDown, 
  FiDollarSign, FiBriefcase, FiUsers, FiMessageSquare, FiPieChart, FiLink,
  FiArrowUp, FiArrowDown
} from 'react-icons/fi';

const formatCurrency = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

const TABS = ['Overview', 'Revenue', 'Pipeline', 'Contacts', 'WhatsApp', 'Team'];

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [compareMode, setCompareMode] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden w-full relative">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 px-6 lg:px-8 py-5 flex-shrink-0 z-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-5">
            <div>
              <h1 className="text-[20px] font-medium text-[#112D4E]">Reports</h1>
              <p className="text-[14px] text-[#3F72AF]">Your business at a glance</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={compareMode} 
                  onChange={(e) => setCompareMode(e.target.checked)}
                  className="rounded border-slate-300 text-[#3F72AF] focus:ring-[#3F72AF]"
                />
                <span className="text-[14px] text-[#112D4E]">Compare to previous period</span>
              </label>
              
              <div className="relative">
                <button onClick={() => {setShowDatePicker(!showDatePicker); setShowExportMenu(false);}} className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-[#112D4E] text-[13px] font-medium hover:bg-slate-50 transition-colors bg-white shadow-sm">
                  <FiCalendar className="w-4 h-4 text-[#3F72AF]" />
                  This month · Apr 2026
                  <FiChevronDown className="w-4 h-4 text-slate-400 ml-1" />
                </button>
                {showDatePicker && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 overflow-hidden">
                    {['Today', 'Yesterday', 'This week', 'Last week', 'This month', 'Last month', 'This quarter', 'This year', 'Custom range'].map(opt => (
                      <button key={opt} onClick={() => setShowDatePicker(false)} className="w-full text-left px-4 py-2 text-[13px] text-[#112D4E] hover:bg-[#F9F7F7]">{opt}</button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative">
                <button onClick={() => {setShowExportMenu(!showExportMenu); setShowDatePicker(false);}} className="flex items-center gap-2 px-4 py-2 border border-[#3F72AF] text-[#3F72AF] rounded-lg text-[13px] font-medium hover:bg-blue-50 transition-colors bg-white shadow-sm">
                  Export report
                  <FiChevronDown className="w-4 h-4 ml-1" />
                </button>
                {showExportMenu && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 overflow-hidden">
                    <button onClick={() => setShowExportMenu(false)} className="w-full text-left px-4 py-2 text-[13px] text-[#112D4E] hover:bg-[#F9F7F7]">Export as PDF</button>
                    <button onClick={() => setShowExportMenu(false)} className="w-full text-left px-4 py-2 text-[13px] text-[#112D4E] hover:bg-[#F9F7F7]">Export as CSV</button>
                    <button onClick={() => setShowExportMenu(false)} className="w-full text-left px-4 py-2 text-[13px] text-[#112D4E] hover:bg-[#F9F7F7]">Copy link</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-slate-200 mt-2">
            {TABS.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-[14px] font-medium transition-colors relative ${
                  activeTab === tab ? 'text-[#112D4E]' : 'text-[#3F72AF] hover:text-[#112D4E]'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3F72AF] rounded-t-sm" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {activeTab === 'Overview' && <OverviewTab compareMode={compareMode} />}
          {activeTab === 'Revenue' && <RevenueTab compareMode={compareMode} />}
          {activeTab === 'Pipeline' && <PipelineTab compareMode={compareMode} />}
          {activeTab === 'Contacts' && <ContactsTab compareMode={compareMode} />}
          {activeTab === 'WhatsApp' && <WhatsAppTab compareMode={compareMode} />}
          {activeTab === 'Team' && <TeamTab compareMode={compareMode} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

/* --- TAB COMPONENTS --- */

const OverviewTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Hero Metric Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 border-l-[3px] border-l-[#3F72AF] shadow-sm">
          <p className="text-[#3F72AF] text-[13px] mb-2 font-medium">Revenue collected this period</p>
          <p className="text-[#112D4E] text-[32px] font-bold leading-none">{formatCurrency(142000)}</p>
          {compareMode && (
            <div className="flex items-center gap-1.5 mt-3 text-[14px]">
              <FiArrowUp className="text-green-600 w-4 h-4" />
              <span className="text-green-600 font-medium">12%</span>
              <span className="text-[#DBE2EF] ml-1">{formatCurrency(126000)} prev</span>
            </div>
          )}
        </div>
        {/* Card 2 */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 border-l-[3px] border-l-[#3F72AF] shadow-sm">
          <p className="text-[#3F72AF] text-[13px] mb-2 font-medium">Deals won this period</p>
          <div className="flex items-baseline gap-3">
            <p className="text-[#112D4E] text-[32px] font-bold leading-none">14</p>
            <p className="text-[#3F72AF] text-[18px] font-medium">{formatCurrency(840000)}</p>
          </div>
          {compareMode && (
            <div className="flex items-center gap-1.5 mt-3 text-[14px]">
              <FiArrowUp className="text-green-600 w-4 h-4" />
              <span className="text-green-600 font-medium">2</span>
              <span className="text-[#DBE2EF] ml-1">12 prev</span>
            </div>
          )}
        </div>
        {/* Card 3 */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 border-l-[3px] border-l-[#3F72AF] shadow-sm">
          <p className="text-[#3F72AF] text-[13px] mb-2 font-medium">New contacts this period</p>
          <p className="text-[#112D4E] text-[32px] font-bold leading-none">124</p>
          <p className="text-[#3F72AF] text-[12px] mt-3 bg-blue-50 w-fit px-2 py-1 rounded">Mostly from WhatsApp (68%)</p>
        </div>
      </div>

      {/* Six-module summary grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: FiDollarSign, title: 'Revenue', metric: '₹1,42,000 collected', trend: '+12%' },
          { icon: FiBriefcase, title: 'Pipeline', metric: '68% win rate', trend: '+5%' },
          { icon: FiUsers, title: 'Contacts', metric: '47 new leads', trend: '+18%' },
          { icon: FiMessageSquare, title: 'WhatsApp', metric: '342 messages sent', trend: '-2%' },
          { icon: FiPieChart, title: 'Team', metric: '14m avg response', trend: 'Fast' },
          { icon: FiLink, title: 'Integrations', metric: 'All systems synced', trend: 'Healthy' },
        ].map((mod, i) => (
          <div key={i} className="bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm relative group">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <mod.icon className="w-5 h-5 text-[#3F72AF]" />
            </div>
            <p className="text-[#112D4E] text-[14px] font-medium mb-1">{mod.title}</p>
            <p className="text-[#112D4E] text-[22px] font-semibold mb-3">{mod.metric}</p>
            <div className="flex items-center justify-between">
              <span className={`text-[12px] font-medium px-2 py-1 rounded ${mod.trend.startsWith('+') || mod.trend === 'Fast' || mod.trend === 'Healthy' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {mod.trend}
              </span>
              <span className="text-[#3F72AF] text-[12px] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">View full report →</span>
            </div>
          </div>
        ))}
      </div>

      {/* Activity Timeline Strip */}
      <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
        <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Daily Activity</h3>
        <div className="h-48 flex items-end gap-1 mb-4">
          {/* Mocking a stacked bar chart */}
          {Array.from({ length: 30 }).map((_, i) => {
            const h1 = Math.random() * 40 + 10;
            const h2 = Math.random() * 30 + 5;
            const h3 = Math.random() * 20 + 5;
            return (
              <div key={i} className="flex-1 flex flex-col justify-end group relative cursor-pointer">
                <div className="w-full bg-[#DBE2EF]" style={{ height: `${h3}%` }}></div>
                <div className="w-full bg-[#112D4E]" style={{ height: `${h2}%` }}></div>
                <div className="w-full bg-[#3F72AF] rounded-t-sm" style={{ height: `${h1}%` }}></div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#112D4E] text-white text-[11px] p-2 rounded w-40 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
                  <p className="font-bold mb-1">Apr {i + 1}</p>
                  <p>3 deals moved</p>
                  <p>8 contacts added</p>
                  <p>₹24,000 collected</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-6 justify-center mt-4 border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#3F72AF] rounded-sm"></div><span className="text-[12px] text-[#112D4E]">Revenue</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#112D4E] rounded-sm"></div><span className="text-[12px] text-[#112D4E]">Deals</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#DBE2EF] rounded-sm"></div><span className="text-[12px] text-[#112D4E]">Contacts</span></div>
        </div>
      </div>

      {/* Missing Overview Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Scheduled Reports */}
         <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Scheduled Reports</h3>
           <div className="space-y-3">
             <div className="flex justify-between items-center p-3 border border-slate-100 rounded-lg">
               <div>
                 <p className="text-[#112D4E] text-[13px] font-medium">Monthly Revenue Summary</p>
                 <p className="text-[#3F72AF] text-[11px]">Monthly on 1st · PDF to Team</p>
               </div>
               <button className="text-[#3F72AF] text-[12px] font-medium hover:underline">Edit</button>
             </div>
             <button className="w-full py-2 border border-dashed border-[#DBE2EF] text-[#3F72AF] rounded-lg text-[12px] font-medium hover:bg-slate-50 transition-colors">
               + Schedule a report
             </button>
           </div>
         </div>

         {/* Custom Report Builder */}
         <div className="bg-[#F9F7F7] border border-[#DBE2EF] rounded-xl p-6 shadow-sm relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
              <span className="bg-[#112D4E] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider mb-2">Coming soon</span>
              <button className="border border-[#3F72AF] text-[#3F72AF] bg-white px-4 py-2 rounded-lg text-[12px] font-bold shadow-sm hover:bg-blue-50">Notify me</button>
           </div>
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-2 opacity-60">Build your own report</h3>
           <p className="text-[#3F72AF] text-[13px] opacity-60">Choose any combination of metrics, filters, and chart types to build a custom report tailored to your business.</p>
         </div>
      </div>
    </div>
  );
};

const RevenueTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary Metric Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Invoiced', val: 280000, color: 'border-l-[#3F72AF]' },
          { label: 'Total Collected', val: 142000, color: 'border-l-[#3F72AF]' },
          { label: 'Outstanding', val: 86000, color: 'border-l-[#3F72AF]' },
          { label: 'Overdue', val: 52000, color: 'border-l-[#112D4E]' }, // Red visual cue mapped to dark brand color as requested
        ].map((m, i) => (
          <div key={i} className={`bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm border-l-[3px] ${m.color}`}>
            <p className="text-[#3F72AF] text-[12px] font-medium mb-1 uppercase tracking-wider">{m.label}</p>
            <p className="text-[#112D4E] text-[24px] font-bold">{formatCurrency(m.val)}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Over Time & Collection Rate */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
            <p className="text-[#112D4E] text-[14px] font-medium mb-6 bg-blue-50 p-3 rounded-lg border border-blue-100">
              You collected <span className="font-bold">₹1,42,000</span> in April. That is <span className="font-bold text-green-600">23% more</span> than March.
            </p>
            <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Revenue Collected</h3>
            <div className="h-48 flex items-end gap-3">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex-1 flex items-end gap-1 group relative">
                  {compareMode && <div className="w-1/2 bg-[#DBE2EF] border border-[#3F72AF] rounded-t-sm" style={{ height: `${Math.random() * 60 + 10}%` }}></div>}
                  <div className={`bg-[#3F72AF] rounded-t-sm group-hover:bg-[#112D4E] transition-colors ${compareMode ? 'w-1/2' : 'w-full'}`} style={{ height: `${Math.random() * 80 + 20}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[#DBE2EF] text-[11px] mt-2 border-t border-slate-100 pt-2">
              <span>Apr 1</span>
              <span>Apr 15</span>
              <span>Apr 30</span>
            </div>
          </div>

          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
             <p className="text-[#112D4E] text-[14px] font-medium mb-6 bg-blue-50 p-3 rounded-lg border border-blue-100">
              You collected <span className="font-bold">76%</span> of invoices on time this month. Your target is <span className="font-bold">80%</span>.
            </p>
            <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Collection Rate Trend (6 months)</h3>
            <div className="h-40 relative flex items-end justify-between px-4 pb-2">
               {/* Target Line */}
               <div className="absolute left-0 right-0 bottom-[80%] border-t border-dashed border-[#112D4E] z-0">
                 <span className="absolute -top-5 right-0 text-[#112D4E] text-[10px] bg-white px-1">Target 80%</span>
               </div>
               {/* Fake SVG Line chart */}
               <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  <path d="M 0,80 L 150,60 L 300,90 L 450,50 L 600,40 L 750,55 L 900,30" fill="none" stroke="#3F72AF" strokeWidth="2" />
                  <path d="M 0,80 L 150,60 L 300,90 L 450,50 L 600,40 L 750,55 L 900,30 L 900,160 L 0,160 Z" fill="#3F72AF" fillOpacity="0.05" />
               </svg>
               {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => (
                 <div key={i} className="z-10 flex flex-col items-center justify-end h-full w-full">
                    {/* The dots would logically match the SVG, mocking position here isn't perfect without a chart lib, but styling meets spec */}
                    <span className="text-[#112D4E] text-[11px] mt-auto absolute bottom-0">{m}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: Breakdown & Averages */}
        <div className="space-y-6">
          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
            <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Invoice Status Breakdown</h3>
            <div className="h-6 w-full rounded-full flex overflow-hidden mb-6">
              <div className="h-full bg-[#3F72AF] flex items-center justify-center text-white text-[10px] font-bold" style={{ width: '60%' }}>60%</div>
              <div className="h-full bg-[#DBE2EF] flex items-center justify-center text-[#112D4E] text-[10px] font-bold" style={{ width: '25%' }}>25%</div>
              <div className="h-full bg-[#112D4E] flex items-center justify-center text-white text-[10px] font-bold" style={{ width: '10%' }}></div>
              <div className="h-full bg-[#F9F7F7] border-y border-[#DBE2EF] border-r" style={{ width: '5%' }}></div>
            </div>
            
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="bg-[#DBE2EF] text-[#112D4E] font-medium">
                  <th className="p-2 rounded-l">Status</th>
                  <th className="p-2">Count</th>
                  <th className="p-2 text-right rounded-r">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white"><td className="p-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#3F72AF]"></div>Paid</td><td className="p-2">42</td><td className="p-2 text-right font-medium">{formatCurrency(168000)}</td></tr>
                <tr className="bg-[#F9F7F7]"><td className="p-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#DBE2EF]"></div>Pending</td><td className="p-2">18</td><td className="p-2 text-right font-medium">{formatCurrency(70000)}</td></tr>
                <tr className="bg-white"><td className="p-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#112D4E]"></div>Overdue</td><td className="p-2">8</td><td className="p-2 text-right font-medium">{formatCurrency(28000)}</td></tr>
                <tr className="bg-[#F9F7F7]"><td className="p-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-white border border-[#DBE2EF]"></div>Draft</td><td className="p-2">5</td><td className="p-2 text-right font-medium">{formatCurrency(14000)}</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
            <p className="text-[#3F72AF] text-[13px] font-medium mb-1">Average days to payment</p>
            <p className="text-[#112D4E] text-[36px] font-bold leading-none mb-6">14.2</p>
            
            <div className="space-y-3">
              {[
                { label: '0-7 days', pct: 45 },
                { label: '8-15 days', pct: 30 },
                { label: '16-30 days', pct: 15 },
                { label: '30+ days', pct: 10 },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="text-[12px] text-[#112D4E] w-16">{b.label}</span>
                  <div className="flex-1 h-2 bg-[#DBE2EF] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3F72AF] rounded-full" style={{ width: `${b.pct}%` }}></div>
                  </div>
                  <span className="text-[11px] text-[#3F72AF] w-8 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Top Clients</h3>
           <table className="w-full text-left">
             <tbody className="divide-y divide-slate-100">
               {[
                 { name: 'Amit Singh', company: 'Tech Solutions Inc', paid: 420000, pct: 85, reliable: true },
                 { name: 'Priya Mehta', company: 'Freelance', paid: 180000, pct: 40, reliable: true },
                 { name: 'Ravi Kumar', company: 'Rajan Textiles', paid: 95000, pct: 20, reliable: false },
               ].map((c, i) => (
                 <tr key={i} className="group">
                   <td className="py-3 text-[#3F72AF] text-[14px] font-medium w-8">{i + 1}</td>
                   <td className="py-3 flex items-center gap-3">
                     <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center text-[10px] font-bold">{c.name.split(' ').map(n=>n[0]).join('')}</div>
                     <div>
                       <p className="text-[#112D4E] text-[14px]">{c.name}</p>
                       <p className="text-[#3F72AF] text-[12px]">{c.company}</p>
                     </div>
                   </td>
                   <td className="py-3 text-right">
                     <p className="text-[#112D4E] text-[14px] font-medium">{formatCurrency(c.paid)}</p>
                     <div className="w-24 h-1 bg-[#DBE2EF] rounded-full ml-auto mt-1 overflow-hidden">
                        <div className="h-full bg-[#3F72AF]" style={{ width: `${c.pct}%` }}></div>
                     </div>
                   </td>
                   <td className="py-3 pl-4 w-6">
                     <div className={`w-2 h-2 rounded-full ${c.reliable ? 'bg-[#3F72AF]' : 'bg-[#112D4E]'}`} title={c.reliable ? 'Pays on time' : 'Consistently late'}></div>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
           <button className="text-[#3F72AF] text-[13px] mt-4 font-medium hover:underline">Show more</button>
        </div>

        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm flex items-center">
           <div className="flex-1">
             <h3 className="text-[#112D4E] text-[16px] font-medium mb-6">Revenue by Source</h3>
             {/* Mock Donut Chart via CSS conic-gradient */}
             <div className="relative w-48 h-48 mx-auto rounded-full" style={{ background: 'conic-gradient(#3F72AF 0% 45%, #6392c9 45% 75%, #112D4E 75% 90%, #DBE2EF 90% 100%)' }}>
               <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
                 <span className="text-[#112D4E] text-[18px] font-semibold">{formatCurrency(142000)}</span>
                 <span className="text-[#3F72AF] text-[12px]">Total</span>
               </div>
             </div>
           </div>
           <div className="flex-1 pl-6 border-l border-slate-100">
             <ul className="space-y-4">
               {[
                 { label: 'WhatsApp', pct: 45, color: '#3F72AF', val: 63900 },
                 { label: 'Referral', pct: 30, color: '#6392c9', val: 42600 },
                 { label: 'Website form', pct: 15, color: '#112D4E', val: 21300 },
                 { label: 'Manual/Other', pct: 10, color: '#DBE2EF', val: 14200 },
               ].map((s, i) => (
                 <li key={i} className="flex items-center justify-between">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: s.color }}></div>
                     <span className="text-[#112D4E] text-[13px]">{s.label}</span>
                   </div>
                   <div className="text-right">
                     <p className="text-[#112D4E] text-[13px] font-medium">{formatCurrency(s.val)}</p>
                     <p className="text-slate-400 text-[11px]">{s.pct}%</p>
                   </div>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>

      {/* MRR Section */}
      <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-8">
           <div className="w-full lg:w-1/3 border-r border-slate-100 pr-6">
             <p className="text-[#3F72AF] text-[13px] font-medium mb-1 uppercase tracking-wider">Monthly Recurring Revenue</p>
             <p className="text-[#112D4E] text-[36px] font-bold leading-none mb-2">{formatCurrency(68000)}</p>
             <p className="text-green-600 text-[13px] font-medium">+8% from last month</p>
             <div className="mt-6 space-y-3">
               <p className="text-[#112D4E] text-[13px] font-medium mb-2">Active Schedules</p>
               <div className="flex justify-between items-center text-[12px]"><span className="text-[#3F72AF]">Tech Solutions Inc</span><span className="text-[#112D4E] font-medium">{formatCurrency(24000)}/mo</span></div>
               <div className="flex justify-between items-center text-[12px]"><span className="text-[#3F72AF]">Rajan Textiles</span><span className="text-[#112D4E] font-medium">{formatCurrency(18000)}/mo</span></div>
             </div>
           </div>
           <div className="w-full lg:w-2/3">
             <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">MRR Growth</h3>
             <div className="h-32 flex items-end justify-between px-2">
                 {/* Mock SVG Line Chart */}
                 <svg className="w-full h-full" preserveAspectRatio="none">
                    <path d="M 0,100 L 150,90 L 300,75 L 450,80 L 600,60 L 750,40 L 900,30" fill="none" stroke="#3F72AF" strokeWidth="2" />
                    <path d="M 0,100 L 150,90 L 300,75 L 450,80 L 600,60 L 750,40 L 900,30 L 900,128 L 0,128 Z" fill="#3F72AF" fillOpacity="0.1" />
                 </svg>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const PipelineTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { l: 'Active Deals', v: '48', s: formatCurrency(1250000) },
          { l: 'Deals Won', v: '14', s: formatCurrency(840000) },
          { l: 'Deals Lost', v: '6', s: '' },
          { l: 'Win Rate', v: '68%', s: '' },
          { l: 'Avg Deal Size', v: formatCurrency(60000), s: '' },
        ].map((m, i) => (
          <div key={i} className="bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm">
            <p className="text-[#3F72AF] text-[12px] font-medium mb-1 uppercase tracking-wider truncate">{m.l}</p>
            <p className="text-[#112D4E] text-[24px] font-bold">{m.v}</p>
            {m.s && <p className="text-[#3F72AF] text-[12px] mt-1">{m.s}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Funnel */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
          <p className="text-[#112D4E] text-[14px] font-medium mb-6 bg-blue-50 p-3 rounded-lg border border-blue-100">
            Most deals drop off between <span className="font-bold">Proposal Sent</span> and <span className="font-bold">Negotiation</span>. Consider following up faster after sending proposals.
          </p>
          <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Pipeline Funnel</h3>
          <div className="space-y-0 relative pb-4">
            {[
              { stage: 'Lead', w: 100, count: 120, val: 2400000, drop: '80% advanced' },
              { stage: 'Contacted', w: 80, count: 96, val: 1920000, drop: '60% advanced' },
              { stage: 'Proposal Sent', w: 60, count: 58, val: 1160000, drop: '40% dropped ✕', alert: true },
              { stage: 'Negotiation', w: 35, count: 35, val: 700000, drop: '80% advanced' },
              { stage: 'Won', w: 28, count: 28, val: 560000, drop: '' },
            ].map((s, i) => (
              <div key={i}>
                <div className="flex items-center gap-4">
                  <div className="w-32 text-right shrink-0">
                    <span className="text-[#112D4E] text-[13px] font-medium">{s.stage}</span>
                  </div>
                  <div className="flex-1 h-10 bg-[#DBE2EF] rounded-r flex items-center relative overflow-hidden group">
                    <div className="h-full bg-[#3F72AF] flex items-center px-3" style={{ width: `${s.w}%` }}>
                      <span className="text-white text-[12px] font-bold whitespace-nowrap">{s.count} deals · {formatCurrency(s.val)}</span>
                    </div>
                  </div>
                </div>
                {s.drop && (
                  <div className="flex items-center gap-4 py-1.5">
                    <div className="w-32"></div>
                    <div className={`text-[11px] px-2 py-0.5 rounded ${s.alert ? 'bg-red-50 text-[#112D4E] font-bold' : 'text-[#3F72AF]'}`}>
                      {s.alert ? '' : '↓'} {s.drop}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Stage Duration */}
          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
            <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Stage Duration Analysis</h3>
            <div className="space-y-4 mb-6">
              {[
                { stage: 'Lead', days: 2, pct: 15, color: 'bg-[#3F72AF]' },
                { stage: 'Contacted', days: 4, pct: 30, color: 'bg-[#3F72AF]' },
                { stage: 'Proposal Sent', days: 7, pct: 50, color: 'bg-[#3F72AF]' },
                { stage: 'Negotiation', days: 18, pct: 100, color: 'bg-[#112D4E]' }, // Stuck
              ].map(s => (
                <div key={s.stage} className="flex items-center gap-3">
                  <span className="text-[12px] text-[#112D4E] w-28">{s.stage}</span>
                  <div className="flex-1 h-6 bg-[#DBE2EF] rounded overflow-hidden">
                    <div className={`h-full ${s.color} flex items-center px-2`} style={{ width: `${s.pct}%` }}>
                      <span className="text-white text-[11px] font-bold">{s.days}d</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#DBE2EF] border-l-[3px] border-l-[#112D4E] p-4 rounded-r-xl">
              <p className="text-[#112D4E] text-[13px] font-medium">Deals are spending an average of 18 days in Negotiation. Industry average is 7 days.</p>
            </div>
          </div>

          {/* Win/Loss */}
          <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
             <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Win / Loss Analysis</h3>
             <div className="flex justify-between items-center mb-6 px-4">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-3" style={{ background: 'conic-gradient(#3F72AF 0% 60%, #6392c9 60% 85%, #8cb4e2 85% 100%)' }}></div>
                  <span className="text-[#112D4E] text-[13px] font-bold">Why you win</span>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full mx-auto mb-3" style={{ background: 'conic-gradient(#112D4E 0% 50%, #2a4c7a 50% 80%, #466e9e 80% 100%)' }}></div>
                  <span className="text-[#112D4E] text-[13px] font-bold">Why you lose</span>
                </div>
             </div>
             <p className="text-[#112D4E] text-[14px] font-medium bg-slate-50 p-3 rounded-lg border border-slate-200">
                You win most often on <span className="font-bold text-[#3F72AF]">price</span> and lose most often to <span className="font-bold text-[#112D4E]">competitors</span>. Consider emphasizing your speed and personal service in proposals.
             </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deal Velocity Trend */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Deal Velocity Trend</h3>
           <p className="text-[#112D4E] text-[13px] font-medium mb-6">Deals are closing <span className="text-green-600 font-bold">12% faster</span> this month.</p>
           <div className="h-40 relative flex items-end justify-between px-2 pb-6">
               <div className="absolute left-0 right-0 bottom-[30%] border-t border-dashed border-[#DBE2EF] z-0">
                 <span className="absolute -top-5 right-0 text-[#DBE2EF] text-[10px] bg-white px-1">Personal Best: 18d</span>
               </div>
               <svg className="absolute inset-0 h-[calc(100%-24px)] w-full" preserveAspectRatio="none">
                  <path d="M 0,20 L 150,40 L 300,35 L 450,60 L 600,80 L 750,55 L 900,90" fill="none" stroke="#3F72AF" strokeWidth="2" />
               </svg>
               {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => (
                 <span key={i} className="text-[#112D4E] text-[11px] absolute bottom-0 z-10" style={{ left: `${i * 20}%` }}>{m}</span>
               ))}
           </div>
        </div>

        {/* Deals by Source */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Deals by Source (Won)</h3>
           <div className="h-48 flex items-end gap-4">
             {['WhatsApp', 'Referral', 'Website', 'Cold'].map((s, i) => {
                const h1 = Math.random() * 60 + 20;
                const h2 = Math.random() * 60 + 20;
                return (
                 <div key={i} className="flex-1 flex flex-col items-center gap-2">
                   <div className="flex items-end gap-1 w-full h-full justify-center">
                     {compareMode && <div className="w-1/3 bg-[#DBE2EF] border border-[#3F72AF] rounded-t-sm" style={{ height: `${h2}%` }}></div>}
                     <div className={`bg-[#3F72AF] rounded-t-sm ${compareMode ? 'w-1/3' : 'w-1/2'}`} style={{ height: `${h1}%` }}></div>
                   </div>
                   <span className="text-[10px] text-[#112D4E] whitespace-nowrap">{s}</span>
                 </div>
                )
             })}
           </div>
        </div>
      </div>

      {/* Top Deals Closing Soon */}
      <div className="bg-white border border-[#DBE2EF] rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Top Deals Closing Soon</h3>
          <button className="text-[#3F72AF] text-[12px] font-medium hover:underline">View in pipeline</button>
        </div>
        <table className="w-full text-left text-[13px]">
          <thead><tr className="bg-[#DBE2EF] text-[#112D4E]"><th className="px-6 py-3">Deal</th><th className="px-6 py-3">Value</th><th className="px-6 py-3">Close In</th><th className="px-6 py-3">Stage</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-6 py-3 font-medium text-[#3F72AF]">Website Redesign <span className="block text-[#112D4E] text-[11px] font-normal">Priya Mehta</span></td>
              <td className="px-6 py-3 font-bold text-[#112D4E]">{formatCurrency(45000)}</td>
              <td className="px-6 py-3"><span className="bg-[#112D4E] text-white text-[10px] px-2 py-1 rounded font-bold">2 days</span></td>
              <td className="px-6 py-3"><span className="text-[11px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Negotiation</span></td>
            </tr>
            <tr className="bg-[#F9F7F7]">
              <td className="px-6 py-3 font-medium text-[#3F72AF]">Bulk Order <span className="block text-[#112D4E] text-[11px] font-normal">Amit Singh</span></td>
              <td className="px-6 py-3 font-bold text-[#112D4E]">{formatCurrency(120000)}</td>
              <td className="px-6 py-3"><span className="text-[#112D4E] font-medium">8 days</span></td>
              <td className="px-6 py-3"><span className="text-[11px] bg-[#DBE2EF] text-[#112D4E] px-2 py-0.5 rounded-full font-bold">Proposal</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ContactsTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { l: 'Total Contacts', v: '1,428' },
          { l: 'New (Period)', v: '124' },
          { l: 'With Open Deals', v: '32' },
          { l: 'Lead to Deal Rate', v: '24%' },
        ].map((m, i) => (
          <div key={i} className="bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm">
            <p className="text-[#3F72AF] text-[12px] font-medium mb-1 uppercase tracking-wider">{m.l}</p>
            <p className="text-[#112D4E] text-[24px] font-bold">{m.v}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Growth Chart */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Contact Growth</h3>
           <div className="h-48 relative flex items-end justify-between px-2 pb-2">
               <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                  {compareMode && <path d="M 0,120 L 150,110 L 300,105 L 450,90 L 600,85 L 750,70 L 900,60" fill="none" stroke="#DBE2EF" strokeWidth="2" strokeDasharray="4 4" />}
                  <path d="M 0,100 L 150,90 L 300,75 L 450,50 L 600,45 L 750,25 L 900,10" fill="none" stroke="#3F72AF" strokeWidth="2" />
                  <path d="M 0,100 L 150,90 L 300,75 L 450,50 L 600,45 L 750,25 L 900,10 L 900,160 L 0,160 Z" fill="#3F72AF" fillOpacity="0.1" />
               </svg>
           </div>
           {/* New Contacts Bar */}
           <div className="h-16 flex items-end gap-2 mt-4">
              {Array.from({ length: 7 }).map((_, i) => (
                 <div key={i} className="flex-1 bg-[#3F72AF] rounded-t-sm hover:bg-[#112D4E] transition-colors" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
              ))}
           </div>
        </div>

        {/* Contact Source Breakdown */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Contact Sources</h3>
           <div className="flex items-center">
               <div className="relative w-32 h-32 mx-auto rounded-full shrink-0" style={{ background: 'conic-gradient(#3F72AF 0% 40%, #6392c9 40% 65%, #DBE2EF 65% 85%, #112D4E 85% 100%)' }}>
                 <div className="absolute inset-3 bg-white rounded-full"></div>
               </div>
               <div className="flex-1 pl-6">
                 <ul className="space-y-3">
                   {[
                     { label: 'WhatsApp', pct: 40, color: '#3F72AF' },
                     { label: 'Lead Ads', pct: 25, color: '#6392c9' },
                     { label: 'CSV Import', pct: 20, color: '#DBE2EF' },
                     { label: 'Manual', pct: 15, color: '#112D4E' },
                   ].map((s, i) => (
                     <li key={i} className="flex justify-between items-center text-[12px]">
                       <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm" style={{backgroundColor: s.color}}></div>{s.label}</span>
                       <span className="font-bold text-[#112D4E]">{s.pct}%</span>
                     </li>
                   ))}
                 </ul>
               </div>
           </div>
           {/* Funnels per source */}
           <div className="mt-6 space-y-3">
             <p className="text-[12px] font-medium text-[#112D4E]">Source Conversion (Per 100 contacts)</p>
             <div className="flex gap-4">
               <div className="flex-1 bg-slate-50 p-2 rounded text-center text-[11px]"><span className="font-bold text-[#3F72AF]">WA:</span> 100 → 40 Lead → 12 Won</div>
               <div className="flex-1 bg-slate-50 p-2 rounded text-center text-[11px]"><span className="font-bold text-[#3F72AF]">Ads:</span> 100 → 20 Lead → 3 Won</div>
             </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stage Distribution */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Contact Stage Distribution</h3>
           <div className="h-6 w-full rounded-full flex overflow-hidden mb-6">
              <div className="h-full bg-[#DBE2EF] flex items-center justify-center text-[#112D4E] text-[10px] font-bold" style={{ width: '40%' }}>Lead 40%</div>
              <div className="h-full bg-[#8cb4e2] flex items-center justify-center text-[#112D4E] text-[10px] font-bold" style={{ width: '30%' }}>Contacted 30%</div>
              <div className="h-full bg-[#3F72AF] flex items-center justify-center text-white text-[10px] font-bold" style={{ width: '20%' }}>Proposal 20%</div>
              <div className="h-full bg-[#112D4E] flex items-center justify-center text-white text-[10px] font-bold" style={{ width: '10%' }}>Won 10%</div>
           </div>
           <table className="w-full text-left text-[12px]">
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-white"><td className="p-2">Lead</td><td className="p-2 font-medium">571</td><td className="p-2 text-right">40%</td></tr>
                <tr className="bg-[#F9F7F7]"><td className="p-2">Contacted</td><td className="p-2 font-medium">428</td><td className="p-2 text-right">30%</td></tr>
                <tr className="bg-white"><td className="p-2">Proposal</td><td className="p-2 font-medium">285</td><td className="p-2 text-right">20%</td></tr>
                <tr className="bg-[#F9F7F7]"><td className="p-2">Won</td><td className="p-2 font-medium">144</td><td className="p-2 text-right">10%</td></tr>
              </tbody>
           </table>
        </div>

        {/* Lead response time */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <p className="text-[#3F72AF] text-[13px] font-medium mb-1">Average Response Time</p>
           <p className="text-[#112D4E] text-[28px] font-bold leading-none mb-2">45m</p>
           <p className="text-[#3F72AF] text-[12px] italic mb-6">Businesses that respond within 1 hour are 7x more likely to convert a lead.</p>
           <div className="space-y-2">
              {[
                { label: 'Under 1 hour', pct: 60, color: '#3F72AF' },
                { label: '1-24 hours', pct: 25, color: '#6392c9' },
                { label: '1-7 days', pct: 10, color: '#DBE2EF' },
                { label: 'Never contacted', pct: 5, color: '#112D4E' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="text-[12px] text-[#112D4E] w-24">{b.label}</span>
                  <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${b.pct}%`, backgroundColor: b.color }}></div>
                  </div>
                  <span className="text-[11px] font-medium w-8 text-right">{b.pct}%</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Tag Analysis */}
         <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Tag Analysis</h3>
           <div className="flex flex-wrap gap-3 mb-6 justify-center items-baseline">
             <span className="text-[24px] font-bold text-[#112D4E]">Wholesale</span>
             <span className="text-[14px] text-[#3F72AF]">Retail</span>
             <span className="text-[18px] font-semibold text-[#2a4c7a]">VIP</span>
             <span className="text-[12px] text-[#DBE2EF]">Cold</span>
             <span className="text-[20px] font-bold text-[#3F72AF]">Website</span>
             <span className="text-[16px] text-[#6392c9]">Referral</span>
           </div>
           <table className="w-full text-left text-[12px]">
             <thead><tr className="bg-[#DBE2EF] text-[#112D4E]"><th className="p-2">Tag</th><th className="p-2">Contacts</th><th className="p-2 text-right">Revenue</th></tr></thead>
             <tbody className="divide-y divide-slate-100">
                <tr><td className="p-2 font-bold text-[#112D4E]">Wholesale</td><td className="p-2">84</td><td className="p-2 text-right text-[#3F72AF]">{formatCurrency(450000)}</td></tr>
                <tr><td className="p-2 font-bold text-[#3F72AF]">Website</td><td className="p-2">126</td><td className="p-2 text-right text-[#3F72AF]">{formatCurrency(280000)}</td></tr>
             </tbody>
           </table>
         </div>

         {/* Geographic */}
         <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Top Locations</h3>
           <div className="space-y-3">
             {[
               { loc: 'Mumbai', val: 340 }, { loc: 'Delhi', val: 210 }, { loc: 'Bangalore', val: 180 }, { loc: 'Pune', val: 95 }
             ].map(l => (
               <div key={l.loc} className="flex items-center gap-3">
                 <span className="text-[13px] text-[#112D4E] w-20">{l.loc}</span>
                 <div className="flex-1 bg-slate-100 h-6 rounded-r">
                   <div className="bg-[#3F72AF] h-full rounded-r flex items-center px-2" style={{width: `${(l.val/340)*100}%`}}>
                     <span className="text-[10px] text-white font-bold">{l.val}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </div>
    </div>
  );
};

const WhatsAppTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { l: 'Sent', v: '342' },
          { l: 'Received', v: '218' },
          { l: 'Conversations', v: '86' },
          { l: 'Avg Response', v: '47m' },
          { l: 'Led to Deal', v: '14' },
        ].map((m, i) => (
          <div key={i} className="bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm">
            <p className="text-[#3F72AF] text-[12px] font-medium mb-1 uppercase tracking-wider">{m.l}</p>
            <p className="text-[#112D4E] text-[24px] font-bold">{m.v}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Message Volume */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <p className="text-[#112D4E] text-[14px] font-medium mb-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
              You sent <span className="font-bold">342</span> messages this month and received <span className="font-bold">218</span> replies. Reply rate is <span className="font-bold">64%</span>.
           </p>
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Message Volume</h3>
           <div className="h-48 flex items-end gap-2 px-2 relative">
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#DBE2EF]"></div>
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="flex-1 flex items-end gap-0.5 group">
                   <div className="w-1/2 bg-[#3F72AF] rounded-t-sm" style={{ height: `${Math.random() * 60 + 20}%` }} title="Sent"></div>
                   <div className="w-1/2 bg-[#112D4E] rounded-t-sm" style={{ height: `${Math.random() * 40 + 10}%` }} title="Received"></div>
                </div>
              ))}
           </div>
           <div className="flex justify-center gap-4 mt-4 text-[12px]">
             <span className="flex items-center gap-1"><div className="w-3 h-3 bg-[#3F72AF]"></div> Sent</span>
             <span className="flex items-center gap-1"><div className="w-3 h-3 bg-[#112D4E]"></div> Received</span>
           </div>
        </div>

        {/* Response Time Histogram */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Response Time Analysis</h3>
           <div className="h-40 flex items-end gap-4 relative">
             <div className="absolute bottom-0 top-0 border-l-2 border-dashed border-[#112D4E] z-10" style={{ left: '40%' }}>
               <span className="bg-white px-1 text-[10px] font-bold text-[#112D4E] absolute -top-4 -translate-x-1/2">Avg: 47m</span>
             </div>
             {[
               { h: 30, c: '#3F72AF', l: '< 5m' },
               { h: 70, c: '#6392c9', l: '5-30m' },
               { h: 45, c: '#8cb4e2', l: '30m-2h' },
               { h: 20, c: '#112D4E', l: '2-24h' },
               { h: 5, c: '#0d2240', l: '> 24h' }
             ].map((b, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-2">
                 <div className="w-full rounded-t-sm" style={{ height: `${b.h}%`, backgroundColor: b.c }}></div>
                 <span className="text-[10px] text-[#112D4E]">{b.l}</span>
               </div>
             ))}
           </div>
           <p className="text-[#3F72AF] text-[12px] italic mt-4">Your average response time is 47 minutes. Responding within 30 minutes could increase your conversion rate.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Outcome Funnel */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Conversation Outcome</h3>
           <div className="space-y-1">
             {[
               { step: 'Conversations started', count: 86, w: 100 },
               { step: 'Contacts created', count: 42, w: 70 },
               { step: 'Deals opened', count: 24, w: 45 },
               { step: 'Invoices sent', count: 18, w: 30 },
               { step: 'Payments received', count: 14, w: 20 },
             ].map((s, i) => (
               <div key={i} className="flex items-center gap-4">
                 <div className="w-36 text-right shrink-0">
                   <span className="text-[#112D4E] text-[12px] font-medium">{s.step}</span>
                 </div>
                 <div className="flex-1 h-8 bg-[#DBE2EF] flex items-center">
                   <div className="h-full bg-[#3F72AF] flex items-center px-2" style={{ width: `${s.w}%` }}>
                     <span className="text-white text-[11px] font-bold">{s.count}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Peak Hours */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-4">Peak Activity Hours</h3>
           <div className="flex flex-col gap-1">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(day => (
                <div key={day} className="flex items-center gap-2">
                  <span className="w-8 text-[10px] text-[#112D4E]">{day}</span>
                  <div className="flex-1 flex gap-0.5">
                    {Array.from({ length: 12 }).map((_, i) => {
                      const intensity = Math.random();
                      const bg = intensity > 0.8 ? '#112D4E' : intensity > 0.5 ? '#3F72AF' : intensity > 0.2 ? '#DBE2EF' : '#F9F7F7';
                      return <div key={i} className="flex-1 h-4 rounded-sm" style={{ backgroundColor: bg }}></div>
                    })}
                  </div>
                </div>
              ))}
           </div>
           <div className="flex justify-between mt-1 ml-10 text-[10px] text-[#DBE2EF]">
              <span>8am</span><span>2pm</span><span>8pm</span>
           </div>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-[#DBE2EF] rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#DBE2EF]"><h3 className="text-[#112D4E] text-[15px] font-medium">Template Performance</h3></div>
          <table className="w-full text-left text-[12px]">
             <thead><tr className="bg-[#DBE2EF] text-[#112D4E]"><th className="p-3">Template</th><th className="p-3">Sent</th><th className="p-3">Reply Rate</th></tr></thead>
             <tbody>
               <tr className="border-l-[3px] border-l-[#3F72AF] border-b border-slate-100"><td className="p-3 font-medium text-[#112D4E]">Welcome Promo</td><td className="p-3">145</td><td className="p-3 text-[#3F72AF] font-bold">68%</td></tr>
               <tr className="border-l-[3px] border-l-transparent border-b border-slate-100"><td className="p-3 font-medium text-[#112D4E]">Payment Reminder</td><td className="p-3">82</td><td className="p-3 text-[#3F72AF] font-bold">45%</td></tr>
               <tr className="border-l-[3px] border-l-transparent bg-[#F9F7F7]"><td className="p-3 font-medium text-[#112D4E] opacity-70">Cold Outreach</td><td className="p-3 opacity-70">240</td><td className="p-3 text-[#112D4E] font-bold">12%</td></tr>
             </tbody>
          </table>
        </div>

        <div className="bg-white border border-[#DBE2EF] rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#DBE2EF]"><h3 className="text-[#112D4E] text-[15px] font-medium">Broadcast Performance</h3></div>
          <table className="w-full text-left text-[12px]">
             <thead><tr className="bg-[#DBE2EF] text-[#112D4E]"><th className="p-3">Broadcast</th><th className="p-3">Recipients</th><th className="p-3">Deals</th></tr></thead>
             <tbody>
               <tr className="border-b border-slate-100"><td className="p-3 font-medium text-[#112D4E]">Diwali Sale</td><td className="p-3">450</td><td className="p-3 text-[#3F72AF] font-bold">12</td></tr>
               <tr className="border-b border-slate-100"><td className="p-3 font-medium text-[#112D4E]">Newsletter Q1</td><td className="p-3">320</td><td className="p-3 text-[#3F72AF] font-bold">4</td></tr>
             </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TeamTab = ({ compareMode }) => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Summary Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { l: 'Active Members', v: '3' },
          { l: 'Deals Won', v: '14' },
          { l: 'Messages Sent', v: '342' },
          { l: 'Team Avg Response', v: '47m' },
        ].map((m, i) => (
          <div key={i} className="bg-white border border-[#DBE2EF] rounded-xl p-5 shadow-sm">
            <p className="text-[#3F72AF] text-[12px] font-medium mb-1 uppercase tracking-wider">{m.l}</p>
            <p className="text-[#112D4E] text-[24px] font-bold">{m.v}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#DBE2EF] rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Individual Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-[#112D4E] text-[#F9F7F7] text-[12px] font-medium">
                <th className="px-6 py-3">Rank</th>
                <th className="px-6 py-3">Team Member</th>
                <th className="px-6 py-3">Contacts Added</th>
                <th className="px-6 py-3">Deals Won</th>
                <th className="px-6 py-3 text-right">Revenue Closed</th>
                <th className="px-6 py-3 text-center">Avg Response</th>
                <th className="px-6 py-3">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { r: 1, name: 'Ravi Kumar', added: 42, won: 8, rev: 480000, resp: '15m', fast: true, last: 'Today' },
                { r: 2, name: 'Priya Mehta', added: 28, won: 4, rev: 240000, resp: '45m', fast: true, last: 'Today' },
                { r: 3, name: 'Amit Singh', added: 14, won: 2, rev: 120000, resp: '2h 15m', fast: false, last: 'Yesterday' },
              ].map((t) => (
                <tr key={t.r} className="hover:bg-[#F9F7F7] cursor-pointer transition-colors">
                  <td className="px-6 py-4 text-[#3F72AF] text-[14px] font-medium">{t.r}</td>
                  <td className="px-6 py-4 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[10px] font-bold">{t.name.split(' ').map(n=>n[0]).join('')}</div>
                    <span className="text-[#112D4E] text-[14px] font-medium">{t.name}</span>
                  </td>
                  <td className="px-6 py-4 text-[#112D4E] text-[13px] font-medium">{t.added}</td>
                  <td className="px-6 py-4 text-[#112D4E] text-[13px] font-medium">{t.won}</td>
                  <td className="px-6 py-4 text-[#112D4E] text-[13px] font-medium text-right">{formatCurrency(t.rev)}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[13px] font-bold ${t.fast ? 'text-[#3F72AF]' : 'text-[#112D4E]'}`}>{t.resp}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[12px] font-medium ${t.last === 'Today' ? 'text-[#3F72AF]' : 'text-slate-400'}`}>{t.last}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Activity Comparison Chart */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="text-[#112D4E] text-[15px] font-medium">Activity Comparison</h3>
             <select className="border border-slate-200 rounded px-2 py-1 text-[11px] text-[#112D4E] outline-none">
                <option>Deals won</option><option>Revenue closed</option><option>Contacts added</option>
             </select>
           </div>
           <div className="h-48 flex items-end gap-4 justify-center">
              {[
                { name: 'Ravi', h: 80, color: '#112D4E' },
                { name: 'Priya', h: 60, color: '#3F72AF' },
                { name: 'Amit', h: 30, color: '#6392c9' },
              ].map((m, i) => (
                <div key={i} className="w-16 flex flex-col items-center gap-2">
                  <div className="w-full rounded-t-sm" style={{ height: `${m.h}%`, backgroundColor: m.color }}></div>
                  <span className="text-[11px] text-[#112D4E] font-medium">{m.name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Deal Attribution Donut */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Deal Attribution</h3>
           <div className="flex items-center">
               <div className="relative w-40 h-40 mx-auto rounded-full shrink-0" style={{ background: 'conic-gradient(#112D4E 0% 55%, #3F72AF 55% 85%, #6392c9 85% 100%)' }}>
                 <div className="absolute inset-5 bg-white rounded-full flex items-center justify-center">
                   <span className="text-[#112D4E] text-[14px] font-bold">14 Won</span>
                 </div>
               </div>
               <div className="flex-1 pl-6">
                 <ul className="space-y-4">
                   {[
                     { label: 'Ravi K.', pct: 55, color: '#112D4E' },
                     { label: 'Priya M.', pct: 30, color: '#3F72AF' },
                     { label: 'Amit S.', pct: 15, color: '#6392c9' },
                   ].map((s, i) => (
                     <li key={i} className="flex justify-between items-center text-[12px]">
                       <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm" style={{backgroundColor: s.color}}></div>{s.label}</span>
                       <span className="font-bold text-[#112D4E]">{s.pct}%</span>
                     </li>
                   ))}
                 </ul>
               </div>
           </div>
        </div>

        {/* Response Time Comparison */}
        <div className="bg-white border border-[#DBE2EF] rounded-xl p-6 shadow-sm lg:col-span-2">
           <h3 className="text-[#112D4E] text-[15px] font-medium mb-6">Response Time Comparison</h3>
           <div className="space-y-4 relative">
             <div className="absolute top-0 bottom-0 border-l border-dashed border-[#DBE2EF] z-0" style={{ left: '40%' }}>
               <span className="text-[10px] text-slate-400 absolute -top-4 -translate-x-1/2 bg-white px-1">Avg 47m</span>
             </div>
             {[
               { name: 'Ravi K.', time: '15m', w: 15, color: '#3F72AF' },
               { name: 'Priya M.', time: '45m', w: 40, color: '#6392c9' },
               { name: 'Amit S.', time: '2h 15m', w: 85, color: '#112D4E', alert: true },
             ].map((m, i) => (
               <div key={i} className="flex items-center gap-4 relative z-10">
                 <span className="text-[13px] text-[#112D4E] w-16 font-medium">{m.name}</span>
                 <div className="flex-1 bg-slate-100 h-6 rounded-r">
                   <div className="h-full rounded-r flex items-center px-2" style={{ width: `${m.w}%`, backgroundColor: m.color }}>
                     <span className="text-[10px] text-white font-bold">{m.time}</span>
                   </div>
                 </div>
                 {m.alert && <span className="text-[10px] text-red-600 bg-red-50 px-2 py-0.5 rounded font-bold uppercase">Needs Coaching</span>}
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
