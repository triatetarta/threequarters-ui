import React from "react";

export type SizeType = "small" | "medium" | "large";

export interface SpinnerProps {
  /** CSS color classNames to apply color on the spinner */
  color?: string;
  /** Size of the spinner */
  size?: SizeType;
}

export const Spinner = ({
  color = "border-blue-500",
  size = "large",
}: SpinnerProps) => {
  const getSize = (size: SizeType) => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "medium":
        return "w-8 h-8";
      case "large":
        return "w-10 h-10";
      default:
        "w-8 h-8";
    }
  };

  return (
    <div
      data-testid='spinner'
      className={`${getSize(
        size
      )} rounded-full animate-spin border-y-2 border-solid border-t-transparent mx-auto ${color}`}
    />
  );
};
