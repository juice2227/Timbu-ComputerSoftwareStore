import React from 'react';
import { Link } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import strp from '../../assets/images/stripe.png';
import vis from '../../assets/images/visa.png';
import express from '../../assets/images/exe.png';
import master from '../../assets/images/mas.png';
import paypal from '../../assets/images/pal.png';
import apple from '../../assets/images/apple.png';

export default function Checkout() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      
      <nav className="flex items-center justify-between bg-gray-100 w-full p-4">
        <div className="ml-8 flex items-center space-x-2">
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
          </div>
          <h3 className='ml-2'>Timbu</h3>
        </div>
        <p className='flex items-center mr-8 font-bold'>Processing order...</p>
      </nav>
      <div className="flex items-center mt-4 space-x-2">
        <Link to="/" className="text-black">Tools</Link>
        <span className="text-black">{'>'}</span>
        <Link to="/cart" className="text-black">Cart</Link>
        <span className="text-black">{'>'}</span>
        <p className="text-gray-700">Checkout</p>
      </div>

      <div className="pt-16 flex flex-col md:flex-row md:space-x-8 w-full">
    
        <div className="w-full md:w-3/5">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
            <div className="bg-white shadow-md rounded pt-6 pb-8 mb-4 p-4">
              <form>
                <div className="flex flex-col md:flex-row mb-4">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-2">
                    <label
                      htmlFor="first-name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 md:ml-2">
                    <label
                      htmlFor="last-name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone-number"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone-number"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Shipping Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-4">
                    <label htmlFor="street" className="block text-gray-700 text-sm font-bold mb-2">Street Address</label>
                    <input
                      type="text"
                      id="street"
                      name="street"
                      className="border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      autoComplete="off"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">Country</label>
                    <div className="border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <select
                        id="country"
                        name="country"
                        className="w-full bg-gray-100 text-gray-700"
                        
                      >
                        <option>Country</option>
                        <option>kenya</option>
                        <option>Nigeria</option>
                        <option>South Africa</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/2">
                    <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      autoComplete="off"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <label htmlFor="postcode" className="block text-gray-700 text-sm font-bold mb-2">Zip</label>
                    <input
                      type="text"
                      id="postcode"
                      name="postcode"
                      className="border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Payment Method</h1>
            <div className="flex items-center mb-4">
              <RiLockPasswordFill className="h-6 mr-2" />
              <p className="mb-4">All transactions are secured, processed and authorized by external payment providers</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border bg-gray-100 p-4 rounded">
                <input
                  type="checkbox" checked readOnly
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span>Pay by credit or debit card</span>
                <img src={vis} alt="Visa" height={30} width={30} />
                <img src={master} alt="MasterCard" height={30} width={30} />
              </div>
              <div className="flex items-center justify-between border p-4 bg-gray-100 rounded">
                <input
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span>Pay by American Express</span>
                <img src={express} alt="American Express" height={30} width={30} />
              </div>
              <div className="flex items-center justify-between border p-4 bg-gray-100 rounded">
                <input
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span>Pay by Stripe</span>
                <img src={strp} alt="Stripe" height={30} width={30} />
              </div>
              <div className="flex items-center justify-between bg-gray-100 border p-4 rounded">
                <input
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span>Pay by Paypal</span>
                <img src={paypal} alt="Paypal" height={30} width={30} />
              </div>
              <div className="flex items-center justify-between bg-gray-100 border p-4 rounded">
                <input
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <span>Pay by ApplePay</span>
                <img src={apple} alt="ApplePay" height={30} width={30} />
              </div>
              <div className="bg-gray-100 border rounded p-4">
                <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                <input
                  id="number"
                  name="cardnumber"
                  placeholder='1234 1234 1234'
                  className="w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label htmlFor="expiry" className="block text-gray-700 text-sm font-bold mb-2">Expiration Date</label>
                  <input
                    type="text"
                    id="expiry"
                    name="expiry"
                    placeholder='MM/YY'
                    className="w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    autoComplete="off"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="cvc" className="block text-gray-700 text-sm font-bold mb-2">CVC code</label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    placeholder='CVC code'
                    className="w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <div className="border bg-white shadow-md rounded p-4 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">Order History</h1>
            <div className="border p-4 bg-gray-100 rounded">
              <p>Products <span className="float-right">Price</span></p>
              <hr className="my-2" />
              <p>Microsoft Office 2016 Professional Plus x1 <span className="float-right">$299.00</span></p>
              <hr className="my-2" />
              <p>Office Suite Software x1 <span className="float-right">$299.00</span></p>
              <hr className="my-2" />
              <p>Sub Total <span className="float-right">$598.00</span></p>
              <hr className="my-2" />
              <p>Shipping <span className="float-right">$8.00</span></p>
              <button className="bg-yellow-500 text-gray-900 p-2 mt-4 hover:bg-gray-500 rounded outline-none">
                Pay by Credit or Debit Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
