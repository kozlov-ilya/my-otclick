import { OtclicksFeed } from "@/components/otclick/OtclicksFeed/OtclicksFeed";
import { getOtclicks } from "@/data/otclick";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";

interface Props {}

const MyOtclicksPage = (props: Props) => {
  const otclicks = getOtclicks();

  return (
    <MainLayout>
      <div className={styles["Container"]}>
        <OtclicksFeed otclicks={otclicks} title="My Otclicks" />
      </div>
    </MainLayout>
  );
};

export default MyOtclicksPage;
