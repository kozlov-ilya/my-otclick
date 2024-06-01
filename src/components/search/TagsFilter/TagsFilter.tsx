"use client";

import { AiOutlineTags } from "react-icons/ai";

import { useState } from "react";

import { MultipleSelect } from "@/components/basic/MultipleSelect/MultipleSelect";
import { Tag, TagType } from "@/components/basic/Tag/Tag";

import styles from "./TagsFilter.module.css";

export const tags: TagType[] = [
  { label: "Study", value: "study" },
  { label: "Science", value: "science" },
  { label: "Startup", value: "startup" },
  { label: "Project", value: "project" },
  { label: "Vacancy", value: "vacancy" },
  { label: "Event", value: "event" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Other", value: "other" },
];

const defaultTags: TagType[] = [
  { label: "Study", value: "study" },
  { label: "Science", value: "science" },
  { label: "Startup", value: "startup" },
];

interface TagsFilterProps {
  isStatic?: boolean;
}

export const TagsFilter = (props: TagsFilterProps) => {
  const { isStatic } = props;

  let classname = [styles["TagsFilter"]].filter((cls) => cls.length).join(" ");

  const [selectedTags, setSelectedTags] = useState(defaultTags);

  return (
    <div className={classname}>
      <MultipleSelect
        value={selectedTags}
        onChange={(newValue) => {
          setSelectedTags(newValue as TagType[]);
        }}
        options={tags}
        menuShouldScrollIntoView={false}
        label="Select Tags"
        contentLeft={<AiOutlineTags size={20} />}
        isStatic={isStatic}
      />
      <div className={styles["SelectedTags"]}>
        {selectedTags.length ? (
          selectedTags.map((tag) => (
            <Tag key={tag.value} label={tag.label} type="button" />
          ))
        ) : (
          <span className={styles["SelectedTags_Message"]}>
            No tags selected
          </span>
        )}
      </div>
    </div>
  );
};
