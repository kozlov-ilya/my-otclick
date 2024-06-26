import { PostForm } from "@/components/post/PostForm/PostForm";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";
import { ScrollUp } from "@/components/tools/ScrollUp/ScrollUp";
import { getAllTags } from "@/data/tag";

interface Props {}

const NewPostPage = async (props: Props) => {
  const tags = await getAllTags();

  return (
    <>
      <MainLayout>
        <div className={styles["Container"]}>
          <PostForm tags={tags} />
        </div>
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default NewPostPage;
