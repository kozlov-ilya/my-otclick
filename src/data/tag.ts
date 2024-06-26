import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/auth";
import { TagNameType } from "@/types/tag";

export const getAllTags = async () => {
  const tags = await db.tag.findMany();

  return tags;
};

export const getCurrentUserWatchedTags = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return [];
  }

  const tags = await db.tag.findMany({
    where: { users: { some: { id: currentUser.id } } },
  });

  return tags;
};

export const setCurrentUserWatchedTags = async (newTags: TagNameType[]) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return null;
  }

  await db.user.update({
    where: { id: currentUser.id },
    data: {
      watchedTags: {
        set: newTags.map((tag) => ({ name: tag })),
      },
    },
  });
};

export const setPostTags = async ({
  postId,
  tags,
}: {
  postId: number;
  tags: TagNameType[];
}) => {
  await db.post.update({
    where: { id: postId },
    data: {
      tags: {
        set: tags.map((tag) => ({ name: tag })),
      },
    },
  });
};
