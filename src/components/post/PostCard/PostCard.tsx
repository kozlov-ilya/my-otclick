import styles from "./PostCard.module.css";

import Link from "next/link";
import type { Post, Tag, User } from "@prisma/client";
import { PostTags } from "@/components/post/PostTags/PostTags";
import { PostCardHeader } from "@/components/post/PostCardHeader/PostCardHeader";

interface PostCardProps {
  post: Post & { tags: Tag[] } & { author: User };
}

export const PostCard = (props: PostCardProps) => {
  const { post } = props;

  const author = post.author;

  let classname = [styles["PostCard"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <PostCardHeader post={post} author={author ?? undefined} />
      <div className={styles["PostBody"]}>
        <div className={styles["Title"]}>{post.title}</div>
        <div className={styles["Text"]}>{post.text}</div>
        <PostTags tags={post.tags} />
      </div>
      <Link href={`/posts/${post.id}`} className={styles["Link"]}></Link>
    </div>
  );
};
