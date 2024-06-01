import { forwardRef } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button">;

type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonProps {
  variant?: "solid" | "outline" | "ghost";
  role?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  isRounded?: boolean;
  status?: "error" | "success";
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "solid",
    role = "primary",
    size = "md",
    isRounded = false,
    leftIcon,
    rightIcon,
    className = "",
    href,
    children,
    ...rest
  } = props;

  let classname = [
    styles["Button"],
    styles[`Button_variant_${variant}`],
    styles[`Button_role_${role}`],
    styles[`Button_size_${size}`],
    isRounded ? styles[`Button_rounded`] : "",
    className,
  ]
    .join(" ")
    .trim();

  return href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button {...rest} ref={ref} className={classname}>
      {leftIcon && <span className={styles["Icon"]}>{leftIcon}</span>}
      <span className={styles["Text"]}>{children}</span>
      {rightIcon && <span className={styles["Icon"]}>{rightIcon}</span>}
    </button>
  );
});
