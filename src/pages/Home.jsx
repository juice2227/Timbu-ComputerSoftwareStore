import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Newletter from '../components/newletter/Newletter';
import ProductList from '../components/products/ProductList';

export default function Home() {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Navbar />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <ProductList />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Newletter />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Footer />
      </div>
    </div>
  );
}
