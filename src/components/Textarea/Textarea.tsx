import React from "react";
import { TextFieldBase } from "../../types";

export interface TextareaProps extends TextFieldBase {
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const Textarea = ({
  rows = 10,
  containerClassName,
  labelClassName,
  htmlFor,
  label,
  name,
  id,
  placeholder,
  value,
  disabled = false,
  textFieldClassName,
  focus,
  onChange,
}: TextareaProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current === null) return;
    focus && textareaRef?.current.focus();
  }, [textareaRef]);

  return (
    <div className={containerClassName}>
      <label htmlFor={htmlFor} className={labelClassName}>
        {label}
      </label>
      <textarea
        ref={textareaRef}
        style={{ resize: "none" }}
        name={name}
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={textFieldClassName}
      />
    </div>
  );
};
