'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/events', label: 'Events' },
    { path: '/gallery-frida-kahlo', label: 'Gallery Frida Kahlo' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/audiovisual', label: 'Audio Visual' },
    { path: '/media-coverage', label: 'Media Coverage' },
    { path: '/brochure', label: 'Download Brochure' }
  ];

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="text-xl font-bold">
           <Link
  href="/"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="flex items-center space-x-2"
>
  <Image
    src="/images/logo.jpg"
    alt="Logo"
    width={60}
    height={60}
    priority
  />

</Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex space-x-8 font-roboto text-lg justify-center w-full">
            {menuItems.slice(0, 8).map(({ path, label }) => (
              <Link key={path} href={path} className="hover:text-gray-400">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 py-4 space-y-6 bg-white w-full transition-all duration-300 ease-in-out">
          {menuItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              onClick={closeMenu}
              className="block text-black text-lg text-center py-2 hover:text-gray-400"
            >
              {label}
            </Link>
          ))}

          <div className="mt-6 flex justify-center">
            <a
              href="tel:+8801325167271"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-400 text-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
