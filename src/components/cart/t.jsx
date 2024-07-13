import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { IoIosSearch, IoIosHelpCircleOutline } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import ProductCard from '../products/ProductCard'; // Assuming ProductCard component exists
import back from '../../assets/images/bac.png';
import forward from '../../assets/images/for.png';
const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      fetchProducts();
  }, []);
  const fetchProducts = async () => {
      try {
          const response = await fetch('/api/products?organization_id=8347d91c502a4a5a92f0f85951d2557a&reverse_sort=false&page=1&size=10&Appid=EBUZO6O78AP33DC&Apikey=6c29885f9d4d4469929c4e8c9d463dcf20240710083326482098');
          if (!response.ok) {
              throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data.items);
          console.log(products)
      } catch (error) {
          console.error('Error fetching products:', error);
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
      {/* Main content */}
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
          {products.map((product) => (
            <div key={product.id} className="flex items-center space-x-4">
              <AiOutlineDelete className="text-red-500 cursor-pointer" />
              <img src={product.image} className="h-24 w-24 object-cover" alt={product.description} />
              <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} alt="" />
              <p>{product.name}</p>

              <p>{product.description}</p>
              <div className="flex items-center justify-center bg-gray-200 rounded py-1 px-3">
                <button className="focus:outline-none">
                  <AiOutlineMinus className="text-yellow-700" />
                </button>
                <span className="mx-2">{product.quantity}</span>
                <button className="focus:outline-none">
                  <AiOutlinePlus className="text-yellow-700" />
                </button>
              </div>
              <div className="text-center flex-grow">
                <p>${product.current_price[0].NGN[0]}</p>
                {product.discount && (
                  <p>Discount Applied <span className='bg-red-500 text-white px-2 rounded'>-{product.discount}%</span></p>
                )}
              </div>
            </div>
          ))}
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
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4 w-full">Checkout $598</button>
          </form>
        </div>
      </div>
      <section className="mt-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">You may also like</h3>
            <div className="flex items-center space-x-2">
              <img src={back} alt="Back" className="cursor-pointer" />
              <img src={forward} alt="Forward" className="cursor-pointer" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                rating={product.rating}
                description={product.description}
                originalPrice={`$${product.originalPrice}`}
                strikedPrice={`$${product.strikedPrice}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;



