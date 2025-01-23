import React from "react";
import "./Footer.css";
import { CiYoutube } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="foo">
        <div className="foo_item">
          <div className="topFooter">
            <h2 style={{ color: "white", fontWeight: "700" }}>
              Be the First to Know
            </h2>
            <h3>Sign up for updates for Meta Mussse</h3>
            <form className="myform">
              <input
                type="email"
                className="emailInput"
                name="email"
                required
                placeholder="Enter Your e-mail..."
              />
              <button className="subscribeBtn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="foo_item">
          <h3 className="foothead">QUICK LINKS</h3>
          <div className="foo_item_div">
            <div>
              <a href="#top">Orders & Shopping</a>
            </div>
            <div>
              <a href="#top">Join/Login as a Seller</a>
            </div>
            <div>
              <a href="#top">Payment & Pricing</a>
            </div>
            <div>
              <a href="#top">Franchise Opportunity</a>
            </div>
            <div>
              <a href="#top">Return & Refunds</a>
            </div>
            <div>
              <a href="#top">FAQs</a>
            </div>

            <div>
              <a href="#top">Privacy Policy</a>
            </div>
            <div>
              <a href="#top">Terms & Conditions</a>
            </div>
          </div>
        </div>
        <div className="foo_item last">
          <h3 className="foothead">FOLLOW US</h3>
          <div className="contact_us">
            <div className="contact_us_item">
              <a href="">
                <CiYoutube className="logo" />
              </a>
            </div>
            <div className="contact_us_item">
              <a href="">
                <SlSocialFacebook className="logo" />
              </a>
            </div>
            <div className="contact_us_item">
              <a href="">
                <FaInstagram className="logo" />
              </a>
            </div>
            <div className="contact_us_item">
              <a href="">
                <FaLinkedinIn className="logo" />
              </a>
            </div>
            <div className="contact_us_item">
              <a href="">
                <FaTwitter className="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
