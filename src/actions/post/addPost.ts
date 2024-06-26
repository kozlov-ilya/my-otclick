"use server";

import { PostSchema } from "@/lib/zod";
import { PostFormType } from "@/components/post/PostForm/PostForm";
import { createPost } from "@/data/post";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { TagNameType } from "@/types/tag";
import { redirect } from "next/navigation";

export const addPost = async (data: PostFormType, tags: TagNameType[]) => {
  const validatedData = PostSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid data!" };
  }

  const { title, text } = validatedData.data;

  const session = await auth();

  if (!session) {
    return { error: "User not logged!" };
  }

  try {
    const post = await createPost({
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
