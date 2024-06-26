"use client";

import styles from "./PostOtclicksHeader.module.css";

import { markAllPostOtclicksViewed } from "@/actions/otclick/markOtclicksViewed";
import { Button } from "@/components/basic/Button/Button";

interface PostOtclicksHeaderProps {
  postId: number;
  isCurrentUserOwnsPost?: boolean;
  unviewedOtclicksCount?: number;
}

export const PostOtclicksHeader = (props: PostOtclicksHeaderProps) => {
  const {
    postId,
    isCurrentUserOwnsPost = false,
    unviewedOtclicksCount,
  } = props;

  let classname = [styles["PostOtclicksHeader"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Title"]}>
        {isCurrentUserOwnsPost ? "Otclicks" : "My Otclick"}
      </div>
      {isCurrentUserOwnsPost && (
        <Button
          role="secondary"
          onClick={async () => {
            await markAllPostOtclicksViewed({ postId });
          }}
          disabled={!unviewedOtclicksCount}
        >
          Mark as viewed
        </Button>
      )}
    </div>
  );
};
