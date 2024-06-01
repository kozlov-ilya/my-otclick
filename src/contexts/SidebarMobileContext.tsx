"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ContextType = {
  showSidebar: boolean;
  setSidebarVisibility: (show: boolean) => void;
};

export const SidebarMobileContext = createContext<ContextType | null>(null);

export const SidebarMobileContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const setSidebarVisibility = (show: boolean) => {
    setShowSidebar(show);

    if (show) {
      document.body.classList.add("scroll_locked");
    } else {
      document.body.classList.remove("scroll_locked");
    }
  };

  return (
    <SidebarMobileContext.Provider
      value={{ showSidebar, setSidebarVisibility }}
    >
      {children}
    </SidebarMobileContext.Provider>
  );
};

export const useSidebarMobileContext = () => {
  const context = useContext(SidebarMobileContext);

  if (!context) {
    throw new Error(
      "useSidebarMobileContext must be used within a SidebarMobileContextProvider"
    );
  }

  return context;
};
