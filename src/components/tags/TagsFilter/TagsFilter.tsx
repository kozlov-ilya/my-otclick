"use client";

import styles from "./TagsFilter.module.css";

import { AiOutlineTags } from "react-icons/ai";
import { MultipleSelect } from "@/components/basic/MultipleSelect/MultipleSelect";
import type { Tag as TagType } from "@prisma/client";
import { Props as SelectProps } from "react-select";
import { Tag } from "@/components/basic/Tag/Tag";

interface TagsFilterProps extends SelectProps {
  tags?: TagType[];
  selectedTags?: { label: string; value: string }[];
}

export const TagsFilter = (props: TagsFilterProps) => {
  const { tags, selectedTags, ...rest } = props;

  let classname = [styles["TagsFilter"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <MultipleSelect
        label="Select Tags"
        contentLeft={<AiOutlineTags size={20} />}
        menuShouldScrollIntoView={false}
        {...rest}
      />
      <div className={styles["SelectedTags"]}>
        {selectedTags && selectedTags.length ? (
          selectedTags.map((tag) => <Tag label={tag.label} key={tag.value} />)
        ) : (
          <div className={styles["NoTagsMessage"]}>Choose at least one tag</div>
        )}
      </div>
    </div>
  );
};
