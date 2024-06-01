"use client";

import { MdAdd } from "react-icons/md";

import styles from "./PostFeedControls.module.css";
import { Button, Icon } from "@/components/basic";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { TagsDrawer } from "@/components/search";

interface PostFeedControlsProps {}

export const PostFeedControls = (props: PostFeedControlsProps) => {
  const { isMobile } = useMatchMedia();

  let classname = [styles["PostFeedControls"]]
    .filter((cls) => cls.length)
    .join(" ");

  return !isMobile ? (
    <div className={classname}>
      <Button href="/posts/new" leftIcon={<MdAdd />}>
        Create Post
      </Button>
    </div>
  ) : (
    <div className={classname}>
      <TagsDrawer />
      <Icon variant="fill" href="/posts/new">
        <MdAdd />
      </Icon>
    </div>
  );
};
