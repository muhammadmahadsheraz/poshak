import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className="my-12 bg-gray-900 text-white rounded-lg shadow-lg p-6">
            {/* Title Section */}
            <div className="text-center py-6">
                <Title text1="LATEST" text2="COLLECTIONS" />
                <p className="w-4/5 mx-auto text-sm sm:text-base text-gray-300 mt-2">
                    Discover our latest collection of trendy, comfortable, and durable apparel for every adventure!
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {latestProducts.map((item, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition p-4"
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

export default LatestCollection;