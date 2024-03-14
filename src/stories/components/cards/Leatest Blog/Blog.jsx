import React from "react";
import Blog1 from "../../../assets/Images/Blog1.png";
import { FaPenNib } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

import "./blog.css";

const Blog = (props) => {
  const { image, title, dates, blogger, about, ...args } = props;

  return (
    <div {...args}>
      <div className="Card">
        <div className="images">
          <img src={Blog1} alt="images" />
        </div>
        <div className="btm-ctn">
          <div className="blogger-details">
            <span className="blogger">
              <FaPenNib className="pen" />
              {blogger}
            </span>
            <span className="dates">
              <MdOutlineDateRange className="calendar" />
              {dates}
            </span>
          </div>
          <div className="blog-texts">
          <h3 className="blog-title">{title}</h3>
          <p className="about">{about}</p>
          <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
