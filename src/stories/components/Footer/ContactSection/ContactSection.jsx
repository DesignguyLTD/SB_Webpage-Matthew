import React from "react";
import "./contactSection.css";

const ContactSection = (props) => {
  const { variant, heading, links, ...rest } = props;

  return (
    <div className="section-body" {...rest} >
      <h3>{heading}</h3>
      <div className="link-list">
        {links.map((link, index) => (
          <a href="#" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
