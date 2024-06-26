"use client";

import { Drawer } from "vaul";
import { FiLogOut } from "react-icons/fi";

import { Avatar } from "@/components/basic/Avatar/Avatar";
import { ThemeSwitch } from "@/components/main/ThemeSwitch/ThemeSwitch";
import { User } from "@/components/main/User/User";

import styles from "./UserDrawer.module.css";
import { useSidebarMobileContext } from "@/contexts";
import { Button } from "@/components/basic/Button/Button";
import { signOut } from "next-auth/react";
import type { User as UserType } from "next-auth";

interface UserDrawerProps {
  user?: {
    id: string;
    name: string;
    username: string;
    email: string;
    image?: string | undefined;
    isOAuth: boolean;
  } & UserType;
}

export const UserDrawer = (props: UserDrawerProps) => {
  const { user } = props;

  let classname = [styles["UserDrawer"]].filter((cls) => cls.length).join(" ");

  const { setSidebarVisibility } = useSidebarMobileContext();

  return (
    <div className={classname}>
      <Drawer.Root onOpenChange={() => setSidebarVisibility(false)}>
        <Drawer.Trigger asChild>
          <Avatar src={user?.image} />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className={styles["Overlay"]} />
          <Drawer.Content
            className={styles["Content"]}
            aria-describedby={undefined}
          >
            <Drawer.Title className={styles["Title"]}></Drawer.Title>
            <User
              imgSrc={user?.image}
              name={user?.name ?? ""}
              email={user?.email ?? ""}
            />
            <ThemeSwitch />
            <Button
              role="secondary"
              leftIcon={<FiLogOut />}
              onClick={async () => {
                await signOut();
              }}
            >
              Log out
            </Button>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
