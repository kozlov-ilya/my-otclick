"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/zod";
import { login } from "@/actions/auth/login";

import { FormField } from "@/components/basic/FormField/FormField";
import { Socials } from "@/components/auth/Socials/Socials";
import { TextField } from "@/components/basic/TextField/TextField";
import { FormError } from "@/components/basic/FormError/FormError";
import { FormSuccess } from "@/components/basic/FormSuccess/FormSuccess";
import { Button } from "@/components/basic/Button/Button";
import { Link } from "@/components/basic/Link/Link";
import { useSearchParams } from "next/navigation";

import styles from "./LoginForm.module.css";

export type LoginFormType = z.infer<typeof LoginSchema>;

interface Props {}

export const LoginForm = () => {
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const accountNotLinkedError =
    useSearchParams().get("error") === "OAuthAccountNotLinked"
      ? "Email already in use!"
      : "";

  const onSubmit = (data: LoginFormType) => {
    startTransition(async () => {
      setFormError("");
      setFormSuccess("");

      const response = await login(data);

      setFormError(response?.error);
      setFormSuccess(response?.success);
    });
  };

  return (
    <form
      className={styles["Form"]}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Sign In to Otclick</div>
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
        <FormField
          label="Password"
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
        <div className={styles["ForgotPasswordLink"]}>
          <Link href="/auth/reset" role="secondary">
            Forgot password?
          </Link>
        </div>
      </div>
      {(formError || accountNotLinkedError) && (
        <FormError message={formError || accountNotLinkedError} />
      )}
      {formSuccess && <FormSuccess message={formSuccess} />}
      <div className={styles["Controls"]}>
        <Button
          type="submit"
          fullWidth
          size="lg"
          isRounded
          disabled={isPending}
        >
          Sign In
        </Button>
        <div className={styles["RegisterBox"]}>
          Don't have an account? <Link href="/auth/register">Sign Up</Link>
        </div>
      </div>

      <div className={styles["Footer"]}>
        <Socials />
      </div>
    </form>
  );
};
