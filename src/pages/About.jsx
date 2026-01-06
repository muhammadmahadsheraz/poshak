import React from 'react';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row">
      {/* About Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-8 sm:p-12 bg-gradient-to-br from-gray-300 to-gray-500 text-gray-800">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-widest font-medium text-gray-700">
            About Us
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Who We Are
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          At Forever, we bring you the latest in fashion with a focus on quality, style, and affordability. Our curated collection offers everything from everyday essentials to bold statement pieces, all designed to fit every occasion and lifestyle.
        </p>
        <button className="bg-gray-700 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>

      {/* About Right Section */}
      <div className="w-full sm:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default About;