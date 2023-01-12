export interface ButtonBase {
  /** Disables the button */
  disabled?: boolean;
  /** Replaces button content with a spinner while loading state is true */
  loading?: boolean;
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
  onClick?: () => void;
}
