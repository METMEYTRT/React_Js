import React, { useState, useEffect } from "react";
import logo1 from "../images/icons/logo-03.png";
import close2 from "../images/icons/icon-close2.png";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Header = ({ setShowCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div
        className={`container-menu-desktop ${isScrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backgroundColor: isScrolled ? "white" : "transparent",
          transition:
            "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">
              Free shipping for standard order over $100
            </div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                My Account
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                EN
              </a>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                KH
              </a>
            </div>
          </div>
        </div>

        <div
          className="wrap-menu-desktop"
          style={{
            backgroundColor: isScrolled ? "white" : "transparent",
            transition:
              "background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
          }}
        >
          <nav className="limiter-menu-desktop container">
            <Link to="/home" className="logo">
              <img src={logo1} alt="IMG-LOGO" />
            </Link>

            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/shop">Shop</Link>
                </li>

                <li className="label1" data-label1="hot">
                  <Link to="/features">Features</Link>
                </li>

                <li>
                  <Link to="/blog">Blog</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                data-notify={cart.length}
                onClick={() => setShowCart(true)}
              >
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="wrap-header-mobile">
        <div className="logo-mobile">
          <a href="index.html">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </div>

        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search"></i>
          </div>

          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify="2"
          >
            <i className="zmdi zmdi-shopping-cart"></i>
          </div>

          <a
            href="#"
            className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
            data-notify="0"
          >
            <i className="zmdi zmdi-favorite-outline"></i>
          </a>
        </div>

        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      <div className="menu-mobile">
        <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">
              Free shipping for standard order over $169
            </div>
          </li>

          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                KH
              </a>
            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          <li>
            <a href="index.html">Home</a>
            <ul className="sub-menu-m">
              <li>
                <a href="index.html">Homepage 1</a>
              </li>
              <li>
                <a href="home-02.html">Homepage 2</a>
              </li>
              <li>
                <a href="home-03.html">Homepage 3</a>
              </li>
            </ul>
            <span className="arrow-main-menu-m">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>

          <li>
            <a href="product.html">Shop</a>
          </li>

          <li>
            <a
              href="shoping-cart.html"
              className="label1 rs1"
              data-label1="hot"
            >
              Features
            </a>
          </li>

          <li>
            <a href="blog.html">Blog</a>
          </li>

          <li>
            <a href="about.html">About</a>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
