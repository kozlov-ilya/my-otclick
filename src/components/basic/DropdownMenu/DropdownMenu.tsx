import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuProps as DropdownMenuPrimitiveProps,
  DropdownMenuContentProps as DropdownMenuContentPrimitiveProps,
  DropdownMenuTriggerProps as DropdownMenuTriggerPrimitiveProps,
  DropdownMenuItemProps as DropdownMenuItemPrimitiveProps,
  DropdownMenuLabelProps as DropdownMenuLabelPrimitiveProps,
  DropdownMenuSubTriggerProps as DropdownMenuSubTriggerPrimitiveProps,
  DropdownMenuSubContentProps as DropdownMenuSubContentPrimitiveProps,
  DropdownMenuSeparatorProps as DropdownMenuSeparatorPrimitiveProps,
} from "@radix-ui/react-dropdown-menu";
import { IoChevronForward } from "react-icons/io5";

import React from "react";

import styles from "./DropdownMenu.module.css";

/* -------------------------------------------------------------------------- */
/*                                DropdownMenu                                */
/* -------------------------------------------------------------------------- */
interface DropdownMenuProps extends DropdownMenuPrimitiveProps {
  isStatic?: boolean;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
  const { children, isStatic, ...rest } = props;

  let classname = [
    styles["DropdownMenu"],
    isStatic ? styles["DropdownMenu_static"] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <DropdownMenuPrimitive.Root {...rest}>
        {children}
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuTrigger                            */
/* -------------------------------------------------------------------------- */
interface DropdownMenuTriggerProps extends DropdownMenuTriggerPrimitiveProps {}

export const DropdownMenuTrigger = ({
  children,
  ...rest
}: DropdownMenuTriggerProps) => {
  return (
    <DropdownMenuPrimitive.Trigger
      className={styles["DropdownMenuTrigger"]}
      {...rest}
    >
      {children}
    </DropdownMenuPrimitive.Trigger>
  );
};

/* -------------------------------------------------------------------------- */
/*                             DropdownMenuContent                            */
/* -------------------------------------------------------------------------- */
interface DropdownMenuContentProps extends DropdownMenuContentPrimitiveProps {
  usePortal?: boolean;
}

export const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ usePortal = true, children, ...rest }: DropdownMenuContentProps, ref) => {
  return usePortal ? (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className={styles["DropdownMenuContent"]}
        {...rest}
        ref={ref}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  ) : (
    <DropdownMenuPrimitive.Content
      className={styles["DropdownMenuContent"]}
      {...rest}
      ref={ref}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
});

/* -------------------------------------------------------------------------- */
/*                              DropdownMenuItem                              */
/* -------------------------------------------------------------------------- */
interface DropdownMenuItemProps extends DropdownMenuItemPrimitiveProps {
  icon?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const DropdownMenuItem = (props: DropdownMenuItemProps) => {
  const { icon, rightContent, children, ...rest } = props;

  return (
    <DropdownMenuPrimitive.Item
      {...rest}
      className={styles["DropdownMenuItem"]}
    >
      <span className={styles["DropdownMenuItem_LeftContent"]}>
        {icon && (
          <span className={styles["DropdownMenuItem_Icon"]}>{icon}</span>
        )}
        {children}
      </span>
      {rightContent && (
        <span className={styles["DropdownMenuItem_RightContent"]}>
          {rightContent}
        </span>
      )}
    </DropdownMenuPrimitive.Item>
  );
};

/* -------------------------------------------------------------------------- */
/*                              DropdownMenuLabel                             */
/* -------------------------------------------------------------------------- */
interface DropdownMenuLabelProps extends DropdownMenuLabelPrimitiveProps {}

export const DropdownMenuLabel = ({
  children,
  ...rest
}: DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitive.Label
      {...rest}
      className={styles["DropdownMenuLabel"]}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
};

/* -------------------------------------------------------------------------- */
/*                           DropdownMenuSubTrigger                           */
/* -------------------------------------------------------------------------- */
interface DropdownMenuSubTriggerProps
  extends DropdownMenuSubTriggerPrimitiveProps {}

export const DropdownMenuSubTrigger = ({
  children,
  ...rest
}: DropdownMenuSubTriggerProps) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={styles["DropdownMenuSubTrigger"]}
      {...rest}
    >
      {children}
      <IoChevronForward />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

/* -------------------------------------------------------------------------- */
/*                           DropdownMenuSubContent                           */
/* -------------------------------------------------------------------------- */
interface DropdownMenuSubContentProps
  extends DropdownMenuSubContentPrimitiveProps {}

export const DropdownMenuSubContent = React.forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(({ children, ...rest }: DropdownMenuSubContentProps, ref) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.SubContent
        className={styles["DropdownMenuSubContent"]}
        {...rest}
        ref={ref}
      >
        {children}
      </DropdownMenuPrimitive.SubContent>
    </DropdownMenuPrimitive.Portal>
  );
});

/* -------------------------------------------------------------------------- */
/*                            DropdownMenuSeparator                           */
/* -------------------------------------------------------------------------- */
interface DropdownMenuSeparatorProps
  extends DropdownMenuSeparatorPrimitiveProps {}

export const DropdownMenuSeparator = ({
  ...rest
}: DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitive.Separator
      className={styles["DropdownMenuSeparator"]}
      {...rest}
    ></DropdownMenuPrimitive.Separator>
  );
};

/* -------------------------------------------------------------------------- */
/*                               DropdownMenuSub                              */
/* -------------------------------------------------------------------------- */
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
