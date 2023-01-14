import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
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

export const DefaultSwitch = () => {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <Switch
      isOn={enabled}
      id='switch'
      handleChecked={() => setEnabled(!enabled)}
    />
  );
};

export const DisabledSwitch: Story = {
  args: {
    isOn: false,
    id: "disabled",
  },
};

export const EnabledSwitch: Story = {
  args: {
    isOn: true,
    id: "enabled",
  },
};
