import React from "react";
import "./trendDiscount.css";
import TrendDiscount1 from "../../../assets/Images/TrendDiscount1.png";

const TrendDiscount = (props) => {
  const { discount, ...args } = props;

  return (
    <div {...args}>
      <div>
          <h3>{discount}</h3>
        <div>
          <a href="#"> </a>
          <img src={TrendDiscount1} alt="trend discount item" />
        </div>
      </div>
    </div>
  );
};

export default TrendDiscount;
