import { NewPostForm } from "@/components/post/NewPostForm/NewPostForm";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";
import { ScrollUp } from "@/components/tools";

interface Props {}

const NewPostPage = (props: Props) => {
  return (
    <>
      <MainLayout>
        <div className={styles["Container"]}>
          <NewPostForm />
        </div>
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default NewPostPage;
