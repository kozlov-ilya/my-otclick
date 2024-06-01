import { Avatar } from "@/components/basic/Avatar/Avatar";

import styles from "./User.module.css";

interface UserProps {
  name: string;
  email: string;
  imgSrc?: string;
}

export const User = (props: UserProps) => {
  const { imgSrc, name, email, ...rest } = props;

  let classname = [styles["User"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <Avatar src={imgSrc} />
      <div className={styles["UserInfo"]}>
        <div className={styles["UserName"]}>{name}</div>
        <div className={styles["UserEmail"]}>{email}</div>
      </div>
    </div>
  );
};
