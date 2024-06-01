"use client";

import { FaCheck } from "react-icons/fa6";

import { useState } from "react";

import styles from "./Chip.module.css";

interface ChipProps {
  value: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const Chip = (props: ChipProps) => {
  const { value, isDisabled, isChecked = false, children, ...rest } = props;

  const [checked, setChecked] = useState(isChecked);

  const onClick = () => {
    setChecked((st) => !st);
  };

  let classname = [styles["Chip"], isDisabled ? styles["Chip_disabled"] : ""]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div data-checked={checked} onClick={onClick} className={classname}>
      {checked && <FaCheck />}
      {value.charAt(0).toUpperCase() + value.slice(1)}
    </div>
  );
};
