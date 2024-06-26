"use client";

import styles from "./FeedDb.module.css";

import { Button } from "@/components/basic/Button/Button";
import { feedTags } from "@/utils/feedTags";
import { feedPosts } from "@/utils/feedPosts";

interface FeedDbProps {}

export const FeedDb = (props: FeedDbProps) => {
  const { ...rest } = props;

  let classname = [styles["FeedDb"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <Button
        role="secondary"
        onClick={async () => {
          await feedTags();
        }}
      >
        Feed tags
      </Button>
      <Button
        role="secondary"
        onClick={async () => {
          await feedPosts();
        }}
      >
        Feed posts
      </Button>
    </div>
  );
};
