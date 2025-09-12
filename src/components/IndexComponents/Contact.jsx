import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>

      <div className="mx-auto bg-slate-700 text-white p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-10">

        {/* Left Side: Store / Company Details */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-semibold">VMart Store</h3>
          <p className="text-white">
            Welcome to VMart, your one-stop solution for all your needs.  
            Reach out to us anytime via the contact form or the details below.
          </p>

          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-3 text-xl" />
            <div>
              <h4 className="font-semibold">Address:</h4>
              <p>123 VMart Street, Tech City, Mumbai, India</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhoneAlt className="mr-3 text-xl" />
            <div>
              <h4 className="font-semibold">Phone:</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="mr-3 text-xl" />
            <div>
              <h4 className="font-semibold">Email:</h4>
              <p>support@vmart.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-semibold px-4 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
