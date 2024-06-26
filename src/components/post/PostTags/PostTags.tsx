import { Tag } from "@/components/basic/Tag/Tag";
import type { Tag as TagType } from "@prisma/client";

import styles from "./PostTags.module.css";

interface PostTagsProps {
  tags?: TagType[];
}

export const PostTags = (props: PostTagsProps) => {
  const { tags } = props;

  let classname = [styles["PostTags"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      {tags?.map((tag) => (
        <Tag label={tag.name} key={tag.id} />
      ))}
    </div>
  );
};
