import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  FiSearch, FiFilter, FiPlus, FiList, FiGrid, FiChevronDown, 
  FiMessageCircle, FiEdit2, FiMoreVertical, FiChevronLeft, FiChevronRight,
  FiX, FiClock, FiPhone, FiUser, FiStar, FiHome, FiAward, FiArrowRight, FiMessageSquare
} from 'react-icons/fi';

const mockContacts = [
  { id: 1, name: 'Rajan Textiles', isCompany: true, contactPerson: 'Ravi Kumar', phone: '+91 98765 43210', company: 'Rajan Textiles', stage: 'Lead', lastContacted: '2 days ago', tags: ['Wholesale', 'VIP'], hasPhoto: false },
  { id: 2, name: 'Priya Mehta', isCompany: false, contactPerson: 'Priya Mehta', phone: '+91 87654 32109', company: 'Freelance', stage: 'Contacted', lastContacted: 'Today', tags: ['Retail'], hasPhoto: true, avatar: 'https://i.pravatar.cc/150?u=priya' },
  { id: 3, name: 'Amit Singh', isCompany: false, contactPerson: 'Amit Singh', phone: '+91 76543 21098', company: 'Tech Solutions Inc.', stage: 'Won', lastContacted: '1 week ago', tags: ['Tech', 'B2B', 'Repeat'], hasPhoto: false },
  { id: 4, name: 'Neha Gupta', isCompany: false, contactPerson: 'Neha Gupta', phone: '+91 65432 10987', company: 'Sharma Enterprises', stage: 'Proposal Sent', lastContacted: '35 days ago', tags: ['Consulting'], hasPhoto: false },
  { id: 5, name: 'Suresh Patel', isCompany: false, contactPerson: 'Suresh Patel', phone: '+91 99887 76655', company: 'Patel & Sons', stage: 'Lost', lastContacted: 'Never', tags: ['Inactive'], hasPhoto: false },
];

