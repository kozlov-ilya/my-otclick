"use client";

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { useState } from "react";

import {
  SidebarMenuItem,
  SidebarMenuItemType,
} from "@/components/main/SidebarMenuItem/SidebarMenuItem";

import styles from "./SidebarSubMenu.module.css";

interface SidebarSubMenuProps {
  label: string;
  icon: React.ReactNode;
  currentPath: string;
  items: SidebarMenuItemType[];
}

export const SidebarSubMenu = (props: SidebarSubMenuProps) => {
  const { label, icon, items, currentPath } = props;

  const [isOpen, setIsOpen] = useState(true);

  const onClick = () => {
    setIsOpen((st) => !st);
  };

  let classname = [
    styles["SidebarSubMenu"],
    isOpen ? styles["SidebarSubMenu_open"] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <button className={styles["Trigger"]} onClick={onClick}>
        <span className={styles["Icon"]}>{icon}</span>
        <span className={styles["Label"]}>{label}</span>
        <span className={styles["Indicator"]}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div className={styles["MenuContainer"]}>
        <ul className={styles["Menu"]}>
          {items.map((item) => {
            return (
              <SidebarMenuItem
                label={item.label}
                path={item.path}
                icon={item.icon}
                isSelected={item.path === currentPath}
                key={item.label}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
