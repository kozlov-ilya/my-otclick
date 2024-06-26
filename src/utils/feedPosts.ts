"use server";

import { setPostTags } from "@/data/tag";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { TagNameType } from "@/types/tag";

const title =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin gravida odio a cursus.";
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin gravida odio a cursus. Donec iaculis nec lectus nec ultrices. Mauris auctor, velit euismod venenatis rhoncus, dolor tortor condimentum urna, non pretium tortor lectus quis metus. Sed rhoncus eu neque ut fermentum. Praesent imperdiet lorem id velit facilisis, sed faucibus tellus blandit. Vivamus non lobortis ex. Quisque vulputate est non dui feugiat consectetur ut in diam. Curabitur vel hendrerit quam. Duis sodales enim sit amet volutpat mollis.";

const tagsArr: TagNameType[] = ["science", "project", "job"];

const postsArr = Array(5).fill({ title, text }, 0, 10);

export const feedPosts = async () => {
  const user = await getCurrentUser();

  console.log(postsArr);

  if (!user?.id) return;

  const posts = await db.post.createManyAndReturn({
    data: postsArr.map((post) => {
      return { title: post.title, text: post.text, authorId: user?.id };
    }),
  });

  posts.forEach(async (post) => {
    await setPostTags({ postId: post.id, tags: tagsArr });
  });
};
