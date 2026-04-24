import React from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingSection = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Simple pricing, no surprises</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Free Tier */}
          <div className="bg-white p-10 rounded-[2rem] border border-muted flex flex-col hover:border-primary/50 transition-colors">
            <h3 className="text-2xl font-bold text-dark mb-4">Starter</h3>
            <div className="text-5xl font-extrabold text-dark mb-6">
              $0<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-500 mb-8">Perfect for getting your business off the ground.</p>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-primary"><FiCheck /></span> Up to 100 orders/month
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-primary"><FiCheck /></span> Basic CRM
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <span className="text-primary"><FiCheck /></span> Community support
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl font-bold text-dark border-2 border-muted hover:border-dark transition-colors">
              Get Started Free
            </button>
          </div>

          {/* Pro Tier */}
          <div className="bg-dark p-10 rounded-[2rem] border-2 border-primary flex flex-col relative shadow-2xl shadow-dark/20 hover:-translate-y-2 transition-transform">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
            <div className="text-5xl font-extrabold text-white mb-6">
              $29<span className="text-lg text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-8">Everything you need to scale your sales.</p>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary font-bold"><FiCheck /></span> Unlimited orders
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary font-bold"><FiCheck /></span> Advanced CRM & Analytics
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="text-primary font-bold"><FiCheck /></span> Multi-agent inbox
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl font-bold bg-primary text-white hover:bg-white hover:text-dark transition-colors shadow-lg">
              Start 14-day Trial
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
