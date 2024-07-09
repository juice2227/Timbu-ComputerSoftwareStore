import { useState } from 'react';
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import not from '../../assets/images/not.png';
import Hambuger from './Hambuger';

export default function Navbar() {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality here, if needed
    console.log("Searching for:", searchItem);
  };

  return (
    <div className=''>
      {/* Yellow background paragraph */}
      <div className="bg-yellow-500 flex items-center justify-between p-2 text-center w-full">
        <div className="flex items-center">
          <img src={not} alt="notification" className="ml-20" height={10} width={10} />
          <p className="m-0 ml-20">50% off everything - Limited Time Only! <span className='underline'>shop now -></span></p>
        </div>
        <div className="cursor-pointer mr-10">x</div>
      </div>


      {/* Main content */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <Hambuger/>
        
        <div>
          <h3>Timbu</h3>
        </div>
        <div className="relative flex items-center">
          <div className="relative">
            <div className="flex items-center border w-full search-bar px-2 py-1 rounded">
              <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder="Search"
                className="w-full outline-none"
              />
              <IoIosSearch className="text-xl cursor-pointer mr-2" onClick={handleSearch} />
            </div>
          </div>
          <div className="bg-yellow-500 px-2 py-1 rounded-md cursor-pointer ml-2">
            Search
          </div>
        </div>
        <div>
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
        </div>
        <div>
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
        </div>
        <div>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>

      <div className='flex justify-between'>
        <p>Tools ><span>Shops</span></p>
        <button className='bg-yellow-400 py-2 px-4 ml-10 rounded-full '>Filter</button>
          <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Sort by:</label>
                  <div className="border rounded py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <select
                        id="country"
                        name="country"
                        className="  text-gray-700"
                        disabled
                      >
                        <option>Latest</option>
                        <option>Country 1</option>
                        <option>Country 2</option>
                        <option>Country 3</option>
                      </select>
                </div>
                <p>105<span>resultsFound</span></p>
      </div>
    </div>
  );
}
