import React from "react";
import { motion } from "framer-motion";

interface SwitchEventTarget {
  checked: boolean;
}

interface SwitchEvent {
  target: SwitchEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: React.ChangeEvent;
}

export interface SwitchProps {
  /** ID for the input */
  id: string;
  /** Indicates whether the switch is on or off */
  checked?: boolean;
  /** Prevents the default action */
  preventDefault?: boolean;
  /** Disables the switch */
  disabled?: boolean;
  /** Callback when clicked */
  onChange: (e: SwitchEvent) => void;
}

export const Switch = ({
  checked = false,
  disabled = false,
  id,
  onChange,
}: SwitchProps) => {
  const [enabled, setEnabled] = React.useState(false);

  const getTogglePosition = React.useCallback(() => {
    switch (checked) {
      case true:
        return "justify-end bg-blue-500";
      case false:
        return "justify-start bg-gray-400";
      default:
        return "justify-start bg-green-400";
    }
  }, [checked]);

  const changeHandle = React.useCallback(
    (e: React.ChangeEvent) => {
      if (disabled) return;
      const selfEvent: SwitchEvent = {
        target: {
          checked: !enabled,
        },
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        nativeEvent: e,
      };
      setEnabled(!enabled);
      onChange && onChange(selfEvent);
    },
    [disabled, enabled, onChange]
  );

  return (
    <>
      <input
        type='checkbox'
        onChange={changeHandle}
        className='hidden'
        checked={enabled}
        disabled={disabled}
        id={id}
      />
      <motion.label
        layout
        htmlFor={id}
        className={`flex items-center cursor-pointer w-12 h-6 rounded-full relative z-30 ${getTogglePosition()}`}
      >
        <motion.span
          layout
          className='inline-flex mx-1 h-4 w-4 rounded-full bg-white z-40'
        />
      </motion.label>
    </>
  );
};
