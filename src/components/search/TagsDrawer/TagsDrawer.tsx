"use client";

import { Drawer } from "vaul";
import { AiOutlineTags } from "react-icons/ai";

import { Button } from "@/components/basic/Button/Button";
import { Icon } from "@/components/basic/Icon/Icon";

import styles from "./TagsDrawer.module.css";
import { TagsFilter } from "../../tags/TagsFilter/TagsFilter";

interface TagsDrawerProps {}

export const TagsDrawer = (props: TagsDrawerProps) => {
  const { ...rest } = props;

  let classname = [styles["TagsDrawer"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Icon>
            <AiOutlineTags />
          </Icon>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className={styles["Overlay"]} />
          <Drawer.Content
            className={styles["Content"]}
            aria-describedby={undefined}
          >
            <Drawer.Title className={styles["Title"]}></Drawer.Title>
            <TagsFilter isStatic={true} />
            <Button fullWidth={true} role="secondary">
              Save
            </Button>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};
