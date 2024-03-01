import React from "react";
import Button from "./Button";
//import { withActions } from '@storybook/addon-actions/decorator';
//import { userEvent, waitFor, within } from '@storybook/testing-library';


export default {
  title: "Homepage/Button",
  component: Button,
  args: {
    children: "Shop Now",
    argTypes: { onClick: { action: 'you just clicked this button' } },
  }
}
const Template = (args) => <Button {...args} />;

export const Intro = Template.bind({});
Intro.args = {
  variant: "intro",
};

export const Cart = Template.bind({});
Cart.args = {
  variant: "cart",
  children: "Add To Cart",
};

export const Discount = Template.bind({});
Discount.args = {
  variant: "discount",
};

export const Update = Template.bind({});
Update.args = {
  variant: "update",
};
