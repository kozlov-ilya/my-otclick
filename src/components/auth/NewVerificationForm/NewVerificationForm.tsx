"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { verifyEmail } from "@/actions/verifyEmail";
import { FormError, FormSuccess, Link } from "@/components/basic";

import styles from "./NewVerificationForm.module.css";

interface NewVerificationFormProps {}

export const NewVerificationForm = (props: NewVerificationFormProps) => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const token = useSearchParams().get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");

      return;
    }

    verifyEmail(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch((error) => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  let classname = [styles["NewVerificationForm"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <div className={styles["Title"]}>Confirming your verification</div>
      <div className={styles["Content"]}>
        {!error && !success && "Loading..."}
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
        <Link href="/auth/login" role="secondary">
          Back to login
        </Link>
      </div>
    </div>
  );
};
