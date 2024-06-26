import styles from "./PostFeedControls.module.css";

import { MdAdd } from "react-icons/md";

import { Button } from "@/components/basic/Button/Button";
import { Icon } from "@/components/basic/Icon/Icon";
import { TagsDrawer } from "@/components/search/TagsDrawer/TagsDrawer";

import {
  MediaQueryMobile,
  MediaQueryTabletAndOver,
} from "@/components/tools/MediaQuery/MediaQueryDynamic";

interface PostFeedControlsProps {}

export const PostFeedControls = (props: PostFeedControlsProps) => {
  let classname = [styles["PostFeedControls"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <MediaQueryMobile>
        <Icon variant="fill" href="/posts/new">
          <MdAdd />
        </Icon>
      </MediaQueryMobile>

      <MediaQueryTabletAndOver>
        <Button href="/posts/new" leftIcon={<MdAdd />}>
          Create Post
        </Button>
      </MediaQueryTabletAndOver>
    </div>
  );
};
