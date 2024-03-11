import React from "react";
import Email from "./Email";


export default {
  title: "Homepage/Email",
  component: Email,
}

const Template = (args) => <Email {...args} />;

export const Input = Template.bind({});
Input.args = {
  CompanyName: "Hekto",
  Address: "17 Princess Road, London, Greater London NW1 8JR, UK",
  ContactInfo: "Contact Info",
}
//