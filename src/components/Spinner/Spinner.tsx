import React from "react";

export interface SpinnerProps {
  /** CSS color classNames to apply color on the spinner */
  color?: string;
  /** Size of the spinner */
  size?: "small" | "large";
}

export const Spinner = ({
  color = "border-blue-500",
  size = "large",
  ...props
}: SpinnerProps) => {
  return (
    <div
      className={`${
        size === "small" ? "w-4 h-4" : "w-6 h-6"
      } rounded-full animate-spin border-y-2 border-solid border-t-transparent mx-auto ${color}`}
      {...props}
    />
  );
};
