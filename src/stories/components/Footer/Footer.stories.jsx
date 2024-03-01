import React from "react";
import Footer from "./Footer";

export default {
  title: "Homepage/Footer",
  component: Footer,
  args: {
    children: "Footer",
  },
};

const Template = args => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "Hekto",
};
