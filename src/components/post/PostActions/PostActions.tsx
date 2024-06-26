"use client";

import styles from "./PostActions.module.css";

import { TbDots } from "react-icons/tb";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

import { Icon } from "@/components/basic/Icon/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/basic/DropdownMenu/DropdownMenu";
import { deletePost } from "@/actions/post/deletePost";
import { usePathname } from "next/navigation";
import { setPostSaveForCurrentUser } from "@/actions/post/setPostSave";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface PostActionsProps {
  postId: number;
  currentUserId?: string;
  isPostOfCurrentUser?: boolean;
  isPostSaved?: boolean;
}

export const PostActions = (props: PostActionsProps) => {
  const { isPostOfCurrentUser = false, isPostSaved = false, postId } = props;

  const { push } = useRouter();

  const [postSaved, setPostSaved] = useState(isPostSaved);

  const currentPathname = usePathname();

  let classname = [styles["PostActions"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Icon size="sm">
            <TbDots />
          </Icon>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {isPostOfCurrentUser ? (
            <>
              <DropdownMenuItem
                icon={<FaRegEdit />}
                onClick={() => {
                  push(`/posts/edit/${postId}?callbackUrl=${currentPathname}`);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                icon={<FaRegTrashAlt />}
                onClick={async () => {
                  await deletePost({
                    postId,
                  });
                }}
              >
                Delete
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem
              icon={postSaved ? <FaBookmark /> : <FaRegBookmark />}
              onClick={async () => {
                await setPostSaveForCurrentUser({
                  postId,
                  save: !postSaved,
                });
                setPostSaved((st) => !st);
              }}
            >
              {postSaved ? "Unsave" : "Save"}
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
