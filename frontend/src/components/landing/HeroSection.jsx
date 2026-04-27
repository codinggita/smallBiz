import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="pt-40 pb-24 bg-gradient-to-br from-light to-muted overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark leading-tight mb-6">
            Run your business <br />
            from <span className="text-primary">WhatsApp</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed">
            Manage orders, sync inventory, and talk to customers without ever leaving your favorite chat app. Simple tools for the 3-person team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link to="/signup" className="inline-block text-center bg-primary text-light px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/30 hover:bg-dark transition-all hover:-translate-y-1">
              Start free
            </Link>
            <button className="bg-white text-dark border-2 border-muted px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all">
              How it works
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
          <img 
            src="https://res.cloudinary.com/dwpjwccxd/image/upload/v1777028733/watermark-removed-0ac17d3f-1cd2-4e2f-869d-bbff30721f27_yutjns.jpg" 
            alt="WhatsApp Business Dashboard" 
            className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
