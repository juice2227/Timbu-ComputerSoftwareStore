import React, { useState } from 'react';
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from '../products/ProductCard';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, products } = useContext(CartContext);
  const [currentIndex, setCurrentIndex] = useState(0); 

  const nextProducts = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousProducts = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="bg-yellow-500 flex items-center justify-between p-2 text-center">
        <div className="flex items-center">
          <p className="m-0 ml-20">50% off everything - Limited Time Only! <span className='underline'>shop now -</span></p>
        </div>
        <div className="cursor-pointer mr-10">x</div>
      </div>
      
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <div className="space-y-1">
          <span className="block h-0.5 w-5 bg-black"></span>
          <span className="block h-0.5 w-5 bg-black"></span>
          <span className="block h-0.5 w-5 bg-black"></span>
        </div>
        <div>
          <h3>Timbu</h3>
        </div>
        <div className="relative flex items-center">
          <div className="flex items-center border w-full search-bar px-2 py-1 rounded">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none px-4 py-2"
            />
            <div className="absolute right-0 top-0 h-full flex items-center">
              <IoIosSearch className="text-xl cursor-pointer mr-2" />
              <div className="bg-yellow-500 px-2 py-1 rounded-md cursor-pointer ml-2">
                Search
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className='flex'>
        <Link to='/'><p>Timbu </p></Link><span>Cart</span>
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="flex-grow flex flex-col space-y-4">
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                  <img src={product.image} alt={product.description} className="w-16 h-16 object-cover" />
                  <img src={`https://api.timbu.cloud/images/${product.photos[1].url}`} alt="" />
                        <p>{product.name}</p>
                  <div>
                    <p className="font-semibold">{product.description}</p>
                    <p>{product.originalPrice}</p>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => removeFromCart(product.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                        className="w-12 text-center border rounded"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3">
          <form className="bg-gray-100 p-4 rounded-lg">
            <h3>Have a coupon</h3>
            <div className="flex items-center">
              <input
                type="text"
                id="coupon"
                placeholder="Enter Coupon Code"
                className="w-full p-2 border rounded bg-white"
              />
              <button type="submit" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded ml-2">Apply</button>
            </div>
            <h3 className="mt-4">Cart Total</h3>
            <hr className="my-4 border-gray-200" />
            <div className="flex justify-between">
              <p className="text-sm text-gray-700">Subtotal</p>
              <p className="text-lg font-semibold">$598.00</p>
            </div>
            <Link to ="/checkout"><button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 w-full">Checkout $598</button></Link>
          </form>
        </div>
      </div>
      <section className="mt-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">You may also like</h3>
            <div className="flex items-center space-x-2">
              <IoIosArrowRoundBack className="cursor-pointer" onClick={previousProducts} />
              <IoArrowForwardCircleSharp className="cursor-pointer" onClick={nextProducts} />
            </div>
          </div>
          {/* Ensure products is defined and has items before rendering */}
          {products && products.length > 0 && (
            <div>
              <img src={`https://api.timbu.cloud/images/${products[currentIndex].photo[0].url}`} alt="Recommended Product" />
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    rating={product.rating}
                    description={product.description}
                    originalPrice={`$${product.originalPrice}`}
                    strikedPrice={`$${product.strikedPrice}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;
