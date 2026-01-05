import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 text-gray-700 cursor-pointer"
            to={`/product/${id}`}
        >
            <div className="overflow-hidden rounded-t-lg">
                <img
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                    src={image[0]}
                    alt={name}
                />
            </div>
            <div className="p-4">
                <p className="text-sm font-semibold mb-1">{name}</p>
                <p className="text-sm font-medium text-gray-800">
                    {currency}
                    {price}
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;