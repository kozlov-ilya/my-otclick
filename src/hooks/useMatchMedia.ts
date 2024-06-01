import { useState, useLayoutEffect } from "react";

const queries = [
  "(width <= 768px)",
  "(768px < width < 1200px",
  "(1200px <= width)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => window.matchMedia(query));

  const getMatchValues = () => mediaQueryLists.map((mql) => mql.matches);

  const [matchValues, setMatchValues] = useState(getMatchValues());

  useLayoutEffect(() => {
    const changeHandler = (e: any) => {
      setMatchValues(getMatchValues());
    };

    mediaQueryLists.forEach((mql) =>
      mql.addEventListener("change", changeHandler)
    );

    return () => {
      mediaQueryLists.forEach((mql) =>
        mql.removeEventListener("change", changeHandler)
      );
    };
  });

  return ["isMobile", "isTablet", "isDesktop"].reduce<{
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
  }>(
    (acc, screen, index) => ({
      ...acc,
      [screen]: matchValues[index],
    }),
    { isMobile: false, isTablet: false, isDesktop: false }
  );
};
