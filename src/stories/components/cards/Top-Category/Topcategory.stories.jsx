import React from 'react'
import Topcategory from './Topcategory'

export default {
    title: "Homepage/Cards",
    component: Topcategory,
}

const Template = (args) => <Topcategory {...args} />

export const TopCategory = Template.bind ({});

TopCategory.args = {
    title: "Mini LCW Chair",
    price: "$56.00",
}

