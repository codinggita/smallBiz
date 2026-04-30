import React from 'react';
import { FiDownload } from 'react-icons/fi';

const BillingPlanSettings = () => {
  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Billing and Plan</h2>
          <p className="text-[#3F72AF] text-[14px]">Manage your subscription and invoices</p>
        </div>
      </div>

      {/* Current Plan Card */}
      <div className="w-full bg-white border-[1.5px] border-[#3F72AF] rounded-xl p-6 mb-10 shadow-sm flex flex-col md:flex-row gap-8">
        <div className="flex-1 border-b md:border-b-0 md:border-r border-[#DBE2EF] pb-6 md:pb-0 md:pr-6">
          <div className="text-[#112D4E] text-[22px] font-semibold mb-2">SmallBiz Pro</div>
          <div className="flex items-baseline mb-3">
            <span className="text-[#3F72AF] text-[32px] font-bold">₹1,999</span>
            <span className="text-[#112D4E] text-[16px] ml-1">/month</span>
          </div>
          <p className="text-[#3F72AF] text-[12px] mb-4">Billed monthly • Renews on May 15, 2026</p>
          <button className="text-[#3F72AF]/80 text-[13px] hover:underline hover:text-[#112D4E]">Cancel plan</button>
        </div>
        
        <div className="flex-1 flex flex-col justify-center space-y-4">
          <div>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-[#112D4E]">Contacts: <span className="font-medium">284 of 500</span></span>
              <span className="text-[#3F72AF]">56%</span>
            </div>
            <div className="w-full h-2 bg-[#DBE2EF] rounded-full overflow-hidden">
              <div className="h-full bg-[#3F72AF] rounded-full" style={{ width: '56%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-[#112D4E]">WhatsApp templates: <span className="font-medium">42 of 50</span></span>
              <span className="text-[#112D4E] font-medium">84%</span>
            </div>
            <div className="w-full h-2 bg-[#DBE2EF] rounded-full overflow-hidden">
              <div className="h-full bg-[#112D4E] rounded-full" style={{ width: '84%' }}></div>
            </div>
            <p className="text-[#112D4E] text-[11px] mt-1 font-medium">You are approaching your limit</p>
          </div>
          <div>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-[#112D4E]">Team members: <span className="font-medium">4 of 5</span></span>
              <span className="text-[#3F72AF]">80%</span>
            </div>
            <div className="w-full h-2 bg-[#DBE2EF] rounded-full overflow-hidden">
              <div className="h-full bg-[#3F72AF] rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Plans Comparison */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Plans</h3>
          <div className="flex items-center gap-2 bg-[#DBE2EF]/30 p-1 rounded-lg">
            <button className="px-3 py-1 rounded-md bg-white shadow-sm text-[#112D4E] text-[13px] font-medium">Monthly</button>
            <button className="px-3 py-1 rounded-md text-[#3F72AF] text-[13px]">Annual <span className="text-[#3F72AF] text-[10px] bg-[#DBE2EF] px-1.5 py-0.5 rounded ml-1">Save 20%</span></button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Starter Plan */}
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-xl p-6 flex flex-col">
            <div className="text-[#112D4E] text-[16px] font-semibold mb-2">Starter</div>
            <div className="text-[#3F72AF] text-[28px] font-bold mb-6">₹0<span className="text-[#112D4E] text-[14px] font-normal">/mo</span></div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Up to 50 contacts</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">1 team member</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#DBE2EF]">✕</span> <span className="text-[#3F72AF]">No WhatsApp integration</span></li>
            </ul>
            <button className="w-full py-2 border-[1px] border-[#112D4E] text-[#112D4E] rounded-lg text-[14px] font-medium hover:bg-[#F9F7F7]">
              Downgrade
            </button>
          </div>
          
          {/* Pro Plan (Current) */}
          <div className="bg-white border-[1.5px] border-[#3F72AF] rounded-xl p-6 flex flex-col relative shadow-md">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1.5px] bg-[#3F72AF] text-white text-[11px] font-medium px-3 py-0.5 rounded-b-lg tracking-wide uppercase">Most popular</div>
            <div className="text-[#112D4E] text-[16px] font-semibold mb-2 mt-2">Pro</div>
            <div className="text-[#3F72AF] text-[28px] font-bold mb-6">₹1,999<span className="text-[#112D4E] text-[14px] font-normal">/mo</span></div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Up to 500 contacts</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">5 team members</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Full WhatsApp integration</span></li>
            </ul>
            <button disabled className="w-full py-2 border-[1px] border-[#DBE2EF] bg-[#F9F7F7] text-[#3F72AF] rounded-lg text-[14px] font-medium cursor-not-allowed">
              Current plan
            </button>
          </div>
          
          {/* Business Plan */}
          <div className="bg-white border-[0.5px] border-[#112D4E] rounded-xl p-6 flex flex-col">
            <div className="text-[#112D4E] text-[16px] font-semibold mb-2">Business</div>
            <div className="text-[#3F72AF] text-[28px] font-bold mb-6">₹4,999<span className="text-[#112D4E] text-[14px] font-normal">/mo</span></div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Unlimited contacts</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Unlimited team members</span></li>
              <li className="flex items-start gap-2 text-[13px]"><span className="text-[#3F72AF]">✓</span> <span className="text-[#112D4E]">Custom onboarding</span></li>
            </ul>
            <button className="w-full py-2 bg-[#3F72AF] text-white rounded-lg text-[14px] font-medium hover:bg-[#112D4E] transition-colors">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      {/* Payment Method & History Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">Payment method</h3>
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-xl p-5 mb-4 shadow-sm flex items-center gap-4">
            <div className="w-12 h-8 bg-[#112D4E] rounded flex items-center justify-center text-white text-[10px] font-bold italic">VISA</div>
            <div className="flex-1">
              <div className="text-[#112D4E] text-[14px] font-medium">•••• •••• •••• 4242</div>
              <div className="text-[#3F72AF] text-[12px]">Expires 12/28</div>
            </div>
            <button className="text-[#3F72AF] text-[13px] hover:underline">Update</button>
          </div>
          <button className="px-4 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-[#F9F7F7]">
            Add payment method
          </button>
        </div>
        
        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className="text-[#112D4E] text-[14px] font-medium">Billing history</h3>
            <button className="text-[#3F72AF] text-[12px] hover:underline">Download all</button>
          </div>
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-[#DBE2EF]">
                  <td className="py-3 px-4 text-[#112D4E] text-[13px]">Apr 15, 2026</td>
                  <td className="py-3 px-4 text-[#3F72AF] text-[13px]">SmallBiz Pro</td>
                  <td className="py-3 px-4 text-[#112D4E] text-[13px] font-medium">₹1,999</td>
                  <td className="py-3 px-4"><span className="text-[#3F72AF] bg-[#DBE2EF]/50 px-2 py-0.5 rounded text-[11px] font-medium">Paid</span></td>
                  <td className="py-3 px-4 text-right"><button className="text-[#3F72AF] hover:text-[#112D4E]"><FiDownload /></button></td>
                </tr>
                <tr className="border-b border-[#DBE2EF]">
                  <td className="py-3 px-4 text-[#112D4E] text-[13px]">Mar 15, 2026</td>
                  <td className="py-3 px-4 text-[#3F72AF] text-[13px]">SmallBiz Pro</td>
                  <td className="py-3 px-4 text-[#112D4E] text-[13px] font-medium">₹1,999</td>
                  <td className="py-3 px-4"><span className="text-[#3F72AF] bg-[#DBE2EF]/50 px-2 py-0.5 rounded text-[11px] font-medium">Paid</span></td>
                  <td className="py-3 px-4 text-right"><button className="text-[#3F72AF] hover:text-[#112D4E]"><FiDownload /></button></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-[#112D4E] text-[13px]">Feb 15, 2026</td>
                  <td className="py-3 px-4 text-[#3F72AF] text-[13px]">SmallBiz Pro</td>
                  <td className="py-3 px-4 text-[#112D4E] text-[13px] font-medium">₹1,999</td>
                  <td className="py-3 px-4"><span className="text-[#3F72AF] bg-[#DBE2EF]/50 px-2 py-0.5 rounded text-[11px] font-medium">Paid</span></td>
                  <td className="py-3 px-4 text-right"><button className="text-[#3F72AF] hover:text-[#112D4E]"><FiDownload /></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPlanSettings;
