"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SidebarMobileContextProvider } from "@/contexts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemesProvider defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SidebarMobileContextProvider>{children}</SidebarMobileContextProvider>
    </ThemeProvider>
  );
};
