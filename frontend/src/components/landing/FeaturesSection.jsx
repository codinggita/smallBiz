import React from 'react';
import { FiShoppingCart, FiUsers, FiBox, FiZap } from 'react-icons/fi';

const FeaturesSection = () => {
  const features = [
    { title: 'Chat Commerce', desc: 'Send product catalogs and take payments directly in WhatsApp.', icon: <FiShoppingCart className="text-primary" /> },
    { title: 'Smart CRM', desc: 'Keep track of every customer without messy spreadsheets.', icon: <FiUsers className="text-primary" /> },
    { title: 'Inventory Sync', desc: 'Real-time updates across all your selling channels.', icon: <FiBox className="text-primary" /> },
    { title: 'Quick Replies', desc: 'Save hours with automated responses for common questions.', icon: <FiZap className="text-primary" /> },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-16">Everything you need to grow</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] border border-muted hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
