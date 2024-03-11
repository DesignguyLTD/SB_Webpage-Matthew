import React from "react";
import "./copyright.css";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Copyright = (props) => {
  const { heading, copyrightText, ...args } = props;
  return (
    <div className="copyright" {...args}>
      <div className="inner-ctn">
        <p>
          <FaRegCopyright />
          {copyrightText}
        </p>
        <div className="social-links">
          <div className="link-bg">
            <a href="#">
              <FaFacebookF
                style={{ color: "white"}}
                size="12"
              />
            </a>
          </div>
          <div className="link-bg">
            <a href="#">
              <FaInstagram
                style={{ color: "white"}}
                size="12"
              />
            </a>
          </div>
          <div className="link-bg">
            <a href="#">
              <FaTwitter
                style={{ color: "white"}}
                size="12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
