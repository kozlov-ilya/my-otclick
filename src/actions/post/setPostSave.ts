"use server";

import { savePostByIDs, unsavePostByIDs } from "@/data/post";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const setPostSaveForCurrentUser = async ({
  postId,
  save,
}: {
  postId: number;
  save: boolean;
}) => {
  const currentUser = await getCurrentUser();

  currentUser &&
    (await (save
      ? savePostByIDs({ postId, userId: currentUser.id })
      : unsavePostByIDs({ postId, userId: currentUser.id })));

  revalidatePath("/");
};
