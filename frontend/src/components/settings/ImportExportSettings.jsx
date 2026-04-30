import React from 'react';
import { FiDownload, FiUpload, FiUsers, FiBriefcase, FiBox } from 'react-icons/fi';

const ImportExportSettings = () => {
  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Import and Export</h2>
          <p className="text-[#3F72AF] text-[14px]">Your data belongs to you. Move it in or out anytime.</p>
        </div>
      </div>

      {/* Import Section */}
      <div className="mb-12">
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Import data</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-5 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#DBE2EF]/50 rounded-full flex items-center justify-center mx-auto mb-3 text-[#3F72AF]">
              <FiUsers size={24} />
            </div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Contacts</h4>
            <p className="text-[#3F72AF] text-[12px] mb-4 h-8">Import customers, suppliers, and their details.</p>
            <div className="flex flex-col gap-2">
              <button className="text-[#3F72AF] text-[12px] hover:underline flex items-center justify-center gap-1">
                <FiDownload size={12} /> Download template
              </button>
              <button className="w-full py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-[13px] font-medium hover:bg-[#F9F7F7]">
                Import CSV
              </button>
            </div>
          </div>

          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-5 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#DBE2EF]/50 rounded-full flex items-center justify-center mx-auto mb-3 text-[#3F72AF]">
              <FiBriefcase size={24} />
            </div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Deals</h4>
            <p className="text-[#3F72AF] text-[12px] mb-4 h-8">Import your sales pipeline and historical deals.</p>
            <div className="flex flex-col gap-2">
              <button className="text-[#3F72AF] text-[12px] hover:underline flex items-center justify-center gap-1">
                <FiDownload size={12} /> Download template
              </button>
              <button className="w-full py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-[13px] font-medium hover:bg-[#F9F7F7]">
                Import CSV
              </button>
            </div>
          </div>

          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-5 shadow-sm text-center">
            <div className="w-12 h-12 bg-[#DBE2EF]/50 rounded-full flex items-center justify-center mx-auto mb-3 text-[#3F72AF]">
              <FiBox size={24} />
            </div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Products</h4>
            <p className="text-[#3F72AF] text-[12px] mb-4 h-8">Import your product catalog and pricing.</p>
            <div className="flex flex-col gap-2">
              <button className="text-[#3F72AF] text-[12px] hover:underline flex items-center justify-center gap-1">
                <FiDownload size={12} /> Download template
              </button>
              <button className="w-full py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-[13px] font-medium hover:bg-[#F9F7F7]">
                Import CSV
              </button>
            </div>
          </div>
          
        </div>

        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm">
          <div className="p-4 border-b border-[#DBE2EF] bg-[#F9F7F7]">
            <h4 className="text-[#112D4E] text-[14px] font-medium">Import history</h4>
          </div>
          <table className="w-full text-left">
            <thead className="border-b border-[#DBE2EF]">
              <tr>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium">Date</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium">Type</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium">File</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium text-center">Imported</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium text-center">Skipped</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium">Status</th>
                <th className="py-2 px-4 text-[#3F72AF] text-[12px] font-medium text-right">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#DBE2EF] text-[13px]">
                <td className="py-3 px-4 text-[#112D4E]">Jan 15, 2026</td>
                <td className="py-3 px-4 text-[#112D4E]">Contacts</td>
                <td className="py-3 px-4 text-[#3F72AF]">customers_2025.csv</td>
                <td className="py-3 px-4 text-center text-[#112D4E]">245</td>
                <td className="py-3 px-4 text-center text-[#112D4E]">12</td>
                <td className="py-3 px-4"><span className="bg-[#3F72AF]/10 text-[#3F72AF] px-2 py-0.5 rounded text-[11px] font-medium">Complete</span></td>
                <td className="py-3 px-4 text-right"><button className="text-[#3F72AF] hover:underline text-[12px]">View</button></td>
              </tr>
              <tr className="text-[13px]">
                <td className="py-3 px-4 text-[#112D4E]">Jan 10, 2026</td>
                <td className="py-3 px-4 text-[#112D4E]">Products</td>
                <td className="py-3 px-4 text-[#3F72AF]">catalog_v2.csv</td>
                <td className="py-3 px-4 text-center text-[#112D4E]">85</td>
                <td className="py-3 px-4 text-center text-[#112D4E]">0</td>
                <td className="py-3 px-4"><span className="bg-[#3F72AF]/10 text-[#3F72AF] px-2 py-0.5 rounded text-[11px] font-medium">Complete</span></td>
                <td className="py-3 px-4 text-right"><button className="text-[#3F72AF] hover:underline text-[12px]">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Export Section */}
      <div>
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Export data</h3>
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Select data to export</h4>
              <div className="space-y-2">
                {['Contacts', 'Deals', 'Invoices', 'WhatsApp conversation history', 'Activity log', 'Custom fields data'].map((item, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="accent-[#3F72AF] w-4 h-4" />
                    <span className="text-[#112D4E] text-[13px]">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Date range</h4>
                <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
                  <option>All time</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                  <option>Custom range...</option>
                </select>
              </div>
              <div>
                <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Format</h4>
                <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
                  <option>CSV (One file per entity)</option>
                  <option>Excel (.xlsx workbook)</option>
                  <option>JSON (For developers)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-[#DBE2EF] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#3F72AF] text-[12px] italic">
              Your export includes all data visible to your account.<br className="hidden sm:block"/> Exported files are available for 24 hours.
            </p>
            <button className="bg-[#3F72AF] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#112D4E] transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              <FiUpload className="rotate-180" /> Export now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportExportSettings;
