import React from "react";
import "./trend.css";
import Trend1 from "../../../assets/Images/Trend1.png";

const Trend = (props) => {
  const { title, newPrice, oldPrice, ...args } = props;
  return (
    <div {...args}>
      <div className="card-ctn">
        <div className="image-ctn">
          <img src={Trend1} alt="trendin product" />
        </div>
        <div className="btm-trend">
          <p className="title">{title}</p>
          <span className="price-sect">
            <p className="newprice">{newPrice}</p>
            <p className="oldprice">{oldPrice}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Trend;
