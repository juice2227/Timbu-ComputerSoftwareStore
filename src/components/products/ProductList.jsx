import React from 'react';
import SideNav from '../sidenav/SideNav';
import ProductCard from '../products/ProductCard'; 
import img1 from '../../assets/images/office.png';
import img2 from '../../assets/images/kas.png';
import img3 from '../../assets/images/bit.png';
import img4 from '../../assets/images/antivirus.png';

const ProductList = () => {
  return (
    <div className="flex">
        
      <div className="w-1/4 bg-gray-100 overflow-y-auto">
        <SideNav />
      </div>
      <div>
      </div>
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      
        <ProductCard
          image={img3}
          rating={3}
          description="2024 Anti-Virus Bitdefender Latest Version"
          originalPrice="$299.99"
          strikedPrice="$400.00"
        />
        <ProductCard
          image={img1}
          rating={4.5}
          description="Microsoft Office 2016 Professional Plus"
          originalPrice="$299.99"
          strikedPrice="$60.00"
        />
        <ProductCard
          image={img4}
          rating={4.5}
          description="2024 5 Years Mc Afee Anti-Virus Latest Version"
          originalPrice="$299.99"
          strikedPrice="$400.00"
        />
        <ProductCard
          image={img2}
          rating={4.5}
          description="Kaspersky Standard 1 Device 1 Year 2024"
          originalPrice="$299.99"
          strikedPrice="$400.00"
        />
        <ProductCard
          image={img1}
          rating={4.5}
          description="Microsoft Office 2016 Professional Plus"
          originalPrice="$299.99"
          strikedPrice="$60.00"
        />
        <ProductCard
          image={img4}
          rating={4.5}
          description="2024 5 Years Mc Afee Anti-Virus Latest Version"
          originalPrice="$299.99"
          strikedPrice="$400.00"
        />
      </div>
    </div>
  );
};

export default ProductList;
