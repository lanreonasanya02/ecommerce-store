import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import "./collections/Collections.css";
import { ShopContext } from "../context/shop-context";

const Products = ({ data }) => {
  const { id, image, brand, title, desc, price, discount, category } = data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartCountChange,
    getGrandToTalAmount,
  } = useContext(ShopContext);

  const disocuntedPrice = price * (discount / 100);
  const newPrice = price - disocuntedPrice;

  return (
    <>
      <div className={discount >= 50 ? "flash-sale" : ""}>
        {discount >= 50 && <h1>FLASH SALE!!! Discounts more than 50%</h1>}

        <div className="product-card">
          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>

          <div className="product-details">
            <p className="product-brand">{brand}</p>
            <h1 className="product-title">{title}</h1>
            <p className="product-description">{desc}</p>

            <p className="discountedprice">
              ${newPrice} <span className="discount">{discount}%</span>
            </p>

            <p className="product-price">
              <del>${price}</del>
            </p>

            <div className="buttons">
              <div className="btn-quantity">
                <button
                  onClick={() => (cartItems[id] > 0 ? removeFromCart(id) : 0)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={cartItems[id]}
                  onChange={(e) => updateCartCountChange(e.target.value, id)}
                />
                <button onClick={() => addToCart(id)}>+</button>
              </div>

              <div className="btn-addtocart">
                <button onClick={() => addToCart(id)}>
                  <BsCart2 />
                  <span className="cart-text">Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
