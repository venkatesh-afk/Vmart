import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left: Company Info */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">VMart</h2>
          <p className="mt-2 text-gray-400">Your One Stop Solution For All Your Needs</p>
          <p className="mt-1 text-gray-400">© 2025 VMart. All rights reserved.</p>
        </div>

        {/* Right: Contact Info */}
        <div className="text-center md:text-right space-y-2">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-end text-gray-400">
            <FaMapMarkerAlt className="mr-2" /> 123 VMart Street, Mumbai, India
          </p>
          <p className="flex items-center justify-center md:justify-end text-gray-400">
            <FaPhoneAlt className="mr-2" /> +91 98765 43210
          </p>
          <p className="flex items-center justify-center md:justify-end text-gray-400">
            <FaEnvelope className="mr-2" /> support@vmart.com
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
