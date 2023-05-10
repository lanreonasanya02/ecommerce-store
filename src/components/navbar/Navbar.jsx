import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "../navbar/Navbar.css";
import { BsCart2 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ShopContext } from "../../context/shop-context";

const Navbar = () => {
  // Logic for cart basket
  const { getTotalBasket } = useContext(ShopContext);
  const totalBasket = getTotalBasket();

  // Logic for side navbar
  // Open the sidenav
  function openNav() {
    document.getElementById("mySidenav").style.width = "75%";
  }

  // Close/hide the sidenav
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <>
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
              <span className="cart-basket">{totalBasket}</span>
            </Link>
            <FaUserCircle className="user" />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="mobile-nav">
        <div id="mySidenav" className="sidenav">
          <Link to="#" class="closebtn" onClick={closeNav}>
            &times;
          </Link>
          <div className="sidenav-links">
            <Link to="/">Collections</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* <!-- Use any element to open the sidenav --> */}
        <div className="container">
          <div className="navbar-details">
            <div className="navbar-brand-links">
              <span onClick={openNav} className="hamburger col-6 text-end">
                <i class="bi bi-list"></i>
              </span>
              <img src={logo} alt="logo" className="logo-mobile" />
            </div>

            <div className="navbar-cart-user navbar-cart">
              <Link to="/cart" className="cart-link">
                <BsCart2 className="cart" />
                <span className="cart-basket">{totalBasket}</span>
              </Link>
              <FaUserCircle className="user" />
            </div>
          </div>
        </div>
        <div id="overlay"></div>
      </nav>
    </>
  );
};

export default Navbar;
