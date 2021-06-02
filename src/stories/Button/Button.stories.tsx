import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Styled/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

export const Template: Story = (args) => {
  return <Button  {...args} label={"Button"}/>;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
