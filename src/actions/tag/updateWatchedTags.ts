"use server";

import { setCurrentUserWatchedTags } from "@/data/tag";
import { TagNameType } from "@/types/tag";
import { revalidatePath } from "next/cache";

export const updateWatchedTags = async ({
  newTags,
}: {
  newTags: TagNameType[];
}) => {
  try {
    await setCurrentUserWatchedTags(newTags);

    revalidatePath("/");
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
