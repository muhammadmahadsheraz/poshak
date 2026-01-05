/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    };

    return (
        <div className="fixed w-full z-50 px-6 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] top-0 left-0 flex items-center justify-between py-4 bg-gray-900 text-white shadow-md">
            <Link to="/">
                <img src={assets.logo} className="w-36" alt="Logo" />
            </Link>
            <ul className="hidden sm:flex gap-6 text-sm">
                <NavLink to="/" className="hover:text-teal-400 transition">
                    HOME
                </NavLink>
                <NavLink to="/collection" className="hover:text-teal-400 transition">
                    COLLECTION
                </NavLink>
                <NavLink to="/about" className="hover:text-teal-400 transition">
                    ABOUT
                </NavLink>
                <NavLink to="/contact" className="hover:text-teal-400 transition">
                    CONTACT
                </NavLink>
            </ul>
            <div className="flex items-center gap-6">
                <img
                    onClick={() => setShowSearch(true)}
                    src={assets.search_icon}
                    className="w-5 cursor-pointer hover:opacity-80 transition"
                    alt="Search"
                />
                <div className="relative group">
                    <img
                        onClick={() => (token ? null : navigate('/login'))}
                        src={assets.profile_icon}
                        className="w-5 cursor-pointer hover:opacity-80 transition"
                        alt="Profile"
                    />
                    {token && (
                        <div className="hidden group-hover:block absolute right-0 mt-2 bg-gray-800 text-white rounded shadow-lg">
                            <div className="flex flex-col gap-2 w-40 py-3 px-4">
                                <p className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/profile')}>
                                    My Profile
                                </p>
                                <p className="cursor-pointer hover:text-teal-400" onClick={() => navigate('/orders')}>
                                    Orders
                                </p>
                                <p className="cursor-pointer hover:text-teal-400" onClick={logout}>
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-5" alt="Cart" />
                    <p className="absolute -top-2 -right-2 w-5 h-5 bg-teal-500 text-white text-xs flex items-center justify-center rounded-full">
                        {getCartCount()}
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden hover:opacity-80 transition"
                    alt="Menu"
                />
            </div>
            <div
                className={`fixed top-0 right-0 h-full w-3/4 bg-gray-800 text-white z-40 transition-transform duration-300 transform ${
                    visible ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col">
                    <div
                        onClick={() => setVisible(false)}
                        className="flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-700"
                    >
                        <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="Back" />
                        <p>Back</p>
                    </div>
                    <NavLink
                        onClick={() => setVisible(false)}
                        to="/"
                        className="py-3 px-6 hover:bg-gray-700 transition"
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        to="/collection"
                        className="py-3 px-6 hover:bg-gray-700 transition"
                    >
                        COLLECTION
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        to="/about"
                        className="py-3 px-6 hover:bg-gray-700 transition"
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        onClick={() => setVisible(false)}
                        to="/contact"
                        className="py-3 px-6 hover:bg-gray-700 transition"
                    >
                        CONTACT
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;