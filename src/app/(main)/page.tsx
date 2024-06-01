import { MdAdd } from "react-icons/md";

import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { posts } from "@/data/posts";
import { Filters } from "@/components/search/Filters/Filters";
import { Button } from "@/components/basic/Button/Button";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  return (
    <MainLayout rightSidebarContent={<Filters />}>
      <PostFeed posts={posts} title="Recent Posts" />
    </MainLayout>
  );
};

export default HomePage;
