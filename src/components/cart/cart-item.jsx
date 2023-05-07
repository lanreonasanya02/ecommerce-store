import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./Cart.css";
import { BsTrash } from "react-icons/bs";

const CartItem = ({ data }) => {
  const { id, image, brand, title, desc, price, discount, category } = data;
  const { cartItems, deleteProduct } = useContext(ShopContext);

  const disocuntedPrice = price * (discount / 100);
  const newPrice = price - disocuntedPrice;

  return (
    <div className="cart-items" key={id}>
      <img src={image} alt="product-image" />

      <div className="cart-product-desc">
        <p>
          {brand} - {title}
        </p>

        <p>
          ${newPrice} x {cartItems[id]}
        </p>
      </div>

      <div className="cart-price">
        <p>${newPrice * cartItems[id]}</p>
      </div>

      <div className="remove-from-cart">
        <BsTrash className="remove-item" onClick={() => deleteProduct(id)} />
      </div>
    </div>
  );
};

export default CartItem;
