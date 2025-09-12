import React from 'react';
import { FaRocket, FaUsers, FaShieldAlt } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        

        <div className="flex justify-center">
          <img
            src="/assets/about-us-image.jpg" 
            alt="About Us"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>


        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            At <span className="font-semibold text-black">VMart</span>, we are passionate about providing a seamless online shopping experience. We offer a wide variety of products from electronics to fashion, home accessories to skincare—everything under one digital roof.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaRocket className="text-blue-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
                <p className="text-gray-600">Quick and reliable shipping to get your orders delivered at your doorstep in record time.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaUsers className="text-green-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Customer Focused</h3>
                <p className="text-gray-600">Our customer-first approach ensures you get exceptional service and support whenever needed.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaShieldAlt className="text-yellow-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Secure Shopping</h3>
                <p className="text-gray-600">Your data and transactions are always safe with our secure payment and privacy measures.</p>
              </div>
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-8 py-3 rounded-md hover:bg-gray-400 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
