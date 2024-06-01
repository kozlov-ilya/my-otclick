"use client";

import * as RadixSwitch from "@radix-ui/react-switch";
import { SwitchProps as SwitchPrimitiveProps } from "@radix-ui/react-switch";

import styles from "./Switch.module.css";

interface SwitchProps extends SwitchPrimitiveProps {
  size?: "sm" | "md";
}

export const Switch = (props: SwitchProps) => {
  const { size = "md", ...rest } = props;

  let classname = [styles["Switch"], styles[`Switch_size_${size}`]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <RadixSwitch.Root className={classname} {...rest}>
      <RadixSwitch.Thumb className={styles["SwitchThumb"]} />
    </RadixSwitch.Root>
  );
};
