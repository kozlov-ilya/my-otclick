"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/zod";
import { login } from "@/actions/login";

import {
  FormField,
  TextField,
  Button,
  Link,
  FormError,
  FormSuccess,
} from "@/components/basic";
import { Socials } from "@/components/auth";
import { useSearchParams } from "next/navigation";

import styles from "./LoginForm.module.css";

export type LoginFormType = z.infer<typeof LoginSchema>;

interface Props {}

export const LoginForm = () => {
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

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

  const onSubmit = async (data: LoginFormType) => {
    setFormError("");
    setFormSuccess("");

    const response = await login(data);

    setFormError(response?.error);
    setFormSuccess(response?.success);
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
          disabled={isSubmitting}
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
