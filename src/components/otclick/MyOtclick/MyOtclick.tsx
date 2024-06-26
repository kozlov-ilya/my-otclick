import styles from "./MyOtclick.module.css";

import { getOtclickOfCurrentUser } from "@/data/otclick";
import { OtclickForm } from "@/components/otclick/OtclickForm/OtclickForm";
import { OtclickCard } from "@/components/otclick/OtclickCard/OtclickCard";

interface MyOtclickProps {
  postId: number;
}

export const MyOtclick = async (props: MyOtclickProps) => {
  const { postId } = props;

  const otclick = await getOtclickOfCurrentUser({ postId });

  let classname = [styles["MyOtclick"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      {otclick ? (
        <OtclickCard otclick={otclick} />
      ) : (
        <OtclickForm postId={postId} />
      )}
    </div>
  );
};
