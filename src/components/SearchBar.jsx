import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
        <div className="border-t border-b bg-gray-100 text-center py-4">
            <div className="inline-flex items-center justify-center border border-gray-300 px-4 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 shadow-sm">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-sm text-gray-700"
                    type="text"
                    placeholder="Search for products..."
                />
                <img className="w-5 ml-2 cursor-pointer" src={assets.search_icon} alt="Search" />
            </div>
            <img
                className="inline w-4 mt-3 cursor-pointer hover:opacity-80 transition"
                onClick={() => setShowSearch(false)}
                src={assets.cross_icon}
                alt="Close"
            />
        </div>
    ) : null;
};

export default SearchBar;