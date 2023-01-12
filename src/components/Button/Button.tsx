import React from "react";
import type { ButtonBase } from "../../types";
import { Spinner } from "../Spinner";

export interface ButtonProps extends ButtonBase {
  /** The content to display inside the button */
  children?: React.ReactNode;
  /** CSS classNames to apply styling on the button */
  className?: "string";
}

export type Ref = HTMLButtonElement;

export const Button = React.forwardRef<Ref, ButtonProps>(
  (
    {
      children = "Click Me",
      type = "button",
      disabled = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={`${
          isDisabled
            ? "bg-gray-400 pointer-events-none"
            : "bg-blue-500 hover:bg-blue-600 pointer-events-auto"
        } text-white rounded-md px-4 py-2 w-[100px] text-base transition duration-150 ease-out select-none`}
        {...props}
      >
        {loading ? (
          <Spinner color='border-white' size='large' />
        ) : (
          <span>{children}</span>
        )}
      </button>
    );
  }
);
