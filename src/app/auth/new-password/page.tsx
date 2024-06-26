import { NewPasswordForm } from "@/components/auth/NewPasswordForm/NewPasswordForm";
import styles from "./page.module.css";
import { Suspense } from "react";

interface Props {}

const NewPasswordPage = (props: Props) => {
  return (
    <Suspense>
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
