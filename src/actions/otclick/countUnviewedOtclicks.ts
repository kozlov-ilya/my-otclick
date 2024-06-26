"use server";

import { getPostUnviewedOtcliks, getUserUnviewedOtcliks } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";

export const countPostUnviewedOtclicks = async ({
  postId,
}: {
  postId: number;
}) => {
  try {
    const unviewedOtclicks = await getPostUnviewedOtcliks({ postId });

    return unviewedOtclicks.length;
  } catch (error) {
    return null;
  }
};

export const countUserUnviewedOtclicks = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  try {
    const unviewedOtclicks = await getUserUnviewedOtcliks({
      userId: currentUser.id,
    });

    return unviewedOtclicks.length;
  } catch (error) {
    return null;
  }
};
