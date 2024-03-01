import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./navbar.css";

const Navbar = (props) => {
  const { variant, children, ...rest } = props;

  return (
    <nav>
      <div className="top_nav">
        <div className="innertop_ctn">
          <div className="details">
            <a href="#" className="mail">
              <span>
                <IoMailOutline />
              </span>
              <p>mhhosonul@gmail.com</p>
            </a>
            <a href="#" className="contact">
              <span>
                <FaPhoneVolume />
              </span>
              <p>(12345)67890</p>
            </a>
          </div>
          <div className="inp_ctn">
            <div>
              <select>
                <option>English</option>
                <option>Hausa</option>
                <option>Yoruba</option>
                <option>Igbo</option>
              </select>
            </div>
            <div>
              <select>
                <option>USD</option>
                <option>NGN</option>
                <option>CND</option>
                <option>EUR</option>
              </select>
            </div>
            <a href="#" className="login">
              <p>Login</p>
              <div>
                <FaRegUser />
              </div>
            </a>
            <a href="#" className="likes">
              <p>Wishlist</p>
              <div>
                <FaRegHeart />
              </div>
            </a>
            <a href="#" className="cart">
              <IoCartOutline />
            </a>
          </div>
        </div>
      </div>
      <div className="btm_nav">
        <div className="inner_ctn">
          <h3>Hekto</h3>
          <ul>
            <li className="home_dropdown">
              <a href="#">Home</a>
              <IoIosArrowDown />
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="search_info">
            <input type="search" for="search" id="search" />
            <button>
              <IoIosSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
