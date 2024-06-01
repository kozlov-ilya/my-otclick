"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { AvatarImageProps as AvatarImagePrimitiveProps } from "@radix-ui/react-avatar";

import styles from "./Avatar.module.css";
import { forwardRef } from "react";

type Ref = HTMLSpanElement;

interface AvatarProps extends AvatarImagePrimitiveProps {
  size?: "sm" | "md";
}

export const Avatar = forwardRef<Ref, AvatarProps>((props, ref) => {
  const { size = "md", ...rest } = props;

  let classname = [styles["Avatar"], styles[`Avatar_size_${size}`]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <AvatarPrimitive.Root className={classname} ref={ref}>
      <AvatarPrimitive.AvatarImage
        {...rest}
        className={styles["AvatarImage"]}
      />
      <AvatarPrimitive.Fallback
        className={styles["AvatarFallback"]}
      ></AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});
