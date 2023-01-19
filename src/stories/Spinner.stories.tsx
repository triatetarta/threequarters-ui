import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Spinner } from "../index";

const meta = {
  title: "Three Quarters UI/Spinner",
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinnerElement = canvas.getByTestId("spinner");

    await expect(spinnerElement).toBeInTheDocument();
  },
};
