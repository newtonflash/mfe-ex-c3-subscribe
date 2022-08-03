import React from "react";

import { Subscribe } from "../components/subscribe/subscribe";

export default {
  title: "Demo/Subscribe",
  component: Subscribe,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Subscribe {...args} />;

export const Basic = Template.bind({});
