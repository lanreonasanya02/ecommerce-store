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

  const getGrandTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        const discounted = itemInfo.price * (itemInfo.discount / 100);
        const newPrice = itemInfo.price - discounted;
        totalAmount += cartItems[item] * newPrice;
      }
    }
    return totalAmount;
  };

  const getTotalBasket = () => {
    let totalBasket = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        PRODUCTS.find((product) => product.id === Number(item));
        totalBasket += cartItems[item];
      }
    }
    return totalBasket;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartCountChange = (newCount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newCount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartCountChange,
    getGrandTotalAmount,
    getTotalBasket,
  };

  // To define all the states and functions that will be used
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
