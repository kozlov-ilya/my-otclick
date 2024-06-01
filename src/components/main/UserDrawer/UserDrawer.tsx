"use client";

import { Drawer } from "vaul";

import { Avatar } from "@/components/basic/Avatar/Avatar";
import { ThemeSwitch, User } from "@/components/main";

import styles from "./UserDrawer.module.css";
import { useSidebarMobileContext } from "@/contexts";

interface UserDrawerProps {}

export const UserDrawer = (props: UserDrawerProps) => {
  let classname = [styles["UserDrawer"]].filter((cls) => cls.length).join(" ");

  const { setSidebarVisibility } = useSidebarMobileContext();

  return (
    <div className={classname}>
      <Drawer.Root onOpenChange={() => setSidebarVisibility(false)}>
        <Drawer.Trigger asChild>
          <Avatar src="/img/iroh.jpg" />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className={styles["Overlay"]} />
          <Drawer.Content
            className={styles["Content"]}
            aria-describedby={undefined}
          >
            <Drawer.Title className={styles["Title"]}></Drawer.Title>
            <User
              imgSrc="/img/iroh.jpg"
              name="Ilya Kozlov"
              email="kozlov.ilya.me@gmail.com"
            />
            <ThemeSwitch />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
