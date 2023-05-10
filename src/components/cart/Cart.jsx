import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import { GrClose } from "react-icons/gr";
import CartItem from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotal, getGrandTotal } = useContext(ShopContext);
  const totalAmount = getTotal();
  const grandTotal = getGrandTotal();
  const tax = Math.floor(totalAmount * 0.15);

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
            <div className="sub-total">
              <div className="sub">
                <p className="sub-property">Sub-total: </p>
                <p className="sub-value">${Math.floor(totalAmount)}</p>
              </div>

              <div className="sub">
                <p className="sub-property">Tax (15%): </p>
                <p className="sub-value">${tax}</p>
              </div>

              <div className="sub">
                <p className="sub-property">Shipping fees: </p>
                <p className="sub-value">$20</p>
              </div>
            </div>
            <h2>
              Total Basket: <span>${Math.floor(grandTotal)}</span>
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
