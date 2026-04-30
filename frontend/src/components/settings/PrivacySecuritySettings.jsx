import React, { useState } from 'react';

const PrivacySecuritySettings = () => {
  const [deleteConfirm, setDeleteConfirm] = useState('');

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Privacy and Security</h2>
          <p className="text-[#3F72AF] text-[14px]">Manage your data storage, integrations, and account deletion</p>
        </div>
      </div>

      {/* Data Storage FAQ */}
      <div className="mb-10">
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Data storage information</h3>
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 shadow-sm space-y-6">
          <div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Where is my data stored?</h4>
            <p className="text-[#3F72AF] text-[13px]">Your data is securely stored on India-region servers (AWS Mumbai) to ensure compliance with local regulations and fast access times for Indian businesses.</p>
          </div>
          <div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Is my data encrypted?</h4>
            <p className="text-[#3F72AF] text-[13px]">Yes. All data is encrypted at rest using AES-256 and in transit using TLS 1.2+. Your passwords and sensitive integration tokens are hashed and never stored in plain text.</p>
          </div>
          <div>
            <h4 className="text-[#112D4E] text-[14px] font-medium mb-1">Who has access to my data?</h4>
            <p className="text-[#3F72AF] text-[13px]">Only you, your invited team members, and the integrations you explicitly authorize. SmallBiz CRM staff cannot access your raw customer data unless you provide explicit temporary permission for support purposes.</p>
          </div>
        </div>
      </div>

      {/* Integrations Permissions */}
      <div className="mb-10">
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Active integration permissions</h3>
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#F9F7F7] border-b border-[#DBE2EF]">
              <tr>
                <th className="py-3 px-6 text-[#112D4E] text-[13px] font-medium">Integration</th>
                <th className="py-3 px-6 text-[#112D4E] text-[13px] font-medium">Permissions granted</th>
                <th className="py-3 px-6 text-[#112D4E] text-[13px] font-medium">Connected</th>
                <th className="py-3 px-6 text-[#112D4E] text-[13px] font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-4 px-6 text-[#112D4E] text-[13px] font-medium">Razorpay</td>
                <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Create invoices, Read payments</td>
                <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Feb 12, 2026</td>
                <td className="py-4 px-6 text-right"><button className="text-[#3F72AF] hover:text-[#112D4E] text-[13px] hover:underline">Revoke access</button></td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-[#112D4E] text-[13px] font-medium">WhatsApp Cloud API</td>
                <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Send messages, Read messages</td>
                <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Jan 10, 2026</td>
                <td className="py-4 px-6 text-right"><button className="text-[#3F72AF] hover:text-[#112D4E] text-[13px] hover:underline">Revoke access</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Login Activity Log */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Login activity</h3>
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="text-[#112D4E] text-[13px] font-medium">Alert me on new device login</div>
            <div className="w-8 h-4 rounded-full bg-[#3F72AF] relative"><div className="w-3 h-3 rounded-full bg-white absolute top-0.5 right-0.5"></div></div>
          </label>
        </div>
        <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-[#F9F7F7] border-b border-[#DBE2EF]">
              <tr>
                <th className="py-2 px-6 text-[#3F72AF] text-[12px] font-medium">Date & Time</th>
                <th className="py-2 px-6 text-[#3F72AF] text-[12px] font-medium">Device & Browser</th>
                <th className="py-2 px-6 text-[#3F72AF] text-[12px] font-medium">IP Address</th>
                <th className="py-2 px-6 text-[#3F72AF] text-[12px] font-medium">Location</th>
                <th className="py-2 px-6 text-[#3F72AF] text-[12px] font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-[13px]">
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6 text-[#112D4E]">30 Apr 2026, 10:45 AM</td>
                <td className="py-3 px-6 text-[#112D4E]">Mac OS • Chrome</td>
                <td className="py-3 px-6 text-[#3F72AF]">103.116.14.22</td>
                <td className="py-3 px-6 text-[#3F72AF]">Mumbai, India</td>
                <td className="py-3 px-6 text-[#3F72AF]">Success</td>
              </tr>
              <tr className="border-b border-[#DBE2EF]">
                <td className="py-3 px-6 text-[#112D4E]">28 Apr 2026, 09:12 AM</td>
                <td className="py-3 px-6 text-[#112D4E]">iOS • Safari</td>
                <td className="py-3 px-6 text-[#3F72AF]">117.202.10.88</td>
                <td className="py-3 px-6 text-[#3F72AF]">Mumbai, India</td>
                <td className="py-3 px-6 text-[#3F72AF]">Success</td>
              </tr>
              <tr>
                <td className="py-3 px-6 text-[#112D4E]">25 Apr 2026, 11:30 PM</td>
                <td className="py-3 px-6 text-[#112D4E]">Windows • Firefox</td>
                <td className="py-3 px-6 text-[#3F72AF]">45.22.10.11</td>
                <td className="py-3 px-6 text-[#3F72AF]">Unknown</td>
                <td className="py-3 px-6 text-[#112D4E] font-medium">Failed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="pt-8 border-t border-[#DBE2EF]">
        <h3 className="text-[#112D4E] text-[16px] font-medium mb-6">Danger zone</h3>
        <div className="space-y-4">
          
          <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] border-l-4 border-l-[#112D4E] p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <h4 className="text-[#112D4E] text-[15px] font-bold mb-1">Delete all contacts</h4>
              <p className="text-[#112D4E]/80 text-[13px] mb-3">This will also delete all deals, invoices, and activity linked to these contacts. This cannot be undone.</p>
              <input 
                type="text" 
                placeholder="Type DELETE to confirm" 
                className="w-full max-w-[200px] h-9 px-3 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#112D4E]"
              />
            </div>
            <button className="px-5 py-2 border-[1px] border-[#112D4E] text-[#112D4E] rounded-lg text-sm font-medium hover:bg-[#F9F7F7] opacity-50 cursor-not-allowed">
              Delete contacts
            </button>
          </div>

          <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] border-l-4 border-l-[#112D4E] p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex-1">
              <h4 className="text-[#112D4E] text-[15px] font-bold mb-1">Reset CRM data</h4>
              <p className="text-[#112D4E]/80 text-[13px] mb-3">Deletes all CRM data (contacts, deals, invoices) but keeps your account, settings, and integrations.</p>
              <input 
                type="text" 
                placeholder="Type DELETE to confirm" 
                className="w-full max-w-[200px] h-9 px-3 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#112D4E]"
              />
            </div>
            <button className="px-5 py-2 border-[1px] border-[#112D4E] text-[#112D4E] rounded-lg text-sm font-medium hover:bg-[#F9F7F7] opacity-50 cursor-not-allowed">
              Reset data
            </button>
          </div>

          <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] border-l-4 border-l-[#112D4E] p-6 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-4">
              <div className="flex-1">
                <h4 className="text-[#112D4E] text-[15px] font-bold mb-1">Delete account</h4>
                <p className="text-[#112D4E]/80 text-[13px] mb-3">Permanently deletes your entire account and all data. Your account is deactivated immediately, and data is permanently deleted after a 30-day grace period.</p>
                <input 
                  type="text" 
                  placeholder="Type DELETE to confirm" 
                  className="w-full max-w-[200px] h-9 px-3 border-[0.5px] border-[#DBE2EF] rounded text-[#112D4E] text-[13px] focus:outline-none focus:border-[1.5px] focus:border-[#112D4E]"
                />
              </div>
              <button className="px-5 py-2 border-[1px] border-[#112D4E] text-[#112D4E] rounded-lg text-sm font-medium hover:bg-[#F9F7F7] opacity-50 cursor-not-allowed">
                Delete account
              </button>
            </div>
            <label className="flex items-center gap-2 cursor-pointer mt-2 pt-4 border-t border-[#DBE2EF]">
              <input type="checkbox" className="accent-[#112D4E] w-4 h-4" />
              <span className="text-[#112D4E] text-[13px] font-medium">I understand this cannot be undone after 30 days.</span>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacySecuritySettings;
