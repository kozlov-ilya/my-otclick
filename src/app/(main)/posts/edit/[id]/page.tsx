import styles from "./page.module.css";

import { PostForm } from "@/components/post/PostForm/PostForm";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { ScrollUp } from "@/components/tools/ScrollUp/ScrollUp";
import { getAllTags } from "@/data/tag";
import { checkIfCurrentUserOwnsPost, getPostById } from "@/data/post";
import { redirect } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditPostPage = async ({ params }: Props) => {
  const { id } = params;
  const postId = +id;

  const isCurrentUserOwnsPost = await checkIfCurrentUserOwnsPost({ postId });

  if (!isCurrentUserOwnsPost) {
    redirect("/");
  }

  const tags = await getAllTags();

  const post = postId && (await getPostById(+postId));

  return isCurrentUserOwnsPost ? (
    <>
      <MainLayout>
        <div className={styles["Container"]}>
          <PostForm
            tags={tags}
            postId={postId}
            defaultValues={
              post
                ? { title: post.title, text: post.text, tags: post.tags }
                : undefined
            }
            isEdit
          />
        </div>
      </MainLayout>
      <ScrollUp />
    </>
  ) : null;
};

export default EditPostPage;
