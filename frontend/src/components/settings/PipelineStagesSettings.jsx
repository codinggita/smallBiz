import React, { useState } from 'react';
import { FiMenu, FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

const PipelineStagesSettings = () => {
  const [showAddStage, setShowAddStage] = useState(false);

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Pipeline Stages</h2>
          <p className="text-[#3F72AF] text-[14px]">Customize the deal pipeline columns</p>
        </div>
        <button 
          onClick={() => setShowAddStage(true)}
          className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#112D4E] flex items-center gap-2 transition-colors"
        >
          <FiPlus /> Add stage
        </button>
      </div>

      {/* Stage List */}
      <div className="mb-8">
        <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 mb-2 flex items-center gap-4 hover:border-[#3F72AF] group transition-colors shadow-sm cursor-grab">
          <FiMenu className="text-[#DBE2EF] group-hover:text-[#3F72AF]" />
          <div className="flex-1 flex items-center gap-3">
            <span className="text-[#112D4E] text-[14px] font-medium">Lead</span>
            <span className="bg-[#DBE2EF] text-[#3F72AF] text-[11px] px-2 py-0.5 rounded-full font-medium">Open</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex gap-3 transition-opacity">
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiEdit2 size={15} /></button>
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiTrash2 size={15} /></button>
          </div>
        </div>

        <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 mb-2 flex items-center gap-4 hover:border-[#3F72AF] group transition-colors shadow-sm cursor-grab">
          <FiMenu className="text-[#DBE2EF] group-hover:text-[#3F72AF]" />
          <div className="flex-1 flex items-center gap-3">
            <span className="text-[#112D4E] text-[14px] font-medium">Discussion</span>
            <span className="bg-[#DBE2EF] text-[#3F72AF] text-[11px] px-2 py-0.5 rounded-full font-medium">Open</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex gap-3 transition-opacity">
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiEdit2 size={15} /></button>
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiTrash2 size={15} /></button>
          </div>
        </div>

        <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 mb-2 flex items-center gap-4 hover:border-[#3F72AF] group transition-colors shadow-sm cursor-grab">
          <FiMenu className="text-[#DBE2EF] group-hover:text-[#3F72AF]" />
          <div className="flex-1 flex items-center gap-3">
            <span className="text-[#112D4E] text-[14px] font-medium">Proposal Sent</span>
            <span className="bg-[#DBE2EF] text-[#3F72AF] text-[11px] px-2 py-0.5 rounded-full font-medium">Open</span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 flex gap-3 transition-opacity">
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiEdit2 size={15} /></button>
            <button className="text-[#3F72AF] hover:text-[#112D4E]"><FiTrash2 size={15} /></button>
          </div>
        </div>

        {/* Add Stage Inline Form */}
        {showAddStage && (
          <div className="bg-[#F9F7F7] border-[1px] border-[#3F72AF] rounded-lg p-4 mb-4 flex items-center gap-4">
            <input type="text" placeholder="Stage name" className="flex-1 h-9 px-3 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px] focus:outline-none focus:border-[#3F72AF]" autoFocus />
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="radio" name="stagetype" className="accent-[#3F72AF]" defaultChecked />
                <span className="text-[#112D4E] text-[13px]">Open</span>
              </label>
              <label className="flex items-center gap-1.5 opacity-50 cursor-not-allowed">
                <input type="radio" name="stagetype" disabled />
                <span className="text-[#112D4E] text-[13px]">Won</span>
              </label>
              <label className="flex items-center gap-1.5 opacity-50 cursor-not-allowed">
                <input type="radio" name="stagetype" disabled />
                <span className="text-[#112D4E] text-[13px]">Lost</span>
              </label>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-md text-[13px] font-medium hover:bg-[#DBE2EF]/30" onClick={() => setShowAddStage(false)}>Cancel</button>
              <button className="px-3 py-1.5 bg-[#3F72AF] text-white rounded-md text-[13px] font-medium hover:bg-[#112D4E]" onClick={() => setShowAddStage(false)}>Add</button>
            </div>
          </div>
        )}

        {/* Fixed Stages */}
        <div className="border-t-[0.5px] border-[#DBE2EF] my-4 pt-4 relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#DBE2EF]"></div>
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 mb-2 flex items-center gap-4 ml-2 opacity-80 cursor-not-allowed">
            <FiMenu className="text-[#DBE2EF]/50" />
            <div className="flex-1 flex items-center gap-3">
              <span className="text-[#112D4E] text-[14px] font-medium">Won</span>
              <span className="bg-[#3F72AF] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">Won</span>
            </div>
          </div>
          
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-3.5 flex items-center gap-4 ml-2 opacity-80 cursor-not-allowed">
            <FiMenu className="text-[#DBE2EF]/50" />
            <div className="flex-1 flex items-center gap-3">
              <span className="text-[#112D4E] text-[14px] font-medium">Lost</span>
              <span className="bg-[#112D4E] text-white text-[11px] px-2 py-0.5 rounded-full font-medium">Lost</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stage Settings Card */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-5">Global pipeline settings</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-[#112D4E] text-[13px] mb-2">Default stage for new deals</label>
            <select className="w-64 h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
              <option>Lead</option>
              <option>Discussion</option>
            </select>
          </div>
          
          <div className="pt-4 border-t border-[#DBE2EF]">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-[#112D4E] text-[13px] font-medium mb-1">Lost reason tracking</div>
                <div className="text-[#3F72AF] text-[12px]">Require selecting a reason when moving a deal to Lost.</div>
              </div>
              <div className="w-10 h-5 rounded-full bg-[#3F72AF] relative cursor-pointer mt-1">
                <div className="w-4 h-4 rounded-full bg-white absolute top-0.5 right-0.5"></div>
              </div>
            </div>
            <button className="text-[#3F72AF] text-[13px] font-medium hover:underline">Manage loss reasons</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineStagesSettings;
