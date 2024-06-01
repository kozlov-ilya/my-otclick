import { forwardRef } from "react";

import styles from "./Tag.module.css";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button">;

type Ref = HTMLButtonElement;

export type TagType = {
  label: string;
  value: string;
};

interface TagProps extends BaseButtonProps {
  label?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const Tag = forwardRef<Ref, TagProps>((props, ref) => {
  const { label, leftContent, rightContent, ...rest } = props;

  let classname = [styles["Tag"]].filter((cls) => cls.length).join(" ");

  return (
    <button className={classname} {...rest} ref={ref}>
      {leftContent}
      {label}
      {rightContent}
    </button>
  );
});
