"use server";

import { deletePostById } from "@/data/post";
import { revalidatePath } from "next/cache";

export const deletePost = async ({ postId }: { postId: number }) => {
  const post = await deletePostById(postId);

  revalidatePath("/");

  return post;
};
