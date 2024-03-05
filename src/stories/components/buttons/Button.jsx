import React from "react";
import "./button.css";

const Button = (props) => {
  const { variant, label, backgroundColor, ...rest } = props;

  return (
    <button className={`button ${variant} ${backgroundColor}`} {...rest}>
      {label}
    </button>
  );
};

export default Button;
