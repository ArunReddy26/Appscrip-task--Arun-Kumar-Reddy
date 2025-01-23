import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiAtom } from "react-icons/bi";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <BiAtom className="logoicon" />

        <h1 className="logo">ShopEasy</h1>
        <div className="navbar-icons">
          <CiSearch className="icon" />
          <CiHeart className="icon" />
          <IoBagRemoveOutline className="icon" />
          <CgProfile className="icon" />
        </div>
      </div>

      <div className="navbar-bottom">
        <nav className="nav-menu">
          <a href="#shop">Shop</a>
          <a href="#skills">Skills</a>
          <a href="#stories">Stories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <hr className="divider" />

        <header>
          <p className="mainheading">
            Discover amazing products at your fingertips!
          </p>
          <p>
            Discover our exclusive range of premium products, carefully curated
            to suit all your needs.Shop now and explore the latest trends in
            fashion, electronics, home decor, and more!" From everyday
            essentials to luxury items, we have something for everyone. Discover
            unbeatable deals on top brands, available only on our website! Find
            the perfect product for your lifestyle browse through our wide
            selection today.
          </p>
        </header>

        <hr className="divider1" />
      </div>
    </div>
  );
}

export default Navbar;
