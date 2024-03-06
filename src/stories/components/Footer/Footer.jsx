import React from "react";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = (props) => {
  const { variant, heading, links, ...rest } = props;
  const handleClick = () => {
    console.log('mail has been submitted')
  }
  return (
    <div className="footer_body" {...rest}>
      <div className="sections">
        <div className="contact">
          <h2>Hekto</h2>
          <form action="#">
            <input className="text" type="email" id='email' placeholder=" Enter email Address" />
            <input type="reset" value="Sign Up" className="button" onClick={handleClick} />
          </form>
          <p className="Cont-p">Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
        <div className="section-1">
          <div classname="sect-head">
            <h3>Categories</h3>
          </div>
          <div className="sect-body">
            <div>
              <a href="#">Laptops & Computers</a>
            </div>
            <div>
              <a href="#">Cameras and Photography</a>
            </div>
            <div>
              <a href="#">Smart Phones & Tablets</a>
            </div>
            <div>
              <a href="#">Video Games and Consoles</a>
            </div>
            <div>
              <a href="#">Waterproof Headphones</a>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div classname="sect-head">
            <h3>Customer Care</h3>
          </div>
          <div className="sect-body">
            <div>
              <a href="#">My Account</a>
            </div>
            <div>
              <a href="#">Discount</a>
            </div>
            <div>
              <a href="#">Returns</a>
            </div>
            <div>
              <a href="#">Order Tracking</a>
            </div>
            <div>
              <a href="#">Waterproof Headphones</a>
            </div>
          </div>
        </div>
        <div className="section-3">
          <div classname="sect-head">
            <h3>Pages</h3>
          </div>
          <div className="sect-body">
            <div>
              <a href="#">Blog</a>
            </div>
            <div>
              <a href="#">Browse the Shop</a>
            </div>
            <div>
              <a href="#">Category</a>
            </div>
            <div>
              <a href="#">Pre-Built Pages</a>
            </div>
            <div>
              <a href="#">Visual Composer Elements</a>
            </div>
            <div>
              <a href="#">WooCommerce Pages</a>
            </div>
          </div>
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
                  <TbBrandFacebookFilled
                    style={{
                      color: "white",
                      width: "12px",
                      height: "12px",
                      margin: "4px",
                    }}
                  />
                </a>
              </div>
              <div className="logo_ctn">
                <a href="#">
                  <RiInstagramFill
                    style={{
                      color: "white",
                      width: "12px",
                      height: "12px",
                      margin: "4px",
                    }}
                  />
                </a>
              </div>
              <div className="logo_ctn">
                <a href="#">
                  <FaTwitter
                    style={{
                      color: "white",
                      width: "12px",
                      height: "12px",
                      margin: "4px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Footer;

