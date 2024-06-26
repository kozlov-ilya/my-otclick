import styles from "./page.module.css";

import { PostHeader } from "@/components/post/PostHeader/PostHeader";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { ScrollUp } from "@/components/tools/ScrollUp/ScrollUp";
import { getPostById } from "@/data/post";
import { getUserById } from "@/data/user";
import { PostOtclicks } from "@/components/post/PostOtclicks/PostOtclicks";
import { PostTags } from "@/components/post/PostTags/PostTags";
import { Banner } from "@/components/basic/Banner/Banner";

interface Props {
  params: { id: string };
}

const PostPage = async ({ params }: Props) => {
  const { id } = params;
  const postId = +id;

  const post = await getPostById(postId);

  const author = await getUserById(post?.authorId);

  return (
    <>
      <MainLayout>
        {post ? (
          <div className={styles["Container"]}>
            <div className={styles["Post"]}>
              <PostHeader
                isDetailed={true}
                post={post}
                author={author ?? undefined}
              />
              <div className={styles["PostBody"]}>
                <div className={styles["PostTitle"]}>{post?.title}</div>
                <div className={styles["PostText"]}>{post?.text}</div>
              </div>
              <PostTags tags={post.tags} />
            </div>
            <div className={styles["OtclicksContainer"]}>
              <PostOtclicks postId={postId} />
            </div>
          </div>
        ) : (
          <Banner>No post found</Banner>
        )}
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default PostPage;
