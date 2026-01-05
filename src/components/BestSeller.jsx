import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProducts = products.filter((item) => item.bestseller);
        setBestSeller(bestProducts.slice(0, 5));
    }, [products]);

    return (
        <div className="my-12 bg-gray-50 rounded-lg shadow-lg p-6">
            {/* Title Section */}
            <div className="text-center py-6">
                <Title text1="BEST" text2="SELLERS" />
                <p className="w-4/5 mx-auto text-sm sm:text-base text-gray-700 mt-2">
                    Shop Our Best Sellers: The Top-Rated Sailing Gear Trusted by Adventurers Worldwide!
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {bestSeller.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4"
                    >
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestSeller;