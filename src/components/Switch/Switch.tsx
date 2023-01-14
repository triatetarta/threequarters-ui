import React from "react";
import { motion } from "framer-motion";

export interface SwitchProps {
  /** ID for the input */
  id: string;
  /** On/Off status of the input */
  isOn: boolean;
  /** Callback fired when status is changed */
  handleChecked: () => void;
}

export const Switch = ({ handleChecked, isOn = false, id }: SwitchProps) => {
  const getTogglePosition = () => {
    switch (isOn) {
      case true:
        return "justify-end bg-blue-500";
      case false:
        return "justify-start bg-gray-400";
      default:
        return "justify-start bg-green-400";
    }
  };

  return (
    <>
      <input
        type='checkbox'
        onChange={handleChecked}
        className='hidden'
        checked={isOn}
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
