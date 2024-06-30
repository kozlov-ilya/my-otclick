"use server";

import { deletePostById } from "@/data/post";
import { revalidatePath } from "next/cache";

export const deletePost = async ({ postId }: { postId: number }) => {
  try {
    const post = await deletePostById(postId);

    revalidatePath("/");

    return post;
  } catch (error) {
    throw error;
  }
};
