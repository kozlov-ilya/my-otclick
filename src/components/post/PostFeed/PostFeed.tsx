import dynamic from "next/dynamic";

import { PostCard } from "@/components/post/PostCard/PostCard";
import { PostType } from "@/data/posts";
import { PostFeedControls } from "../PostFeedControls/PostFeedControls";
const DynamicPostFeedControls = dynamic(
  () =>
    import("@/components/post/PostFeedControls/PostFeedControls").then(
      (mod) => mod.PostFeedControls
    ),
  { ssr: false }
);

import styles from "./PostFeed.module.css";

interface PostFeedProps {
  posts: PostType[];
  title?: string;
  showControls?: boolean;
}

export const PostFeed = (props: PostFeedProps) => {
  const { posts, showControls = true, title } = props;

  let classname = [styles["PostFeed"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        {title && <div className={styles["Title"]}>{title}</div>}
        {showControls && <DynamicPostFeedControls />}
      </div>
      <div className={styles["PostsList"]}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
