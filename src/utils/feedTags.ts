"use server";

import { db } from "@/lib/db";
import { TagNameType } from "@/types/tag";

const tags: TagNameType[] = [
  "education",
  "entertainment",
  "event",
  "job",
  "other",
  "project",
  "science",
];

export const feedTags = async () => {
  await db.tag.createMany({
    data: tags.map((tag) => {
      return {
        name: tag,
      };
    }),
  });
};
