import { Button } from "@/components/basic/Button/Button";
import styles from "./PostOtclicks.module.css";

import { MyOtclick } from "@/components/otclick/MyOtclick/MyOtclick";
import { OtclickCard } from "@/components/otclick/OtclickCard/OtclickCard";
import { getPostOtclicks } from "@/data/otclick";
import { checkIfCurrentUserOwnsPost } from "@/data/post";
import { PostOtclicksHeader } from "../PostOtclicksHeader/PostOtclicksHeader";
import {
  countPostUnviewedOtclicks,
  countUserUnviewedOtclicks,
} from "@/actions/otclick/countUnviewedOtclicks";
import { Banner } from "@/components/basic/Banner/Banner";

interface PostOtclicksProps {
  postId: number;
}

export const PostOtclicks = async (props: PostOtclicksProps) => {
  const { postId } = props;

  const isCurrentUserOwnsPost = await checkIfCurrentUserOwnsPost({ postId });

  const unviewedOtclicksCount = await countPostUnviewedOtclicks({ postId });

  const postOtclicks = isCurrentUserOwnsPost
    ? await getPostOtclicks({ postId })
    : null;

  let classname = [styles["PostOtclicks"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <PostOtclicksHeader
        isCurrentUserOwnsPost={isCurrentUserOwnsPost}
        postId={postId}
        unviewedOtclicksCount={unviewedOtclicksCount ?? undefined}
      />
      {isCurrentUserOwnsPost ? (
        <div className={styles["OtclicksList"]}>
          {postOtclicks && postOtclicks.length ? (
            postOtclicks.map((otclick) => {
              return <OtclickCard otclick={otclick} key={otclick.id} />;
            })
          ) : (
            <Banner>No otclicks found</Banner>
          )}
        </div>
      ) : (
        <MyOtclick postId={postId} />
      )}
    </div>
  );
};
