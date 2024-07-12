import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { IoIosSearch, IoIosHelpCircleOutline } from 'react-icons/io';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import img1 from '../../assets/images/office.png';
import img4 from '../../assets/images/antivirus.png';
import not from '../../assets/images/not.png';
import ProductCard from '../products/ProductCard';
import img2 from '../../assets/images/kas.png';
import img3 from '../../assets/images/bit.png';
import suite from '../../assets/images/suite.png';
import back from '../../assets/images/bac.png';
import forward from '../../assets/images/for.png';

const Cart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="bg-yellow-500 flex items-center justify-between p-2 text-center">
        <div className="flex items-center">
          <img src={not} alt="notification" className="ml-20" height={10} width={10} />
          <p className="m-0 ml-20">50% off everything - Limited Time Only! <span className='underline'>shop now -></span></p>
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
        <div className="flex items-center space-x-4">
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className='flex'>
        <Link to='/'><p>Timbu ></p></Link><span>Cart</span>
      </div>

      <div className="flex mt-4 space-x-4">
        <div className="flex-grow flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <AiOutlineDelete className="text-red-500 cursor-pointer" />
            <img src={img1} className="h-24 w-24 object-cover" />
            <p>Microsoft Office 2016 Professional Plus</p>

            <div className="flex items-center justify-center bg-gray-200 rounded py-1 px-3">
              <button className="focus:outline-none">
                <AiOutlineMinus className="text-yellow-700" />
              </button>
              <span className="mx-2">1</span>
              <button className="focus:outline-none">
                <AiOutlinePlus className="text-yellow-700" />
              </button>
            </div>

            <div className="text-center flex-grow">
              <p>$299.99</p>
              <p>Discount Applied <span className='bg-red-500 text-white px-2 rounded'>-30%</span></p>
            </div>
          </div>
          <hr />

          <div className="flex items-center space-x-4">
            <AiOutlineDelete className="text-red-500 cursor-pointer" />
            <img src={suite} className="h-24 w-24 object-cover" />
            <p>Office Suite Software</p>

            <div className="flex items-center justify-center bg-gray-200 rounded py-1 px-3">
              <button className="focus:outline-none">
                <AiOutlineMinus className="text-yellow-700" />
              </button>
              <span className="mx-2">1</span>
              <button className="focus:outline-none">
                <AiOutlinePlus className="text-yellow-700" />
              </button>
            </div>

            <div className="text-center flex-grow">
              <p>$299.99</p>
              <p>Discount Applied <span className='bg-red-500 text-white px-2 rounded'>-30%</span></p>
            </div>
          </div>
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
              <img src={back} height={40} width={40} alt="Back" className="cursor-pointer" />
              <img src={forward} height={40} width={40} alt="Forward" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard
              image={img3}
              rating={3}
              description="2024 Anti-Virus Bitdefender Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img1}
              rating={4.5}
              description="Microsoft Office 2016 Professional Plus"
              originalPrice="$299.99"
              strikedPrice="$60.00"
            />
            <ProductCard
              image={img4}
              rating={4.5}
              description="2024 5 Years McAfee Anti-Virus Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img2}
              rating={4.5}
              description="Kaspersky Standard 1 Device 1 Year 2024"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img1}
              rating={4.5}
              description="Microsoft Office 2016 Professional Plus"
              originalPrice="$299.99"
              strikedPrice="$60.00"
            />
            <ProductCard
              image={img4}
              rating={4.5}
              description="2024 5 Years McAfee Anti-Virus Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Customers who viewed this item also viewed</h3>
            <div className="flex items-center space-x-1">
              <img src={back} height={40} width={40} alt="Back" className="cursor-pointer" />
              <img src={forward} height={40} width={40} alt="Forward" className="cursor-pointer" />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProductCard
              image={img3}
              rating={3}
              description="2024 Anti-Virus Bitdefender Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img1}
              rating={4.5}
              description="Microsoft Office 2016 Professional Plus"
              originalPrice="$299.99"
              strikedPrice="$60.00"
            />
            <ProductCard
              image={img4}
              rating={4.5}
              description="2024 5 Years McAfee Anti-Virus Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img2}
              rating={4.5}
              description="Kaspersky Standard 1 Device 1 Year 2024"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
            <ProductCard
              image={img1}
              rating={4.5}
              description="Microsoft Office 2016 Professional Plus"
              originalPrice="$299.99"
              strikedPrice="$60.00"
            />
            <ProductCard
              image={img4}
              rating={4.5}
              description="2024 5 Years McAfee Anti-Virus Latest Version"
              originalPrice="$299.99"
              strikedPrice="$400.00"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
