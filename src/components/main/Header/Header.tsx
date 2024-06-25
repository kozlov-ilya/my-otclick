"use client";

import { useState } from "react";

import { useMatchMedia, useCurrentUser } from "@/hooks";

import { SearchBar } from "@/components/search";

import { SidebarMobile, UserDrawer, UserDropdown } from "@/components/main";

import styles from "./Header.module.css";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const { isDesktop, isMobile } = useMatchMedia();

  const user = useCurrentUser();

  let classname = [styles["Header"]].filter((cls) => cls.length).join(" ");

  return (
    <header className={classname}>
      {!isDesktop && <SidebarMobile />}

      {!isMobile ? (
        <>
          <div className={styles["SarchContainer"]}>
            <SearchBar />
          </div>

          {user && (
            <UserDropdown
              name={user.name}
              email={user.email}
              avatarSrc={user?.image}
            />
          )}
        </>
      ) : (
        <UserDrawer />
      )}
    </header>
  );
};
