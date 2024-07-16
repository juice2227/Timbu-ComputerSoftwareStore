import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newletter/Newletter';
import ProductCard from '../components/products/ProductList';
import SideNav from '../components/sidenav/SideNav';


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-5">
        <Navbar />
      </div>
      <div className="flex mb-5">
        
        <div className="w-3/4">
          <ProductCard />
        </div>
      </div>
      <div className="mb-5">
        <Newsletter />
      </div>
      <div className="mb-5">
        <Footer />
      </div>
      
    </div>
  );
}
