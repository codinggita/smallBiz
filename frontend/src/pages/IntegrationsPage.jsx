import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import { FiSearch, FiSettings, FiRefreshCw, FiPause, FiArrowLeft, FiAlertCircle, FiCheckCircle, FiMoreVertical, FiArrowRight, FiSliders } from 'react-icons/fi';

// Mock Data
const ALL_CONNECTORS = [
  { id: 'excel', name: 'Excel (Microsoft 365)', category: 'Spreadsheets', status: 'connected', desc: 'Auto-sync contacts from your spreadsheet', lastSync: '6 min ago', records: 284, logo: 'EX' },
  { id: 'zohobooks', name: 'Zoho Books', category: 'Accounting', status: 'attention', desc: 'Send invoices directly to Zoho Books', logo: 'ZB' },
  { id: 'razorpay', name: 'Razorpay', category: 'Payments', status: 'connected', desc: 'Sync payment statuses automatically', lastSync: '12 min ago', records: 15, logo: 'RZ' },
  { id: 'gsheets', name: 'Google Sheets', category: 'Spreadsheets', status: 'disconnected', desc: 'Two-way sync with Google Sheets', logo: 'GS' },
  { id: 'tally', name: 'Tally Prime', category: 'Accounting', status: 'disconnected', desc: 'Sync accounting data with Tally', logo: 'TP' },
  { id: 'stripe', name: 'Stripe', category: 'Payments', status: 'disconnected', desc: 'Process and sync card payments', logo: 'ST' },
  { id: 'tallyforms', name: 'Tally Forms', category: 'Forms & Leads', status: 'connected', desc: 'Capture leads from your Tally form', lastSync: '1 hour ago', records: 42, logo: 'TF' },
  { id: 'gmail', name: 'Gmail', category: 'Communication', status: 'connected', desc: 'Sync emails to contact records', lastSync: 'Real-time', records: 1840, logo: 'GM' },
  { id: 'shopify', name: 'Shopify', category: 'E-commerce', status: 'disconnected', desc: 'Sync customers and orders', logo: 'SH' },
  { id: 'whatsapp', name: 'WhatsApp Click-to-Chat', category: 'Forms & Leads', status: 'disconnected', desc: 'Generate leads from WhatsApp links', logo: 'WA' },
  { id: 'zapier', name: 'Zapier', category: 'All', status: 'disconnected', desc: 'Connect to 5000+ other apps', logo: 'ZP' },
];

const CATEGORIES = ['All', 'Spreadsheets', 'Accounting', 'Payments', 'Forms & Leads', 'Communication', 'E-commerce'];

