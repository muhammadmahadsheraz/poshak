import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Hero = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col sm:flex-row">
      {/* Hero Left Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start p-8 sm:p-12 bg-gradient-to-br from-teal-400 to-blue-500 text-gray-900">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-widest font-medium text-gray-800">
            Featured Collection
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Step Into Style
        </h1>
        <p className="text-sm sm:text-base text-gray-700 mb-6">
          Discover our handpicked collection of the latest trends and timeless designs.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition">
          Explore Now
        </button>
      </div>

      {/* Hero Right Section */}
      <div className="w-full sm:w-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Hero"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Hero;