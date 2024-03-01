import React from 'react';
import Button from './Button';

export default {
    title: "Homepage/Button",
    component: Button,
    args: {
        children: "Shop Now",
    },
};

const Template = args => <Button {...args} />; 

export const Intro = Template.bind({});
Intro.args = {
    variant: "intro",
}

export const Cart = Template.bind({});
Cart.args = {
    variant: "cart",
    children: "Add To Cart"
}

export const Discount = Template.bind({});
Discount.args = {
    variant: "discount",
}


export const Update = Template.bind({});
Update.args = {
    variant: "update",
}