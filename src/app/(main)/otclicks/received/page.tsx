import styles from "./page.module.css";

import { OtclicksFeed } from "@/components/otclick/OtclicksFeed/OtclicksFeed";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { getReceivedOtclicks } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";

interface Props {}

const ReceivedOtclicksPage = async (props: Props) => {
  const currentUser = await getCurrentUser();

  const otclicks =
    currentUser && (await getReceivedOtclicks({ userId: currentUser.id }));

  return (
    <MainLayout>
      <div className={styles["Container"]}>
        <OtclicksFeed
          otclicks={otclicks}
          title="Received Otclicks"
          showControls
        />
      </div>
    </MainLayout>
  );
};

export default ReceivedOtclicksPage;
