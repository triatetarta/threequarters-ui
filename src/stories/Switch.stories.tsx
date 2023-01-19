import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import React from "react";
import { Switch } from "../index";

const meta = {
  title: "Three Quarters UI/Switch",
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

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByTestId("switch");

    await expect(switchElement).toBeInTheDocument();
    await expect(switchElement).not.toBeChecked();
    await userEvent.click(switchElement);
    await expect(switchElement).toBeChecked();
  },
};
