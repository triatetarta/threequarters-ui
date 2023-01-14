import React from "react";

interface OptionProps {
  name?: string;
  value?: string;
  optionClassNames?: string;
}

const Option = ({ name, value, optionClassNames }: OptionProps) => {
  return (
    <option className={optionClassNames} value={value}>
      {name}
    </option>
  );
};

export default Option;
