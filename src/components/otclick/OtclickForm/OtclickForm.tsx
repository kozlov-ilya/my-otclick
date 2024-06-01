import { Textarea } from "@/components/basic/Textarea/Textarea";
import { Button } from "@/components/basic/Button/Button";
import { TbClick } from "react-icons/tb";

import styles from "./OtclickForm.module.css";

interface OtclickFormProps {}

export const OtclickForm = (props: OtclickFormProps) => {
  const { ...rest } = props;

  let classname = [styles["OtclickForm"]].filter((cls) => cls.length).join(" ");

  return (
    <form className={classname}>
      <div className={styles["Content"]}>
        <Textarea isFullWidth={true} placeholder="Otclick message..." />
      </div>
      <div className={styles["Controls"]}>
        <Button type="submit" leftIcon={<TbClick />}>
          Send Otclick
        </Button>
      </div>
    </form>
  );
};
