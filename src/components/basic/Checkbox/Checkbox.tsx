"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";

import { FaCheck } from "react-icons/fa6";

import styles from "./Checkbox.module.css";

interface Props extends CheckboxProps {
  shape?: "circle" | "square";
}

export const Checkbox = (props: Props) => {
  const { shape = "square", ...rest } = props;

  let classname = [styles["Checkbox"], styles[`Checkbox_shape_${shape}`]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <RadixCheckbox.Root className={classname} {...rest}>
      <RadixCheckbox.Indicator className={styles["CheckboxIndicator"]}>
        <FaCheck size={10} />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};
