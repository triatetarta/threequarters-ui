import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../index";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Three Quarters UI/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "Input fields can be used to get the input of a user in a text field",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

const DefaultInput = () => {
  const [text, setText] = React.useState("");

  return (
    <Input
      value={text}
      type='text'
      onChange={(e) => setText(e.target.value)}
      label='Text Input'
      containerClassName='w-[20rem]'
      placeholder='Enter your text'
      labelClassName='text-blue-500 text-xs'
      textFieldClassName='w-full p-2 border rounded-md mb-3 focus:outline-1 outline-blue-500 text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm hover:bg-gray-100 transition-all duration-200 text-black'
      id='text'
      name='text'
      htmlFor='text'
    />
  );
};

export const DefaultTextInput: Story = {
  render: () => <DefaultInput />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole("textbox");

    await expect(inputElement).toBeInTheDocument();

    await userEvent.type(inputElement, "Hello");

    await expect(inputElement).toHaveValue("Hello");
  },
};

export const DisabledTextInput: Story = {
  render: () => (
    <Input
      label='Disabled Input'
      containerClassName='w-[20rem]'
      disabled={true}
      labelClassName='text-blue-500 text-xs'
      textFieldClassName='w-full p-2 border rounded-md mb-3 focus:outline-1 outline-blue-500 text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm hover:bg-gray-100 transition-all duration-200 text-black/70'
      value='This is the value'
    />
  ),
};
