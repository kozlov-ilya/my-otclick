import styles from "./PostCardHeader.module.css";

import type { Post, User } from "@prisma/client";
import { Avatar } from "@/components/basic/Avatar/Avatar";

interface PostCardHeaderProps {
  post: Post;
  author?: User;
  isDetailed?: boolean;
}

export const PostCardHeader = (props: PostCardHeaderProps) => {
  const { post, author, isDetailed = false } = props;

  let classname = [
    styles["PostCardHeader"],
    isDetailed ? styles["PostHeader_detailed"] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Info"]}>
        <Avatar
          size={isDetailed ? "md" : "sm"}
          src={author?.image ?? undefined}
        />
        <div className={styles["TextInfo"]}>
          <div className={styles["AuthorName"]}>
            {author?.username ?? "Unknown"}
          </div>
          <div className={styles["Date"]}>
            <span>•</span>
            {post.createdAt.toLocaleDateString("ru-Ru")}
          </div>
        </div>
      </div>
    </div>
  );
};
