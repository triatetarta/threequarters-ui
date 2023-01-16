import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
    disabled: false,
    children: "Click Me",
    ariaDescribedBy: "this is a button",
    label: "Click Me",
    className:
      "bg-blue-500 hover:bg-blue-600 transition-color duration-150 ease-out text-white px-4 py-2 rounded-md",
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByRole("button");

    await expect(args.disabled).toBe(false);
    await expect(buttonElement).toBeInTheDocument();
    await userEvent.click(buttonElement);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: "Disabled",
    ariaDescribedBy: "this is a disabled button",
    label: "Disabled",
    className: "bg-gray-400 text-white px-4 py-2 rounded-md",
  },

  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonElement = canvas.getByRole("button");

    await expect(buttonElement).toBeInTheDocument();
    await expect(args.disabled).toBe(true);
  },
};
