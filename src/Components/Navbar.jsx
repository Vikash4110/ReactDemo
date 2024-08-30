import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyBrand</div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            Home
          </a>
          <a href="#aboutus" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            About Us
          </a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            Services
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            Contact Us
          </a>
        </div>

        {/* Dropdown Links for Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Home
              </a>
              <a href="#aboutus" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                About Us
              </a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;