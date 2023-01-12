import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";

const meta = {
  title: "Example/Button",
  component: Button,
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

export const Default: StoryObj = {
  args: {
    children: "Click Me",
  },
};
