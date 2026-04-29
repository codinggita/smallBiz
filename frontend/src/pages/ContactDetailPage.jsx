import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import { 
  FiArrowLeft, FiMessageCircle, FiBriefcase, FiMoreHorizontal, 
  FiEdit2, FiPlus, FiPhoneCall, FiMail, FiFileText, FiCalendar,
  FiCheckCircle, FiClock
} from 'react-icons/fi';

const ContactDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('All');

  const contact = {
    id: 1,
    name: 'Rajan Textiles',
    contactPerson: 'Ravi Kumar',
    phone: '+91 98765 43210',
    email: 'ravi@rajantextiles.com',
    company: 'Rajan Textiles',
    address: '14, Textile Market, Surat, Gujarat',
    source: 'WhatsApp',
    assignedTo: 'Me',
    dateAdded: '12 Jan 2026',
    stage: 'Lead',
    avatar: null,
    tags: ['Wholesale', 'VIP']
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F9FAFB] font-sans text-gray-800">
      <DashboardSidebar />
      
      <div className="ml-[240px] flex-1 p-8">
        {/* Top Navigation */}
        <button 
          onClick={() => navigate('/contacts')}
          className="flex items-center gap-2 text-gray-500 hover:text-[#112D4E] font-medium mb-6 transition-colors"
        >
          <FiArrowLeft /> Back to Contacts
        </button>

        <div className="flex gap-8 items-start">
          
          {/* Left Column - Contact Profile (35%) */}
          <div className="w-[35%] flex flex-col gap-6 sticky top-8">
            
            {/* Header Section */}
            <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF] p-6 text-center relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                <FiEdit2 className="w-4 h-4" />
              </button>
              
              <div className="w-[72px] h-[72px] rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {contact.avatar ? <img src={contact.avatar} alt={contact.name} className="rounded-full w-full h-full object-cover" /> : getInitials(contact.contactPerson)}
              </div>
              
              <h1 className="text-[22px] font-semibold text-[#112D4E] mb-1">{contact.contactPerson}</h1>
              <p className="text-[#3F72AF] text-sm font-medium mb-2">{contact.company}</p>
              <span className="inline-block px-3 py-1 bg-[#DBE2EF] text-[#112D4E] rounded-full text-xs font-semibold mb-6">
                {contact.stage}
              </span>

              <div className="flex gap-2 justify-center">
                <button className="flex-1 py-2 bg-[#3F72AF] hover:bg-blue-700 text-white rounded-lg text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
                  <FiMessageCircle /> Message
                </button>
                <button className="flex-1 py-2 border border-[#3F72AF] hover:bg-[#3F72AF]/5 text-[#3F72AF] rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                  <FiBriefcase /> Deal
                </button>
                <button className="px-3 py-2 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded-lg transition-colors">
                  <FiMoreHorizontal />
                </button>
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF]">
              <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-xl">
                <h3 className="font-bold text-[#112D4E]">Contact Information</h3>
              </div>
              <div className="p-0 divide-y divide-[#DBE2EF]/50">
                {[
                  { label: 'Phone', value: contact.phone },
                  { label: 'Email', value: contact.email },
                  { label: 'Company', value: contact.company },
                  { label: 'Address', value: contact.address },
                  { label: 'Source', value: contact.source },
                  { label: 'Assigned to', value: contact.assignedTo },
                  { label: 'Date added', value: contact.dateAdded },
                ].map(field => (
                  <div key={field.label} className="p-4 flex justify-between items-center group">
                    <div>
                      <p className="text-xs text-gray-400 font-medium mb-1">{field.label}</p>
                      <p className="text-sm text-[#112D4E] font-medium">{field.value}</p>
                    </div>
                    <FiEdit2 className="text-gray-300 group-hover:text-[#3F72AF] opacity-0 group-hover:opacity-100 cursor-pointer w-3.5 h-3.5 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF] p-5">
              <h3 className="font-bold text-[#112D4E] mb-3 text-sm">Tags</h3>
              <div className="flex flex-wrap gap-2 items-center">
                {contact.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#3F72AF]/15 text-[#3F72AF] text-xs font-semibold">
                    {tag}
                  </span>
                ))}
                <button className="px-3 py-1 rounded-full border border-dashed border-gray-300 text-gray-500 text-xs font-medium hover:bg-gray-50 hover:text-gray-700 flex items-center gap-1 transition-colors">
                  <FiPlus className="w-3 h-3" /> Add tag
                </button>
              </div>
            </div>

            {/* Deals & Invoices Summary */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF] p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#3F72AF] transition-colors">
                <FiBriefcase className="w-6 h-6 text-[#3F72AF] mb-2" />
                <span className="font-bold text-[#112D4E] text-lg">1</span>
                <span className="text-xs text-gray-500">Active deal</span>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF] p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#3F72AF] transition-colors">
                <FiFileText className="w-6 h-6 text-orange-500 mb-2" />
                <span className="font-bold text-[#112D4E] text-lg">2</span>
                <span className="text-xs text-gray-500">Pending invoices</span>
              </div>
            </div>

            {/* Follow-up Scheduler */}
            <div className="bg-[#F9FAFB] rounded-xl shadow-inner border border-[#DBE2EF] p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3F72AF]"></div>
              <h3 className="font-bold text-[#112D4E] mb-1 text-sm flex items-center gap-2">
                <FiClock className="text-[#3F72AF]" /> Scheduled Follow-up
              </h3>
              <p className="text-xs text-gray-500 mb-3">No follow-ups currently scheduled.</p>
              
              <button className="w-full py-2 bg-white border border-[#3F72AF] text-[#3F72AF] hover:bg-[#3F72AF]/5 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                <FiCalendar /> Schedule Next Action
              </button>
            </div>

          </div>

          {/* Right Column - Activity Timeline (65%) */}
          <div className="w-[65%] flex flex-col gap-6">
            
            {/* Add Activity Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-[#DBE2EF] p-2 flex">
              <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50 text-[#112D4E] transition-colors">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-1"><FiPhoneCall className="w-4 h-4" /></div>
                <span className="text-xs font-bold">Log call</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50 text-[#112D4E] transition-colors">
                <div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center mb-1"><FiFileText className="w-4 h-4" /></div>
                <span className="text-xs font-bold">Add note</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50 text-[#112D4E] transition-colors">
                <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-1"><FiMail className="w-4 h-4" /></div>
                <span className="text-xs font-bold">Send email</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50 text-[#112D4E] transition-colors">
                <div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-1"><FiCheckCircle className="w-4 h-4" /></div>
                <span className="text-xs font-bold">Create task</span>
              </button>
              <button className="flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2 rounded-lg hover:bg-gray-50 text-[#112D4E] transition-colors">
                <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-1"><FiCalendar className="w-4 h-4" /></div>
                <span className="text-xs font-bold">Follow-up</span>
              </button>
            </div>

            {/* Timeline Filter Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-1 border-b border-gray-200">
              {['All', 'WhatsApp', 'Calls', 'Notes', 'Deals'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab 
                      ? 'border-[#3F72AF] text-[#3F72AF]' 
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab}
                  <span className="ml-2 px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">{tab === 'All' ? 8 : 2}</span>
                </button>
              ))}
            </div>

            {/* Timeline Thread */}
            <div className="relative pl-6 mt-4 pb-10">
              {/* Thread Line */}
              <div className="absolute top-2 bottom-0 left-8 w-[2px] bg-[#DBE2EF]"></div>

              <div className="space-y-6">
                
                {/* Note Event */}
                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 border-4 border-[#F9FAFB] flex items-center justify-center z-10 mt-1 shadow-sm shrink-0">
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#DBE2EF] shadow-sm flex-1 hover:bg-[#F9F7F7] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <img src="https://i.pravatar.cc/150?u=me" alt="Me" className="w-5 h-5 rounded-full" />
                        <span className="font-semibold text-[#112D4E]">You</span> added a note
                      </div>
                      <span className="text-xs text-gray-400">Today, 10:30 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Client is interested in the new summer collection. Requested a catalog to be sent via WhatsApp tomorrow morning.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Event */}
                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-green-500 border-4 border-[#F9FAFB] flex items-center justify-center z-10 mt-1 shadow-sm shrink-0">
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#DBE2EF] shadow-sm flex-1 hover:bg-[#F9F7F7] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FiMessageCircle className="text-green-500 w-5 h-5" />
                        <span className="font-semibold text-[#112D4E]">WhatsApp Message</span>
                      </div>
                      <span className="text-xs text-gray-400">Yesterday, 4:15 PM</span>
                    </div>
                    <div className="ml-7 bg-green-50 border border-green-100 rounded-r-xl rounded-bl-xl p-3 inline-block max-w-[80%]">
                      <p className="text-sm text-gray-800">Hi Ravi, thanks for sharing the quotation. I will review it with my partner and get back to you by Friday.</p>
                    </div>
                    <p className="ml-7 mt-2 text-xs font-medium text-[#3F72AF] cursor-pointer hover:underline">View full conversation</p>
                  </div>
                </div>

                {/* Call Log Event */}
                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-blue-500 border-4 border-[#F9FAFB] flex items-center justify-center z-10 mt-1 shadow-sm shrink-0">
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#DBE2EF] shadow-sm flex-1 hover:bg-[#F9F7F7] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FiPhoneCall className="text-blue-500 w-5 h-5" />
                        <span className="font-semibold text-[#112D4E]">Outbound Call</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-100 rounded text-gray-600 font-medium">4 mins 20 secs</span>
                      </div>
                      <span className="text-xs text-gray-400">12 Jan, 11:00 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7 italic">No notes added</p>
                  </div>
                </div>

                {/* Deal Event */}
                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#112D4E] border-4 border-[#F9FAFB] flex items-center justify-center z-10 mt-1 shadow-sm shrink-0">
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-[#DBE2EF] shadow-sm flex-1 hover:bg-[#F9F7F7] transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2 text-sm">
                        <FiBriefcase className="text-[#112D4E] w-5 h-5" />
                        <span className="font-semibold text-[#112D4E]">Deal Created</span>
                      </div>
                      <span className="text-xs text-gray-400">12 Jan, 10:45 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Deal <span className="font-medium text-[#3F72AF] cursor-pointer hover:underline">Wholesale Order Q1</span> created in stage <span className="font-medium text-gray-800">Lead</span> for ₹45,000.
                    </p>
                  </div>
                </div>

                {/* System Event */}
                <div className="relative flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-gray-400 border-4 border-[#F9FAFB] flex items-center justify-center z-10 mt-1 shadow-sm shrink-0">
                  </div>
                  <div className="p-2 flex-1">
                    <p className="text-sm text-gray-500 font-medium">Contact added via WhatsApp integration</p>
                    <p className="text-xs text-gray-400 mt-1">12 Jan, 10:30 AM</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailPage;
