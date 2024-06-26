"use server";

import { OtclickSchema } from "@/lib/zod";
import { OtclickFormType } from "@/components/otclick/OtclickForm/OtclickForm";
import { createOtclick } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const addOtclick = async ({
  data,
  postId,
}: {
  data: OtclickFormType;
  postId: number;
}) => {
  const validatedData = OtclickSchema.safeParse(data);

  if (!validatedData.success) {
    return { error: "Invalid data!" };
  }

  const { message } = validatedData.data;

  const curentUser = await getCurrentUser();

  if (!curentUser) {
    return { error: "User not logged!" };
  }

  try {
    await createOtclick({ postId, authorId: curentUser.id, message });

    revalidatePath(`/posts/${postId}`);
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
