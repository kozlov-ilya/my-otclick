import { MdMenu } from "react-icons/md";

import { Icon } from "@/components/basic/Icon/Icon";
import { Sidebar } from "@/components/main";
import { ClientPortal } from "@/components/basic";
import { useSidebarMobileContext } from "@/contexts";

import styles from "./SidebarMobile.module.css";

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
