import { useState, useContext } from 'react';
import { IoIosSearch, IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Hamburger from './Hambuger';
import { CartContext } from '../context/CartContext';

export default function Navbar() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const { cart } = useContext(CartContext);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = () => {
    
    const foundItem = products.find(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));
    setSearchResult(foundItem ? foundItem : "Item not found");
    console.log("Searching for:", searchItem);
  };

  return (
    <div className=''>
      {/* Yellow background paragraph */}
      <div className="bg-yellow-500 flex items-center justify-between p-2 text-center w-full">
        <div className="flex items-center">
          <img src="" alt="notification" className="ml-20" height={10} width={10} />
          <p className="m-0 ml-20">50% off everything - Limited Time Only!<Link to='/products'><span className='underline'>shop now -></span></Link></p>
        </div>
        <div className="cursor-pointer mr-10">x</div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-between bg-gray-100 p-4">
        <Hamburger />

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
                autoComplete='on'
              />
              <IoIosSearch className="text-xl cursor-pointer mr-2" onClick={handleSearch} />
            </div>
          </div>
          <div className="bg-yellow-500 px-2 py-1 rounded-md cursor-pointer ml-2" onClick={handleSearch}>
            Search
          </div>
        </div>

        {/* Grouped Icons */}
        <div className='flex items-center space-x-4'>
          <IoIosHelpCircleOutline className="text-2xl cursor-pointer" />
          <MdOutlineAccountCircle className="text-2xl cursor-pointer" />
          <div className="relative">
            <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 inline-block w-6 h-6 text-center text-xs font-bold bg-red-500 text-white rounded-full">{cart.length}</span>
            )}
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center p-4'>
        <p>Tools &gt; <Link to='/products'><span>Shops</span></Link></p>
        <button className='bg-yellow-400 py-2 px-4 ml-10 rounded-full'>Filter</button>
        <div className="flex items-center">
          <label htmlFor="country" className="text-gray-700 text-sm font-bold mb-2 mr-2">Sort by:</label>
          <div className="border rounded py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <select
              id="country"
              name="country"
              className="text-gray-700"
            >
              <option>Latest</option>
              <option>Popular</option>
              <option>New Brands</option>
              <option>Country 3</option>
            </select>
          </div>
        </div>
        <p className='mr-5'>105<span className='text-gray-500'> results found</span></p>
      </div>

      {/* Display search result */}
      {searchResult && (
        <div className="p-4">
          {typeof searchResult === 'string' ? (
            <p>{searchResult}</p>
          ) : (
            <div>
              <h3>{searchResult.name}</h3>
              <p>{searchResult.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
