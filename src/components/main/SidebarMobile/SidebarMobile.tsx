"use client";

import styles from "./SidebarMobile.module.css";

import { MdMenu } from "react-icons/md";

import { Icon } from "@/components/basic/Icon/Icon";
import { Sidebar } from "@/components/main/Sidebar/Sidebar";
import { ClientPortal } from "@/components/basic/ClientPortal/ClientPortal";
import { useSidebarMobileContext } from "@/contexts";

interface SidebarMobileProps {}

export const SidebarMobile = (props: SidebarMobileProps) => {
  const { showSidebar, setSidebarVisibility } = useSidebarMobileContext();

  let classname = [styles["SidebarMobile"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Burger"]}>
        <Icon onClick={() => setSidebarVisibility(!showSidebar)}>
          <MdMenu />
        </Icon>
      </div>
      <ClientPortal selector="body" show={showSidebar}>
        <div className={styles["Sidebar"]}>
          <Sidebar />
        </div>
        <div
          className={styles["Overlay"]}
          onClick={() => setSidebarVisibility(false)}
        ></div>
      </ClientPortal>
    </div>
  );
};
