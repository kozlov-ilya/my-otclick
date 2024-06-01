"use client";

import { Tag } from "@/components/basic/Tag/Tag";
import { PostType } from "@/data/posts";

import styles from "./PostTags.module.css";

interface PostTagsProps {
  post?: PostType;
}

export const PostTags = (props: PostTagsProps) => {
  const { post, ...rest } = props;

  let classname = [styles["PostTags"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      {post?.tags.map((tag) => (
        <Tag key={tag.value} label={tag.label} />
      ))}
    </div>
  );
};
