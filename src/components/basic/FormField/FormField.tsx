import { forwardRef } from "react";

import styles from "./FormField.module.css";

type BaseLabelProps = React.ComponentPropsWithoutRef<"label">;

type Ref = HTMLLabelElement;

interface FormFieldProps extends BaseLabelProps {
  label?: string;
  status?: "error" | "success";
  message?: string;
  children?: React.ReactNode;
}

export const FormField = forwardRef<Ref, FormFieldProps>((props, ref) => {
  const { label, status, message, children, ...rest } = props;

  let classname = [
    styles["FormField"],
    status ? styles[`FormField_status_${status}`] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <label className={classname} {...rest} ref={ref}>
      {label && <span className={styles["Label"]}>{label}</span>}
      <span className={styles["Control"]}>
        {children}
        {message && <span className={styles["Message"]}>{message}</span>}
      </span>
    </label>
  );
});
