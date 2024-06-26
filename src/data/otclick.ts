import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getAuthorByPostId } from "./post";
import { getUserById } from "./user";

export const createOtclick = async ({
  message,
  authorId,
  postId,
}: {
  message: string;
  authorId: string;
  postId: number;
}) => {
  const receiver = await getAuthorByPostId({ postId });

  if (!receiver) return null;

  const otclick = await db.otclick.create({
    data: { message, authorId, postId, receiverId: receiver },
  });

  return otclick;
};

export const getOtclickById = async ({ otclickId }: { otclickId: number }) => {
  const otclick = await db.otclick.findUnique({ where: { id: otclickId } });

  return otclick;
};

export const deleteOtclickById = async ({
  otclickId,
}: {
  otclickId: number;
}) => {
  const otclick = await db.otclick.delete({ where: { id: otclickId } });

  return otclick;
};

export const getOtclickOfCurrentUser = async ({
  postId,
}: {
  postId: number;
}) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return null;

  const otclick = await db.otclick.findUnique({
    where: {
      authorId_postId: {
        authorId: currentUser.id,
        postId,
      },
    },
  });

  return otclick;
};

export const getSentOtclicks = async ({ userId }: { userId: string }) => {
  const otclicks = await db.otclick.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return otclicks;
};

export const getOtclickAuthor = async ({
  otclickId,
}: {
  otclickId: number;
}) => {
  const otclick = await getOtclickById({ otclickId });

  const author = await getUserById(otclick?.authorId);

  return author;
};

export const getOtclickReceiver = async ({
  otclickId,
}: {
  otclickId: number;
}) => {
  const otclick = await getOtclickById({ otclickId });

  const receiver = await getUserById(otclick?.receiverId);

  return receiver;
};

export const getReceivedOtclicks = async ({ userId }: { userId: string }) => {
  const otclicks = await db.otclick.findMany({
    where: {
      receiverId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return otclicks;
};

export const getPostOtclicks = async ({ postId }: { postId: number }) => {
  const otclicks = await db.otclick.findMany({
    where: {
      postId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return otclicks;
};

export const markUserOtclicksViewed = async ({
  userId,
}: {
  userId: string;
}) => {
  await db.otclick.updateMany({
    where: { receiverId: userId },
    data: { viewed: true },
  });
};

export const markPostOtclicksViewed = async ({
  postId,
}: {
  postId: number;
}) => {
  const currentUser = await getCurrentUser();

  await db.otclick.updateMany({
    where: { receiverId: currentUser?.id, postId: postId },
    data: { viewed: true },
  });
};

export const getPostUnviewedOtcliks = async ({
  postId,
}: {
  postId: number;
}) => {
  const currentUser = await getCurrentUser();

  const otclicks = await db.otclick.findMany({
    where: { receiverId: currentUser?.id, postId: postId, viewed: false },
    orderBy: {
      createdAt: "desc",
    },
  });

  return otclicks;
};

export const getUserUnviewedOtcliks = async ({
  userId,
}: {
  userId: string;
}) => {
  const otclicks = await db.otclick.findMany({
    where: { receiverId: userId, viewed: false },
    orderBy: {
      createdAt: "desc",
    },
  });

  return otclicks;
};

export const checkIfCurrentUserOwnsOtclick = async ({
  otclickId,
}: {
  otclickId: number;
}) => {
  const user = await getCurrentUser();

  const otclick =
    user &&
    (await db.otclick.findUnique({
      where: { id: otclickId, authorId: user.id },
    }));

  return !!otclick;
};
