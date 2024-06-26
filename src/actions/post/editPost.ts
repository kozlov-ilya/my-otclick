"use server";

import { PostSchema } from "@/lib/zod";
import { PostFormType } from "@/components/post/PostForm/PostForm";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { TagNameType } from "@/types/tag";
import { updatePost } from "@/data/post";

export const editPost = async ({
  data,
  tags,
  postId,
}: {
  data: PostFormType;
  tags: TagNameType[];
  postId?: number;
}) => {
  const validatedData = PostSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid data!" };
  }

  if (!postId) {
    return { error: "No post" };
  }

  const { title, text } = validatedData.data;

  const session = await auth();

  if (!session) {
    return { error: "User not logged!" };
  }

  try {
    const post = await updatePost({
      postId,
      title,
      text,
      authorId: session.user.id,
      tags: tags,
    });

    revalidatePath("/");
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
