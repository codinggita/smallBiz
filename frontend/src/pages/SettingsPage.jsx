import React, { useState } from 'react';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import ProfileSettings from '../components/settings/ProfileSettings';
import BusinessInfoSettings from '../components/settings/BusinessInfoSettings';
import TeamMembersSettings from '../components/settings/TeamMembersSettings';
import BillingPlanSettings from '../components/settings/BillingPlanSettings';
import NotificationsSettings from '../components/settings/NotificationsSettings';
import CustomFieldsSettings from '../components/settings/CustomFieldsSettings';
import PipelineStagesSettings from '../components/settings/PipelineStagesSettings';
import InvoiceTemplatesSettings from '../components/settings/InvoiceTemplatesSettings';
import ImportExportSettings from '../components/settings/ImportExportSettings';
import PrivacySecuritySettings from '../components/settings/PrivacySecuritySettings';
import WhatsAppTemplatesSettings from '../components/settings/WhatsAppTemplatesSettings';
import { FiSearch } from 'react-icons/fi';
import { useLocalStorage } from '../hooks/useLocalStorage';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useLocalStorage('SETTINGS_TAB', 'profile');
  const [searchQuery, setSearchQuery] = useState('');

  const navigationSections = [
    {
      title: 'Account',
      items: [
        { id: 'profile', name: 'Profile' },
        { id: 'business', name: 'Business info' },
        { id: 'team', name: 'Team members' },
        { id: 'billing', name: 'Billing and plan' }
      ]
    },
    {
      title: 'Product',
      items: [
        { id: 'notifications', name: 'Notifications' },
        { id: 'custom-fields', name: 'Custom fields' },
        { id: 'pipeline', name: 'Pipeline stages' },
        { id: 'invoices', name: 'Invoice templates' },
        { id: 'whatsapp', name: 'WhatsApp templates' }
      ]
    },
    {
      title: 'Data',
      items: [
        { id: 'import-export', name: 'Import and export' },
        { id: 'privacy', name: 'Privacy and security' }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile': return <ProfileSettings />;
      case 'business': return <BusinessInfoSettings />;
      case 'team': return <TeamMembersSettings />;
      case 'billing': return <BillingPlanSettings />;
      case 'notifications': return <NotificationsSettings />;
      case 'custom-fields': return <CustomFieldsSettings />;
      case 'pipeline': return <PipelineStagesSettings />;
      case 'invoices': return <InvoiceTemplatesSettings />;
      case 'import-export': return <ImportExportSettings />;
      case 'privacy': return <PrivacySecuritySettings />;
      case 'whatsapp': return <WhatsAppTemplatesSettings />;
      default: return <div className="text-center p-10 text-[#3F72AF]">Content for {activeTab} is being built.</div>;
    }
  };

  return (
    <div className="flex w-full min-h-screen bg-[#F9F7F7]">
      {/* Main Sidebar */}
      <DashboardSidebar />
      
      {/* Settings Sub-Navigation */}
      <div className="w-[220px] flex-shrink-0 bg-white border-r-[0.5px] border-[#DBE2EF] min-h-screen fixed left-[240px] top-0 bottom-0 z-10 hidden lg:flex flex-col">
        <div className="px-4 py-5 pb-3">
          <h1 className="text-[#112D4E] text-[16px] font-medium mb-4 px-2">Settings</h1>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3F72AF]" />
            <input 
              type="text" 
              placeholder="Search settings" 
              className="w-full pl-9 pr-3 py-2 border-[0.5px] border-[#DBE2EF] rounded-lg text-[13px] text-[#112D4E] focus:outline-none focus:border-[1.5px] focus:border-[#3F72AF] placeholder-[#DBE2EF]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pb-6 space-y-1">
          {navigationSections.map((section, idx) => (
            <div key={section.title}>
              {idx > 0 && <div className="h-[0.5px] bg-[#DBE2EF] mx-4 my-2"></div>}
              <div className="text-[#3F72AF] text-[11px] uppercase tracking-wide px-4 py-2 mt-1">
                {section.title}
              </div>
              {section.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-[14px] transition-colors ${
                    activeTab === item.id 
                      ? 'bg-[#DBE2EF] border-l-[3px] border-[#3F72AF] text-[#112D4E] font-medium' 
                      : 'text-[#3F72AF] hover:bg-[#F9F7F7]'
                  }`}
                  style={activeTab === item.id ? { paddingLeft: '13px' } : {}}
                >
                  {item.name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Settings Content Area */}
      <div className="flex-1 lg:ml-[460px] ml-[240px] p-8 lg:p-12 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
