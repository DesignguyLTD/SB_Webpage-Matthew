/*import React from "react";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = (props) => {
  const { variant, children, ...rest } = props;

  return (
    <div className="footer_body">
      <div className="center_ctn">
        <div className="contact_sect">
          <h3>Hekto</h3>
          <form action="#" className="input_ctn">
            <input
              className="text_input"
              type="email"
              placeholder="   Enter Email Address"
            />
            <input className="submit_btn" type="submit" value="Sign Up" />
          </form>
          <p className="contact_text">Contact Info</p>
          <p className="contact_address">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>
        <div className="footer_sections">
          <h5>Categories</h5>
          <ul>
            <li>
              <a href="#">Laptops & Computers</a>
            </li>
            <li>
              <a href="#">Cameras & Photography</a>
            </li>
            <li>
              <a href="#">Smart Phones & Tablets</a>
            </li>
            <li>
              <a href="#">Video Games & Consoles</a>
            </li>
            <li>
              <a href="#">Waterproof Headphones</a>
            </li>
          </ul>
        </div>
        <div className="footer_sections">
          <h5>Customer Care</h5>
          <ul>
            <li>
              <a href="#">My Accounts</a>
            </li>
            <li>
              <a href="#">Discount</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Orders History</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>
        <div className="footer_sections">
          <h5>Pages</h5>
          <ul>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Browse the Shop</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Pre-Built Pages</a>
            </li>
            <li>
              <a href="#">Visual Composer Element</a>
            </li>
            <li>
              <a href="#">WooCommerce Pages</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="btm_footer">
        <div className="btm_ctn">
          <div className="copyright">
            <FaRegCopyright />
            <p>Webecy-All Rights Reserved</p>
          </div>
          <div className="logos">
            <div className="logo_ctn">
              <a href="#">
              <TbBrandFacebookFilled style={{ color: 'white', width: '12px', height: '12px', margin: '4px' }} />
              </a>
            </div>
            <div className="logo_ctn">
              <a href="#">
              <RiInstagramFill style={{ color: 'white', width: '12px', height: '12px', margin: '4px' }} />
              </a>
            </div>
            <div className="logo_ctn">
              <a href="#">
              <FaTwitter style={{ color: 'white', width: '12px', height: '12px', margin: '4px' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
