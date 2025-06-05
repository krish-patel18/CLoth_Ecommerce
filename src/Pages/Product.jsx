import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const foundProduct = products.find((item) => item._id === productId);

        if (!foundProduct) {
          setError('Product not found.');
          return;
        }

        setProductData(foundProduct);
        setImage(foundProduct.image?.[0] || '');
      } catch (err) {
        console.error('Error fetching product data:', err);
        setError('An unexpected error occurred.');
      }
    };

    fetchProductData();
  }, [productId, products]);

  if (error) {
    return <div className="text-red-600 text-center mt-10 text-lg font-semibold">{error}</div>;
  }

  if (!productData) {
    return <div className="h-32"></div>; // Placeholder / loader
  }

  return (
    <div className="pt-12 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-12 animate-fade-in">

        {/* Product Images */}
        <div className="flex-1 flex flex-col lg:flex-row gap-5">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto">
            {productData.image?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setImage(img)}
                className={`w-20 h-20 rounded-md object-cover cursor-pointer border transition-all duration-200 hover:scale-105 ${
                  img === image ? 'border-white' : 'border-gray-300'
                }`}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={image}
              alt="Selected product"
              className="w-full h-full object-cover rounded-xl shadow-lg max-h-[600px]"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-white">{productData.name}</h1>

          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className="w-4" />
            ))}
            <img src={assets.star_dull_icon} alt="star" className="w-4" />
            <span className="text-gray-300 text-sm ml-2">(122 Reviews)</span>
          </div>

          <p className="text-3xl font-semibold text-white">
            {currency}{productData.price}
          </p>

          <p className="text-gray-300 leading-relaxed">{productData.description}</p>

          {/* Size Selection */}
          <div>
            <p className="text-sm font-semibold text-gray-300 mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {productData.sizes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 cursor-pointer rounded-full border transition-all duration-150 text-sm font-medium hover:border-white ${
                    size === s ? 'bg-white text-black border-white' : 'bg-black text-gray-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button onClick={()=>addToCart(productData._id,size)}
            className="mt-4 bg-white text-black py-3 px-8 rounded-full font-medium hover:bg-gray-300 transition-all">
            Add to Cart
          </button>

          {/* Info */}
          <div className="text-sm text-gray-300 mt-6 space-y-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>

      {/* Tabs - Description / Reviews */}
      <div className="mt-20">
        <div className="flex border-b text-sm font-medium">
          <button className="px-5 py-3 border-t border-l border-r rounded-t bg-black text-white">
            Description
          </button>
          <button className="px-5 py-3 text-gray-500 hover:text-white transition-all">
            Reviews (122)
          </button>
        </div>
        <div className="border p-6 text-sm text-gray-300 bg- leading-relaxed space-y-3">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus provident perferendis possimus distinctio suscipit repellat in eius error quam quibusdam aut architecto optio nemo hic dolore nobis quis, nisi temporibus molestias consectetur! Id facere pariatur assumenda natus! Unde saepe sunt iste dolorem, id aperiam laudantium perferendis veniam quasi dolore ipsam?</p>
          <p>Aliquam placeat pariatur sint voluptas animi, nemo dolores error a autem debitis sapiente saepe ullam!</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
