import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within } from "@storybook/testing-library";
import React from "react";
import { Text } from "../index";

const meta = {
  title: "Three Quarters UI/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          "Text component helps establish hierarchy and communicate important content by creating clear visual patterns.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultText: Story = {
  args: {
    className: "text-xl font-bold",
    as: "h1",
  },
  render: (args) => (
    <Text as={args.as} className={args.className}>
      This is an h1 text element
    </Text>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const textElement = canvas.getByRole("heading");

    await expect(textElement).toBeInTheDocument();
  },
};
