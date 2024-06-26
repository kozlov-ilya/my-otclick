import { Sidebar } from "@/components/main/Sidebar/Sidebar";
import { Header } from "@/components/main/Header/Header";

import styles from "./layout.module.css";
import { countUserUnviewedOtclicks } from "@/actions/otclick/countUnviewedOtclicks";

interface Props {
  children?: React.ReactNode;
}

const MainLayout = async (props: Props) => {
  const { children } = props;

  const unviewedOtclicksCount = await countUserUnviewedOtclicks();

  return (
    <div className={styles["Container"]}>
      <div className={styles["Sidebar"]}>
        <Sidebar unviewedOtclicksCount={unviewedOtclicksCount ?? undefined} />
      </div>
      <div className={styles["Header"]}>
        <Header />
      </div>
      <div className={styles["MainContent"]}>{children}</div>
    </div>
  );
};

export default MainLayout;
