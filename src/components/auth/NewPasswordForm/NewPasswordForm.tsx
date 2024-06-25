"use client";

import styles from "./NewPasswordForm.module.css";

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
import { NewPasswordSchema } from "@/lib/zod";
import * as z from "zod";
import { useState } from "react";
import { setNewPassword } from "@/actions/setNewPassword";
import { useSearchParams } from "next/navigation";

interface NewPasswordFormProps {}

export type NewPasswordFormType = z.infer<typeof NewPasswordSchema>;

export const NewPasswordForm = (props: NewPasswordFormProps) => {
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const token = useSearchParams().get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordFormType>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (data: NewPasswordFormType) => {
    setFormError("");
    setFormSuccess("");

    if (!token) {
      setFormError("Missing token!");

      return;
    }

    const response = await setNewPassword(data, token);

    setFormError(response?.error);
    setFormSuccess(response?.success);
  };

  let classname = [styles["NewPasswordForm"]]
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
        <div className={styles["Title"]}>Set new password</div>
      </div>
      <div className={styles["Content"]}>
        <FormField
          label="New password"
          isFullWidth
          errorMessage={errors.password?.message}
        >
          <TextField
            type="password"
            fieldSize="lg"
            {...register("password")}
            error={!!errors.password}
          />
        </FormField>
      </div>
      {formError && <FormError message={formError} />}
      {formSuccess && <FormSuccess message={formSuccess} />}
      <Button type="submit" fullWidth size="lg" isRounded>
        Update password
      </Button>
      <div className={styles["BackButton"]}>
        <Link href="/auth/login" role="secondary">
          Back to login
        </Link>
      </div>
    </form>
  );
};
