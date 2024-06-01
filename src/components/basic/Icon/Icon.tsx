import { forwardRef } from "react";
import styles from "./Icon.module.css";
import Link from "next/link";

type Ref = HTMLDivElement;

type BaseDivProps = React.ComponentPropsWithoutRef<"div">;

interface IconProps extends BaseDivProps {
  size?: "sm" | "md";
  context?: "success" | "danger";
  variant?: "fill" | "ghost";
  href?: string;
}

export const Icon = forwardRef<Ref, IconProps>((props, ref) => {
  const {
    variant = "ghost",
    size = "md",
    href,
    context,
    children,
    ...rest
  } = props;

  let classname = [
    styles["Icon"],
    styles[`Icon_size_${size}`],
    styles[`Icon_variant_${variant}`],
    context ? styles[`Icon_context_${context}`] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return href ? (
    <Link className={classname} href={href}>
      {children}
    </Link>
  ) : (
    <div className={classname} {...rest} ref={ref}>
      {children}
    </div>
  );
});
