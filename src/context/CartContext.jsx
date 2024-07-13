/* eslint-disable react/prop-types */
import { createContext } from 'react'
import { useState, useEffect} from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const AppProvider = ({children}) =>{
  const [cartItems, setCartItems] = useState(() => {// Get initial cart items from localStorage
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
});

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (item) => {
    // Check if item with the same id and size already exists in the cart
      const existingItem = cartItems.find((i) => i.id === item.id && i.size === item.size);

      if (existingItem) {
        setCartItems(
          cartItems.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        );
      } else {
        setCartItems([...cartItems, { ...item }]);
      }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    toast.success("Item added to cart")
  };

  const handleRemoveFromCart = (itemId, itemSize) => {
    toast.success("Item removed to cart")
    setCartItems(cartItems.filter((item) => item.id !== itemId || item.size!==itemSize));
  };

  const handleUpdateQuantity = (itemId, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(change, 0) } : item
      )
    );
  };
  const handleClearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity,
        handleClearCart,
        subtotal: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  )

}

export default CartContext