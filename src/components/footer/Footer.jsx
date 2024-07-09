import React from 'react';
import { SlSocialInstagram } from 'react-icons/sl';
import { LuFacebook } from 'react-icons/lu';
import { CiYoutube } from 'react-icons/ci';
import strp from '../../assets/images/stripe.png';
import vis from '../../assets/images/visa.png';
import express from '../../assets/images/exe.png';
import master from '../../assets/images/mas.png';
import paypal from '../../assets/images/pal.png';
import apple from '../../assets/images/apple.png';

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4 md:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Store Info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">timbu Store</h3>
            <p className="mb-4">Computer Software Store</p>
            <div className="flex space-x-4 mb-4">
              <SlSocialInstagram className="text-2xl" />
              <LuFacebook className="text-2xl" />
              <CiYoutube className="text-2xl" />
            </div>
          </div>

          {/* Links */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Links</h3>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>Category</li>
              <li>Account</li>
              <li>Cart</li>
            </ul>
          </div>

          {/* Info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Info</h3>
            <ul>
              <li>Shopping Policy</li>
              <li>Return & Refund</li>
              <li>Support</li>
              <li>FAQS</li>
            </ul>
          </div>

          {/* Location */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <ul>
              <li>House 17, room 4</li>
              <li>Highlandway,</li>
              <li>Lagos, Nigeria</li>
              <li>234-001-2222</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-4" />
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-4">
          <div className="text-center text-gray-300 order-2 md:order-1">
            <p>&copy; {new Date().getFullYear()} timbu Store. All rights reserved. <span className="ml-2">privacy | Terms and conditions</span></p>
          </div>
          <div className="flex items-center justify-center mb-4 md:mb-0 order-1 md:order-2">
            <img src={vis} alt="Visa" height={30} width={30} className="mx-2" />
            <img src={master} alt="MasterCard" height={30} width={30} className="mx-2" />
            <img src={express} alt="American Express" height={30} width={30} className="mx-2" />
            <img src={strp} alt="Stripe" height={30} width={30} className="mx-2" />
            <img src={paypal} alt="Paypal" height={30} width={30} className="mx-2" />
            <img src={apple} alt="ApplePay" height={30} width={30} className="mx-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
