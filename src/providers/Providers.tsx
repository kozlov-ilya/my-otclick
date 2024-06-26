"use client";

import { SidebarMobileContextProvider } from "@/contexts";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <SessionProvider>
        <ReactQueryProvider>
          <SidebarMobileContextProvider>
            {children}
          </SidebarMobileContextProvider>
        </ReactQueryProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};
