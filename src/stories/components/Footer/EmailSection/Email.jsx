import React from "react";
import "./email.css";

const Email = (props) => {
  const { Address, ContactInfo, CompanyName, ...args } = props;
  return (
    <div {...args} className="Email-section">
      <h2>{CompanyName}</h2>
      <form action="#">
        <input type="email" id="text" for="inputtext" className="text-field" />
        <input
          type="reset"
          id="button"
          for="button"
          className="btn"
          value="Sign Up"
        />
      </form>
      <p>{ContactInfo}</p>
      <p className="address">{Address}</p>
    </div>
  );
};

export default Email;
