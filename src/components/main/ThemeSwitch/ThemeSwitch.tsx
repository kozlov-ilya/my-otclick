import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

import { useEffect, useState } from "react";
import styles from "./ThemeSwitch.module.css";
import { Switch } from "@/components/basic";

interface ThemeSwitchProps {}

export const ThemeSwitch = (props: ThemeSwitchProps) => {
  const { ...rest } = props;

  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const themeToSwitch = resolvedTheme === "light" ? "dark" : "light";

  useEffect(() => {
    setMounted(true);
  }, []);

  let classname = [styles["ThemeSwitch"]].filter((cls) => cls.length).join(" ");

  return (
    <div
      className={classname}
      onClick={() => {
        setTheme(themeToSwitch);
      }}
    >
      <span className={styles["Icon"]}>
        <FiMoon />
      </span>
      <span className={styles["Text"]}>Dark Mode</span>
      {mounted && <Switch size="sm" checked={resolvedTheme === "dark"} />}
    </div>
  );
};
