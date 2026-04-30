import React from 'react';
import { FiCheck } from 'react-icons/fi';

const InvoiceTemplatesSettings = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Invoice Templates</h2>
          <p className="text-[#3F72AF] text-[14px]">Control the visual design and content of your invoices</p>
        </div>
        <button className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium">
          Save template settings
        </button>
      </div>

      {/* Template Selector */}
      <div className="mb-8 flex gap-6">
        <div className="cursor-pointer">
          <div className="w-40 h-52 bg-white border-[2px] border-[#3F72AF] rounded-lg p-2 flex flex-col relative shadow-md">
            <div className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-[#3F72AF] rounded-full flex items-center justify-center text-white"><FiCheck size={12}/></div>
            <div className="flex justify-between mb-2 border-b border-[#DBE2EF] pb-1">
              <div className="w-8 h-3 bg-[#DBE2EF] rounded"></div>
              <div className="w-12 h-4 bg-[#DBE2EF] rounded"></div>
            </div>
            <div className="space-y-1 mb-2">
              <div className="w-16 h-1.5 bg-[#DBE2EF] rounded"></div>
              <div className="w-20 h-1.5 bg-[#DBE2EF] rounded"></div>
            </div>
            <div className="flex-1 bg-[#F9F7F7] rounded mt-2 border border-[#DBE2EF] p-1">
              <div className="w-full h-2 bg-[#DBE2EF] mb-1"></div>
              <div className="w-full h-1.5 bg-[#DBE2EF]/50 mb-1"></div>
              <div className="w-full h-1.5 bg-[#DBE2EF]/50 mb-1"></div>
            </div>
            <div className="flex justify-end mt-2">
              <div className="w-12 h-3 bg-[#112D4E] rounded"></div>
            </div>
          </div>
          <div className="text-center mt-3">
            <div className="text-[#112D4E] text-[13px] font-medium">Modern Classic</div>
            <button className="text-[#3F72AF] text-[12px] hover:underline">Preview full size</button>
          </div>
        </div>

        <div className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-40 h-52 bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-2 flex flex-col hover:border-[#3F72AF]">
            <div className="flex justify-center mb-2 pb-1">
              <div className="w-12 h-4 bg-[#DBE2EF] rounded"></div>
            </div>
            <div className="flex justify-between mb-2 pb-1 border-b border-[#DBE2EF]">
              <div className="w-16 h-1.5 bg-[#DBE2EF] rounded"></div>
              <div className="w-12 h-3 bg-[#DBE2EF] rounded"></div>
            </div>
            <div className="flex-1 mt-2 flex flex-col gap-1">
              <div className="flex gap-1"><div className="w-1/2 h-1.5 bg-[#DBE2EF]"></div><div className="w-1/2 h-1.5 bg-[#DBE2EF]"></div></div>
              <div className="flex gap-1"><div className="w-1/2 h-1.5 bg-[#DBE2EF]/50"></div><div className="w-1/2 h-1.5 bg-[#DBE2EF]/50"></div></div>
            </div>
          </div>
          <div className="text-center mt-3">
            <div className="text-[#112D4E] text-[13px] font-medium">Centered Elegant</div>
            <button className="text-[#3F72AF] text-[12px] hover:underline">Preview full size</button>
          </div>
        </div>

        <div className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
          <div className="w-40 h-52 bg-white border-[0.5px] border-[#DBE2EF] rounded-lg p-2 flex flex-col hover:border-[#3F72AF]">
            <div className="flex justify-between items-center mb-4 bg-[#112D4E] text-white p-2 -mx-2 -mt-2 rounded-t-lg">
              <div className="w-8 h-3 bg-white/30 rounded"></div>
              <div className="w-12 h-3 bg-white/30 rounded"></div>
            </div>
            <div className="flex-1 bg-[#F9F7F7] mt-2"></div>
          </div>
          <div className="text-center mt-3">
            <div className="text-[#112D4E] text-[13px] font-medium">Bold Header</div>
            <button className="text-[#3F72AF] text-[12px] hover:underline">Preview full size</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customization Panel */}
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] shadow-sm overflow-hidden">
          <div className="p-5 border-b border-[#DBE2EF] bg-[#F9F7F7]">
            <h3 className="text-[#112D4E] text-[14px] font-medium">Template settings</h3>
          </div>
          
          <div className="p-6 space-y-8">
            {/* Branding */}
            <div>
              <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Branding</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#3F72AF] text-[12px] mb-1.5">Primary color</label>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded border border-[#DBE2EF] bg-[#3F72AF]"></div>
                    <input type="text" defaultValue="#3F72AF" className="w-24 h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px]" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#3F72AF] text-[12px] mb-1.5">Typography</label>
                  <select className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] bg-white font-sans">
                    <option>Inter (Clean sans-serif)</option>
                    <option>Merriweather (Professional serif)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Default content */}
            <div className="space-y-4">
              <h4 className="text-[#112D4E] text-[13px] font-medium">Default content</h4>
              <div>
                <label className="block text-[#3F72AF] text-[12px] mb-1.5">Default notes</label>
                <textarea rows="2" defaultValue="Thank you for your business! Please let us know if you have any questions." className="w-full p-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] resize-none" />
              </div>
              <div>
                <label className="block text-[#3F72AF] text-[12px] mb-1.5">Payment terms</label>
                <textarea rows="2" defaultValue="Payment is due within 15 days of invoice date." className="w-full p-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] resize-none" />
              </div>
            </div>

            {/* Number format */}
            <div>
              <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Number format</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#3F72AF] text-[12px] mb-1.5">Prefix</label>
                  <input type="text" defaultValue="INV-" className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px]" />
                </div>
                <div>
                  <label className="block text-[#3F72AF] text-[12px] mb-1.5">Starting number</label>
                  <input type="number" defaultValue="101" className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px]" />
                  <div className="text-[#3F72AF] text-[10px] mt-1">Next: INV-0101</div>
                </div>
                <div>
                  <label className="block text-[#3F72AF] text-[12px] mb-1.5">Currency</label>
                  <select className="w-full h-8 px-2 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] bg-white">
                    <option>₹ (INR) Before</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Fields visibility */}
            <div>
              <h4 className="text-[#112D4E] text-[13px] font-medium mb-3">Fields visibility</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#112D4E] text-[13px]">Customer GST number</div>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative cursor-pointer"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#112D4E] text-[13px]">HSN/SAC codes</div>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative cursor-pointer"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#112D4E] text-[13px]">Shipping address</div>
                  </div>
                  <div className="w-8 h-4 rounded-full bg-[#DBE2EF] relative cursor-pointer"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Live Preview Pane */}
        <div className="bg-[#DBE2EF]/30 rounded-xl p-8 flex items-center justify-center border-[0.5px] border-[#DBE2EF]">
          <div className="bg-white w-full max-w-md shadow-lg aspect-[1/1.4] p-8 text-[10px] flex flex-col relative text-[#112D4E]">
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="w-10 h-10 bg-[#112D4E] text-white flex items-center justify-center font-bold text-lg rounded mb-2">RT</div>
                <div className="font-bold text-[12px] text-[#3F72AF]">Rajan Textiles</div>
                <div>Mumbai, Maharashtra</div>
                <div>GST: 27AADCR2314E1Z3</div>
              </div>
              <div className="text-right">
                <div className="text-[20px] font-bold text-[#3F72AF] mb-2">INVOICE</div>
                <div className="flex gap-2 justify-end mb-1"><span className="text-[#3F72AF]">No:</span> <span className="font-medium">INV-0101</span></div>
                <div className="flex gap-2 justify-end mb-1"><span className="text-[#3F72AF]">Date:</span> <span>30 Apr 2026</span></div>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-[#3F72AF] font-bold mb-1 border-b border-[#3F72AF] inline-block">Billed To:</div>
              <div className="font-bold text-[11px]">Acme Corp</div>
              <div>123 Business Rd, New Delhi</div>
              <div>GST: 07AABCB1234D1Z5</div>
            </div>

            <table className="w-full mb-6">
              <thead className="border-b-2 border-[#3F72AF] text-[#3F72AF] text-left">
                <tr>
                  <th className="py-1">Item</th>
                  <th className="py-1">HSN</th>
                  <th className="py-1 text-right">Qty</th>
                  <th className="py-1 text-right">Rate</th>
                  <th className="py-1 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="border-b border-[#DBE2EF]">
                <tr>
                  <td className="py-2">Premium Cotton Fabric</td>
                  <td className="py-2">5208</td>
                  <td className="py-2 text-right">100 m</td>
                  <td className="py-2 text-right">₹150</td>
                  <td className="py-2 text-right">₹15,000</td>
                </tr>
                <tr>
                  <td className="py-2">Silk Thread Pack</td>
                  <td className="py-2">5004</td>
                  <td className="py-2 text-right">5</td>
                  <td className="py-2 text-right">₹400</td>
                  <td className="py-2 text-right">₹2,000</td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-end mb-8">
              <div className="w-1/2">
                <div className="flex justify-between py-1 border-b border-[#DBE2EF]">
                  <span className="text-[#3F72AF]">Subtotal</span>
                  <span>₹17,000</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#DBE2EF]">
                  <span className="text-[#3F72AF]">IGST (5%)</span>
                  <span>₹850</span>
                </div>
                <div className="flex justify-between py-2 text-[12px] font-bold">
                  <span className="text-[#3F72AF]">Total</span>
                  <span>₹17,850</span>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-[#DBE2EF]">
              <div className="text-[#3F72AF] font-bold mb-1">Notes:</div>
              <div className="mb-3">Thank you for your business! Please let us know if you have any questions.</div>
              <div className="text-[#3F72AF] font-bold mb-1">Terms:</div>
              <div>Payment is due within 15 days of invoice date.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTemplatesSettings;
