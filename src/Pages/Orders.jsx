import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Order = () => {
  const { currency, products } = useContext(ShopContext);

  return (
    <div className="border-t pt-12 px-4 sm:px-6 lg:px-8 min-h-screen text-white">
      <div className="text-3xl font-semibold mb-10 text-center sm:text-left">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition duration-200"
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 flex-1">
                <img
                  className="w-24 h-24 object-cover rounded-md border border-gray-700"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div className="flex-1">
                  <p className="text-base sm:text-lg font-semibold text-white">{item.name}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm sm:text-base text-gray-400">
                    <p className="font-medium text-white">
                      {currency}
                      {item.price}
                    </p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Date: <span className="text-gray-400">25, Jan, 2025</span>
                  </p>
                </div>
              </div>

              {/* Status & Button */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full sm:w-auto md:w-1/3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                  <p className="text-sm sm:text-base text-green-400 font-medium">Ready to ship</p>
                </div>
                <button className="border border-gray-500 hover:border-gray-400 text-sm font-medium px-5 py-2 rounded-md text-white hover:text-gray-200 transition w-full sm:w-auto cursor-pointer">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
