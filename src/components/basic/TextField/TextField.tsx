"use client";

import { forwardRef } from "react";

import styles from "./TextField.module.css";

type BaseInputProps = React.ComponentPropsWithoutRef<"input">;

type Ref = HTMLInputElement;

interface TextFieldProps extends BaseInputProps {
  variant?: "outline" | "fill";
  contentLeft?: React.ReactElement;
  error?: boolean;
  fieldSize?: "sm" | "md" | "lg";
  isRounded?: boolean;
  className?: string;
}

export const TextField = forwardRef<Ref, TextFieldProps>((props, ref) => {
  const {
    variant = "outline",
    className = "",
    error,
    isRounded,
    fieldSize = "md",
    contentLeft,
    maxLength,
    ...rest
  } = props;

  let classname = [
    styles["TextField"],
    styles[`TextField_variant_${variant}`],
    styles[`TextField_size_${fieldSize}`],
    error ? styles[`TextField_status_error`] : "",
    isRounded ? styles[`TextField_rounded`] : "",
    className,
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <label className={styles["Label"]}>
        {contentLeft && (
          <span className={styles["ContentLeft"]}>{contentLeft}</span>
        )}
        <input
          {...rest}
          ref={ref}
          className={styles["Control"]}
          maxLength={maxLength}
        />
        <span className={styles["Box"]}></span>
      </label>
    </div>
  );
});
