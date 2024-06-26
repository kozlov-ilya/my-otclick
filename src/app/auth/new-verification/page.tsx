import { NewVerificationForm } from "@/components/auth/NewVerificationForm/NewVerificationForm";
import styles from "./page.module.css";

interface Props {}

const NewVerificationPage = (props: Props) => {
  return (
    <div>
      <NewVerificationForm />
    </div>
  );
};

export default NewVerificationPage;
