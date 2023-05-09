import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
// import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../Products";

const Navbar = () => {
  // const { cartItems } = useContext(ShopContext);

  return (
    <nav>
      <div className="desktop-navbar">
        <div className="navbar-brand">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-links">
          <Link to="/">Collections</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <BsCart2 className="cart" />
            <span className="cart-basket">
              {" "}
              0
              {/* {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                  const { id } = product;
                  const cartItemAmount = cartItems[id];
                  return cartItemAmount > 0 && <>{cartItemAmount}</>;
                }
              })} */}
            </span>
          </Link>
          <FaUserCircle className="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
