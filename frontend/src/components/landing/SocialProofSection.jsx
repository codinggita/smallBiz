import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="py-12 bg-light border-y border-muted">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Works seamlessly with your tools</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-bold text-dark">Shopify</span>
          <span className="text-2xl font-bold text-dark">WooCommerce</span>
          <span className="text-2xl font-bold text-dark">Stripe</span>
          <span className="text-2xl font-bold text-dark">QuickBooks</span>
          <span className="text-2xl font-bold text-dark">Zapier</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
