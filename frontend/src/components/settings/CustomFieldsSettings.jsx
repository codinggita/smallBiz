import React, { useState } from 'react';
import { FiMenu, FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi';

const CustomFieldsSettings = () => {
  const [activeTab, setActiveTab] = useState('contacts');
  const [showAddField, setShowAddField] = useState(false);

  const tabs = [
    { id: 'contacts', name: 'Contacts' },
    { id: 'deals', name: 'Deals' },
    { id: 'invoices', name: 'Invoices' },
  ];

  const contactFields = [
    { id: 1, name: 'Customer Type', type: 'Dropdown', required: true, usage: 85 },
    { id: 2, name: 'Birthday', type: 'Date', required: false, usage: 32 },
    { id: 3, name: 'Tax ID', type: 'Text', required: false, usage: 12 },
  ];

  return (
    <div className="max-w-4xl relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Custom Fields</h2>
          <p className="text-[#3F72AF] text-[14px]">Add business-specific data fields</p>
        </div>
        <button 
          onClick={() => setShowAddField(true)}
          className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#112D4E] flex items-center gap-2 transition-colors"
        >
          <FiPlus /> Add custom field
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#DBE2EF] mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-2 text-[14px] font-medium transition-colors relative ${
              activeTab === tab.id ? 'text-[#112D4E]' : 'text-[#3F72AF] hover:text-[#112D4E]'
            }`}
          >
            {tab.name}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3F72AF] rounded-t-sm"></div>
            )}
          </button>
        ))}
      </div>

      {/* Fields List */}
      <div className="mb-8 min-h-[300px]">
        {contactFields.map((field) => (
          <div key={field.id} className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 mb-2 flex items-center gap-4 hover:border-[#3F72AF] group transition-colors shadow-sm cursor-grab">
            <FiMenu className="text-[#DBE2EF] group-hover:text-[#3F72AF]" />
            <div className="flex-1 flex items-center gap-3">
              <span className="text-[#112D4E] text-[14px] font-medium">{field.name} {field.required && <span className="text-[#3F72AF]">*</span>}</span>
              <span className="bg-[#DBE2EF] text-[#112D4E] text-[11px] px-2 py-0.5 rounded-full">{field.type}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 flex gap-3 transition-opacity">
              <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiEdit2 size={15} /></button>
              <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiTrash2 size={15} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Stats */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-5 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">Field usage</h3>
        <div className="space-y-4">
          {contactFields.map((field) => (
            <div key={`stat-${field.id}`}>
              <div className="flex justify-between text-[12px] mb-1">
                <span className="text-[#112D4E]">{field.name}</span>
                <span className="text-[#3F72AF]">{field.usage}% filled</span>
              </div>
              <div className="w-full h-1.5 bg-[#DBE2EF] rounded-full overflow-hidden">
                <div className="h-full bg-[#3F72AF] rounded-full" style={{ width: `${field.usage}%` }}></div>
              </div>
              {field.usage < 20 && (
                <p className="text-[#3F72AF] text-[11px] italic mt-1">Only {field.usage}% of contacts have this field filled. Consider making it required or removing it.</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Field Panel (Slide Over) */}
      {showAddField && (
        <>
          <div className="fixed inset-0 bg-[#112D4E]/20 z-40" onClick={() => setShowAddField(false)}></div>
          <div className="fixed top-0 right-0 bottom-0 w-[360px] bg-white shadow-2xl z-50 flex flex-col border-l border-[#DBE2EF] animate-slide-in">
            <div className="px-6 py-5 border-b border-[#DBE2EF] flex justify-between items-center bg-[#F9F7F7]">
              <h3 className="text-[#112D4E] text-[16px] font-medium">New custom field</h3>
              <button onClick={() => setShowAddField(false)} className="text-[#3F72AF] hover:text-[#112D4E]">
                <FiX size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              <div>
                <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Field label</label>
                <input type="text" placeholder="e.g., GST Number" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
              </div>
              
              <div>
                <label className="block text-[#3F72AF] text-[12px] font-medium mb-2">Field type</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border-[1.5px] border-[#3F72AF] bg-[#DBE2EF]/30 rounded-lg p-2.5 cursor-pointer">
                    <div className="text-[#112D4E] text-[13px] font-medium">Text</div>
                  </div>
                  <div className="border-[0.5px] border-[#DBE2EF] rounded-lg p-2.5 cursor-pointer hover:bg-[#F9F7F7]">
                    <div className="text-[#112D4E] text-[13px] font-medium">Number</div>
                  </div>
                  <div className="border-[0.5px] border-[#DBE2EF] rounded-lg p-2.5 cursor-pointer hover:bg-[#F9F7F7]">
                    <div className="text-[#112D4E] text-[13px] font-medium">Date</div>
                  </div>
                  <div className="border-[0.5px] border-[#DBE2EF] rounded-lg p-2.5 cursor-pointer hover:bg-[#F9F7F7]">
                    <div className="text-[#112D4E] text-[13px] font-medium">Dropdown</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Help text (optional)</label>
                <input type="text" placeholder="e.g., 15-digit GSTIN format" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
              </div>

              <div className="pt-2 space-y-4 border-t border-[#DBE2EF]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#112D4E] text-[13px] font-medium">Required field</div>
                    <div className="text-[#3F72AF] text-[11px]">Must be filled to save</div>
                  </div>
                  <div className="w-10 h-5 rounded-full bg-[#DBE2EF] relative cursor-pointer"><div className="w-4 h-4 rounded-full bg-white absolute top-0.5 left-0.5"></div></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#112D4E] text-[13px] font-medium">Show in list view</div>
                    <div className="text-[#3F72AF] text-[11px]">Appears as a column</div>
                  </div>
                  <div className="w-10 h-5 rounded-full bg-[#3F72AF] relative cursor-pointer"><div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5"></div></div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#DBE2EF] bg-[#F9F7F7]">
              <button className="w-full py-2.5 bg-[#3F72AF] text-white rounded-lg text-[14px] font-medium hover:bg-[#112D4E] transition-colors">
                Save field
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomFieldsSettings;
