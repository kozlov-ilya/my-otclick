"use client";

import { FiLogOut, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useSidebarMobileContext } from "@/contexts";
import { signOut } from "next-auth/react";

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

import styles from "./UserDropdown.module.css";

interface UserDropdownProps {
  name: string;
  email: string;
  avatarSrc?: string;
}

export const UserDropdown = (props: UserDropdownProps) => {
  const { name, email, avatarSrc } = props;

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
          <Avatar src={avatarSrc} />
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="end">
          <DropdownMenuItem
            onClick={(e) => {
              router.push("/settings");
            }}
          >
            <User imgSrc={avatarSrc} name={name} email={email} />
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
          <DropdownMenuItem
            icon={<FiLogOut />}
            onSelect={async (e) => {
              await signOut();
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
