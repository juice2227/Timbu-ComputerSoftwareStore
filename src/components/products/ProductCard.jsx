import React, { useState } from 'react';
import heart from '../../assets/images/heart.png';
import { useCart } from '../context/CartContext';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const ProductCard = ({ id, image, rating, description, originalPrice, strikedPrice }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(id);

  const handleAddToCart = () => {
    addToCart({ id, image, description, originalPrice, quantity });
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prevQuantity => prevQuantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden relative w-80 h-96 m-4">
      <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-3">
        <span className="text-xs font-semibold">New</span>
      </div>

      <img src={image} alt={description} className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">{rating}</span>
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-4 h-4 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          ))}
        </div>

        <p className="text-gray-800 text-base mb-2">{description}</p>

        <div className="flex items-center mb-2">
          <span className="text-gray-500 text-sm line-through mr-2">{strikedPrice}</span>
          <span className="text-gray-800 text-lg font-semibold">{originalPrice}</span>
        </div>

        <div className="flex items-center mt-2 space-x-2">
          <div className="flex items-center justify-center bg-gray-200 rounded py-1 px-3 space-x-2">
            <button 
              className="focus:outline-none"
              onClick={() => handleQuantityChange('decrease')}
            >
              <AiOutlineMinus className="text-yellow-700" />
            </button>
            <span className="mx-2">{quantity}</span>
            <button 
              className="focus:outline-none"
              onClick={() => handleQuantityChange('increase')}
            >
              <AiOutlinePlus className="text-yellow-700" />
            </button>
          </div>
        </div>

        <div className="bg-yellow-500 rounded mt-2">
          <button 
            className="text-white px-2 py-2 w-full"
            onClick={handleAddToCart}
            disabled={inCart}
          >
            {inCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>

        <div className="absolute top-0 right-0 mt-2 mr-2">
          <img src={heart} alt="Heart" height={20} width={20}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
