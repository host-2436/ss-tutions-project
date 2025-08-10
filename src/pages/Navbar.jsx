import React from 'react'
import { useState } from "react";
import Home from './Home' 
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const closeTimeoutRef = useRef(null);

    const handleMouseLeave = () => {
      closeTimeoutRef.current = setTimeout(() => {
        setAboutOpen(false);
      }, 300); // 300ms delay before closing
    };

    const handleMouseEnter = () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };

  return (
    <div>
        <nav className=" fixed bg-white top-0 left-0 w-full z-50 text-2xl "  >
      <div className="max-w-8xl mx-22 px-4">
        <div className="flex justify-between items-center w-full h-20 ">
          
          {/* Logo + Name */}
          <div className="flex items-center space-x-3">
            <img src="/logo1.png" alt="SS Tuitions Logo" className="h-10 w-10" />
            <span className="font-bold text-5xl text-[#345ba0]">SS Tuitions</span>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex space-x-6 font-medium text-[#4f4d4e]">
            <li>
                <Link
                    to="/"
                    className="relative group"
                >
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
              <button className="relative transition-colors duration-300 group-hover:text-[#345ba0] " onClick={() => setAboutOpen(!aboutOpen)} >
                ABOUT US 
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </button>
              {aboutOpen && (
                <ul className="absolute left-0 mt-2 bg-white border shadow-lg rounded-md w-48 text-sm">
                  <li>
                    <a href="#why" className="block px-4 py-2 hover:bg-blue-50">Why Choose</a>
                  </li>
                  <li>
                    <a href="#offer" className="block px-4 py-2 hover:bg-blue-50">What We Offer</a>
                  </li>
                  <li>
                    <a href="#tutors" className="block px-4 py-2 hover:bg-blue-50">Tutors</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="#reviews"
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#345ba0]">
                  REVIEWS
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#345ba0]">
                  BLOGS
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#345ba0]">
                  FAQ
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative group"
              >
                <span className="transition-colors duration-300 group-hover:text-[#345ba0]">
                  CONTACT US
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#345ba0] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar