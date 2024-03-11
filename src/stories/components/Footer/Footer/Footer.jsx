import React from "react";
import "./Footer.css";
import Email from "../EmailSection/Email";
import {
  Careline,
  Categories,
  Pages,
} from "../ContactSection/ContactSection.stories";
import { Input } from "../EmailSection/Email.stories";
import { CopyrightText } from "../copyright/copyright.stories";
const Footer = (props) => {
  const {categories,careline,pages,copyright } = props;

  return (
    <div className="footer">
      <div className="contact-infos">
        <Email className="mail"
          {...Input.args}
        />
        <Categories
        {...categories}
        />
        <Careline 
        {...careline}
        />
        <Pages className="pages"
        {...pages}
        />
      </div>
      <div>
      <CopyrightText
      {...copyright}
      />
      </div>
    </div>
  );
};

export default Footer;
