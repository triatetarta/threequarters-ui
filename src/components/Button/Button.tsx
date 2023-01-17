import React from "react";
import type { ButtonBase } from "../../types";

export interface ButtonProps extends ButtonBase {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** CSS classNames to style the button */
  className?: string;
}

export type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, ButtonProps>(
  (
    {
      children = "Click Me",
      type = "button",
      disabled = false,
      ariaDescribedBy,
      ariaChecked,
      ariaControls,
      ariaExpanded,
      label,
      role,
      className,
      onClick,
    },
    ref
  ) => {
    const isDisabled = disabled;

    return (
      <button
        ref={ref}
        role={role}
        type={type}
        onClick={onClick}
        className={className}
        disabled={isDisabled}
        aria-label={label}
        aria-disabled={disabled}
        aria-describedby={ariaDescribedBy}
        aria-checked={ariaChecked}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
      >
        {children}
      </button>
    );
  }
);
