import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import star1 from '../../assets/images/1.png';
import star2 from '../../assets/images/2.png';
import star3 from '../../assets/images/3.png';
import star4 from '../../assets/images/4.png';
import star5 from '../../assets/images/5.png';
import Price from './Price';

const SideNav = () => {
  return (
    <div className="p-4 ml-4">
      <div>
        <div className="flex justify-between items-center ml-4 mb-2">
          <p className="font-semibold">All Categories</p>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2 cursor-pointer"></span>
            Productivity Tools (134)<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="custom-checkbox w-4 h-4 border-2 border-yellow-500 rounded-full flex items-center justify-center mr-2 cursor-pointer bg-yellow-500"></span>
            Creativity and Design (150)<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2 cursor-pointer"></span>
            Security and Privacy (54)<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2 cursor-pointer"></span>
            Utilities (47)<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2 cursor-pointer"></span>
            Education and Learning (43)<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2 cursor-pointer"></span>
            Entertainment (38)<br />
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Brands</h4>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            Adobe<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            Microsoft<br />
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="custom-checkbox w-4 h-4 border-2 border-yellow-500 flex items-center justify-center mr-2 cursor-pointer bg-yellow-500"></span>
            Apple<br />
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Price</h4>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <Price />
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Rating</h4>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            <img src={star5} alt="star5" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="hidden" checked readOnly />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer bg-yellow-500"></span>
            <img src={star4} alt="star4" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            <img src={star3} alt="star3" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            <img src={star2} alt="star2" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" className="hidden" />
            <span className="custom-checkbox w-4 h-4 border-2 border-gray-300 flex items-center justify-center mr-2 cursor-pointer"></span>
            <img src={star1} alt="star1" className="w-20 h-10 cursor-pointer" />
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Popular Tags</h4>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">Adobe</button>
          <button className="bg-yellow-400 py-2 px-4 mb-2 rounded-full">Microsoft</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">Office</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">Bit Defender</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">MacSafe</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">Antivirus</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full">VPN</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
