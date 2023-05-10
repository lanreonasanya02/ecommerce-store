import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import { GrClose } from "react-icons/gr";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getGrandTotalAmount } = useContext(ShopContext);
  const totalAmount = getGrandTotalAmount();

  return (
    <section className="cart-section">
      <div className="cart-items-modal">
        <h1 className={totalAmount === 0 ? "hidden" : ""}>Your Cart Items</h1>

        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}

        {totalAmount > 0 ? (
          <div className="total-amount">
            <h2>
              Total Basket: <span>${Math.floor(totalAmount)}</span>
            </h2>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button className="checkout">Checkout</button>
          </div>
        ) : (
          <div className="total-amount">
            <h1>Your Cart Is Empty!</h1>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
