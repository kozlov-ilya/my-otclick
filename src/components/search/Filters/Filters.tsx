"use client";

import { TagsFilter } from "@/components/search/TagsFilter/TagsFilter";
import { Button } from "@/components/basic/Button/Button";

import styles from "./Filters.module.css";

interface FiltersProps {}

export const Filters = (props: FiltersProps) => {
  const { ...rest } = props;

  let classname = [styles["Filters"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <TagsFilter />

      <div className={styles["Buttons"]}>
        <Button fullWidth={true} role="secondary">
          Save
        </Button>
      </div>
    </div>
  );
};
