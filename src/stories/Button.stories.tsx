import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A plain Button component that allows users to perform actions with a single click or tap",
      },
    },
  },
  argTypes: {
    children: {
      name: "children",
      type: "string",
      description: "Button Contents",
      table: {
        type: {
          summary: "ReactNode",
          name: "string",
        },
      },
      control: {
        type: "text",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: "Click Me",
    ariaDescribedBy: "this is a button",
    label: "Click Me",
    className:
      "bg-blue-500 hover:bg-blue-600 transition-color duration-150 ease-out text-white px-4 py-2 rounded-md",
  },
};

export const DisabledButton = () => {
  const [isDisabled, setIsDisabled] = React.useState(true);

  return (
    <Button
      disabled={isDisabled}
      ariaDescribedBy='disabled button'
      className={`${
        isDisabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      } transition-color duration-150 ease-out text-white px-4 py-2 rounded-md`}
    />
  );
};
