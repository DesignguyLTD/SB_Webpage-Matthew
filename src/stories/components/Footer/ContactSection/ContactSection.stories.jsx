import React from "react";
import ContactSection from "./ContactSection";

export default {
  title: "Homepage/ContactSection",
  component: ContactSection,
};

const Template = (args) => <ContactSection {...args} />;

export const Categories = Template.bind({});
Categories.args = {
  heading: "Categories",
  links: [
    "Laptops & Computers",
    "Cameras & photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "Waterproof Headphones",
  ],
};

export const Careline = Template.bind({});
Careline.args = {
  heading: "Customer Care",
  links: [
    "My Account",
    "Discount",
    "Returns",
    "Orders History",
    "Order Tracking",
  ],
};

export const Pages = Template.bind({});
Pages.args = {
  heading: "Pages",
  links: [
    "Blog",
    "Browse the Shop",
    "Category",
    "Pre-Built Pages",
    "Visual Composer Elements",
    "WooCommerce Pages",
  ],
};
