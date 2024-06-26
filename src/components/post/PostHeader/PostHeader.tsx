import styles from "./PostHeader.module.css";

import type { Post, User } from "@prisma/client";
import { Avatar } from "@/components/basic/Avatar/Avatar";
import { PostActions } from "@/components/post/PostActions/PostActions";
import { getCurrentUser } from "@/lib/auth";
import { checkIfPostSavedByIDs } from "@/data/post";

interface PostHeaderProps {
  post: Post;
  author?: User;
  isDetailed?: boolean;
}

export const PostHeader = async (props: PostHeaderProps) => {
  const { post, author, isDetailed = false } = props;

  const currentUser = await getCurrentUser();

  const isPostSavedByCurrentUser =
    currentUser &&
    (await checkIfPostSavedByIDs({
      postId: post.id,
      userId: currentUser.id,
    }));

  let classname = [
    styles["PostHeader"],
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
      <PostActions
        postId={post.id}
        currentUserId={currentUser?.id}
        isPostOfCurrentUser={currentUser?.id === post.authorId}
        isPostSaved={isPostSavedByCurrentUser}
      />
    </div>
  );
};
