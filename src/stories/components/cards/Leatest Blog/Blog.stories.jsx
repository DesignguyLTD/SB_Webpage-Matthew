import React from 'react';
import Blog from './Blog';

export default {
    title : "Homepage/Blog",
    Component: Blog,
}

const Template = (args) => <Blog {...args} />

export const BlogCard = Template.bind ({});
BlogCard.args = {
    title: "Top essential Trends in 2021",
    dates: "21 August, 2020",
    blogger: "Saber Ali",
    about: "More off this less hello samlande lied much over tightly circa horse taped mighty",
}