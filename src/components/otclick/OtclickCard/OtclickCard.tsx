import styles from "./OtclickCard.module.css";

import { Avatar } from "@/components/basic/Avatar/Avatar";
import { OtclickActions } from "@/components/otclick/OtclickActions/OtclickActions";
import { getOtclickAuthor, getOtclickReceiver } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";
import type { Otclick } from "@prisma/client";
import Link from "next/link";

interface OtclickCardProps {
  otclick: Otclick;
}

export const OtclickCard = async (props: OtclickCardProps) => {
  const { otclick } = props;

  const currentUser = await getCurrentUser();

  const author = await getOtclickAuthor({ otclickId: otclick.id });
  const receiver = await getOtclickReceiver({ otclickId: otclick.id });

  const isByCurrentUser = currentUser?.id === author?.id;
  const isForCurrentUser = currentUser?.id === receiver?.id;

  const isNew = isForCurrentUser && !otclick.viewed;

  let classname = [
    styles["OtclickCard"],
    isNew ? styles["OtclickCard_new"] : "",
  ]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        <div className={styles["Info"]}>
          <Avatar size="sm" src={author?.image ?? undefined} />
          <div className={styles["TextInfo"]}>
            <div className={styles["AuthorName"]}>{author?.username}</div>
            <div className={styles["Date"]}>
              <span>•</span>
              {otclick.createdAt.toLocaleDateString("ru-Ru")}
            </div>
          </div>
          <Link
            href={`/posts/${otclick.postId}`}
            className={styles["RelatedPostLink"]}
          >
            Related post
          </Link>
        </div>
        {isByCurrentUser ? <OtclickActions otclickId={otclick.id} /> : null}
      </div>
      <div className={styles["Body"]}>
        <div className={styles["Message"]}>{otclick.message}</div>
      </div>
    </div>
  );
};
