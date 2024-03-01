import React from "react";
import "./button.css";

const Button = (props) => {
  const { variant, children, ...rest } = props;
  //const handleClick = () => console.log("This button was clicked"); 

  return (
    <button className={`button ${variant}`} {...rest} /*onClick={handleClick}*/>
      {children}
    </button>
  );
};

export default Button;
