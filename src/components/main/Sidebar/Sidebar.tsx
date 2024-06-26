"use client";

import styles from "./Sidebar.module.css";

import { RiHome6Line } from "react-icons/ri";
import { GoStack } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { TbClick } from "react-icons/tb";
import { TiArrowForwardOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";

import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "../SidebarMenuItem/SidebarMenuItem";
import { SidebarSubMenu } from "../SidebarSubMenu/SidebarSubMenu";
import { Banner } from "@/components/basic/Banner/Banner";

export const menuItems = [
  { label: "Home", icon: <RiHome6Line />, path: "/" },
  {
    label: "Posts",
    icon: <HiOutlineRectangleStack />,
    subItems: [
      {
        label: "My Posts",
        icon: <FaRegUser />,
        path: "/posts/my",
      },
      {
        label: "Saved",
        icon: <FaRegBookmark />,
        path: "/posts/saved",
      },
    ],
  },
  {
    label: "Otclicks",
    icon: <TbClick />,
    subItems: [
      {
        label: "Received",
        icon: <TiArrowForwardOutline style={{ transform: "rotate(180deg)" }} />,
        path: "/otclicks/received",
      },
      {
        label: "Sent",
        icon: <TiArrowForwardOutline />,
        path: "/otclicks/sent",
      },
    ],
  },
  { label: "Settings", icon: <IoSettingsOutline />, path: "/settings" },
];

interface SidebarProps {
  unviewedOtclicksCount?: number;
}

export const Sidebar = (props: SidebarProps) => {
  const { unviewedOtclicksCount } = props;

  const pathname = usePathname();

  let classname = [styles["Sidebar"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
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
      {unviewedOtclicksCount ? (
        <Banner href="/otclicks/received">{`You have ${unviewedOtclicksCount} new Otclick${
          unviewedOtclicksCount !== 1 ? "s" : ""
        }!`}</Banner>
      ) : undefined}
    </div>
  );
};
