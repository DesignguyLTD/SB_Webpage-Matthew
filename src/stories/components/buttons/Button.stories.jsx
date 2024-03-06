import React from "react";
import Button from "./Button";
import { userEvent, within, expect, fn } from "@storybook/test";

export default {
  title: "Homepage/Button",
  component: Button,
  args: {
    label: "Shop Now",
    onClick: fn(),
  },
  argTypes: {
    backgroundColor: {
       control: { type: 'color'}, 
    }
  }
};

const Template = (args) => <Button {...args} />;


/*Intro Button*/
export const Intro = Template.bind({});
Intro.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onClick).toHaveBeenCalled();
};

/*Shop Button*/
export const Shop = Template.bind({});
Shop.args = {
  variant: "shop",
  label: "Add To Cart",
};
Shop.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onClick).toHaveBeenCalled();
};

/*Discount Button*/
export const Discount = Template.bind({});
Discount.args = {
  variant: "discount",
};
Discount.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onClick).toHaveBeenCalled();
};

/*Update Button*/
export const Update = Template.bind({});
Update.args = {
  variant: "update",
};
Update.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(args.onClick).toHaveBeenCalled();
};
