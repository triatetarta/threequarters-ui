import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../index";

const meta = {
  title: "Example/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component:
          "An animated Spinner component that can be used alongside with a loading state of an app",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "large",
  },
};
