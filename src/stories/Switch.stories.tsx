import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch } from "../index";

const meta = {
  title: "Example/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          "Switch components are used as a stylistically improved alternative for the common checkbox element.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

const DefaultSwitchComponent = () => {
  const [isOn, setIsOne] = React.useState(false);

  const onChange = () => {
    setIsOne(!isOn);
  };

  return <Switch id='switch' checked={isOn} onChange={onChange} />;
};

export const DefaultSwitch: Story = {
  render: () => <DefaultSwitchComponent />,
};
