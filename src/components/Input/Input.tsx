import React from "react";
import { TextFieldBase } from "../../types";

export interface InputProps extends TextFieldBase {
  /** Assign a type for the input */
  type?: "text" | "tel" | "email" | "password";
  /** Callback fired when value is changed */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  htmlFor,
  label,
  disabled,
  focus,
  id,
  name,
  placeholder,
  containerClassName,
  labelClassName,
  textFieldClassName,
  type = "text",
  value = "",
  onChange,
}: InputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current === null) return;

    focus && inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className={containerClassName}>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={textFieldClassName}
      />
    </div>
  );
};
