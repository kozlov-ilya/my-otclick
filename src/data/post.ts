import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TagNameType } from "@/types/tag";
import { getCurrentUserWatchedTags, setPostTags } from "./tag";

export const createPost = async ({
  title,
  text,
  authorId,
  tags = [],
}: {
  title: string;
  text: string;
  authorId: string;
  tags?: TagNameType[];
}) => {
  const post = await db.post.create({
    data: { title, text, authorId },
  });

  await setPostTags({ postId: post.id, tags: tags });

  return post;
};

export const updatePost = async ({
  title,
  text,
  authorId,
  tags = [],
  postId,
}: {
  title: string;
  text: string;
  authorId: string;
  tags?: TagNameType[];
  postId: number;
}) => {
  const post = await db.post.update({
    where: { id: postId },
    data: { title, text, authorId },
  });

  await setPostTags({ postId: post.id, tags: tags });

  return post;
};

export const getPostById = async (id: number) => {
  const post = await db.post.findUnique({
    where: { id },
    include: { tags: true },
  });

  return post;
};

export const deletePostById = async (id: number) => {
  const post = await db.post.delete({ where: { id } });

  return post;
};

export const getPostsByUserId = async (userId: string) => {
  const posts = await db.post.findMany({
    where: { authorId: userId },
    include: { tags: true },
  });

  return posts;
};

export const getSavedPosts = async () => {
  const user = await getCurrentUser();

  const posts = await db.post.findMany({
    where: { usersSaved: { some: { id: user?.id } } },
    include: { tags: true },
  });

  return posts;
};

export const getAllPosts = async () => {
  const posts = await db.post.findMany({ include: { tags: true } });

  return posts;
};

export const getAuthorByPostId = async ({ postId }: { postId: number }) => {
  const post = await getPostById(postId);

  return post?.authorId;
};

export const getWatchedPosts = async () => {
  const watchedTags = (await getCurrentUserWatchedTags()).map(
    (tag) => tag.name
  );

  const posts = await db.post.findMany({
    where: { tags: { some: { name: { in: watchedTags } } } },
    include: { tags: true, author: true },
  });

  return posts;
};

export const savePostByIDs = async ({
  postId,
  userId,
}: {
  postId: number;
  userId: string;
}) => {
  const user = await db.user.update({
    where: { id: userId },
    data: { savedPosts: { connect: { id: postId } } },
  });
};

export const unsavePostByIDs = async ({
  postId,
  userId,
}: {
  postId: number;
  userId: string;
}) => {
  const user = await db.user.update({
    where: { id: userId },
    data: { savedPosts: { disconnect: { id: postId } } },
  });
};

export const checkIfPostSavedByIDs = async ({
  postId,
  userId,
}: {
  postId: number;
  userId: string;
}) => {
  const post = await db.post.findUnique({
    where: { id: postId, usersSaved: { some: { id: userId } } },
  });

  return !!post;
};

export const checkIfCurrentUserOwnsPost = async ({
  postId,
}: {
  postId: number;
}) => {
  const user = await getCurrentUser();

  const post =
    user &&
    (await db.post.findUnique({
      where: { id: postId, authorId: user.id },
    }));

  return !!post;
};
