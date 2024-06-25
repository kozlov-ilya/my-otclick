import { GoCheckCircle } from "react-icons/go";

import styles from "./FormSuccess.module.css";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = (props: FormSuccessProps) => {
  const { message } = props;

  let classname = [styles["FormSuccess"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <GoCheckCircle size={25} />
      {message}
    </div>
  );
};
