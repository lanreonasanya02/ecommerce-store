import React from "react";
import { BsCart2 } from "react-icons/bs";
import "./collections/Collections.css";

const Products = ({ data }) => {
  const { id, image, brand, title, desc, price, discount, category } = data;

  const disocuntedPrice = price * (discount / 100);
  const newPrice = price - disocuntedPrice;

  //   Adding FLASH DEAL css class to product over or equal to 50%

  return (
    <>
      <div className={discount >= 50 ? "flash-sale" : ""}>
        {discount >= 50 && <h1>FLASH SALE!!!</h1>}
        {discount >= 50 && <h4>Discounts more than 50%</h4>}
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
      </div>
    </>
  );
};

export default Products;
