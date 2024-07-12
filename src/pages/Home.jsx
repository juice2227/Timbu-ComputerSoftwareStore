import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Newsletter from '../components/newletter/Newletter';
import ProductList from '../components/products/ProductList';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-5">
        <Navbar />
      </div>
      <div className="mb-5">
        <ProductList />
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
