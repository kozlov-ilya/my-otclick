"use server";

import { db } from "@/lib/db";
import { getCurrentUserWatchedTags } from "@/data/tag";
import { getCurrentUser } from "@/lib/auth";

export const getNextWatchedPosts = async (cursor: number | undefined) => {
  const watchedTags = (await getCurrentUserWatchedTags()).map(
    (tag) => tag.name
  );

  const limit = 5;

  const cursorObj = cursor ? { id: cursor } : undefined;

  const posts = await db.post.findMany({
    where: { tags: { some: { name: { in: watchedTags } } } },
    include: {
      tags: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: cursor ? 1 : 0,
    cursor: cursorObj,
    take: limit,
  });

  return {
    posts,
    nextCursor: posts.length === limit ? posts[limit - 1].id : undefined,
  };
};

export const getNextSavedPosts = async (cursor: number | undefined) => {
  const user = await getCurrentUser();

  const limit = 5;

  const cursorObj = cursor ? { id: cursor } : undefined;

  const posts = await db.post.findMany({
    where: { usersSaved: { some: { id: user?.id } } },
    include: {
      tags: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: cursor ? 1 : 0,
    cursor: cursorObj,
    take: limit,
  });

  return {
    posts,
    nextCursor: posts.length === limit ? posts[limit - 1].id : undefined,
  };
};

export const getNextUserPosts = async (cursor: number | undefined) => {
  const user = await getCurrentUser();

  const limit = 5;

  const cursorObj = cursor ? { id: cursor } : undefined;

  const posts = await db.post.findMany({
    where: { authorId: user?.id },
    include: {
      tags: true,
      author: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: cursor ? 1 : 0,
    cursor: cursorObj,
    take: limit,
  });

  return {
    posts,
    nextCursor: posts.length === limit ? posts[limit - 1].id : undefined,
  };
};
