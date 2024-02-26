import React from "react";
import FeatureSection from "./FeatureSection";

export default {
  title: "Feature Card",
  component: FeatureSection,
  args: {
    children: "FeatureSection",
  },
};

const Template = (args) => <FeatureSection {...args} />;

export const Feature = Template.bind({});
Feature.args = {
  variant: "feature",
};
