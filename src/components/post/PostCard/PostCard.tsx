import Link from "next/link";

import { PostTags } from "@/components/post/PostTags/PostTags";
import { PostType } from "@/data/posts";
import { PostHeader } from "@/components/post/PostHeader/PostHeader";

import styles from "./PostCard.module.css";

interface PostCardProps {
  post: PostType;
}

export const PostCard = (props: PostCardProps) => {
  const { post, ...rest } = props;

  let classname = [styles["PostCard"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <PostHeader post={post} />
      <div className={styles["PostBody"]}>
        <div className={styles["Title"]}>{post.title}</div>
        <div className={styles["Text"]}>{post.text}</div>
        <div className={styles["Tags"]}>
          <PostTags post={post} />
        </div>
      </div>

      <Link href={`/posts/${post.id}`} className={styles["Link"]}></Link>
    </div>
  );
};
