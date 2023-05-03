import React from "react";
import sneaker from "../../images/image-product-1.jpg";
import thumb1 from "../../images/image-product-1-thumbnail.jpg";
import thumb2 from "../../images/image-product-2-thumbnail.jpg";
import thumb3 from "../../images/image-product-3-thumbnail.jpg";
import thumb4 from "../../images/image-product-4-thumbnail.jpg";

import { BsCart2 } from "react-icons/bs";
import "../collections/Collections.css";

const Collections = () => {
  return (
    <>
      <div className="filter">
        Filter Category:{" "}
        <select name="" id="">
          <option value="">All</option>
          <option value="">Men</option>
          <option value="">Ladies</option>
        </select>
      </div>

      <div className="product-card">
        <div className="product-image">
          <img src={sneaker} alt="shoe" />
          <div className="thumbnails">
            <img src={thumb1} alt="" />
            <img src={thumb2} alt="" />
            <img src={thumb3} alt="" />
            <img src={thumb4} alt="" />
          </div>
        </div>

        <div className="product-details">
          <p className="product-brand">Sneaker Company</p>
          <h1 className="product-title">Fall Limited Edition Sneakers</h1>
          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <p className="discountedprice">
            ₦12,500.00 <span className="discount">50%</span>
          </p>

          <p className="product-price">
            <del>₦25,000.00</del>
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

export default Collections;
