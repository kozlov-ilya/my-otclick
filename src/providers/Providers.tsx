"use client";

import { SidebarMobileContextProvider } from "@/contexts";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SessionProvider>
        <SidebarMobileContextProvider>{children}</SidebarMobileContextProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
