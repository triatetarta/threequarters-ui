import React from "react";

type Element = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface TextProps {
  /** The element type */
  as: Element;
  /** Text to display */
  children: React.ReactNode;
  /** HTML id attribute */
  id?: string;
  /** CSS classNames to style the text */
  className?: string;
}

export const Text = ({ as, children, id, className }: TextProps) => {
  const Component = as;

  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
};
