import React, { useState, createContext } from "react";
import { PRODUCTS } from "../Products";

export const ShopContext = createContext(null);

// Set initial count in cart basket
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartCountChange = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const getGrandToTalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }

      return totalAmount;
    }
  };

  const deleteProduct = (itemId) => {
    PRODUCTS.filter((product) => product.id !== itemId);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartCountChange,
    getGrandToTalAmount,
    deleteProduct,
  };

  // To define all the states and functions that will be used
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
