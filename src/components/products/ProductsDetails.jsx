import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/office.png';
import ProductCard from '../products/ProductCard';
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import not from '../../assets/images/not.png';
import heart from '../../assets/images/heart.png';
import { useCart } from '../context/CartContext';



export default function ProductDetails() {
  const { isInCart, addToCart } = useCart();
  const [products, setProducts] = useState([]);
    
    

    

    
const handleQuantityChange = (type) => {
  if (type === 'increase') {
    setQuantity(prevQuantity => prevQuantity + 1);
  } else if (type === 'decrease' && quantity > 1) {
    setQuantity(prevQuantity => prevQuantity - 1);
  }
};

  const product = {
    id: 1,
    name: "Microsoft Office 2016 Professional",
    description: "Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019.",
    price: 299.00,
    originalPrice: 400.00,
    brand: "Microsoft",
    sku: "117",
    category: "Living room, Bedroom",
    tag: "Microsoft Office",
    photos: [{ url: img1 }]
  };

  return (
    <div className="w-full">
      <div className="bg-yellow-500 flex items-center justify-between p-2 text-center">
        <div className="flex items-center">
          <img src={not} alt="notification" className="ml-20" height={10} width={10} />
          <p className="m-0 ml-20">50% off everything - Limited Time Only!<Link to='/products'><span className='underline'>shop now -{'>'}</span></Link> </p>
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
        </div>
        <div className="flex items-center space-x-4">
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className='flex'>
        <Link to='/'><p>Tools &gt; </p></Link>
        <Link to='/products'><span className='text-yellow-500'>Shops &gt;</span></Link>
        <Link><span className='text-yellow-500'>Product details</span></Link>
      </div>

      <div>
        <section className="mb-8">
          <div className="flex mb-4">
            <div className="w-1/2">
              <img src={product.photos && product.photos[0] ? product.photos[0].url : img1} alt={product.name} className="w-full" height={70} />
              <p>{product.name}</p>
            </div>
            <div className="w-1/2 pl-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-center">{product.name}</h2>
                <p className="mb-4 text-center">
                  {product.description}
                </p>
                <p className="text-lg font-semibold mb-2 text-center">${product.price}</p>
                <p className="text-lg text-gray-500 mb-4 text-center"><strike>${product.originalPrice}</strike></p>
                <hr />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-semibold">Brand:</div>
                  <div className="text-blue">{product.brand}</div>
                  <div className="font-semibold">SKU:</div>
                  <div>{product.sku}</div>
                  <div className="font-semibold">CATEGORY:</div>
                  <div>{product.category}</div>
                  <div className="font-semibold">TAG:</div>
                  <div>{product.tag}</div>
                </div>
              </div>

              <div className="flex items-center mt-2 space-x-2">
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


                <button className="flex items-center border border-gray-400 rounded px-4 py-2">
                  <img src={heart} alt="Heart" height={20} width={20} className="mr-2" /> Wishlist
                </button>
              </div>
              <button
                className={`rounded mt-2 w-full py-2 ${isInCart(product.id) ? 'bg-gray-500' : 'bg-yellow-500'}`}
                onClick={() => addToCart(product)}
                disabled={isInCart(product.id)}
              >
                {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>

          <div className="mt-4">
            <nav className="mb-4 items-center">
              <ul className="flex space-x-4 justify-center">
                <li className="cursor-pointer border-b-2 text-center border-yellow-500">Descriptions</li>
                <li className="cursor-pointer border-b-2 text-center">Additional Information</li>
                <li className="cursor-pointer border-b-2 text-center">Reviews</li>
              </ul>
            </nav>
            <div className="text-center">
              <p>
                Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019. This package has a great set of useful tools and various features to make the best work environment on your PC. This new release has all the important updates, and you will experience an improved user interface and many new features. It has many useful tools, including Word, Excel, PowerPoint, and Outlook, which will help you to complete your work more efficiently. You can now use the advanced PDF file management options to save and manage your documents in the cloud. With these improvements, Microsoft Office 2019 makes sure that you get the best out of your digital work environment. So if you are looking for the best productivity suite for your PC, this is the one to get.
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" className="mr-2" /> Fully installed Office applications</div>
                <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" className="mr-2" /> Access anywhere</div>
                <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" className="mr-2" /> Always up to date</div>
                <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" className="mr-2" /> Microsoft support</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">You may also like</h3>
              <div className="flex items-center space-x-2">
                <IoIosArrowRoundBack className="cursor-pointer" />
                <IoArrowForwardCircleSharp className="cursor-pointer" />
              </div>
            </div>
            <div className="flex">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                <ProductCard
                  image={img1}
                  rating={4.5}
                  description="Microsoft Office 2016 Professional Plus"
                  originalPrice="$299.99"
                  strikedPrice="$60.00"
                />
                <ProductCard
                  image={img1}
                  rating={4.5}
                  description="2024 5 Years Mc Afee Anti-Virus Latest Version"
                  originalPrice="$299.99"
                  strikedPrice="$400.00"
                />
                <ProductCard
                  image={img1}
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
                  image={img1}
                  rating={4.5}
                  description="2024 5 Years Mc Afee Anti-Virus Latest Version"
                  originalPrice="$299.99"
                  strikedPrice="$400.00"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
