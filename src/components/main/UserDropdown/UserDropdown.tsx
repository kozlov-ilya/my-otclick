"use client";

import { FiLogOut, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/components/main/User/User";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/basic/DropdownMenu/DropdownMenu";
import { Switch } from "@/components/basic/Switch/Switch";
import { Avatar } from "@/components/basic/Avatar/Avatar";
import { useSidebarMobileContext } from "@/contexts";

import styles from "./UserDropdown.module.css";

interface UserDropdownProps {}

export const UserDropdown = (props: UserDropdownProps) => {
  const { ...rest } = props;

  const { setSidebarVisibility } = useSidebarMobileContext();

  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const themeToSwitch = resolvedTheme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  let classname = [styles["UserDropdown"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <DropdownMenu
        modal={false}
        onOpenChange={() => setSidebarVisibility(false)}
      >
        <DropdownMenuTrigger>
          <Avatar src="/img/iroh.jpg" />
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="end">
          <DropdownMenuItem
            onClick={(e) => {
              router.push("/settings");
            }}
          >
            <User
              imgSrc="/img/iroh.jpg"
              name="Ilya Kozlov"
              email="kozlov.ilya.me@gmail.com"
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {mounted && (
            <DropdownMenuItem
              icon={<FiMoon />}
              onSelect={(e) => {
                e.preventDefault();
                setTheme(themeToSwitch);
              }}
              rightContent={
                <Switch size="sm" checked={resolvedTheme === "dark"} />
              }
            >
              {`Dark mode`}
            </DropdownMenuItem>
          )}
          <DropdownMenuItem icon={<FiLogOut />}>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
