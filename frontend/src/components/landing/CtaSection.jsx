import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-24 bg-primary text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Ready to simplify your business?
        </h2>
        <p className="text-xl text-light/80 max-w-2xl mx-auto mb-10">
          Join thousands of small business owners who are running their entire operation from WhatsApp.
        </p>
        <button className="bg-white text-dark px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
          Start your free account
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
