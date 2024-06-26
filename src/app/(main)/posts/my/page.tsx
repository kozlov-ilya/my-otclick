import styles from "./page.module.css";

import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

interface Props {}

const MyPostsPage = async (props: Props) => {
  return <PostFeed title="My Posts" postsType="user" />;
};

export default MyPostsPage;
