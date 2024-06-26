import styles from "./page.module.css";

import { PostFeed } from "@/components/post/PostFeed/PostFeed";
import { Filters } from "@/components/search/Filters/Filters";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { getAllTags, getCurrentUserWatchedTags } from "@/data/tag";

interface HomePageProps {}

const HomePage = async (props: HomePageProps) => {
  const tags = await getAllTags();
  const watchedTags = await getCurrentUserWatchedTags();

  return (
    <PostFeed
      title="Recent Posts"
      tags={tags}
      watchedTags={watchedTags}
      showControls
      showFilters
    />
  );
};

export default HomePage;
