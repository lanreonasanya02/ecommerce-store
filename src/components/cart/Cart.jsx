import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import { GrClose } from "react-icons/gr";
import CartItem from "./cart-item";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <section className="cart-section">
      <div className="cart-items-modal">
        <div className="cart-menu">
          <h1>Your Cart Items</h1>
          <button className="close-modal">
            <GrClose className="close-window" />
          </button>
        </div>

        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      <div className="overlay hidden"></div>
    </section>
  );
};

export default Cart;
