import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex items-center z-50 bg-light/80 backdrop-blur-md border-b border-muted">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-dark flex items-center gap-2">
          <span className="text-primary text-3xl"><FiMessageCircle /></span>
          SmallBiz
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="font-semibold text-dark hover:text-primary transition-colors">Login</a>
          <button className="bg-primary text-light px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-dark hover:shadow-dark/20 transition-all hover:-translate-y-0.5">
            Start free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
