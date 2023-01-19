import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../index";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Three Quarters UI/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component:
          "Textarea component can be used to get the input of a user in a multi-line text field",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

const DefaultTextarea = () => {
  const [text, setText] = React.useState("");

  return (
    <Textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      label='Textarea Field'
      containerClassName='w-[20rem]'
      placeholder='Enter your textarea text'
      labelClassName='text-blue-500 text-xs'
      textFieldClassName='w-full p-2 border rounded-md mb-3 focus:outline-1 outline-blue-500 text-xs sm:text-sm placeholder:text-xs sm:placeholder:text-sm hover:bg-gray-100 transition-all duration-200 text-black'
      id='text'
      name='text'
      htmlFor='text'
    />
  );
};

const longText =
  "Plaid unicorn jianbing jean shorts typewriter irony narwhal neutra vape vibecession bicycle rights. Pork belly +1 praxis coloring book waistcoat next level. Bespoke tumblr scenester, celiac fingerstache shabby chic twee +1 tilde put a bird on it af succulents. Fixie wayfarers chartreuse cloud bread gochujang pickled bruh shabby chic synth shaman put a bird on it kombucha.";

export const DefaultTextareaText: Story = {
  render: () => <DefaultTextarea />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputElement = canvas.getByRole("textbox");

    await expect(inputElement).toBeInTheDocument();

    await userEvent.type(inputElement, longText);

    await expect(inputElement).toHaveValue(longText);
  },
};
