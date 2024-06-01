import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { posts } from "@/data/posts";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";

interface Props {}

const SavedPostsPage = (props: Props) => {
  return (
    <MainLayout>
      <PostFeed posts={posts} title="Saved Posts" showControls={false} />
    </MainLayout>
  );
};

export default SavedPostsPage;
