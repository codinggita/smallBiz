import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-light text-center text-gray-500 border-t border-muted">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} SmallBiz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
