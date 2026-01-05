import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProducts = ({ category, subCategory, id }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);
      productsCopy = productsCopy.filter((item) => id !== item._id);
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory, id]);

  return (
    <div className="my-16 bg-gray-50 rounded-lg shadow-md p-6">
      {/* Title Section */}
      <div className="text-center py-4">
        <Title text1="RELATED" text2="PRODUCTS" />
        <p className="w-4/5 mx-auto text-sm sm:text-base text-gray-700 mt-2">
          Discover more items you'll love from our collection!
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;