const ContactsPage = () => {
  const navigate = useNavigate();
  const [view, setView] = useState('table'); // 'table' | 'card'
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleSelectAll = (e) => {
    if (e.target.checked) setSelectedContacts(mockContacts.map(c => c.id));
    else setSelectedContacts([]);
  };

  const toggleSelect = (id) => {
    if (selectedContacts.includes(id)) setSelectedContacts(selectedContacts.filter(cId => cId !== id));
    else setSelectedContacts([...selectedContacts, id]);
  };

  const getStageBadge = (stage) => {
    switch(stage) {
      case 'Lead': return <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-[#DBE2EF] text-[#112D4E]">Lead</span>;
      case 'Won': return <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-[#3F72AF] text-white">Won</span>;
      case 'Lost': return <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-[#112D4E] text-[#F9F7F7]">Lost</span>;
      default: return <span className="inline-flex px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">{stage}</span>;
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <DashboardLayout>
      <div className="flex-1 flex flex-col relative w-full">
        
        {/* Main Content Area */}
        <div className="flex-1 p-8">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-[#112D4E]">Contacts</h1>
              <span className="px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">Contacts · 284</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search contacts..." 
                  className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#3F72AF]/30 w-64 shadow-sm"
                />
              </div>
              
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors"
              >
                <FiFilter className="w-4 h-4" /> Filter
              </button>
              
              <div className="flex">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#3F72AF] hover:bg-blue-700 text-white rounded-l-lg text-sm font-bold shadow-sm transition-colors">
                  <FiPlus className="w-4 h-4" /> Add contact
                </button>
                <button className="px-2 py-2 bg-[#3F72AF] hover:bg-blue-700 border-l border-blue-600 text-white rounded-r-lg shadow-sm transition-colors">
                  <FiChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* View Toggle & Active Filters */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex bg-white border border-gray-200 rounded-lg p-0.5 shadow-sm">
              <button 
                onClick={() => setView('table')}
                className={`p-1.5 rounded-md transition-colors ${view === 'table' ? 'bg-[#3F72AF] text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <FiList className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setView('card')}
                className={`p-1.5 rounded-md transition-colors ${view === 'card' ? 'bg-[#3F72AF] text-white' : 'text-gray-500 hover:text-gray-900'}`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">
                Stage: Lead <button className="hover:text-red-500"><FiX className="w-3 h-3" /></button>
              </span>
            </div>
          </div>

          {/* Table View */}
          {view === 'table' && (
            <div className="bg-white rounded-xl border border-[#DBE2EF] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#DBE2EF] text-[#112D4E] text-xs uppercase tracking-wider">
                      <th className="px-5 py-3 w-12 text-center whitespace-nowrap">
                        <input type="checkbox" onChange={toggleSelectAll} className="rounded border-gray-400 text-[#3F72AF] focus:ring-[#3F72AF]" />
                      </th>
                      <th className="px-5 py-3 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Name</th>
                      <th className="px-5 py-3 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Phone</th>
                      <th className="px-5 py-3 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Company</th>
                      <th className="px-5 py-3 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Stage</th>
                      <th className="px-5 py-3 font-semibold cursor-pointer hover:bg-[#c9d4e8] transition-colors whitespace-nowrap">Last Contacted</th>
                      <th className="px-5 py-3 font-semibold whitespace-nowrap">Tags</th>
                      <th className="px-5 py-3 w-24"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DBE2EF]/50">
                    {mockContacts.map((contact, idx) => {
                      const isSelected = selectedContacts.includes(contact.id);
                      const isNeedsAttention = contact.lastContacted.includes('days') && parseInt(contact.lastContacted) > 30;
                      
                      return (
                        <tr 
                          key={contact.id} 
                          className={`group transition-colors cursor-pointer ${isSelected ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white' : 'bg-[#F9F7F7]'} hover:bg-[#DBE2EF]/50`}
                          onClick={(e) => {
                            if(e.target.type !== 'checkbox' && !e.target.closest('button')) {
                              navigate(`/contacts/${contact.id}`);
                            }
                          }}
                        >
                          <td className="px-5 py-4 text-center w-12">
                            <input 
                              type="checkbox" 
                              checked={isSelected}
                              onChange={() => toggleSelect(contact.id)}
                              className="rounded border-gray-400 text-[#3F72AF] focus:ring-[#3F72AF] w-4 h-4" 
                            />
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-4">
                              {contact.hasPhoto ? (
                                <img src={contact.avatar} alt={contact.contactPerson} className="w-10 h-10 rounded-full object-cover shrink-0 border border-gray-200 shadow-sm" />
                              ) : (
                                <div className="w-10 h-10 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">
                                  {getInitials(contact.contactPerson)}
                                </div>
                              )}
                              <span className="font-semibold text-[#112D4E] text-[15px]">{contact.contactPerson}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2 text-[#112D4E] text-[14px]">
                              <span>{contact.phone}</span>
                              <button className="text-green-600 hover:text-green-700 shrink-0" title="WhatsApp">
                                <FiMessageCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-[#3F72AF] text-[14px] font-medium hover:underline cursor-pointer whitespace-nowrap">
                            {contact.company}
                          </td>
                          <td className="px-5 py-4 whitespace-nowrap">
                            {getStageBadge(contact.stage)}
                          </td>
                          <td className="px-5 py-4 text-[14px] whitespace-nowrap">
                            {contact.lastContacted === 'Never' ? (
                              <span className="text-[#DBE2EF] italic">Never</span>
                            ) : (
                              <span className={isNeedsAttention ? "text-orange-600 font-medium" : "text-[#112D4E]"}>
                                {contact.lastContacted}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-4 min-w-[120px]">
                            <div className="flex gap-1.5 flex-wrap">
                              {contact.tags.slice(0, 2).map(tag => (
                                <span key={tag} className="px-2.5 py-1 rounded-full bg-[#3F72AF]/10 text-[#3F72AF] text-[12px] font-semibold whitespace-nowrap">
                                  {tag}
                                </span>
                              ))}
                              {contact.tags.length > 2 && (
                                <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-[12px] font-semibold whitespace-nowrap">
                                  +{contact.tags.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-5 py-4 text-right w-24">
                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="p-2 text-green-600 hover:bg-green-100 rounded-md transition-colors shrink-0"><FiMessageCircle className="w-4 h-4" /></button>
                              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors shrink-0"><FiEdit2 className="w-4 h-4" /></button>
                              <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md transition-colors shrink-0"><FiMoreVertical className="w-4 h-4" /></button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              <div className="px-5 py-3 border-t border-[#DBE2EF] flex items-center justify-between bg-white">
                <p className="text-sm text-gray-500">Showing <span className="font-medium text-gray-900">1-5</span> of <span className="font-medium text-gray-900">284</span> contacts</p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                  <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
          )}

          {/* Card View */}
          {view === 'card' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mockContacts.map(contact => (
                <div key={contact.id} className="bg-white relative overflow-hidden flex flex-col transition-all hover:-translate-y-1" style={{ borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)', padding: '28px' }}>
                  
                  {/* Wavy background - perfectly mimicking the image */}
                  <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none opacity-60" style={{ transform: 'translate(10%, -10%)' }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <circle cx="100" cy="0" r="15" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="25" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="35" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="45" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="55" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="65" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="75" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="85" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="95" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="105" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="115" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                      <circle cx="100" cy="0" r="125" fill="none" stroke="#eef2f6" strokeWidth="0.5"/>
                    </svg>
                  </div>

                  {/* Stage Pill */}
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[14px] font-medium mb-6 w-fit z-10" style={{ backgroundColor: '#ebf4ff', color: '#2563eb' }}>
                    <FiStar className="fill-current w-3.5 h-3.5" /> {contact.stage}
                  </div>

                  {/* Profile Row */}
                  <div className="flex gap-6 mb-7 z-10 relative items-center">
                    {/* Avatar */}
                    <div className="flex items-center justify-center shrink-0 rounded-full z-10" style={{ width: '100px', height: '100px', backgroundColor: '#e8f0fe', border: '6px solid white', boxShadow: '0 0 20px rgba(0,0,0,0.06)' }}>
                      {contact.hasPhoto ? (
                        <img src={contact.avatar} alt={contact.contactPerson} className="w-full h-full rounded-full object-cover" />
                      ) : (
                        <FiUser style={{ width: '45px', height: '45px', color: '#8ab4f8', fill: '#8ab4f8' }} />
                      )}
                    </div>
                    
                    {/* Info */}
                    <div className="flex flex-col justify-center">
                      <h3 className="font-bold leading-tight" style={{ color: '#112d4e', fontSize: '26px' }}>
                        {contact.contactPerson}
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '16px', marginBottom: '12px', marginTop: '2px' }}>{contact.company}</p>
                      
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#e6f4ea' }}>
                            <FiPhone style={{ width: '14px', height: '14px', color: '#188038' }} />
                          </div>
                          <span style={{ color: '#1f2937', fontSize: '15px' }}>{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="rounded-full flex items-center justify-center shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#e8f0fe' }}>
                            <FiClock style={{ width: '14px', height: '14px', color: '#1967d2' }} />
                          </div>
                          <span style={{ color: '#475569', fontSize: '15px' }}>Last touched: {contact.lastContacted}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-3 flex-wrap mb-8 z-10 relative">
                    {contact.tags.map((tag, i) => {
                      const isFirst = i % 2 === 0;
                      return (
                        <span key={tag} className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-bold uppercase tracking-wider" style={
                          isFirst 
                            ? { backgroundColor: '#e8f0fe', color: '#1967d2', borderRadius: '10px' } 
                            : { backgroundColor: '#f3e8ff', color: '#9333ea', borderRadius: '10px' }
                        }>
                          {isFirst ? <FiHome className="w-4 h-4" /> : <FiAward className="w-4 h-4" />} {tag}
                        </span>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-auto z-10 relative">
                    <button className="flex-[0.4] py-4 bg-white text-base font-bold flex items-center justify-center gap-2.5 transition-all hover:bg-gray-50" style={{ border: '2px solid #112d4e', color: '#112d4e', borderRadius: '14px' }}>
                      <FiMessageSquare className="w-5 h-5" /> Message
                    </button>
                    <button 
                      onClick={() => navigate(`/contacts/${contact.id}`)}
                      className="flex-[0.6] py-4 text-white text-base font-bold flex items-center justify-center gap-2.5 transition-all hover:opacity-90" style={{ backgroundColor: '#1a365d', borderRadius: '14px' }}
                    >
                      View Profile <FiArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Filter Panel Slide-over */}
        {isFilterOpen && (
          <div className="fixed inset-y-0 right-0 w-[320px] bg-white border-l border-gray-200 shadow-2xl z-20 flex flex-col transition-transform transform translate-x-0">
            <div className="p-5 border-b border-gray-200 flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-[#112D4E] text-lg">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-1 text-gray-500 hover:text-gray-800 rounded-full hover:bg-gray-200">
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Stage</h3>
                <div className="space-y-2">
                  {['Lead', 'Contacted', 'Proposal Sent', 'Negotiation', 'Won', 'Lost'].map(stage => (
                    <label key={stage} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-[#3F72AF] focus:ring-[#3F72AF]" />
                      <span className="text-sm text-gray-600">{stage}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Tags</h3>
                <input type="text" placeholder="Search tags..." className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm mb-2" />
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-md text-xs cursor-pointer">VIP</span>
                  <span className="px-2 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-md text-xs cursor-pointer">Wholesale</span>
                  <span className="px-2 py-1 bg-gray-50 text-gray-600 border border-gray-200 rounded-md text-xs cursor-pointer">Retail</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-700 mb-3">Last contacted</h3>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-[#3F72AF]">
                  <option>Any time</option>
                  <option>Today</option>
                  <option>This week</option>
                  <option>This month</option>
                  <option>Never contacted</option>
                </select>
              </div>
            </div>

            <div className="p-5 border-t border-gray-200 bg-gray-50 flex flex-col gap-3">
              <button className="w-full py-2 bg-[#3F72AF] text-white rounded-lg font-bold hover:bg-blue-700 transition-colors">Apply filters</button>
              <button className="text-sm text-[#3F72AF] font-medium hover:underline">Clear all</button>
            </div>
          </div>
        )}

        {/* Bulk Actions Bar */}
        {selectedContacts.length > 0 && (
          <div className="fixed bottom-0 left-[240px] right-0 bg-[#112D4E] text-white py-3 px-6 flex justify-between items-center z-10 animate-slide-up shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <span className="font-medium text-sm">{selectedContacts.length} contacts selected</span>
            <div className="flex gap-3">
              <button className="px-4 py-1.5 bg-[#3F72AF] hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">Assign tag</button>
              <button className="px-4 py-1.5 bg-[#3F72AF] hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors">Change stage</button>
              <button className="px-4 py-1.5 border border-red-400/50 text-red-300 hover:bg-red-500/20 text-sm font-medium rounded-md transition-colors">Delete selected</button>
            </div>
          </div>
        )}

      </div>
    </DashboardLayout>
  );
};

export default ContactsPage;
