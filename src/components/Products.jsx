import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import "./collections/Collections.css";
import { ShopContext } from "../context/shop-context";

const Products = ({ data }) => {
  const { id, image, brand, title, desc, price, discount, category } = data;
  const { cartItems, addToCart } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  const disocuntedPrice = price * (discount / 100);
  const newPrice = price - disocuntedPrice;

  return (
    <>
      <div className={discount >= 50 ? "flash-sale" : ""}>
        {discount >= 50 && <h1>**FLASH SALE PRODUCT!! 50% DISCOUNT OR MORE</h1>}
        <div className="product-card">
          <div className="product-image">
            <img src={image} alt="product-image" />
          </div>

          <div className="product-details">
            {/* <div className="flash">
            </div> */}
            <p className="product-brand">{brand}</p>
            <h1 className="product-title">{title}</h1>
            <p className="product-description">{desc}</p>

            <p className="discountedprice">
              <span className="mobile-old-price">
                <del>${price}</del>
              </span>{" "}
              ${newPrice} <span className="discount">{discount}%</span>
            </p>

            <p className="product-price">
              <del>${price}</del>
            </p>

            <div className="buttons">
              <div className="btn-addtocart">
                <button onClick={() => addToCart(id)}>
                  <BsCart2 />
                  <span className="cart-text">
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                  </span>
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
