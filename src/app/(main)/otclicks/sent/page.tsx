import styles from "./page.module.css";

import { OtclicksFeed } from "@/components/otclick/OtclicksFeed/OtclicksFeed";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { getSentOtclicks } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";

interface Props {}

const SentOtclicksPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  const otclicks =
    currentUser && (await getSentOtclicks({ userId: currentUser.id }));

  return (
    <MainLayout>
      <div className={styles["Container"]}>
        <OtclicksFeed otclicks={otclicks} title="Sent Otclicks" />
      </div>
    </MainLayout>
  );
};

export default SentOtclicksPage;
