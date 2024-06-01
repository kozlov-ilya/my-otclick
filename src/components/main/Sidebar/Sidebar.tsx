"use client";

import { RiHome6Line } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { TbClick } from "react-icons/tb";

import { usePathname } from "next/navigation";

import { Button } from "@/components/basic/Button/Button";

import styles from "./Sidebar.module.css";
import { SidebarMenuItem } from "../SidebarMenuItem/SidebarMenuItem";
import { SidebarSubMenu } from "../SidebarSubMenu/SidebarSubMenu";

export const menuItems = [
  { label: "Home", icon: <RiHome6Line />, path: "/" },
  {
    label: "Library",
    icon: <GoStack />,
    subItems: [
      {
        label: "My Posts",
        icon: <HiOutlineRectangleStack />,
        path: "/library/posts/my",
      },
      { label: "My Otclicks", icon: <TbClick />, path: "/library/otclicks/my" },
      {
        label: "Saved Posts",
        icon: <FaRegBookmark />,
        path: "/library/posts/saved",
      },
    ],
  },
  { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" },
];

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const { ...rest } = props;

  const pathname = usePathname();

  let classname = [styles["Sidebar"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}></div>
      <div className={styles["Menu"]}>
        {menuItems.map((item) => {
          return item.subItems ? (
            <SidebarSubMenu
              label={item.label}
              icon={item.icon}
              items={item.subItems}
              currentPath={pathname}
              key={item.label}
            />
          ) : (
            <SidebarMenuItem
              label={item.label}
              path={item.path}
              icon={item.icon}
              isSelected={item.path === pathname}
              key={item.label}
            />
          );
        })}
      </div>
      <div className={styles["Controls"]}></div>
    </div>
  );
};
