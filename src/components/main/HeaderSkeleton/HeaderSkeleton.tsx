import styles from "./HeaderSkeleton.module.css";

interface HeaderSkeletonProps {}

export const HeaderSkeleton = (props: HeaderSkeletonProps) => {
  let classname = [styles["HeaderSkeleton"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Avatar"]}></div>
    </div>
  );
};
