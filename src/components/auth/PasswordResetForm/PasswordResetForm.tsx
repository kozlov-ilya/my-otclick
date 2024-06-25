"use client";

import {
  Button,
  FormError,
  FormField,
  FormSuccess,
  Link,
  TextField,
} from "@/components/basic";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetSchema } from "@/lib/zod";
import * as z from "zod";
import { useState } from "react";
import { reset } from "@/actions/reset";

import styles from "./PasswordResetForm.module.css";

interface PasswordResetFormProps {}

export type ResetFormType = z.infer<typeof ResetSchema>;

export const PasswordResetForm = (props: PasswordResetFormProps) => {
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetFormType>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ResetFormType) => {
    setFormError("");
    setFormSuccess("");

    const response = await reset(data);

    setFormError(response?.error);
    setFormSuccess(response?.success);
  };

  let classname = [styles["PasswordResetForm"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <form
      className={classname}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Reset Password</div>
      </div>
      <div className={styles["Content"]}>
        <FormField
          label="Email"
          isFullWidth
          errorMessage={errors.email?.message}
        >
          <TextField
            type="email"
            fieldSize="lg"
            {...register("email")}
            error={!!errors.email}
          />
        </FormField>
      </div>
      {formError && <FormError message={formError} />}
      {formSuccess && <FormSuccess message={formSuccess} />}
      <Button type="submit" fullWidth size="lg" isRounded role="secondary">
        Send reset email
      </Button>
      <div className={styles["BackButton"]}>
        <Link href="/auth/login" role="secondary">
          Back to login
        </Link>
      </div>
    </form>
  );
};
