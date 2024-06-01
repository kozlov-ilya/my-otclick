import dynamic from "next/dynamic";

import { Sidebar } from "@/components/main/Sidebar/Sidebar";
import { HeaderSkeleton } from "@/components/main/HeaderSkeleton/HeaderSkeleton";
import { Header } from "@/components/main/Header/Header";

const DynamicHeader = dynamic(
  () => import("@/components/main/Header/Header").then((mod) => mod.Header),
  { ssr: false, loading: () => <HeaderSkeleton /> }
);

import styles from "./layout.module.css";

interface Props {
  children?: React.ReactNode;
}

const MainLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles["Container"]}>
      <div className={styles["Sidebar"]}>
        <Sidebar />
      </div>
      <div className={styles["Header"]}>
        <DynamicHeader />
      </div>
      <div className={styles["MainContent"]}>{children}</div>
    </div>
  );
};

export default MainLayout;
