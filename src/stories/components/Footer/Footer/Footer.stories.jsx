import React from "react";
import Footer from "./Footer";
import {
  Categories,
  Careline,
  Pages,
} from "../ContactSection/ContactSection.stories";
import { Input } from "../EmailSection/Email.stories";
import { CopyrightText } from "../copyright/copyright.stories";

export default {
  title: "Homepage/Footer",
  component: Footer,
};

export const footer = {
  args: {
    mail: {
      ...Input.args,
    },
    categories: {
      ...Categories.args,
    },
    careline: {
      ...Careline.args,
    },
    pages: {
      ...Pages.args,
    },
    copyright: {
      ...CopyrightText.args,
    },
  },
};
