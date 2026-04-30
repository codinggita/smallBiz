import React, { useState } from 'react';
import { FiMoreVertical, FiChevronDown } from 'react-icons/fi';

const TeamMembersSettings = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);

  return (
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Team Members</h2>
          <p className="text-[#3F72AF] text-[14px]">Manage who has access to your CRM</p>
        </div>
      </div>

      <div className="flex justify-between items-end mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-[#112D4E] text-[16px] font-medium">Your team</h3>
          <span className="bg-[#DBE2EF] text-[#112D4E] text-[12px] px-2.5 py-0.5 rounded-full font-medium">4 members</span>
        </div>
        <button 
          onClick={() => setShowInviteModal(true)}
          className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#112D4E] transition-colors"
        >
          Invite member
        </button>
      </div>

      {/* Team Table */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm mb-8">
        <table className="w-full text-left">
          <thead className="bg-[#DBE2EF] text-[#112D4E] text-[12px]">
            <tr>
              <th className="py-3 px-6 font-medium">Member</th>
              <th className="py-3 px-6 font-medium">Role</th>
              <th className="py-3 px-6 font-medium">Status</th>
              <th className="py-3 px-6 font-medium">Last active</th>
              <th className="py-3 px-6 font-medium">Joined date</th>
              <th className="py-3 px-6 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#DBE2EF] hover:bg-[#F9F7F7]">
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#112D4E] text-white flex items-center justify-center text-xs font-medium">RK</div>
                  <div>
                    <div className="text-[#112D4E] text-[14px] font-medium">Ravi Kumar (You)</div>
                    <div className="text-[#3F72AF] text-[12px]">ravi@rajantextiles.com</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6">
                <span className="bg-[#112D4E] text-[#F9F7F7] text-[11px] px-2.5 py-1 rounded-full">Owner</span>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#3F72AF]"></div>
                  <span className="text-[#112D4E] text-[13px]">Active</span>
                </div>
              </td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">Now</td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">Jan 10, 2025</td>
              <td className="py-3 px-6 text-right"></td>
            </tr>
            <tr className="border-b border-[#DBE2EF] hover:bg-[#F9F7F7]">
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#3F72AF] text-white flex items-center justify-center text-xs font-medium">AS</div>
                  <div>
                    <div className="text-[#112D4E] text-[14px] font-medium">Amit Sharma</div>
                    <div className="text-[#3F72AF] text-[12px]">amit@rajantextiles.com</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6">
                <span className="bg-[#3F72AF] text-[#F9F7F7] text-[11px] px-2.5 py-1 rounded-full">Admin</span>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#3F72AF]"></div>
                  <span className="text-[#112D4E] text-[13px]">Active</span>
                </div>
              </td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">2 hours ago</td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">Feb 15, 2025</td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[#112D4E] text-[13px] cursor-pointer">
                    Admin <FiChevronDown />
                  </div>
                  <span className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer text-[13px]">Remove</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-[#DBE2EF] hover:bg-[#F9F7F7]">
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DBE2EF] text-[#112D4E] flex items-center justify-center text-xs font-medium">PG</div>
                  <div>
                    <div className="text-[#112D4E] text-[14px] font-medium">Priya Gupta</div>
                    <div className="text-[#3F72AF] text-[12px]">priya@rajantextiles.com</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6">
                <span className="bg-[#DBE2EF] text-[#112D4E] text-[11px] px-2.5 py-1 rounded-full">Member</span>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#3F72AF]"></div>
                  <span className="text-[#112D4E] text-[13px]">Active</span>
                </div>
              </td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">Yesterday</td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">Mar 02, 2025</td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-[#112D4E] text-[13px] cursor-pointer">
                    Member <FiChevronDown />
                  </div>
                  <span className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer text-[13px]">Remove</span>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-[#F9F7F7]">
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#DBE2EF] text-[#112D4E] flex items-center justify-center text-xs font-medium border border-dashed border-[#3F72AF]">SJ</div>
                  <div>
                    <div className="text-[#112D4E] text-[14px] font-medium">Sanjay Joshi</div>
                    <div className="text-[#3F72AF] text-[12px]">sanjay@rajantextiles.com</div>
                  </div>
                </div>
              </td>
              <td className="py-3 px-6">
                <span className="bg-[#DBE2EF] text-[#112D4E] text-[11px] px-2.5 py-1 rounded-full">Member</span>
              </td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full border border-dashed border-[#DBE2EF]"></div>
                  <span className="text-[#3F72AF] text-[12px] italic">Pending</span>
                </div>
              </td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">-</td>
              <td className="py-3 px-6 text-[#3F72AF] text-[13px]">-</td>
              <td className="py-3 px-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer text-[13px]">Resend</span>
                  <span className="text-[#3F72AF] hover:text-[#112D4E] cursor-pointer text-[13px]">Cancel</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Permissions Matrix */}
      <div className="mt-8">
        <details className="group">
          <summary className="flex items-center gap-2 cursor-pointer list-none text-[#112D4E] text-[14px] font-medium hover:text-[#3F72AF]">
            <FiChevronDown className="group-open:-rotate-180 transition-transform" />
            View permissions
          </summary>
          <div className="mt-4 bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-x-auto shadow-sm">
            <table className="w-full text-left min-w-[600px]">
              <thead className="bg-[#F9F7F7] border-b border-[#DBE2EF]">
                <tr>
                  <th className="py-3 px-4 text-[#112D4E] text-[12px] font-medium">Feature</th>
                  <th className="py-3 px-4 text-center text-[#112D4E] text-[12px] font-medium">Owner</th>
                  <th className="py-3 px-4 text-center text-[#112D4E] text-[12px] font-medium">Admin</th>
                  <th className="py-3 px-4 text-center text-[#112D4E] text-[12px] font-medium">Member</th>
                  <th className="py-3 px-4 text-center text-[#112D4E] text-[12px] font-medium">View only</th>
                </tr>
              </thead>
              <tbody className="text-[13px]">
                {['Contacts', 'Deals', 'Invoices', 'WhatsApp', 'Reports', 'Settings', 'Billing', 'Delete data'].map((feature, i) => (
                  <tr key={feature} className={i % 2 === 0 ? '' : 'bg-[#F9F7F7]'}>
                    <td className="py-2 px-4 text-[#112D4E] border-b border-[#DBE2EF]">{feature}</td>
                    <td className="py-2 px-4 text-center text-[#3F72AF] border-b border-[#DBE2EF]">✓</td>
                    <td className="py-2 px-4 text-center border-b border-[#DBE2EF]">
                      {feature === 'Billing' || feature === 'Delete data' ? <span className="text-[#112D4E]">✕</span> : <span className="text-[#3F72AF]">✓</span>}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-[#DBE2EF]">
                      {feature === 'Settings' || feature === 'Billing' || feature === 'Delete data' ? <span className="text-[#112D4E]">✕</span> : <span className="text-[#3F72AF]">✓</span>}
                    </td>
                    <td className="py-2 px-4 text-center border-b border-[#DBE2EF]">
                      <div className="w-3 h-3 rounded-full bg-[#DBE2EF] mx-auto opacity-50"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3 text-center text-[#3F72AF] text-[12px] italic border-t border-[#DBE2EF]">
              Custom roles coming soon
            </div>
          </div>
        </details>
      </div>

      {/* Invite Modal Overlay (Simplified) */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-[#112D4E]/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[14px] w-full max-w-[440px] p-6 shadow-xl">
            <h3 className="text-[#112D4E] text-[16px] font-medium mb-4">Invite a team member</h3>
            
            <div className="space-y-4">
              <div>
                <input type="email" placeholder="colleague@business.com" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border-[1.5px] border-[#3F72AF] bg-[#DBE2EF]/30 rounded-lg p-3 cursor-pointer">
                  <div className="text-[#112D4E] text-[14px] font-medium mb-1 flex justify-between">
                    Admin <div className="w-4 h-4 rounded-full border-4 border-[#3F72AF] bg-white"></div>
                  </div>
                  <div className="text-[#3F72AF] text-[11px] leading-tight">Can manage all contacts, deals, invoices, and team. No billing access.</div>
                </div>
                <div className="border-[0.5px] border-[#DBE2EF] rounded-lg p-3 cursor-pointer hover:bg-[#F9F7F7]">
                  <div className="text-[#112D4E] text-[14px] font-medium mb-1 flex justify-between">
                    Member <div className="w-4 h-4 rounded-full border border-[#DBE2EF]"></div>
                  </div>
                  <div className="text-[#3F72AF] text-[11px] leading-tight">Can manage contacts, deals, and invoices. Cannot manage team.</div>
                </div>
                <div className="border-[0.5px] border-[#DBE2EF] rounded-lg p-3 cursor-pointer hover:bg-[#F9F7F7]">
                  <div className="text-[#112D4E] text-[14px] font-medium mb-1 flex justify-between">
                    View only <div className="w-4 h-4 rounded-full border border-[#DBE2EF]"></div>
                  </div>
                  <div className="text-[#3F72AF] text-[11px] leading-tight">Can view everything but cannot create, edit, or delete anything.</div>
                </div>
              </div>

              <div>
                <textarea placeholder="Add a personal note to the invite email (optional)" rows="2" className="w-full p-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] resize-none"></textarea>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button 
                  onClick={() => setShowInviteModal(false)}
                  className="w-full py-2.5 bg-[#3F72AF] text-white rounded-lg text-[14px] font-medium"
                >
                  Send invite
                </button>
                <button 
                  onClick={() => setShowInviteModal(false)}
                  className="w-full py-2 text-[#3F72AF] rounded-lg text-[14px]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembersSettings;
