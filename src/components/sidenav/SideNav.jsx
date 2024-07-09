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
          <FaAngleUp />
        </div>
        <div className="mb-4">
          <label>
            <input type="checkbox" name="Productivity Tools" disabled /> Productivity Tools (134)<br />
          </label>
          <label>
            <input type="checkbox" name="Creativity and Design" checked readOnly /> Creativity and Design (150)<br />
          </label>
          <label>
            <input type="checkbox" name="Security and Privacy" disabled /> Security and Privacy (54)<br />
          </label>
          <label>
            <input type="checkbox" name="Utilities" disabled /> Utilities (47)<br />
          </label>
          <label>
            <input type="checkbox" name="Education and Learning" disabled /> Education and Learning (43)<br />
          </label>
          <label>
            <input type="checkbox" name="Entertainment" disabled /> Entertainment (38)<br />
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-semibold">Brands</h4>
          <FaAngleUp />
        </div>
        <div className="mb-4">
          <label>
            <input type="checkbox" name="Adobe" disabled /> Adobe<br />
          </label>
          <label>
            <input type="checkbox" name="Adobe" disabled /> Adobe<br />
          </label>
          <label>
            <input type="checkbox" name="Microsoft" checked readOnly /> Microsoft<br />
          </label>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <Price/>
          <FaAngleUp />
        </div>
      </div>
      <hr />

      <div className="mt-4">
        <div className="flex justify-between items-center text-center mb-4">
          <h3 className="text-xl font-semibold">Rating</h3>
          <FaAngleUp />
        </div>
        <div className="flex flex-col">
          <label className="flex items-center mb-2">
            <input type="checkbox" name="star5" id="star5" className="mr-2" disabled/>
            <img src={star5} alt="star5" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" name="star4" id="star4" className="mr-2" checked readOnly />
            <img src={star4} alt="star4" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" name="star3" id="star3" className="mr-2" disabled />
            <img src={star3} alt="star3" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" name="star2" id="star2" className="mr-2" disabled/>
            <img src={star2} alt="star2" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input type="checkbox" name="star1" id="star1" className="mr-2" disabled/>
            <img src={star1} alt="star1" className="w-20 h-10 cursor-pointer" />
          </label>
        </div>
      </div>
      <hr />

      <div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="font-semibold">Popular tags</h3>
          <FaAngleUp />
        </div>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>Adobe</button>
        <button className='bg-yellow-400 py-2 px-4 mb-2 rounded-full'>Microsoft</button>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>Office</button>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>Bit Defender</button>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>MacSafe</button>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>Antivirus</button>
        <button className='bg-gray-400 py-2 px-4 mb-2 rounded-full'>VPN</button>
      </div>
    </div>
  );
};

export default SideNav;
