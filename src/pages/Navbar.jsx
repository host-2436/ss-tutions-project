import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setAboutOpen(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  return (
    <nav className="fixed bg-white top-0 left-0 w-full z-50 text-lg md:text-2xl shadow-sm">
      <div className="max-w-8xl mx-auto px-6 md:px-16">
        <div className="flex justify-between items-center w-full h-20">
          
          {/* Logo + Name */}
          <div className="flex items-center space-x-3">
            <img src="/sslogo.jpg" alt="SS Tuitions Logo" className="h-15 w-15" />
            <span className="font-bold text-3xl md:text-5xl text-[#345ba0]">SS Tuitions</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-[#4f4d4e]">
            
            {/* HOME */}
            <li>
              <Link to="/" className="relative group">
                <span className="transition-colors duration-300 group-hover:text-[#345ba0]">
                  HOME
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* About Us Dropdown */}
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="relative transition-colors duration-300 group-hover:text-[#345ba0]"
                onClick={() => setAboutOpen(!aboutOpen)}
              >
                ABOUT US
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </button>
              {aboutOpen && (
                <ul className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md w-48 text-sm">
                  <li><a href="#why" className="block px-4 py-2 hover:bg-blue-50">Why Choose</a></li>
                  <li><a href="#offer" className="block px-4 py-2 hover:bg-blue-50">What We Offer</a></li>
                  
                </ul>
              )}
            </li>

            {/* Other Links */}
            <li><a href="#reviews" className="relative group"><span className="transition-colors duration-300 group-hover:text-[#345ba0]">REVIEWS</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#blogs" className="relative group"><span className="transition-colors duration-300 group-hover:text-[#345ba0]">BLOGS</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#faq" className="relative group"><span className="transition-colors duration-300 group-hover:text-[#345ba0]">FAQ</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#contact" className="relative group"><span className="transition-colors duration-300 group-hover:text-[#345ba0]">CONTACT US</span><span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span></a></li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className="flex flex-col justify-between w-8 h-6 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="block h-1 bg-[#345ba0] rounded"></span>
              <span className="block h-1 bg-[#345ba0] rounded"></span>
              <span className="block h-1 bg-[#345ba0] rounded"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 md:px-16">
          <ul className="flex flex-col space-y-2 py-4 text-[#4f4d4e]">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link></li>
            <li>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="w-full text-left"
              >
                ABOUT US
              </button>
              {aboutOpen && (
                <ul className="ml-4 mt-1 space-y-1">
                  <li><a href="#why" onClick={() => setMobileMenuOpen(false)}>Why Choose</a></li>
                  <li><a href="#offer" onClick={() => setMobileMenuOpen(false)}>What We Offer</a></li>
                </ul>
              )}
            </li>
            <li><a href="#reviews" onClick={() => setMobileMenuOpen(false)}>REVIEWS</a></li>
            <li><a href="#blogs" onClick={() => setMobileMenuOpen(false)}>BLOGS</a></li>
            <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT US</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
