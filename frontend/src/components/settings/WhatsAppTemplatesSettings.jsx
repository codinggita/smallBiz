import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiSmartphone, FiPlus } from 'react-icons/fi';

const WhatsAppTemplatesSettings = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showEditor, setShowEditor] = useState(false);

  const tabs = ['All', 'Quick replies', 'Notifications', 'Broadcasts', 'Approved'];

  const templates = [
    {
      id: 1, name: 'Welcome Message', category: 'Quick replies', status: 'Approved',
      body: 'Hi [Name], welcome to Rajan Textiles! We received your inquiry about [Product]. How can we help you today?',
      usage: 142
    },
    {
      id: 2, name: 'Invoice Reminder', category: 'Notifications', status: 'Approved',
      body: 'Hello [Name], a gentle reminder that invoice [Invoice No] for ₹[Amount] is due on [Due Date]. Thank you!',
      usage: 85
    },
    {
      id: 3, name: 'Diwali Offer', category: 'Broadcasts', status: 'Pending',
      body: 'Happy Diwali [Name]! 🎉 Get 20% off on all premium silk fabrics this week. Show this message at store.',
      usage: 0
    }
  ];

  const renderBodyWithVariables = (text) => {
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return <span key={i} className="inline-block bg-[#DBE2EF] text-[#112D4E] px-1.5 py-0.5 rounded text-[11px] font-medium mx-0.5">{part.slice(1, -1)}</span>;
      }
      return part;
    });
  };

  return (
    <div className="max-w-5xl relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">WhatsApp Templates</h2>
          <p className="text-[#3F72AF] text-[14px]">Manage messages used for replies, alerts, and broadcasts</p>
        </div>
        <button 
          onClick={() => setShowEditor(true)}
          className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#112D4E] flex items-center gap-2 transition-colors"
        >
          <FiPlus /> New template
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#DBE2EF] mb-6 overflow-x-auto pb-1 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`pb-2 text-[14px] font-medium transition-colors relative whitespace-nowrap ${
              activeTab === tab.toLowerCase() ? 'text-[#112D4E]' : 'text-[#3F72AF] hover:text-[#112D4E]'
            }`}
          >
            {tab}
            {activeTab === tab.toLowerCase() && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3F72AF] rounded-t-sm"></div>
            )}
          </button>
        ))}
      </div>

      {/* Templates List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map(tpl => (
          <div key={tpl.id} className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-5 shadow-sm group hover:border-[#3F72AF] transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-[#112D4E] text-[15px] font-medium mb-1">{tpl.name}</h3>
                <div className="flex gap-2">
                  <span className="bg-[#DBE2EF]/50 text-[#112D4E] text-[11px] px-2 py-0.5 rounded font-medium">{tpl.category}</span>
                  <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
                    tpl.status === 'Approved' ? 'bg-[#3F72AF]/10 text-[#3F72AF]' : 'bg-[#DBE2EF] text-[#112D4E]'
                  }`}>
                    {tpl.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[#3F72AF] text-[12px] mb-2">Used {tpl.usage} times</div>
                <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiEdit2 size={16} /></button>
                  <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiTrash2 size={16} /></button>
                </div>
              </div>
            </div>
            <div className="bg-[#F9F7F7] p-3 rounded-lg border-[0.5px] border-[#DBE2EF] text-[#3F72AF] text-[13px] leading-relaxed">
              {renderBodyWithVariables(tpl.body)}
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-[#112D4E]/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-2xl animate-fade-in">
            <div className="px-6 py-4 border-b border-[#DBE2EF] flex justify-between items-center bg-[#F9F7F7]">
              <h3 className="text-[#112D4E] text-[16px] font-medium">Edit template</h3>
              <button onClick={() => setShowEditor(false)} className="text-[#3F72AF] hover:text-[#112D4E] text-[24px]">&times;</button>
            </div>
            
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
              {/* Form Area */}
              <div className="flex-1 p-6 overflow-y-auto border-r border-[#DBE2EF]">
                <div className="space-y-5">
                  <div>
                    <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Template name</label>
                    <input type="text" defaultValue="New Template" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
                  </div>
                  
                  <div>
                    <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Category</label>
                    <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
                      <option>Quick replies</option>
                      <option>Notifications</option>
                      <option>Broadcasts</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-1.5">
                      <label className="block text-[#3F72AF] text-[12px] font-medium">Message body</label>
                    </div>
                    <div className="bg-[#F9F7F7] border-[0.5px] border-b-0 border-[#DBE2EF] rounded-t-lg p-2 flex flex-wrap gap-2">
                      <button className="bg-white border-[0.5px] border-[#DBE2EF] text-[#112D4E] text-[11px] px-2 py-1 rounded shadow-sm hover:border-[#3F72AF]">+ Name</button>
                      <button className="bg-white border-[0.5px] border-[#DBE2EF] text-[#112D4E] text-[11px] px-2 py-1 rounded shadow-sm hover:border-[#3F72AF]">+ Amount</button>
                      <button className="bg-white border-[0.5px] border-[#DBE2EF] text-[#112D4E] text-[11px] px-2 py-1 rounded shadow-sm hover:border-[#3F72AF]">+ Date</button>
                      <button className="bg-white border-[0.5px] border-[#DBE2EF] text-[#112D4E] text-[11px] px-2 py-1 rounded shadow-sm hover:border-[#3F72AF]">+ Custom Field</button>
                    </div>
                    <textarea 
                      rows="6" 
                      defaultValue="Hi {{1}}, this is a new message."
                      className="w-full p-3 border-[0.5px] border-[#DBE2EF] rounded-b-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#DBE2EF]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[#112D4E] text-[14px] font-medium">Submit for WhatsApp approval</div>
                      <div className="w-10 h-5 rounded-full bg-[#3F72AF] relative cursor-pointer">
                        <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5"></div>
                      </div>
                    </div>
                    <p className="text-[#3F72AF] text-[12px]">Meta must approve templates used for broadcasts or automated notifications. Approval typically takes 24–48 hours.</p>
                  </div>
                </div>
              </div>

              {/* Preview Area */}
              <div className="w-[340px] bg-[#F9F7F7] p-6 flex flex-col items-center justify-center border-t md:border-t-0 border-[#DBE2EF]">
                <div className="text-[#112D4E] text-[13px] font-medium mb-4 flex items-center gap-2"><FiSmartphone /> Live Preview</div>
                <div className="w-[280px] h-[500px] border-[8px] border-[#112D4E] rounded-[36px] bg-[#EFEAE2] relative shadow-lg overflow-hidden flex flex-col">
                  <div className="bg-[#075E54] text-white p-3 flex items-center gap-3 shadow-md z-10">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">RT</div>
                    <div>
                      <div className="text-[13px] font-medium">Rajan Textiles</div>
                      <div className="text-[10px] text-white/80">Business Account</div>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <div className="bg-white rounded-lg p-2.5 text-[13px] text-[#112D4E] shadow-sm relative w-fit max-w-[90%] inline-block">
                      Hi <span className="text-[#3F72AF] font-medium">Ravi</span>, this is a new message.
                      <div className="text-[9px] text-right text-gray-400 mt-1">12:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#DBE2EF] bg-[#F9F7F7] flex justify-end gap-3">
              <button onClick={() => setShowEditor(false)} className="px-5 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-white">Cancel</button>
              <button onClick={() => setShowEditor(false)} className="px-5 py-2 bg-[#3F72AF] text-white rounded-lg text-sm font-medium hover:bg-[#112D4E]">Save & Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppTemplatesSettings;
