import React from "react";
import Option from "./Option";
import { SelectIcon } from "./SelectIcon";

interface IOption {
  name?: string;
  value?: string;
  optionClassNames?: string;
}

export interface SelectProps {
  /** ID for form input */
  id?: string;
  /** Specifies the id of the form element the label should be bound to */
  htmlFor?: string;
  /** Name of the input */
  name?: string;
  /** Label for the input */
  label?: string;
  /** Initial value for the input */
  value?: string;
  /** List of options to choose from */
  options?: IOption[];
  /** Disable input */
  disabled?: boolean;
  /** Size of the select field */
  size?: "sm" | "md" | "full";
  /** CSS classNames to style the select element */
  selectClassNames?: string;
  /** CSS classNames to style the option element */
  optionClassNames?: string;
  /** CSS classNames to style the label */
  labelClassName?: string;
  /** Callback when selection is changed */
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  htmlFor,
  disabled,
  id,
  label,
  name,
  onChange,
  labelClassName,
  options,
  selectClassNames,
  size = "sm",
  value,
}: SelectProps) => {
  const getSize = () => {
    switch (size) {
      case "sm":
        return "w-[100px]";
      case "md":
        return "w-[200px]";
      case "full":
        return "w-full";
      default:
        return "w-[100px]";
    }
  };

  return (
    <div className={`${getSize()}`}>
      <label className={labelClassName} htmlFor={htmlFor}>
        {label}
      </label>
      <div className='relative flex items-center'>
        <select
          data-testid='select'
          className={`w-full ${selectClassNames}`}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options?.map((option, index) => {
            return <Option key={index} {...option} />;
          })}
        </select>
        <SelectIcon />
      </div>
    </div>
  );
};