// --- Layer 1: Hub ---
const IntegrationsHub = ({ onSelectConnector, onViewMonitor }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState(null);

  const filteredConnectors = ALL_CONNECTORS.filter(c => {
    const matchesCategory = activeCategory === 'All' || c.category === activeCategory || c.name === 'Zapier'; // Zapier shows everywhere for demo
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = !statusFilter || c.status === statusFilter;
    return matchesCategory && matchesSearch && matchesStatus;
  }).sort((a, b) => {
    // Connected first
    if (a.status === 'connected' && b.status !== 'connected') return -1;
    if (a.status !== 'connected' && b.status === 'connected') return 1;
    return 0;
  });

  const connectedCount = ALL_CONNECTORS.filter(c => c.status === 'connected').length;
  const availableCount = ALL_CONNECTORS.filter(c => c.status === 'disconnected').length;
  const attentionCount = ALL_CONNECTORS.filter(c => c.status === 'attention').length;

  return (
    <div className="p-8 lg:p-10 max-w-[1200px] mx-auto">
      {/* Top Bar */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-[#112D4E] text-[20px] font-medium">Integrations</h1>
          <p className="text-[#3F72AF] text-[14px] mt-1">Connect your tools. Your data syncs automatically.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#3F72AF]"></div>
            <span className="text-[#112D4E] text-[13px]">All systems syncing</span>
          </div>
          <button className="px-4 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-[#DBE2EF]/30 transition-colors">
            Sync all now
          </button>
        </div>
      </div>
      
      <div className="bg-[#DBE2EF]/30 rounded-lg px-4 py-2 mb-8 flex gap-4 border-[0.5px] border-[#DBE2EF]">
        <span className="text-[#3F72AF] text-[12px]">Last sync: 4 minutes ago</span>
        <span className="text-[#DBE2EF]">|</span>
        <span className="text-[#112D4E] text-[12px] font-medium">1,847 records synced today</span>
        <div className="ml-auto">
          <button onClick={onViewMonitor} className="text-[#3F72AF] text-[12px] font-medium hover:underline">Sync monitor &rarr;</button>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex justify-between items-center mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex gap-2">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-[20px] text-[13px] transition-colors ${
                activeCategory === cat 
                  ? 'bg-[#3F72AF] text-white font-medium' 
                  : 'bg-[#DBE2EF]/50 text-[#112D4E] hover:bg-[#DBE2EF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative ml-4 min-w-[200px]">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3F72AF]" />
          <input 
            type="text" 
            placeholder="Search integrations..." 
            className="w-full h-9 pl-9 pr-3 border-[0.5px] border-[#DBE2EF] rounded-[20px] text-[13px] text-[#112D4E] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Status Summary */}
      <div className="flex gap-3 mb-8">
        <button 
          onClick={() => setStatusFilter(statusFilter === 'connected' ? null : 'connected')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-[0.5px] transition-colors ${statusFilter === 'connected' ? 'border-[#3F72AF] bg-[#DBE2EF]/30' : 'border-[#DBE2EF] bg-white hover:bg-[#F9F7F7]'}`}
        >
          <FiCheckCircle className="text-[#3F72AF] text-[14px]" />
          <span className="text-[#112D4E] text-[12px] font-medium">{connectedCount} connected</span>
        </button>
        <button 
          onClick={() => setStatusFilter(statusFilter === 'disconnected' ? null : 'disconnected')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-[0.5px] transition-colors ${statusFilter === 'disconnected' ? 'border-[#3F72AF] bg-[#DBE2EF]/30' : 'border-[#DBE2EF] bg-white hover:bg-[#F9F7F7]'}`}
        >
          <div className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#DBE2EF]"></div>
          <span className="text-[#112D4E] text-[12px] font-medium">{availableCount} available</span>
        </button>
        <button 
          onClick={() => setStatusFilter(statusFilter === 'attention' ? null : 'attention')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full border-[0.5px] transition-colors ${statusFilter === 'attention' ? 'border-[#112D4E] bg-[#DBE2EF]/30' : 'border-[#DBE2EF] bg-white hover:bg-[#F9F7F7]'}`}
        >
          <FiAlertCircle className="text-[#112D4E] text-[14px]" />
          <span className="text-[#112D4E] text-[12px] font-medium">{attentionCount} needs attention</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredConnectors.map(connector => (
          <div 
            key={connector.id} 
            className="group bg-white border-[0.5px] border-[#DBE2EF] hover:border-[#3F72AF] rounded-xl p-5 h-[200px] flex flex-col transition-all shadow-sm relative overflow-hidden"
          >
            {/* Quick Actions (Hover) */}
            {connector.status === 'connected' && (
              <div className="absolute top-16 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white pl-2">
                <button className="w-7 h-7 rounded-full bg-[#F9F7F7] flex items-center justify-center text-[#3F72AF] hover:bg-[#DBE2EF]"><FiSettings size={13}/></button>
                <button className="w-7 h-7 rounded-full bg-[#F9F7F7] flex items-center justify-center text-[#3F72AF] hover:bg-[#DBE2EF]"><FiRefreshCw size={13}/></button>
                <button className="w-7 h-7 rounded-full bg-[#F9F7F7] flex items-center justify-center text-[#3F72AF] hover:bg-[#DBE2EF]"><FiPause size={13}/></button>
              </div>
            )}

            <div className="flex justify-between items-start mb-3">
              <div className="w-12 h-12 rounded-[10px] bg-[#112D4E] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                {connector.logo}
              </div>
              <div>
                {connector.status === 'connected' && <span className="bg-[#3F72AF]/10 text-[#3F72AF] text-[12px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#3F72AF]"></div>Connected</span>}
                {connector.status === 'disconnected' && <span className="bg-[#DBE2EF] text-[#112D4E] text-[12px] px-2.5 py-1 rounded-full font-medium">Not connected</span>}
                {connector.status === 'attention' && <span className="bg-[#112D4E]/10 text-[#112D4E] text-[12px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5"><FiAlertCircle size={10}/>Attention</span>}
              </div>
            </div>
            
            <h3 className="text-[#112D4E] text-[15px] font-medium mb-1">{connector.name}</h3>
            <p className="text-[#3F72AF] text-[12px] leading-relaxed line-clamp-2">{connector.desc}</p>
            
            <div className="mt-auto pt-4 flex items-center justify-between">
              {connector.status === 'connected' || connector.status === 'attention' ? (
                <>
                  <div>
                    <button onClick={() => onSelectConnector(connector)} className="text-[#3F72AF] text-[13px] font-medium hover:underline">Configure</button>
                    <div className="text-[#DBE2EF] text-[11px] mt-0.5 tracking-wide">Last sync {connector.lastSync} · {connector.records} records</div>
                  </div>
                  <button className="px-3 py-1.5 border-[0.5px] border-[#DBE2EF] text-[#112D4E] rounded-md text-[12px] font-medium hover:border-[#3F72AF] transition-colors">
                    Sync now
                  </button>
                </>
              ) : (
                <button onClick={() => onSelectConnector(connector)} className="w-full h-9 bg-[#3F72AF] text-white rounded-lg text-[13px] font-medium hover:bg-[#112D4E] transition-colors">
                  Connect
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Layer 2: Detail ---
const ConnectorDetail = ({ connector, onBack, onViewMonitor }) => {
  const isConnected = connector.status === 'connected';
  const needsAttention = connector.status === 'attention';

  return (
    <div className="p-8 lg:p-10 max-w-[1200px] mx-auto animate-fade-in">
      <button onClick={onBack} className="flex items-center gap-2 text-[#3F72AF] text-[13px] font-medium hover:underline mb-6">
        <FiArrowLeft /> Integrations
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-xl border-[0.5px] border-[#DBE2EF] shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-[14px] bg-[#112D4E] text-white flex items-center justify-center font-bold text-2xl shadow-md">
            {connector.logo}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-[#112D4E] text-[22px] font-semibold">{connector.name}</h1>
              {isConnected && <span className="bg-[#3F72AF]/10 text-[#3F72AF] text-[12px] px-2.5 py-1 rounded-full font-medium">Connected</span>}
              {needsAttention && <span className="bg-[#112D4E]/10 text-[#112D4E] text-[12px] px-2.5 py-1 rounded-full font-medium">Needs Attention</span>}
            </div>
            <p className="text-[#3F72AF] text-[14px]">{connector.desc}</p>
          </div>
        </div>
        {(isConnected || needsAttention) && (
          <div className="flex items-center gap-4">
            <button className="text-[#3F72AF] text-[13px] hover:text-[#112D4E] hover:underline">Disconnect</button>
            <button className="px-5 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-[13px] font-medium hover:bg-[#F9F7F7]">
              Sync now
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column (65%) */}
        <div className="lg:w-[65%] space-y-8">
          
          {!isConnected && !needsAttention ? (
            // Connection Setup Flow
            <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-8 shadow-sm">
              <div className="flex items-center justify-between relative mb-8">
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#DBE2EF] -z-10 -translate-y-1/2"></div>
                <div className="w-8 h-8 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-[14px] font-bold shadow-sm ring-4 ring-white">1</div>
                <div className="w-8 h-8 rounded-full bg-white border-[2px] border-[#DBE2EF] text-[#DBE2EF] flex items-center justify-center text-[14px] font-bold ring-4 ring-white">2</div>
                <div className="w-8 h-8 rounded-full bg-white border-[2px] border-[#DBE2EF] text-[#DBE2EF] flex items-center justify-center text-[14px] font-bold ring-4 ring-white">3</div>
              </div>
              
              <h3 className="text-[#112D4E] text-[18px] font-medium mb-2">Authorize {connector.name}</h3>
              <p className="text-[#3F72AF] text-[13px] mb-6">SmallBiz CRM needs permission to access your {connector.name} account to sync data automatically.</p>
              
              <div className="bg-[#F9F7F7] rounded-lg p-5 mb-8 border-[0.5px] border-[#DBE2EF]">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#3F72AF] mt-0.5" />
                    <span className="text-[#112D4E] text-[13px]"><strong>Read your contacts</strong> — to sync names and phone numbers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#3F72AF] mt-0.5" />
                    <span className="text-[#112D4E] text-[13px]"><strong>Create invoices</strong> — to send data to your accounting software</span>
                  </li>
                </ul>
              </div>
              
              <button className="w-full py-3 bg-[#112D4E] text-white rounded-lg text-[14px] font-medium shadow-md hover:bg-[#112D4E]/90 transition-colors">
                Connect with {connector.name}
              </button>
            </div>
          ) : (
            // Connected Settings
            <>
              {/* Sync Settings */}
              <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm">
                <h3 className="text-[#112D4E] text-[14px] font-medium mb-6">Sync settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-[#112D4E] text-[13px] font-medium mb-3">Sync frequency</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freq" className="accent-[#3F72AF]" defaultChecked />
                        <span className="text-[#3F72AF] text-[13px]">Real-time <span className="bg-[#DBE2EF] text-[#112D4E] text-[9px] px-1.5 py-0.5 rounded ml-1 font-bold uppercase tracking-wider">Pro</span></span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freq" className="accent-[#3F72AF]" />
                        <span className="text-[#3F72AF] text-[13px]">Every hour</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="freq" className="accent-[#3F72AF]" />
                        <span className="text-[#3F72AF] text-[13px]">Manual only</span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DBE2EF]">
                    <label className="block text-[#112D4E] text-[13px] font-medium mb-4">Sync direction</label>
                    <div className="flex items-center justify-between max-w-sm bg-[#F9F7F7] p-4 rounded-lg border-[0.5px] border-[#DBE2EF]">
                      <div className="text-[#112D4E] font-medium text-[13px]">SmallBiz CRM</div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center text-[#3F72AF] bg-[#DBE2EF]/50 px-2 rounded cursor-pointer"><FiArrowLeft size={12}/> <FiArrowRight size={12}/></div>
                        <span className="text-[10px] text-[#3F72AF] uppercase tracking-wider">Two-way</span>
                      </div>
                      <div className="text-[#3F72AF] font-medium text-[13px]">{connector.name}</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#DBE2EF]">
                    <label className="block text-[#112D4E] text-[13px] font-medium mb-2">Conflict resolution</label>
                    <select className="w-full max-w-sm h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
                      <option>Most recent update wins</option>
                      <option>CRM always wins</option>
                      <option>Integration always wins</option>
                    </select>
                    <p className="text-[#3F72AF] text-[12px] mt-1.5">If the same record is updated in both places simultaneously, the latest change is kept.</p>
                  </div>
                </div>
              </div>

              {/* Field Mapper Preview */}
              <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <h3 className="text-[#112D4E] text-[14px] font-medium mb-1">Field mapping</h3>
                    <p className="text-[#3F72AF] text-[12px]">Tell us which columns match your CRM fields.</p>
                  </div>
                  <button className="px-3 py-1.5 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-md text-[12px] font-medium hover:bg-[#F9F7F7]">
                    Auto-map fields
                  </button>
                </div>

                <div className="border-[0.5px] border-[#DBE2EF] rounded-lg overflow-hidden mb-4">
                  <div className="flex bg-[#F9F7F7] border-b border-[#DBE2EF] p-3">
                    <div className="w-[45%] text-[#112D4E] text-[12px] font-medium">SmallBiz CRM field</div>
                    <div className="w-[10%] text-center"></div>
                    <div className="w-[45%] text-[#112D4E] text-[12px] font-medium">{connector.name} field</div>
                  </div>
                  <div className="p-3 border-b border-[#DBE2EF] flex items-center">
                    <div className="w-[45%] text-[#112D4E] text-[13px] font-medium">First Name <span className="text-[#3F72AF]">*</span></div>
                    <div className="w-[10%] flex justify-center text-[#3F72AF]"><FiCheckCircle size={14}/></div>
                    <div className="w-[45%]">
                      <select className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[12px] bg-white">
                        <option>first_name</option>
                      </select>
                    </div>
                  </div>
                  <div className="p-3 flex items-center">
                    <div className="w-[45%] text-[#112D4E] text-[13px] font-medium">Phone Number <span className="text-[#3F72AF]">*</span></div>
                    <div className="w-[10%] flex justify-center text-[#3F72AF]"><FiCheckCircle size={14}/></div>
                    <div className="w-[45%]">
                      <select className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[12px] bg-white">
                        <option>mobile</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <button className="text-[#3F72AF] text-[13px] font-medium hover:underline flex items-center gap-1">
                  <FiSliders size={14}/> Open full field mapper
                </button>
              </div>
            </>
          )}

        </div>

        {/* Right Column (35%) */}
        <div className="lg:w-[35%] space-y-6">
          
          {needsAttention ? (
             <div className="bg-[#FFF4E5] rounded-xl border-[1px] border-[#FFB020] p-6 shadow-sm text-center">
               <div className="w-16 h-16 rounded-full bg-[#FFB020]/20 flex items-center justify-center text-[#112D4E] text-2xl mx-auto mb-3">
                 <FiAlertCircle />
               </div>
               <h4 className="text-[#112D4E] text-[14px] font-bold mb-2">Authorization expired</h4>
               <p className="text-[#112D4E] text-[13px] mb-4">Your connection to {connector.name} has expired. Please reconnect to resume syncing.</p>
               <button className="w-full py-2 bg-[#112D4E] text-white rounded-lg text-[13px] font-medium">
                 Reconnect account
               </button>
             </div>
          ) : isConnected ? (
             <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm text-center">
               <div className="w-16 h-16 rounded-full bg-[#3F72AF]/10 flex items-center justify-center text-[#3F72AF] text-3xl mx-auto mb-3">
                 <FiCheckCircle />
               </div>
               <h4 className="text-[#112D4E] text-[15px] font-medium mb-1">Connected & Healthy</h4>
               <div className="text-[#112D4E] text-[13px] mt-4 p-3 bg-[#F9F7F7] rounded-lg text-left space-y-1">
                 <div><span className="text-[#3F72AF]">Account:</span> business@rajantextiles.com</div>
                 <div><span className="text-[#3F72AF]">Since:</span> Jan 15, 2026</div>
                 <div><span className="text-[#3F72AF]">Added by:</span> Ravi Kumar</div>
               </div>
             </div>
          ) : null}

          {(isConnected || needsAttention) && (
            <>
              {/* Stats */}
              <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-4 shadow-sm grid grid-cols-2 gap-px bg-[#DBE2EF]">
                <div className="bg-white p-3 text-center">
                  <div className="text-[#3F72AF] text-[11px] mb-1">Records today</div>
                  <div className="text-[#112D4E] text-[18px] font-bold">142</div>
                </div>
                <div className="bg-white p-3 text-center">
                  <div className="text-[#3F72AF] text-[11px] mb-1">This month</div>
                  <div className="text-[#112D4E] text-[18px] font-bold">4,281</div>
                </div>
                <div className="bg-white p-3 text-center">
                  <div className="text-[#3F72AF] text-[11px] mb-1">Last success</div>
                  <div className="text-[#112D4E] text-[13px] font-bold mt-1">10:42 AM</div>
                </div>
                <div className="bg-white p-3 text-center">
                  <div className="text-[#3F72AF] text-[11px] mb-1">Errors (30d)</div>
                  <div className="text-[#112D4E] text-[18px] font-bold">0</div>
                </div>
              </div>

              {/* Log */}
              <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] shadow-sm overflow-hidden">
                <div className="p-4 border-b border-[#DBE2EF] bg-[#F9F7F7]">
                  <h4 className="text-[#112D4E] text-[13px] font-medium">Sync history</h4>
                </div>
                <div className="p-0">
                  {[1,2,3].map((i) => (
                    <div key={i} className="flex justify-between items-center p-3 border-b border-[#DBE2EF] text-[12px]">
                      <div>
                        <div className="text-[#DBE2EF] text-[10px] uppercase mb-0.5">Today, 10:42 AM</div>
                        <div className="flex items-center gap-1.5 text-[#112D4E] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3F72AF]"></span> Sync complete
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#112D4E] font-bold">12 records</div>
                        <button className="text-[#3F72AF] hover:underline text-[11px]">Details</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 bg-[#F9F7F7] text-center">
                  <button onClick={onViewMonitor} className="text-[#3F72AF] text-[12px] font-medium hover:underline">View full log &rarr;</button>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

// --- Layer 3: Monitor ---
const SyncMonitor = ({ onBack }) => {
  return (
    <div className="p-8 lg:p-10 max-w-[1200px] mx-auto animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div>
          <button onClick={onBack} className="flex items-center gap-2 text-[#3F72AF] text-[13px] font-medium hover:underline mb-2">
            <FiArrowLeft /> Integrations
          </button>
          <h1 className="text-[#112D4E] text-[20px] font-medium">Sync Monitor</h1>
          <p className="text-[#3F72AF] text-[14px]">Live view of all data flowing between your tools</p>
        </div>
        <select className="h-9 px-3 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px] bg-white">
          <option>Last 7 days</option>
        </select>
      </div>

      {/* Health Bar */}
      <div className="mb-8">
        <h3 className="text-[#112D4E] text-[13px] font-medium mb-2">Overall health (30 days)</h3>
        <div className="flex gap-1 h-8 w-full bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-1 shadow-sm">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === 28 ? 'bg-[#FFB020]' : i === 15 ? 'bg-[#112D4E]' : i > 25 ? 'bg-[#3F72AF]' : 'bg-[#DBE2EF]/50'}`}></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Event log</h3>
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-xl shadow-sm overflow-hidden">
            <div className="flex gap-3 p-3 bg-[#F9F7F7] border-b border-[#DBE2EF]">
              <select className="flex-1 h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[12px]"><option>All Integrations</option></select>
              <select className="flex-1 h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[12px]"><option>All Statuses</option></select>
            </div>
            <table className="w-full text-left">
              <thead className="bg-[#112D4E] text-[#F9F7F7] text-[12px]">
                <tr>
                  <th className="py-2 px-4 font-medium">Timestamp</th>
                  <th className="py-2 px-4 font-medium">Integration</th>
                  <th className="py-2 px-4 font-medium">Event</th>
                  <th className="py-2 px-4 font-medium">Records</th>
                  <th className="py-2 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                <tr className="border-b border-[#DBE2EF]">
                  <td className="py-3 px-4 text-[#3F72AF]">10:42 AM</td>
                  <td className="py-3 px-4 text-[#112D4E] font-medium">Excel</td>
                  <td className="py-3 px-4"><span className="bg-[#3F72AF]/10 text-[#3F72AF] px-2 py-0.5 rounded text-[11px]">Incremental</span></td>
                  <td className="py-3 px-4 text-[#112D4E]">12</td>
                  <td className="py-3 px-4 text-[#3F72AF] font-medium flex items-center gap-1"><FiCheckCircle/> Success</td>
                </tr>
                <tr className="border-b border-[#DBE2EF]">
                  <td className="py-3 px-4 text-[#3F72AF]">09:15 AM</td>
                  <td className="py-3 px-4 text-[#112D4E] font-medium">Zoho Books</td>
                  <td className="py-3 px-4"><span className="bg-[#DBE2EF] text-[#112D4E] px-2 py-0.5 rounded text-[11px]">Full sync</span></td>
                  <td className="py-3 px-4 text-[#112D4E]">0</td>
                  <td className="py-3 px-4 text-[#112D4E] font-medium flex items-center gap-1"><FiAlertCircle/> Warning</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Errors & warnings</h3>
          <div className="bg-white border-l-[3px] border-l-[#112D4E] border-[0.5px] border-r-[#DBE2EF] border-y-[#DBE2EF] rounded-r-xl p-4 shadow-sm">
            <div className="text-[#112D4E] text-[13px] font-bold mb-1">Zoho Books</div>
            <p className="text-[#112D4E] text-[13px] mb-2">Authorization expired. Please reconnect your Zoho account.</p>
            <div className="flex gap-2 mt-3">
              <button className="px-3 py-1.5 bg-[#3F72AF] text-white rounded-md text-[12px] font-medium">Fix now</button>
              <button className="px-3 py-1.5 border-[0.5px] border-[#DBE2EF] text-[#112D4E] rounded-md text-[12px]">Ignore</button>
            </div>
          </div>
          <div className="bg-white border-l-[3px] border-l-[#FFB020] border-[0.5px] border-r-[#DBE2EF] border-y-[#DBE2EF] rounded-r-xl p-4 shadow-sm">
            <div className="text-[#112D4E] text-[13px] font-bold mb-1">Excel (Microsoft 365)</div>
            <p className="text-[#112D4E] text-[13px] mb-2">Duplicate phone number found in row 42.</p>
            <p className="text-[#3F72AF] text-[12px] italic mb-3">Merge or update source file.</p>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 bg-[#3F72AF] text-white rounded-md text-[12px] font-medium">Review</button>
              <button className="px-3 py-1.5 border-[0.5px] border-[#DBE2EF] text-[#112D4E] rounded-md text-[12px]">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Container ---
const IntegrationsPage = () => {
  const [currentView, setCurrentView] = useState('hub'); // hub, detail, monitor
  const [selectedConnector, setSelectedConnector] = useState(null);

  const handleSelectConnector = (connector) => {
    setSelectedConnector(connector);
    setCurrentView('detail');
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F9F7F7]">
      <DashboardSidebar />
      <div className="flex-1 lg:ml-[240px] ml-0 overflow-y-auto">
         {currentView === 'hub' && <IntegrationsHub onSelectConnector={handleSelectConnector} onViewMonitor={() => setCurrentView('monitor')} />}
         {currentView === 'detail' && <ConnectorDetail connector={selectedConnector} onBack={() => setCurrentView('hub')} onViewMonitor={() => setCurrentView('monitor')} />}
         {currentView === 'monitor' && <SyncMonitor onBack={() => setCurrentView('hub')} />}
      </div>
    </div>
  );
};

export default IntegrationsPage;
