import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    return (
        <div className="w-full bg-gray-100 rounded-lg shadow-md p-6">
            <div className="text-2xl mb-4">
                <Title text1="CART" text2="TOTAL" />
            </div>
            <div className="flex flex-col gap-4 text-sm">
                {/* Subtotal */}
                <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium text-gray-800">
                        {currency} {getCartAmount()}.00
                    </p>
                </div>
                <hr className="border-gray-300" />
                {/* Shipping Fee */}
                <div className="flex justify-between">
                    <p className="text-gray-600">Shipping Fee</p>
                    <p className="font-medium text-gray-800">
                        {currency} {delivery_fee}.00
                    </p>
                </div>
                <hr className="border-gray-300" />
                {/* Total */}
                <div className="flex justify-between">
                    <b className="text-lg text-gray-900">Total</b>
                    <b className="text-lg text-gray-900">
                        {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;