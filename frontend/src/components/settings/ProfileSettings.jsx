import React, { useState } from 'react';
import { Storage } from '../../utils/storage';

const ProfileSettings = () => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const user = Storage.getLocal('USER') || Storage.getSession('USER') || {};

  // Extract first and last name from full name
  const nameParts = (user.name || '').split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
  const initials = user.name ? user.name.charAt(0).toUpperCase() : 'U';

  return (
    <div className="max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-[#112D4E] text-[20px] font-medium">Profile</h2>
          <p className="text-[#3F72AF] text-[14px]">Your personal account information</p>
        </div>
        <button className="bg-[#DBE2EF] text-white px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
          Save changes
        </button>
      </div>

      {/* Profile Photo */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-[88px] h-[88px] rounded-full bg-[#3F72AF] flex items-center justify-center text-white text-2xl font-medium mb-3">
          {initials}
        </div>
        <div className="flex gap-4">
          <button className="text-[#3F72AF] text-[13px] hover:underline">Change photo</button>
          <button className="text-[#3F72AF]/70 text-[12px] hover:underline">Remove photo</button>
        </div>
      </div>

      {/* Personal Info Form */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">First name</label>
          <input type="text" defaultValue={firstName} className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Last name</label>
          <input type="text" defaultValue={lastName} className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div className="col-span-2">
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Email address</label>
          <input type="email" defaultValue={user.email} className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" disabled />
          <p className="text-[#3F72AF] text-[12px] mt-1">Changing your email requires verification</p>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Phone number</label>
          <div className="flex">
            <select className="h-10 px-2 border-[0.5px] border-r-0 border-[#DBE2EF] rounded-l-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
              <option>+91</option>
            </select>
            <input type="tel" defaultValue="9876543210" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-r-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
          </div>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Job title</label>
          <input type="text" defaultValue={user.role || 'Owner'} className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Time zone</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>Mumbai (IST UTC+5:30)</option>
          </select>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Language</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>
        <div>
          <label className="block text-[#3F72AF] text-[12px] font-medium mb-1.5">Date format preference</label>
          <select className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] bg-white">
            <option>DD/MM/YYYY</option>
            <option>MM/DD/YYYY</option>
            <option>YYYY-MM-DD</option>
          </select>
        </div>
      </div>

      {/* Password Section */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 mb-8 shadow-sm">
        <h3 className="text-[#112D4E] text-[14px] font-medium mb-4">Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <input type="password" placeholder="Current password" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
          </div>
          <div>
            <input 
              type="password" 
              placeholder="New password" 
              className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" 
              onChange={(e) => setPasswordStrength(Math.min(4, Math.floor(e.target.value.length / 3)))}
            />
            {/* Strength indicator */}
            <div className="flex gap-2 mt-2">
              {[1, 2, 3, 4].map((level) => (
                <div 
                  key={level} 
                  className={`h-1 flex-1 rounded-full ${
                    passwordStrength >= level 
                      ? (passwordStrength === 4 ? 'bg-[#112D4E]' : 'bg-[#3F72AF]') 
                      : 'bg-[#DBE2EF]'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className={`text-[12px] ${passwordStrength === 0 ? 'text-[#DBE2EF]' : passwordStrength === 4 ? 'text-[#112D4E]' : 'text-[#3F72AF]'}`}>
                {passwordStrength === 0 ? 'Weak' : passwordStrength < 3 ? 'Fair' : passwordStrength === 3 ? 'Strong' : 'Very strong'}
              </span>
            </div>
            {/* Requirements */}
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2 text-[#3F72AF] text-[12px]">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center ${passwordStrength > 0 ? 'bg-[#3F72AF]' : 'border-[0.5px] border-[#DBE2EF]'}`}>
                  {passwordStrength > 0 && <span className="text-white text-[8px]">✓</span>}
                </div>
                8+ characters
              </div>
              <div className="flex items-center gap-2 text-[#3F72AF] text-[12px]">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center border-[0.5px] border-[#DBE2EF]`} />
                One uppercase
              </div>
              <div className="flex items-center gap-2 text-[#3F72AF] text-[12px]">
                <div className={`w-3 h-3 rounded-full flex items-center justify-center border-[0.5px] border-[#DBE2EF]`} />
                One number
              </div>
            </div>
          </div>
          <div>
            <input type="password" placeholder="Confirm new password" className="w-full h-10 px-3 border-[0.5px] border-[#DBE2EF] rounded-lg text-[#112D4E] text-[14px] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF]" />
          </div>
          <button className="px-4 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-[#F9F7F7]">
            Update password
          </button>
        </div>
      </div>

      {/* Two-Factor Auth */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] p-6 mb-8 shadow-sm flex justify-between items-center">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-[#112D4E] text-[14px] font-medium">Two-factor authentication</h3>
            <span className="bg-[#DBE2EF] text-[#112D4E] text-[10px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wide">Not enabled</span>
          </div>
          <p className="text-[#3F72AF] text-[13px]">Add an extra layer of security to your account.</p>
        </div>
        <button className="px-4 py-2 border-[1px] border-[#3F72AF] text-[#3F72AF] rounded-lg text-sm font-medium hover:bg-[#F9F7F7]">
          Enable 2FA
        </button>
      </div>

      {/* Active Sessions */}
      <div className="bg-white rounded-xl border-[0.5px] border-[#DBE2EF] overflow-hidden shadow-sm">
        <div className="p-6 border-b border-[#DBE2EF]">
          <h3 className="text-[#112D4E] text-[14px] font-medium">Active sessions</h3>
        </div>
        <table className="w-full text-left">
          <tbody>
            <tr className="border-b border-[#DBE2EF]">
              <td className="py-4 px-6 text-[#112D4E] text-[14px]">MacBook Pro • Chrome</td>
              <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Mumbai, India</td>
              <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Active now</td>
              <td className="py-4 px-6 text-right"><button className="text-[#3F72AF] text-[13px] hover:underline">Sign out</button></td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-[#112D4E] text-[14px]">iPhone 13 • Safari</td>
              <td className="py-4 px-6 text-[#3F72AF] text-[13px]">Mumbai, India</td>
              <td className="py-4 px-6 text-[#3F72AF] text-[13px]">2 hours ago</td>
              <td className="py-4 px-6 text-right"><button className="text-[#3F72AF] text-[13px] hover:underline">Sign out</button></td>
            </tr>
          </tbody>
        </table>
        <div className="p-6 bg-[#F9F7F7]">
          <button className="px-4 py-2 border-[1px] border-[#112D4E] text-[#112D4E] rounded-lg text-sm font-medium hover:bg-white">
            Sign out all other sessions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
