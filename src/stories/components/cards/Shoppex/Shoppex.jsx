import React from "react";
import "./shoppex.css";
import Shoppex1 from "../../../assets/Images/Shoppex1.png";

const Shoppex = (props) => {
  const { texts, title, ...args } = props;

  return (
    <div {...args}>
      <div className="Shoppex-ctn">
        <div className="Shopimg-ctn">
          <img src={Shoppex1} alt="Shoppex card" />
        </div>
        <div className="Shopbtm-ctn">
        <h3>{title}</h3>
        <div className="Shop-text">
          <p>{texts}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppex;
