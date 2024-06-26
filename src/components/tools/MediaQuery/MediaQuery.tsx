"use client";

import { useMediaQuery } from "react-responsive";

export const MediaQueryDesktop = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  return isDesktop ? children : null;
};

export const MediaQueryTablet = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1199 });

  return isTablet ? children : null;
};

export const MediaQueryMobile = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? children : null;
};

export const MediaQueryTabletAndBelow = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isTabletAndBelow = useMediaQuery({ maxWidth: 1199 });

  return isTabletAndBelow ? children : null;
};

export const MediaQueryTabletAndOver = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isTabletAndOver = useMediaQuery({ minWidth: 768 });

  return isTabletAndOver ? children : null;
};
