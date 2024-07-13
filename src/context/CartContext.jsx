/* eslint-disable react/prop-types */
import { createContext } from 'react'
import { useState, useEffect} from "react";

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
    // Check if item already exists in cart
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      );
    } else {
      setCartItems([...cartItems, {...item}]);
    }
    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));

  };

  const handleUpdateQuantity = (itemId, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(change, 0) } : item
      )
    );
  };

  return (
    <CartContext.Provider 
      value={{
        cartItems,
        setCartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateQuantity,
        subtotal: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  )

}

export default CartContext