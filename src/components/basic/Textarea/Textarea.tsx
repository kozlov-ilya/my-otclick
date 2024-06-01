"use client";

import TextareaAutosize from "react-textarea-autosize";
import { TextareaAutosizeProps } from "react-textarea-autosize";

import styles from "./Textarea.module.css";

interface TextareaProps extends TextareaAutosizeProps {
  variant?: "outline" | "fill";
  status?: "error" | "success";
  isFullWidth?: boolean;
}

export const Textarea = (props: TextareaProps) => {
  const {
    variant = "outline",
    status,
    isFullWidth,
    minRows = 3,
    ...rest
  } = props;

  let classname = [
    styles["Textarea"],
    styles[`Textarea_variant_${variant}`],
    status ? styles[`Textarea_status_${status}`] : "",
    isFullWidth ? styles[`Textarea_width_full`] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  const style = {
    "--textarea-min-height": minRows * 24 + 16 + 2,
  } as React.CSSProperties;

  return (
    <div className={classname} style={style}>
      <TextareaAutosize
        className={styles["Control"]}
        minRows={minRows}
        {...rest}
      ></TextareaAutosize>
    </div>
  );
};
