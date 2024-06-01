"use client";

import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import { OtclickType } from "@/data/otclick";
import { Avatar } from "@/components/basic/Avatar/Avatar";
import Link from "next/link";
import { Icon } from "@/components/basic/Icon/Icon";

import styles from "./OtclickCard.module.css";

interface OtclickCardProps {
  otclick: OtclickType;
  isRelatedPostShown?: boolean;
}

export const OtclickCard = (props: OtclickCardProps) => {
  const { otclick, isRelatedPostShown } = props;

  const isCurrentUserOtclick = true;

  let classname = [styles["OtclickCard"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        <div className={styles["Info"]}>
          <div className={styles["AuthorInfo"]}>
            <Avatar size="sm" src="/img/iroh.jpg" />
            <div className={styles["AuthorTextInfo"]}>
              <span
                className={styles["AuthorUsername"]}
              >{`@${otclick.author?.username}`}</span>
            </div>
          </div>

          {isRelatedPostShown && (
            <Link href={"/posts/1"} className={styles["PostLink"]}>
              Related Post
            </Link>
          )}
        </div>

        <div className={styles["Controls"]}>
          {isCurrentUserOtclick && (
            <>
              <Icon size="sm">
                <MdEdit />
              </Icon>
              <Icon size="sm" context="danger">
                <MdDeleteOutline />
              </Icon>
            </>
          )}
        </div>
      </div>
      <div className={styles["Body"]}>
        <div className={styles["Message"]}>{otclick.message}</div>
      </div>
    </div>
  );
};
