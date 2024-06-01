import { MdAdd } from "react-icons/md";

import { Button } from "@/components/basic/Button/Button";
import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { posts } from "@/data/posts";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";

interface Props {}

const MyPostsPage = (props: Props) => {
  return (
    <MainLayout>
      <PostFeed
        posts={posts}
        title="My Posts"
        ctaButton={
          <Button href="/posts/new" leftIcon={<MdAdd />}>
            Create Post
          </Button>
        }
      />
    </MainLayout>
  );
};

export default MyPostsPage;
