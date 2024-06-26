"use client";

import styles from "./CardSkeleton.module.css";

import Skeleton from "@mui/material/Skeleton";

interface CardSkeletonProps {}

export const CardSkeleton = (props: CardSkeletonProps) => {
  const { ...rest } = props;

  let classname = [styles["CardSkeleton"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Header"]}>
        <Skeleton
          className={styles["Avatar"]}
          sx={{ borderRadius: 50, bgcolor: "var(--color-fill-solid-normal)" }}
          height={24}
          width={24}
          variant="rounded"
        />
        <Skeleton
          className={styles["Info"]}
          sx={{ borderRadius: 1.5, bgcolor: "var(--color-fill-solid-normal)" }}
          height={12}
          width={128}
          variant="rounded"
        />
      </div>
      <Skeleton
        className={styles["Title"]}
        sx={{ borderRadius: 1.5, bgcolor: "var(--color-fill-solid-normal)" }}
        height={40}
        variant="rounded"
      />
      <Skeleton
        className={styles["Body"]}
        sx={{ borderRadius: 2, bgcolor: "var(--color-fill-solid-normal)" }}
        height={120}
        variant="rounded"
      />
      <div className={styles["Tags"]}>
        <Skeleton
          className={styles["Tag"]}
          sx={{
            borderRadius: 10,
            width: 64,
            bgcolor: "var(--color-fill-solid-normal)",
          }}
          height={24}
          variant="rounded"
        />
        <Skeleton
          className={styles["Tag"]}
          sx={{
            borderRadius: 10,
            width: 64,
            bgcolor: "var(--color-fill-solid-normal)",
          }}
          height={24}
          variant="rounded"
        />
      </div>
    </div>
  );
};
