import React from "react";
import "./topcategory.css";
import TopCat1 from "../../../assets/Images/TopCate1.png";

const Topcategory = (props) => {
  const { title, price, ...args } = props;
  return (
    <div {...args}>
      <div className="topcat-ctn">
        <div className="topcat-top">
          <div className="img-ctn1">
            <img src={TopCat1} alt="top category image" />
            <button>View Shop</button>
          </div>
          <div className="img-ctn2" />
        </div>
        <div className="price-tag">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Topcategory;
