import React from 'react';
import { Link } from 'react-router-dom';
import { FiMessageCircle } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 flex items-center z-50 bg-light/80 backdrop-blur-md border-b border-muted">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://res.cloudinary.com/dwpjwccxd/image/upload/v1777029177/smallbiz_cursor_obutfe.png" 
              alt="SmallBiz Logo" 
              className="h-16 w-auto object-contain scale-110 ml-2"
            />
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="font-semibold text-dark hover:text-primary transition-colors">Login</Link>
          <Link to="/signup" className="bg-primary text-light px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-dark hover:shadow-dark/20 transition-all hover:-translate-y-0.5 inline-block">
            Start free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
