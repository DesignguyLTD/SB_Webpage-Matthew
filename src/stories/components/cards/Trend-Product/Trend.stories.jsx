import React from "react";
import Trend from "./Trend";


export default {
    title: "Homepage/Trend",
    component: Trend,
}

const Template = (args) => <Trend {...args} />

export const TrendCard = Template.bind ({});

TrendCard.args = {
    title: "Centilever Chair",
    newPrice: "$26.00",
    oldPrice: "$42.00",
}