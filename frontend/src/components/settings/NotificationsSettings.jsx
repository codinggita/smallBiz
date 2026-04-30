import React from 'react';
import { FiBell, FiMail, FiMessageSquare } from 'react-icons/fi';

const NotificationsSettings = () => {
  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Notifications</h2>
          <p className="text-[#3F72AF] text-[14px]">Control when and how you receive alerts</p>
        </div>
        <button className="bg-[#DBE2EF] text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
          Save changes
        </button>
      </div>

      {/* Notification Channels */}
      <div className="mb-8">
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">How you receive notifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-4 flex gap-3 shadow-sm">
            <FiBell className="text-[#3F72AF] text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="text-[#112D4E] text-[15px] font-medium">In-app</div>
                <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative opacity-50 cursor-not-allowed">
                  <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <p className="text-[#3F72AF] text-[12px] mb-2">Shown as alerts inside the CRM.</p>
              <p className="text-[#112D4E] text-[11px] italic">Cannot be disabled.</p>
            </div>
          </div>
          
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-4 flex gap-3 shadow-sm">
            <FiMail className="text-[#3F72AF] text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="text-[#112D4E] text-[15px] font-medium">Email</div>
                <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <p className="text-[#3F72AF] text-[12px] mb-2">Sent to your registered email.</p>
              <div className="text-[#112D4E] text-[12px] flex justify-between">
                <span className="truncate max-w-[120px]">ravi@rajantex...</span>
                <button className="text-[#3F72AF] hover:underline">Edit</button>
              </div>
            </div>
          </div>
          
          <div className="bg-white border-[0.5px] border-[#DBE2EF] rounded-[10px] p-4 flex gap-3 shadow-sm">
            <FiMessageSquare className="text-[#3F72AF] text-2xl mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <div className="text-[#112D4E] text-[15px] font-medium">WhatsApp</div>
                <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative cursor-pointer">
                  <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div>
                </div>
              </div>
              <p className="text-[#3F72AF] text-[12px] mb-2">Sent to your WhatsApp number.</p>
              <div className="text-[#112D4E] text-[12px] flex justify-between">
                <span>+91 987654...</span>
                <button className="text-[#3F72AF] hover:underline">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Notification events</h3>
          <div className="flex gap-4">
            <button className="text-[#3F72AF] text-[12px] hover:underline">Turn all on</button>
            <button className="text-[#3F72AF] text-[12px] hover:underline">Turn all off</button>
            <button className="text-[#112D4E] text-[12px] hover:underline">Reset to defaults</button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#F9F7F7] border-b border-[#DBE2EF]">
              <tr>
                <th className="py-3 px-6 text-[#112D4E] text-[13px] font-medium">Event type</th>
                <th className="py-3 px-4 text-center text-[#112D4E] text-[13px] font-medium w-24">In-app</th>
                <th className="py-3 px-4 text-center text-[#112D4E] text-[13px] font-medium w-24">Email</th>
                <th className="py-3 px-4 text-center text-[#112D4E] text-[13px] font-medium w-24">WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {/* Group: Contacts */}
              <tr>
                <td colSpan="4" className="bg-[#DBE2EF]/30 py-2 px-6 text-[#3F72AF] text-[11px] font-bold uppercase tracking-wider">Contacts</td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6">
                  <div className="text-[#112D4E] text-[13px] font-medium">New contact added</div>
                  <div className="text-[#3F72AF] text-[12px]">When a team member or integration creates a contact</div>
                </td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#DBE2EF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#DBE2EF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div></td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6">
                  <div className="text-[#112D4E] text-[13px] font-medium">Contact assigned to me</div>
                  <div className="text-[#3F72AF] text-[12px]">When you become the owner of a contact</div>
                </td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
              </tr>

              {/* Group: Invoices */}
              <tr>
                <td colSpan="4" className="bg-[#DBE2EF]/30 py-2 px-6 text-[#3F72AF] text-[11px] font-bold uppercase tracking-wider">Invoices</td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6">
                  <div className="text-[#112D4E] text-[13px] font-medium">Invoice paid</div>
                  <div className="text-[#3F72AF] text-[12px]">When a payment is marked as received</div>
                </td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6">
                  <div className="text-[#112D4E] text-[13px] font-medium">Invoice overdue</div>
                  <div className="text-[#3F72AF] text-[12px]">On the day an invoice becomes overdue</div>
                </td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#DBE2EF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div></td>
              </tr>

              {/* Group: WhatsApp */}
              <tr>
                <td colSpan="4" className="bg-[#DBE2EF]/30 py-2 px-6 text-[#3F72AF] text-[11px] font-bold uppercase tracking-wider">WhatsApp</td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6">
                  <div className="text-[#112D4E] text-[13px] font-medium">New message received</div>
                  <div className="text-[#3F72AF] text-[12px]">When a customer replies in WhatsApp</div>
                </td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#3F72AF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div></td>
                <td className="py-3 px-4 text-center"><div className="w-8 h-4 rounded-full bg-[#DBE2EF] mx-auto relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div></td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center relative group">
                    <div className="w-8 h-4 rounded-full bg-[#DBE2EF] mx-auto relative opacity-50"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5"></div></div>
                    <span className="absolute -right-2 top-0 text-[10px] text-[#112D4E]">🔒</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 mb-8 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-2">Quiet hours</h3>
        <p className="text-[#3F72AF] text-[13px] mb-4">Pause non-urgent notifications during these hours.</p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="flex items-center gap-3">
            <label className="text-[#112D4E] text-[13px] w-10">From</label>
            <input type="time" defaultValue="20:00" className="h-9 px-2 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px]" />
          </div>
          <div className="flex items-center gap-3">
            <label className="text-[#112D4E] text-[13px] w-10">To</label>
            <input type="time" defaultValue="08:00" className="h-9 px-2 border-[0.5px] border-[#DBE2EF] rounded-md text-[#112D4E] text-[13px]" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[#112D4E] text-[13px] mb-2">Active days</label>
          <div className="flex gap-2">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-medium cursor-pointer ${
                i > 0 && i < 6 ? 'bg-[#3F72AF] text-white' : 'bg-[#DBE2EF] text-[#3F72AF]'
              }`}>
                {day}
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[#112D4E] text-[13px] mb-2">When quiet hours end</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="digest" className="accent-[#3F72AF]" defaultChecked />
              <span className="text-[#3F72AF] text-[13px]">Send as a daily summary email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="digest" className="accent-[#3F72AF]" />
              <span className="text-[#3F72AF] text-[13px]">Send as individual notifications</span>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NotificationsSettings;
