import styles from "./page.module.css";

import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

interface Props {}

const SavedPostsPage = async (props: Props) => {
  return <PostFeed title="Saved Posts" postsType="saved" />;
};

export default SavedPostsPage;
