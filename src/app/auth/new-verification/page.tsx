import { NewVerificationForm } from "@/components/auth/NewVerificationForm/NewVerificationForm";
import styles from "./page.module.css";
import { Suspense } from "react";

interface Props {}

const NewVerificationPage = (props: Props) => {
  return (
    <Suspense>
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
