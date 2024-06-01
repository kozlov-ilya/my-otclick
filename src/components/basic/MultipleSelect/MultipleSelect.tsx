"use client";

import { IoSearchOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import Select, {
  StylesConfig,
  DropdownIndicatorProps,
  OptionProps,
  components,
  Props,
} from "react-select";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/basic/DropdownMenu/DropdownMenu";
import { Checkbox } from "@/components/basic/Checkbox/Checkbox";

import styles from "./MultipleSelect.module.css";

const selectStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: "40px",
    background: "transparent",
    border: "1.5px solid",
    borderColor: state.isFocused
      ? "var(--color-text-normal)"
      : "var(--color-line-normal)",
    borderRadius: "8px",
    outline: "none",
    padding: "8px 16px",
    cursor: "text",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--color-text-assistive)",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    position: "static",
    paddingBlock: "8px",
  }),
  option: (baseStyle, state) => ({
    ...baseStyle,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: state.isDisabled ? "default" : "pointer",
    ":hover": {
      background: "var(--color-fill-normal)",
    },
  }),
  menuList: (baseStyle) => ({
    ...baseStyle,
    maxHeight: "200px",
    scrollBehavior: "smooth",
    "::-webkit-scrollbar": { width: "4px" },
    "::-webkit-scrollbar-thumb": {
      background: "var(--color-fill-normal)",
      borderRadius: "100px",
      width: "2px",
    },
    paddingRight: "4px",
    overscrollBehavior: "contain",
  }),
};

const DropdownIndicator = (props: DropdownIndicatorProps) => {
  return <IoSearchOutline size={20} />;
};

const Option = (props: OptionProps) => {
  const { children, isSelected, ...rest } = props;

  return (
    <components.Option isSelected={isSelected} {...rest}>
      <Checkbox checked={isSelected} />
      {children}
    </components.Option>
  );
};

interface MultipleSelectProps extends Props {
  label?: string;
  contentLeft?: React.ReactNode;
  usePortal?: boolean;
  isStatic?: boolean;
}

export const MultipleSelect = (props: MultipleSelectProps) => {
  const {
    placeholder = "Search...",
    label = "Select",
    contentLeft,
    isStatic,
    ...rest
  } = props;

  let classname = [styles["MultipleSelect"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <DropdownMenu modal={false} isStatic={isStatic} open={isStatic}>
        <DropdownMenuTrigger>
          <div className={styles["Trigger"]}>
            {contentLeft}
            <span className={styles["TriggerText"]}>{label}</span>
            <FaChevronDown size={16} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={8} usePortal={!isStatic}>
          <Select
            controlShouldRenderValue={false}
            backspaceRemovesValue={false}
            isClearable={false}
            hideSelectedOptions={false}
            tabSelectsValue={false}
            isSearchable={true}
            isMulti={true}
            menuIsOpen
            autoFocus
            unstyled={true}
            placeholder={placeholder}
            styles={selectStyles}
            components={{ DropdownIndicator, IndicatorSeparator: null, Option }}
            captureMenuScroll={false}
            {...rest}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
