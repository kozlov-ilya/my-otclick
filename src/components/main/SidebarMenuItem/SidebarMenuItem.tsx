"use client";

import Link from "next/link";

import styles from "./SidebarMenuItem.module.css";
import { useSidebarMobileContext } from "@/contexts";

export type SidebarMenuItemType = {
  label: string;
  icon?: React.ReactNode;
  path: string;
  isSelected?: boolean;
};

export const SidebarMenuItem = (props: SidebarMenuItemType) => {
  const { label, icon, path, isSelected } = props;

  const { setSidebarVisibility } = useSidebarMobileContext();

  let classname = [
    styles["SidebarMenuItem"],
    isSelected ? styles["SidebarMenuItem_selected"] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <li className={classname} onClick={() => setSidebarVisibility(false)}>
      <Link href={path} className={styles["Link"]}>
        {icon && <span className={styles["Icon"]}>{icon}</span>}
        <span className={styles["Label"]}>{label}</span>
      </Link>
    </li>
  );
};
