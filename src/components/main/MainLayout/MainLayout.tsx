import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children?: React.ReactNode;
  rightSidebarContent?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { rightSidebarContent, children } = props;

  let classname = [styles["MainLayout"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["Main"]}>{children}</div>
      <div className={styles["RightSidebar"]}>{rightSidebarContent}</div>
    </div>
  );
};
