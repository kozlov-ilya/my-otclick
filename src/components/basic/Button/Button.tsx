import { forwardRef } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button">;

type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonProps {
  variant?: "solid" | "outline" | "ghost";
  role?: "primary" | "secondary";
  isRounded?: boolean;
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    variant = "solid",
    role = "primary",
    isRounded = false,
    className,
    href,
    children,
    ...rest
  } = props;

  let classname = [
    styles["Button"],
    styles[`Button_variant_${variant}`],
    styles[`Button_role_${role}`],
    isRounded ? styles[`Button_rounded`] : "",
    className,
  ]
    .join(" ")
    .trim();

  return href ? (
    <Link href={href}>{children}</Link>
  ) : (
    <button {...rest} ref={ref} className={classname}>
      {children}
    </button>
  );
});
