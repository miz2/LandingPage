import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t" style={{ background: '#C5E5FF33' }}>
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0">
        
        {/* First Logo */}
        <img src="/government-logo.png" alt="Government Logo" className="w-24" />

        {/* Divider */}
        <div className="hidden md:block h-24 border-l border-gray-300 mx-4"></div>

        {/* Center Section */}
        <div className="text-center">
          <h4 className="text-sm">Recognized by:</h4>
          <img src="/nsdc.png" alt="NSDC Logo" className="w-24 mx-auto" />
        </div>

        {/* Divider */}
        <div className="hidden md:block h-24 border-l border-gray-300 mx-4"></div>

        {/* Third Logo */}
        <img src="/startup-india.png" alt="#startupindia" className="w-24" />
      </div>
    </footer>
  );
};

export default Footer;
