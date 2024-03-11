import Copyright from "./copyright";

export default {
  title: "Homepage/copyright",
  component: Copyright,
};

const Template = (args) => <Copyright {...args} />;

export const CopyrightText = Template.bind({});
CopyrightText.args = {
  copyrightText: "Webecy-All Rights Reserved",
};
