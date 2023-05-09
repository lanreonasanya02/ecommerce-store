import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ShopContext } from "../../context/shop-context";

const Navbar = () => {
  const { getTotalBasket } = useContext(ShopContext);
  const totalBasket = getTotalBasket();

  return (
    <nav>
      <div className="desktop-navbar">
        <div className="navbar-brand">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-links">
          <Link to="/">Collections</Link>
          <Link to="/about">About</Link>
          {/* <Link to="/men">Men</Link> */}
          <Link to="/contact">Contact</Link>
        </div>

        <div className="navbar-cart">
          <Link to="/cart" className="cart-link">
            <BsCart2 className="cart" />
            <span className="cart-basket">{totalBasket}</span>
          </Link>
          <FaUserCircle className="user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// {!!data && cartItems[data.id] > 0} && <>{cartItems[data.id]}</>
