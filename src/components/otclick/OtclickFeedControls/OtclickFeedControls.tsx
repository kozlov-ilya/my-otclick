"use client";

import styles from "./OtclickFeedControls.module.css";

import { markAllCurrentUserOtclicksViewed } from "@/actions/otclick/markOtclicksViewed";
import { Button } from "@/components/basic/Button/Button";
import type { Otclick } from "@prisma/client";

interface OtclickFeedControlsProps {
  otclicks?: Otclick[];
}

export const OtclickFeedControls = (props: OtclickFeedControlsProps) => {
  const { otclicks } = props;

  let classname = [styles["OtclickFeedControls"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <Button
        role="secondary"
        onClick={async () => {
          await markAllCurrentUserOtclicksViewed();
        }}
        disabled={!otclicks?.find((otclick) => !otclick.viewed)}
      >
        Mark as viewed
      </Button>
    </div>
  );
};
