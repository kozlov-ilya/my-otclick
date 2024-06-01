import { OtclickType } from "@/data/otclick";
import { OtclickCard } from "../OtclickCard/OtclickCard";

import styles from "./OtclicksFeed.module.css";

interface OtclicksFeedProps {
  otclicks: OtclickType[];
  title?: string;
}

export const OtclicksFeed = (props: OtclicksFeedProps) => {
  const { otclicks, title } = props;

  let classname = [styles["OtclicksFeed"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>{title}</div>
      </div>
      <div className={styles["OtclicksList"]}>
        {otclicks.map((otclick) => {
          return (
            <OtclickCard
              otclick={otclick}
              isRelatedPostShown={true}
              key={otclick.id}
            />
          );
        })}
      </div>
    </div>
  );
};
