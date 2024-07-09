import React from 'react';
import img1 from '../../assets/images/office.png';
import ProductCard from '../products/ProductCard';
import img2 from '../../assets/images/kas.png';
import img3 from '../../assets/images/bit.png';
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import img4 from '../../assets/images/antivirus.png';
import not from '../../assets/images/not.png';
import back from '../../assets/images/bac.png';
import forward from '../../assets/images/for.png';
import heart from '../../assets/images/heart.png';

export default function ProductsDetails() {
  return (
    <div className="w-full">
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
        <div className='gap-1'>
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
        </div>
        <div className='gap-1'>
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
        </div>
        <div className='gap-1'>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className='flex'>
        <p>Tools><span>shops></span><span>Product details</span></p>
      </div>

      <div>
        <section className="mb-8">
          <div className="flex mb-4">
            <div className="w-1/2">
              <img src={img1} alt="Microsoft Office 2016 Professional" className="w-full h-auto" />
            </div>
            <div className="w-1/2 pl-4 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Microsoft Office 2016 Professional</h2>
                <p className="mb-4">
                  Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product, Office 2019.
                  Microsoft Office, or more simply Office, is a family of software built by Microsoft.
                </p>
                <p className="text-lg font-semibold mb-2">$299.00</p>
                <p className="text-lg text-gray-500 mb-4"><strike>$400.00</strike></p>
                <hr />
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-semibold">Brand:</div>
                  <div className="text-blue">Microsoft</div>
                  
                  <div className="font-semibold">SKU:</div>
                  <div>117</div>
                  <div className="font-semibold">CATEGORY:</div>
                  <div>Living room, Bedroom</div>
                  <div className="font-semibold">TAG:</div>
                  <div>Microsoft Office</div>
                </div>
              </div>
              
              <div className="flex items-center mt-4 space-x-2">
                <button className="bg-gray-200 p-2 focus:outline-none">
                  <AiOutlineMinus className="text-yellow-700" />
                </button>
                <span className="mx-2">1</span>
                <button className="bg-gray-200 p-2 focus:outline-none">
                  <AiOutlinePlus className="text-yellow-700" />
                </button>
                <button className="flex items-center border border-gray-400 rounded px-4 py-2">
                  <img src={heart} alt="Heart" height={20} width={20} className="mr-2" /> Wishlist
                </button>
              </div>
              <button className='bg-yellow-500 rounded mt-4 w-full py-2'>Add TO Cart</button>
            </div>
          </div>

          <div className="mt-8">
            <nav className="mb-4">
              <ul className="flex space-x-4">
                <li className="cursor-pointer border-b-2 border-yellow-500">Descriptions</li>
                <li className="cursor-pointer">Additional Information</li>
                <li className="cursor-pointer">Customer Feedback</li>
              </ul>
            </nav>
            <p className="mb-4">
              Microsoft Office 2019 is the latest version of Microsoft’s most powerful software product,
              Office 2019. Microsoft Office, or more simply Office, is a family of software built by Microsoft.
              Office was first unveiled on August 1, 1988 by then-CEO Bill Gates. The first version of 
              Office had Microsoft work tools, Microsoft Excel, Microsoft PowerPoint. Over the years, Office 
              applications have evolved significantly and come with amazing features. Over 2 decades old, Office
              suite has emerged as an unrivaled tool in the field of office software, document management, 
              spreadsheets, multimedia presentations and more. Now that Microsoft has officially unveiled 
              Windows 11, we are witnessing the introduction and release of Office 2019;
              A completely new version of the ice that has made a lot of noise with its attractive features.
            </p>
            <div className="list-decimal pl-6">
              <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" checked readOnly className="mr-2" /> Fully installed Office applications</div>
              <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" checked readOnly className="mr-2" /> Access anywhere</div>
              <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" checked readOnly className="mr-2" /> Always up to date</div>
              <div className="mb-2 flex items-center justify-center"><input type="checkbox" name="" id="" checked readOnly className="mr-2" /> Microsoft support</div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">You may also like</h3>
              <div className="flex items-center space-x-2">
                <img src={back} alt="Back" className="cursor-pointer" />
                <img src={forward} alt="Forward" className="cursor-pointer" />
              </div>
            </div>
            <div className="flex">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
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
                  description="2024 5 Years Mc Afee Anti-Virus Latest Version"
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
