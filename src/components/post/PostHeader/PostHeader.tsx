"use client";

import { TbDots } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegFlag } from "react-icons/fa6";

import { PostType } from "@/data/posts";
import { Avatar } from "@/components/basic/Avatar/Avatar";
import { Icon } from "@/components/basic/Icon/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/basic/DropdownMenu/DropdownMenu";

import styles from "./PostHeader.module.css";

interface PostHeaderProps {
  post?: PostType;
  isDetailed?: boolean;
}

export const PostHeader = (props: PostHeaderProps) => {
  const { isDetailed, post, ...rest } = props;

  let classname = [styles["PostHeader"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["AuthorInfo"]}>
        <Avatar size={isDetailed ? "md" : "sm"} src="/img/iroh.jpg" />
        <div className={styles["AuthorTextInfo"]}>
          {isDetailed && (
            <span
              className={styles["AuthorName"]}
            >{`${post?.author.name}`}</span>
          )}
          <span
            className={styles["AuthorUsername"]}
          >{`@${post?.author.username}`}</span>
        </div>
      </div>
      <div className={styles["Controls"]}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger>
            <Icon size="sm">
              <TbDots />
            </Icon>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem icon={<FaRegBookmark />}>Save</DropdownMenuItem>
            <DropdownMenuItem icon={<FaRegFlag />}>Report</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
