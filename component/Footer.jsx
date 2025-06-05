import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-6">
          {/* About Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4 text-white">About Us</h2>
            <p className="text-sm leading-relaxed">
              Shantibari is a women’s organization, based in Dhaka, Bangladesh,
              which aims to empower women through its multifaceted activities.
              Founded in July 2022 as a sister concern of Feminist Factor
              (2020), Shantibari has been committed to helping women in diverse
              ways, i.e. mental health and legal support, reinforcing
              information services, and supporting women-led entrepreneurship,
              etc. We believe in creating an equitable world, and we work
              towards achieving this through our various programs and
              initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-bold mb-4 text-white">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-sm">
              Address: 3/1, Block # F, Lalmatia, Dhaka, Bangladesh, Dhaka, Bangladesh
              <br />
              Email: shantibari.feministfactor@gmail.com
              <br />
              Phone: 
              01325-167271
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-wrap justify-between items-center text-sm">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* Copyright */}
          <p>
            &copy; {new Date().getFullYear()} Shantibari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;