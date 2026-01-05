import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-16 bg-gray-50 text-gray-800">
      <div className="flex flex-col items-center">
        <img className="w-14 mb-4" src={assets.exchange_icon} alt="Exchange Policy" />
        <p className="font-semibold text-lg">Easy Exchange Policy</p>
        <p className="text-gray-500 text-sm">We offer hassle-free exchange policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-14 mb-4" src={assets.quality_icon} alt="Return Policy" />
        <p className="font-semibold text-lg">7 Days Return Policy</p>
        <p className="text-gray-500 text-sm">We provide 7 days free return policy</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-14 mb-4" src={assets.support_img} alt="Customer Support" />
        <p className="font-semibold text-lg">Best Customer Support</p>
        <p className="text-gray-500 text-sm">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;