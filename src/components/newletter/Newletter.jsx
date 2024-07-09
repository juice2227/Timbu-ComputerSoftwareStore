import React from 'react';

export default function Newletter() {
  return (
    <div className="bg-gray-100 h-20 text-brandWhite">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="p-5">
          <h1 className="text-center p-2">Subscribe our newsletter</h1>
          <p className="">
            Stay updated with the latest trends and exclusive offers. Subscribe to our newsletter now!
          </p>
        </div>

        <div className="relative flex w-full md:w-auto">
          <input
            type="email"
            className="p-2 pl-8 outline-none border text-gray-900 bg-gray-100 rounded-l-full w-full"
            placeholder="Your email address"
          />
          <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
