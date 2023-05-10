import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./Cart.css";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ data }) => {
  const { id, image, brand, title, price, discount } = data;
  const { cartItems, addToCart, removeFromCart, updateCartCountChange } =
    useContext(ShopContext);

  const discountedPrice = price * (discount / 100);
  const newPrice = price - discountedPrice;

  return (
    <div className="cart-items" key={id}>
      <img src={image} alt="product-image" />

      <div className="cart-product-desc">
        <p>
          {brand} - {title}
        </p>

        <p>${newPrice}</p>

        <div className="btn-quantity">
          <button onClick={() => (cartItems[id] > 0 ? removeFromCart(id) : 0)}>
            -
          </button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartCountChange(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>

      <div className="cart-price">
        <p>${newPrice * cartItems[id]}</p>
      </div>
    </div>
  );
};

export default CartItem;
