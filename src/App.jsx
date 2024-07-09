import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkouts from "./pages/Checkouts";

import Orders from "./pages/Orders";
import Carts from "./pages/Carts";


function App() {
  

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/products" element= {<Products/>}/>
    <Route path="/checkout" element= {<Checkouts/>}/>
    <Route path="/cart" element= {<Carts/>}/>
    <Route path="/order" element= {<Orders/>}/>
  </Routes>
  
  </BrowserRouter>  
      
  
  )
}

export default App
