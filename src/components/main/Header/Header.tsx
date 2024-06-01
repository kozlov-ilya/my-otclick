"use client";

import { useState } from "react";

import { useMatchMedia } from "@/hooks/useMatchMedia";

import { SearchBar } from "@/components/search";

import { SidebarMobile, UserDrawer, UserDropdown } from "@/components/main";

import styles from "./Header.module.css";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const { isDesktop, isMobile } = useMatchMedia();

  let classname = [styles["Header"]].filter((cls) => cls.length).join(" ");

  return (
    <header className={classname}>
      {!isDesktop && <SidebarMobile />}

      {!isMobile ? (
        <>
          <div className={styles["SarchContainer"]}>
            <SearchBar />
          </div>
          <UserDropdown />
        </>
      ) : (
        <UserDrawer />
      )}
    </header>
  );
};
