import { forwardRef } from "react";

import styles from "./FormField.module.css";

type BaseLabelProps = React.ComponentPropsWithoutRef<"label">;

type Ref = HTMLLabelElement;

interface FormFieldProps extends BaseLabelProps {
  label?: string;
  errorMessage?: string;
  isFullWidth?: boolean;
}

export const FormField = forwardRef<Ref, FormFieldProps>((props, ref) => {
  const { label, errorMessage, isFullWidth, children, ...rest } = props;

  let classname = [
    styles["FormField"],
    isFullWidth ? styles[`FormField_width_full`] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <label className={classname} {...rest} ref={ref}>
      {label && <span className={styles["Label"]}>{label}</span>}
      <span className={styles["Control"]}>
        {children}
        {errorMessage && (
          <span className={styles["ErrorMessage"]}>{errorMessage}</span>
        )}
      </span>
    </label>
  );
});
