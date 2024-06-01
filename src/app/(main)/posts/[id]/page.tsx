import { getPostById } from "@/data/posts";
import { PostTags } from "@/components/post/PostTags/PostTags";
import { PostHeader } from "@/components/post/PostHeader/PostHeader";
import { OtclickForm } from "@/components/otclick/OtclickForm/OtclickForm";
import { getMyOtclick, getOtclicks } from "@/data/otclick";
import { OtclickCard } from "@/components/otclick/OtclickCard/OtclickCard";
import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./page.module.css";
import { ScrollUp } from "@/components/tools";

interface Props {
  params: { id: string };
}

const PostPage = ({ params }: Props) => {
  const { id } = params;

  const post = getPostById(id);

  const isCurrentUserPost = true;

  const otclicks = isCurrentUserPost ? getOtclicks() : [getMyOtclick()];

  return (
    <>
      <MainLayout>
        <div className={styles["Container"]}>
          <div className={styles["Post"]}>
            <PostHeader isDetailed={true} post={post} />
            <div className={styles["PostBody"]}>
              <div className={styles["PostTitle"]}>{post?.title}</div>
              <div className={styles["PostText"]}>{post?.text}</div>
              <div className={styles["Tags"]}>
                <PostTags post={post} />
              </div>
            </div>
          </div>
          <div className={styles["OtclickContainer"]}>
            <div className={styles["OtclickTitle"]}>
              {isCurrentUserPost
                ? `${otclicks.length} Otclicks`
                : `Your Otclick${otclicks.length > 1 ? "s" : ""}`}
            </div>
            <div className={styles["OtclickBody"]}>
              {isCurrentUserPost && otclicks.length && (
                <div className={styles["OtlicksList"]}>
                  {otclicks.map((otclick) => (
                    <OtclickCard key={otclick.id} otclick={otclick} />
                  ))}
                </div>
              )}

              {!isCurrentUserPost &&
                (otclicks[0] ? (
                  <OtclickCard otclick={otclicks[0]} />
                ) : (
                  <OtclickForm />
                ))}
            </div>
          </div>
        </div>
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default PostPage;
