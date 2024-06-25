import { BiError } from "react-icons/bi";

import styles from "./FormError.module.css";

interface FormErrorProps {
  message?: string;
}

export const FormError = (props: FormErrorProps) => {
  const { message } = props;

  let classname = [styles["FormError"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <BiError size={25} />
      {message}
    </div>
  );
};
