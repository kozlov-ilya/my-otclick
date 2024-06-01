import { TagType } from "@/components/basic/Tag/Tag";

import { tags } from "@/components/search/TagsFilter/TagsFilter";

export type PostType = {
  id: string;
  title: string;
  text: string;
  tags: TagType[];
  author: { username: string; name: string };
};

export const posts = [
  {
    id: "1",
    title:
      "I feel like khan academy is garbage for learning math for anything beyond 10th grade math.",
    text: "I always see khan academy recommended as a source for learning maths like calc, multivariable calc, linear algebra, etc… but in my experience it’s always sucked whenever I’ve used it. For example last summer I tried learning multivariable calculus from khan academy, and it absolutely did not work, khan academy spends the vast majority of the time explaining concepts in arguably excessive detail and when it does ask you questions, they are so simple and require so little thinking to solve that you spend practically no time actually doing math, and when you, do it’s not really engaging and doesn’t make the person learning really grasp the ideas. In my experience following a lecture series/ textbook alongside something like a problem book is far more effective for self study than something like khan academy",
    tags,
    author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
  },
  {
    id: "2",
    title: "Post 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias sequi perferendis expedita minus? Amet vitae quae unde laborum eligendi!",
    tags,
    author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
  },
  {
    id: "3",
    title: "Post 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias sequi perferendis expedita minus? Amet vitae quae unde laborum eligendi!",
    tags,
    author: { username: "ilusha_kozlov", name: "Ilya Kozlov" },
  },
];

export const getPostById = (id: string) => {
  return posts.find((post) => post.id === id);
};
