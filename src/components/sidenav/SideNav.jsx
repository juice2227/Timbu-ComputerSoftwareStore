import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import star1 from '../../assets/images/1.png';
import star2 from '../../assets/images/2.png';
import star3 from '../../assets/images/3.png';
import star4 from '../../assets/images/4.png';
import star5 from '../../assets/images/5.png';
import Price from './Price';

const SideNav = () => {
  const [categories, setCategories] = useState({
    productivity: false,
    creativity: true,
    security: false,
    utilities: false,
    education: false,
    entertainment: false,
  });

  const [brands, setBrands] = useState({
    adobe: false,
    microsoft: false,
    apple: true,
  });

  const [ratings, setRatings] = useState({
    star5: false,
    star4: true,
    star3: false,
    star2: false,
    star1: false,
  });

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const handleBrandChange = (brand) => {
    setBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  const handleRatingChange = (rating) => {
    setRatings((prev) => ({ ...prev, [rating]: !prev[rating] }));
  };

  return (
    <div className="p-4 ml-4">
      <div>
        <div className="flex justify-between items-center ml-4 mb-2">
          <p className="font-semibold">All Categories</p>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.productivity}
              onChange={() => handleCategoryChange('productivity')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.productivity ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
            Productivity Tools (134)<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.creativity}
              onChange={() => handleCategoryChange('creativity')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.creativity ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
            Creativity and Design (150)<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.security}
              onChange={() => handleCategoryChange('security')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.security ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
            Security and Privacy (54)<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.utilities}
              onChange={() => handleCategoryChange('utilities')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.utilities ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
            Utilities (47)<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.education}
              onChange={() => handleCategoryChange('education')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.education ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
            Education and Learning (43)<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={categories.entertainment}
              onChange={() => handleCategoryChange('entertainment')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${categories.entertainment ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} rounded-full flex items-center justify-center mr-2 cursor-pointer`}></span>
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
            <input
              type="checkbox"
              className="hidden"
              checked={brands.adobe}
              onChange={() => handleBrandChange('adobe')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${brands.adobe ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            Adobe<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={brands.microsoft}
              onChange={() => handleBrandChange('microsoft')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${brands.microsoft ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            Microsoft<br />
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="hidden"
              checked={brands.apple}
              onChange={() => handleBrandChange('apple')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${brands.apple ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
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
            <input
              type="checkbox"
              className="hidden"
              checked={ratings.star5}
              onChange={() => handleRatingChange('star5')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${ratings.star5 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            <img src={star5} alt="star5" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="hidden"
              checked={ratings.star4}
              onChange={() => handleRatingChange('star4')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${ratings.star4 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            <img src={star4} alt="star4" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="hidden"
              checked={ratings.star3}
              onChange={() => handleRatingChange('star3')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${ratings.star3 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            <img src={star3} alt="star3" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="hidden"
              checked={ratings.star2}
              onChange={() => handleRatingChange('star2')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${ratings.star2 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            <img src={star2} alt="star2" className="w-20 h-10 cursor-pointer" />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              className="hidden"
              checked={ratings.star1}
              onChange={() => handleRatingChange('star1')}
            />
            <span className={`custom-checkbox w-4 h-4 border-2 ${ratings.star1 ? 'border-yellow-500 bg-yellow-500' : 'border-gray-300'} flex items-center justify-center mr-2 cursor-pointer`}></span>
            <img src={star1} alt="star1" className="w-20 h-10 cursor-pointer" />
          </label>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Popular Tags</h4>
          <FaAngleUp className="cursor-pointer" />
        </div>
        <div className="mb-4">
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">Adobe</button>
          <button className="bg-yellow-400 py-2 px-4 mb-2 rounded-full hover:bg-gray-400">Microsoft</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">Office</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">Bit Defender</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">MacSafe</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">Antivirus</button>
          <button className="bg-gray-400 py-2 px-4 mb-2 rounded-full hover:bg-yellow-400">VPN</button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
