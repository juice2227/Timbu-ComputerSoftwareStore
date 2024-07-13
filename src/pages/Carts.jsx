import Newletter from '../components/newletter/Newletter'
import Footer from '../components/footer/Footer'
import Cart from '../components/cart/Cart'


export default function Carts() {
  return (
    <div>
      <Cart />
      <div className="mb-4">
        <Newletter />
      </div>
      
      <Footer />
    </div>
  )
}
