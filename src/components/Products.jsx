import React from "react";
import { BsCart2 } from "react-icons/bs";
import "./collections/Collections.css";

const Products = ({ data }) => {
  const { id, image, brand, title, desc, price, discount, category } = data;

  console.log(id);

  return (
    <>
      <div className="product-card">
        <div className="product-image">
          <img src={image} alt="product-image" />
        </div>

        <div className="product-details">
          <p className="product-brand">{brand}</p>
          <h1 className="product-title">{title}</h1>
          <p className="product-description">{desc}</p>

          <p className="discountedprice">
            ${price - discount} <span className="discount">{discount}%</span>
          </p>

          <p className="product-price">
            <del>${price}</del>
          </p>

          <div className="buttons">
            <div className="btn-quantity">
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>

            <div className="btn-addtocart">
              <button>
                <BsCart2 />
                <span className="cart-text">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
