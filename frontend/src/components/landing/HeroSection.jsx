import React from 'react';

const HeroSection = () => {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-br from-light to-muted overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight mb-6">
          Run your business <br />
          from <span className="text-primary">WhatsApp</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Manage orders, sync inventory, and talk to customers without ever leaving your favorite chat app. Simple tools for the 3-person team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-light px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:bg-dark transition-all hover:-translate-y-1">
            Start free
          </button>
          <button className="bg-white text-dark border-2 border-muted px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all">
            How it works
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
