"use server";

import { markPostOtclicksViewed, markUserOtclicksViewed } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const markAllCurrentUserOtclicksViewed = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return { error: "No user" };

  try {
    await markUserOtclicksViewed({ userId: currentUser?.id });

    revalidatePath("/");
  } catch (error) {
    return { error: "Error" };
  }
};

export const markAllPostOtclicksViewed = async ({
  postId,
}: {
  postId: number;
}) => {
  try {
    await markPostOtclicksViewed({ postId });

    revalidatePath("/");
  } catch (error) {
    return { error: "Error" };
  }
};
