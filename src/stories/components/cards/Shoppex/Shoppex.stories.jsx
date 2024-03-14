import React from "react";
import Shoppex from "./Shoppex";

export default {
  title: "Homepage/Cards",
  component: Shoppex,
};

const Template = (args) => <Shoppex {...args} />;

export const ShoppexCard = Template.bind({});

ShoppexCard.args = {
  title: "24/7 Support",
  texts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Massa purus gravida.",
}
