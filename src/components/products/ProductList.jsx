
import SideNav from '../sidenav/SideNav';
import ProductCard from '../products/ProductCard'; 
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
const ProductList = () => {
  
  const { products } = useContext(CartContext);

  
  return (
    <div className="flex">
        
      <div className="w-1/4 bg-gray-100 ">
        <SideNav />
      </div>
      <div>
      </div>
      

      <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
      
        <ProductCard/>
      
      </div>
    </div>
  );
};

export default ProductList;
