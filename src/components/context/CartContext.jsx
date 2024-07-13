import { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);


const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/https://timbu-get-all-products.reavdev.workers.dev/?organization_id=8347d91c502a4a5a92f0f85951d2557a&reverse_sort=false&page=1&size=10&Appid=EBUZO6O78AP33DC&Apikey=6c29885f9d4d4469929c4e8c9d463dcf20240710083326482098');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.items);
      setApiData(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInCart,
        apiData
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
