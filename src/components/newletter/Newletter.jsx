import React from 'react';

export default function Newsletter() {
  return (
    <div className="bg-gray-100 py-6 text-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0 md:mr-4 text-center md:text-left">
          <h1 className="text-lg md:text-xl font-semibold">Subscribe to our newsletter</h1>
          <p className="text-sm md:text-base">
            Stay updated with the latest trends and exclusive offers. Subscribe to our newsletter now!
          </p>
        </div>
        <div className="relative flex w-full md:w-auto">
          <input
            type="email"
            className="p-2 pl-4 outline-none border border-gray-300 bg-white rounded-l-full w-full md:w-64 lg:w-80"
            placeholder="Your email address"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
