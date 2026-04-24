import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { FiSmartphone, FiRefreshCw, FiCheckCircle } from 'react-icons/fi';

const SubHeroSection = () => {
  const steps = [
    { title: 'Connect', desc: 'Link your WhatsApp Business in seconds.', icon: <FiSmartphone /> },
    { title: 'Sync', desc: 'We auto-sync your inventory and orders.', icon: <FiRefreshCw /> },
    { title: 'Manage', desc: 'Close deals directly inside the chat.', icon: <FiCheckCircle /> },
  ];

  return (
    <div className="bg-light py-20">
      <div className="container mx-auto px-6">
        {/* Demo Video Section */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto bg-dark rounded-[32px] overflow-hidden shadow-2xl aspect-video flex items-center justify-center relative group cursor-pointer">
            <div className="text-center z-10">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl mb-4 mx-auto shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform pl-1">
                <FaPlay />
              </div>
              <p className="text-light font-bold text-xl">Watch 30-second demo</p>
            </div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div>
          <h2 className="text-4xl font-bold text-center text-dark mb-16">Simple as 1-2-3</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl shadow-md border border-muted hover:shadow-xl transition-all hover:-translate-y-2 text-center group">
                <div className="text-4xl mb-6 bg-muted/50 w-16 h-16 flex items-center justify-center rounded-2xl mx-auto group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
