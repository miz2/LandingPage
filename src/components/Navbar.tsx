import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-3 bg-white shadow-md w-full md:w-auto relative">
      <img src="/logo.png" alt="Coding Pro Logo" className="w-28 sm:w-36" />
      
      {/* Menu icon for mobile */}
      <button 
        className="text-blue-600 md:hidden z-20" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* Links */}
      <ul
        className={`md:flex gap-4 sm:gap-6 text-gray-700 items-center md:relative absolute md:top-0 top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in ${
          isMenuOpen ? 'flex' : 'hidden'
        } z-10`}
      >
        <li className="text-sm sm:text-base">About Us</li>
        <li className="text-sm sm:text-base">Virtual Labs</li>
        <li className="text-sm sm:text-base">Programs</li>
        <li className="text-sm sm:text-base">For Colleges</li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-2 sm:gap-4">
        <button className="text-blue-600 border border-blue-600 px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
          Log in
        </button>
        <button className="bg-blue-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
