"use client";

import styles from "./Filters.module.css";

import { TagsFilter } from "@/components/tags/TagsFilter/TagsFilter";
import { Button } from "@/components/basic/Button/Button";
import type { Tag } from "@prisma/client";
import { useState } from "react";
import { updateWatchedTags } from "@/actions/tag/updateWatchedTags";
import type { TagNameType } from "@/types/tag";

interface FiltersProps {
  tags?: Tag[];
  watchedTags?: Tag[];
  refetchPosts?: any;
}

export const Filters = (props: FiltersProps) => {
  const { tags, watchedTags = [], refetchPosts } = props;

  const tagOptions = tags?.map((tag) => {
    return { label: tag.name, value: tag.name.toLowerCase() };
  });

  const defaultTags = watchedTags.map((tag) => {
    return {
      label: tag.name as TagNameType,
      value: tag.name.toLowerCase() as TagNameType,
    };
  });

  const [selectedTags, setSelectedTags] = useState<
    | {
        value: TagNameType;
        label: TagNameType;
      }[]
  >(defaultTags);

  const tagsMatch =
    selectedTags.sort().join(",") === defaultTags.sort().join(",");

  let classname = [styles["Filters"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <TagsFilter
        tags={tags}
        options={tagOptions}
        value={selectedTags}
        defaultValue={defaultTags}
        selectedTags={selectedTags}
        onChange={(newValue) => {
          setSelectedTags(
            newValue as { label: TagNameType; value: TagNameType }[]
          );
        }}
      />

      <div className={styles["Buttons"]}>
        <Button
          fullWidth={true}
          role="secondary"
          disabled={tagsMatch}
          onClick={async () => {
            await updateWatchedTags({
              newTags: selectedTags.map((tag) => tag.value),
            });

            refetchPosts();
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
