
import SideNav from '../sidenav/SideNav';
import ProductCard from '../products/ProductCard'; 
import img1 from '../../assets/images/office.png';
import img2 from '../../assets/images/kas.png';
//import img3 from '../../assets/images/bit.png';
import img4 from '../../assets/images/antivirus.png';
//import { useCart } from '../context/CartContext';
import { useContext } from 'react';
import { useCart, CartContext } from '../context/CartContext'; // Ensure correct import
const ProductList = () => {
  const { addToCart, isInCart } = useCart();
  const { products } = useContext(CartContext);

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="flex">
        
      <div className="w-1/4 bg-gray-100 overflow-y-auto">
        <SideNav />
      </div>
      <div>
      </div>
      
      <img src={`https://api.timbu.cloud/images/${products.photo[0].product_wood_757a8c_1_200x200.jpg}`}  />
      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      
        <ProductCard
          image= "https://app.timbu.cloud/products/images/f2b21b398653423b92c8fd63f1c2a7c7"
          rating={3}
          description="2024 Anti-Virus Bitdefender Latest Version"
          originalPrice="$299.99"
          strikedPrice="$400.00"
        />
        <ProductCard
          image="https://api.timbu.cloud/images/celi-minimart/product_wood_757a8c_1_200x200.jpg"
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
          addToCart={() => addToCart(product)}
          isInCart={isInCart(product.id)}
        />
      </div>
    </div>
  );
};

export default ProductList;
