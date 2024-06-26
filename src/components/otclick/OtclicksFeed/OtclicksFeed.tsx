import { Banner } from "@/components/basic/Banner/Banner";
import styles from "./OtclicksFeed.module.css";

import { OtclickCard } from "@/components/otclick/OtclickCard/OtclickCard";
import { OtclickFeedControls } from "@/components/otclick/OtclickFeedControls/OtclickFeedControls";
import type { Otclick } from "@prisma/client";

interface OtclicksFeedProps {
  otclicks?: Otclick[];
  title?: string;
  showControls?: boolean;
}

export const OtclicksFeed = (props: OtclicksFeedProps) => {
  const { showControls = false, title, otclicks } = props;

  let classname = [styles["OtclicksFeed"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        {title && <div className={styles["Title"]}>{title}</div>}
        {showControls && <OtclickFeedControls otclicks={otclicks} />}
      </div>
      <div className={styles["OtclicksList"]}>
        {otclicks && otclicks.length ? (
          otclicks.map((otclick) => {
            return <OtclickCard otclick={otclick} key={otclick.id} />;
          })
        ) : (
          <Banner>No otclicks found</Banner>
        )}
      </div>
    </div>
  );
};
