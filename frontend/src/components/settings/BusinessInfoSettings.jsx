import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const BusinessInfoSettings = () => {
  return (
    <div className="max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Business Info</h2>
          <p className="text-[#3F72AF] text-[14px]">Manage your company details</p>
        </div>
        <button className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium">
          Save changes
        </button>
      </div>

      {/* Business Logo */}
      <div className="mb-8">
        <label className="block text-[#3F72AF] text-[12px] font-medium mb-3">Business logo</label>
        <div className="flex gap-6 items-start">
          <div className="w-48 h-32 border-2 border-dashed border-[#DBE2EF] rounded-[10px] bg-[#F9F7F7] flex flex-col items-center justify-center cursor-pointer hover:bg-[#DBE2EF]/20 transition-colors">
            <FiUploadCloud className="text-[#3F72AF] text-2xl mb-2" />
            <span className="text-[#112D4E] text-[14px] font-medium mb-1">Upload your logo</span>
            <span className="text-[#3F72AF] text-[12px] text-center px-4">PNG or JPG, max 2MB, recommended 400x400px</span>
          </div>
          <div className="flex flex-col">
             {/* Mocked uploaded state */}
             <div className="flex items-end gap-4 mb-3">
               <div className="w-32 h-32 bg-white border-[0.5px] border-[#DBE2EF] rounded-lg shadow-sm flex items-center justify-center p-2">
                 <div className="bg-[#112D4E] text-white w-full h-full flex items-center justify-center font-bold text-2xl rounded">RT</div>
               </div>
               <div className="w-16 h-16 bg-white border-[0.5px] border-[#DBE2EF] rounded-lg shadow-sm flex items-center justify-center p-1">
                 <div className="bg-[#112D4E] text-white w-full h-full flex items-center justify-center font-bold text-lg rounded">RT</div>
               </div>
               <div className="w-8 h-8 bg-white border-[0.5px] border-[#DBE2EF] rounded flex items-center justify-center p-0.5">
                 <div className="bg-[#112D4E] text-white w-full h-full flex items-center justify-center font-bold text-[10px] rounded">RT</div>
               </div>
             </div>
             <div className="flex gap-4">
                <button className="text-[#3F72AF] text-[13px] hover:underline">Replace logo</button>
                <button className="text-[#3F72AF]/70 text-[12px] hover:underline">Remove logo</button>
             </div>
          </div>
        </div>
      </div>

      {/* Business Profile Form */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <div className="col-span-2">
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Business name</label>
          <input type="text" defaultValue="Rajan Textiles" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Business type</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>Retail</option>
            <option>Manufacturing</option>
          </select>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Business size</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>6–20 people</option>
          </select>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Industry</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>Textiles & Apparel</option>
          </select>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Year established</label>
          <input type="number" defaultValue="2005" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div className="col-span-2">
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Website URL</label>
          <input type="url" defaultValue="https://rajantextiles.com" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div className="col-span-2">
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Business description</label>
          <textarea rows="3" defaultValue="Wholesale and retail supplier of premium cotton and silk fabrics." className="w-full p-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] resize-none" />
          <div className="text-right text-[#3F72AF] text-[11px] mt-1">65 / 200</div>
        </div>
      </div>

      {/* Tax and Compliance */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 mb-8 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">Tax and compliance</h3>
        <div className="grid grid-cols-2 gap-x-6 gap-y-5">
          <div className="col-span-2 flex gap-3">
            <div className="flex-1">
              <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">GST Number</label>
              <input type="text" defaultValue="27AADCR2314E1Z3" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] uppercase" />
            </div>
            <div className="flex items-end">
              <button className="h-10 px-4 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-[#F9F7F7]">
                Verify GSTIN
              </button>
            </div>
          </div>
          <div>
            <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">PAN Number</label>
            <input type="text" defaultValue="AADCR2314E" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] uppercase" />
          </div>
          <div>
            <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">MSME Registration Number (optional)</label>
            <input type="text" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 mb-8 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">Business hours</h3>
        <div className="space-y-4">
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => {
            const isOpen = i < 6; // Closed on Sunday
            return (
              <div key={day} className={`flex items-center gap-4 ${!isOpen && 'opacity-50'}`}>
                <div className="w-24 text-[#112D4E] text-[13px]">{day}</div>
                <div className={`w-10 h-5 rounded-full relative cursor-pointer ${isOpen ? 'bg-[#3F72AF]' : 'bg-[#DBE2EF]'}`}>
                  <div className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-all ${isOpen ? 'left-5' : 'left-0.5'}`} />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <input type="time" disabled={!isOpen} defaultValue="09:00" className="h-9 px-2 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px]" />
                  <span className="text-[#3F72AF] text-[13px]">to</span>
                  <input type="time" disabled={!isOpen} defaultValue="18:00" className="h-9 px-2 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px]" />
                </div>
              </div>
            );
          })}
        </div>
        <button className="text-[#3F72AF] text-[12px] font-medium mt-4 hover:underline">Apply to all weekdays</button>
      </div>

    </div>
  );
};

export default BusinessInfoSettings;
