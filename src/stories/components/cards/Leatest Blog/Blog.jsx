import React from "react";
import Blog1 from "../../../assets/Images/Blog1.png";
import "./blog.css";

const Blog = (props) => {
  const { image, title, date, blogger, about, ...args } = props;

  return (
    <div {...args}>
      <div className="Card">
        <div className="images">
          <img src={Blog1} alt="images" />
        </div>
        <div className="blogger-details">
          <span className="blogger">{blogger}</span>
          <span className="date">{date}</span>
        </div>
        <h3 className="title">{title}</h3>
        <p className="about">{about}</p>
        <a href="#">Read More</a>
      </div>
    </div>
  );
};

export default Blog;
