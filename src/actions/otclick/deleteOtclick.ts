"use server";

import { deleteOtclickById } from "@/data/otclick";
import { getCurrentUser } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const deleteOtclick = async ({
  otclickId,
  pathToRevalidate,
}: {
  otclickId: number;
  pathToRevalidate?: string;
}) => {
  try {
    await deleteOtclickById({ otclickId });

    // pathToRevalidate && revalidatePath(pathToRevalidate);
    revalidatePath("/");
  } catch (error) {
    return { error: "Something went wrong!" };
  }
};
