import React from 'react';
import Navbar from './Navbar';

export default {
    title: "Homepage/Navbar",
    component: Navbar,
}

const Template = args => <Navbar {...args} />

export const Navs = Template.bind({});
Navs.args = {
    variant: "Hekto Links",
}