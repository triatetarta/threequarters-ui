import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "../index";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta = {
  title: "Three Quarters UI/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Select lets users choose one option from an options menu.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const SelectExample = () => {
  const [selected, setSelected] = React.useState("react");

  const options = [
    { name: "React", value: "react" },
    { name: "Nextjs", value: "nextjs" },
    { name: "Remix", value: "remix" },
  ];

  return (
    <Select
      options={options}
      label='Select tech'
      name='tech'
      htmlFor='tech'
      id='tech'
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      labelClassName='text-left block mb-1 ml-1 text-xs text-gray-text'
      selectClassNames='py-2 pl-2 pr-6 border rounded-md text-xs sm:text-sm hover:bg-gray-100
      transition-all duration-200 cursor-pointer focus:outline-1 outline-blue-500 capitalize appearance-none'
      size='sm'
    />
  );
};

export const DefaultSelectField: Story = {
  render: () => <SelectExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByTestId("select");
    const optionElement = canvas.getAllByRole("option");

    await expect(selectElement).toBeInTheDocument();
    await expect(selectElement).toHaveValue("react");

    await expect(optionElement.length).toBe(3);

    const comoboxElement = canvas.getByRole("combobox");

    await userEvent.selectOptions(comoboxElement, optionElement[2]);
    await expect(selectElement).toHaveValue("remix");
  },
};
