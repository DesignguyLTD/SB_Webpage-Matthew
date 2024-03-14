import React from "react";
import "./featproduct.css";
import FeatPro1 from "../../../assets/Images/FeatPro1.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FaSearchPlus } from "react-icons/fa";


const FeatProduct = (props) => {
  const { title, code, price, ...args } = props;

  return (
    <div {...args}>
      <div className="feat-ctn">
        <div className="feat-icons">
          <div><FiShoppingCart style={{width: "14px", height: "14px", color:"linear-gradient(rgba(19, 137, 255, 1),rgba(29, 180, 231, 1))"}} /></div>
          <div><FaRegHeart /></div>
          <div><FaSearchPlus /></div>
        </div>
        <div>
          <img src={FeatPro1} alt="Feature Product image" />
          <button>View Details</button>
        </div>
        <div>
          <p>{title}</p>
          <div>
            <div className="col1-ctn" />
            <div className="col2-ctn" />
            <div className="col3-ctn" />
          </div>
          <div>
            <p>Code:{code}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatProduct;
