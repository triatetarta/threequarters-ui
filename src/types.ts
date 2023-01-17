import React from "react";

export type Error =
  | string
  | React.ReactElement
  | (string | React.ReactElement)[];

export interface ButtonBase {
  /** Disables the button */
  disabled?: boolean;
  /** Label text for screen readers (Visually hidden) */
  label?: string;
  /** A valid WAI-ARIA role to define the semantic value of this element */
  role?: string;
  /** Assign a type for the button */
  type?: "button" | "submit" | undefined;
  /** Id of the element the button controls */
  ariaControls?: string;
  /** Tells screen reader the controlled element is expanded */
  ariaExpanded?: boolean;
  /** Indicates the ID of the element that describes the button */
  ariaDescribedBy?: string;
  /** Indicates the current checked state of the button when acting as a toggle or switch */
  ariaChecked?: "false" | "true";
  /** Callback when clicked */
  onClick?: React.MouseEventHandler;
}

export interface TextFieldBase {
  /** CSS classNames to style the container */
  containerClassName?: string;
  /** CSS classNames to style the label */
  labelClassName?: string;
  /** CSS classNames to style the textfield element */
  textFieldClassName?: string;
  /** ID for the input */
  id?: string;
  /** Specifies the id of the form element the label should be bound to */
  htmlFor?: string;
  /** Label for the input */
  label?: string;
  /** Name of the input */
  name?: string;
  /** Placeholder text to display */
  placeholder?: string;
  /** Initial value for the input */
  value?: string | undefined;
  /** Automatically focus the input */
  focus?: boolean;
  /** Disable the input */
  disabled?: boolean;
}
