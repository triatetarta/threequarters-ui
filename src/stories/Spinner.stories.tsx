import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../index";

const meta = {
  title: "Example/Spinner",
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "large",
  },
};
