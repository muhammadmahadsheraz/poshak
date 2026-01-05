import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
    return (
        <div className="w-full bg-gray-900 text-white px-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10">
                {/* Logo and Description */}
                <div>
                    <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
                    <p className="w-full md:w-2/3 text-gray-400">
                        Explore premium sailing gear, enjoy secure shopping, and stay updated on the latest collections. Join us for exclusive offers and fast delivery!
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <p className="text-xl font-medium mb-5 text-teal-400">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li className="hover:text-teal-300 transition">Home</li>
                        <li className="hover:text-teal-300 transition">About Us</li>
                        <li className="hover:text-teal-300 transition">Delivery</li>
                        <li className="hover:text-teal-300 transition">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <p className="text-xl font-medium mb-5 text-teal-400">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <li>
                            <a
                                href="https://wa.me/923198710491"
                                className="hover:text-teal-300 transition"
                            >
                                +92-319-8710491
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:glyphbytes@gmail.com"
                                className="hover:text-teal-300 transition"
                            >
                                glyphbytes@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div>
                <hr className="border-gray-700" />
                <p className="py-5 text-sm text-center text-gray-500">
                    Copyright 2024 @GlyphBytes. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;