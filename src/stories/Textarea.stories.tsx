import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../index";

const meta = {
  title: "Example/Textarea",
  component: Textarea,
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

export const DefaultTextareaText: Story = {
  render: () => <DefaultTextarea />,
};
