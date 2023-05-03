import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="desktop-navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-links">
        <Link to="/">Collections</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-cart">
        <Link to="/cart">
          <BsCart2 className="cart" />
          {/* <span className="cart-amount">
            <sup>0</sup>
          </span> */}
        </Link>
        <FaUserCircle className="user" />
      </div>
    </nav>
  );
};

export default Navbar;
