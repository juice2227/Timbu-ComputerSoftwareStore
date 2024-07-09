import { useState } from "react";

export default function Hambuger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between py-8">
        
        <nav>
          <section className="flex md:hidden" onClick={toggleNav}>
            <div className="space-y-1">
              <span className="block h-0.5 w-5 bg-black"></span>
              <span className="block h-0.5 w-5 bg-black"></span>
              <span className="block h-0.5 w-5 bg-black"></span>
            </div>
          </section>
        </nav>
      </div>

      <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
        <div className="absolute top-0 right-0 px-6 py-6" onClick={toggleNav}>
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-20">
          <a href="/" className="py-2 text-gray-800">Home</a>
          <a href="/products" className="py-2 text-gray-800">Products</a>
          <a href="/orders" className="py-2 text-gray-800">Orders</a>
          <a href="/contact-us" className="py-2 text-gray-800">Contact Us</a>
        </div>
      </div>

      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          z-index: 10;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow-y: auto;
        }
        .showMenuNav a {
          font-size: 1.5rem;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
