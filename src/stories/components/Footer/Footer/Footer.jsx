import React from "react";
import "./Footer.css";
import Email from "../EmailSection/Email";
import {
  Careline,
  Categories,
  Pages,
} from "../ContactSection/ContactSection.stories";
import { CopyrightText } from "../copyright/copyright.stories";
const Footer = (props) => {
  const { categories, careline, pages, copyright, mail } = props;

  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="contact-infos">
          <Email className="mail" {...mail} />
          <Categories {...categories} />
          <Careline {...careline} />
          <Pages className="pages" {...pages} />
        </div>
      </div>
        <div>
          <CopyrightText {...copyright} />
        </div>
    </div>
  );
};

export default Footer;
