import { LinkProps as basicNextLinkProps } from "next/link";
import { forwardRef } from "react";
import NextLink from "next/link";

import styles from "./Link.module.css";

type Ref = HTMLAnchorElement;

interface LinkProps extends basicNextLinkProps {
  role?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const Link = forwardRef<Ref, LinkProps>((props, ref) => {
  const { role = "primary", children, ...rest } = props;

  let classname = [styles["Link"], styles[`Link_role_${role}`]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <NextLink className={classname} ref={ref} {...rest}>
      {children}
    </NextLink>
  );
});
