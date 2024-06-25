"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { RegisterSchema } from "@/lib/zod";
import { register as registerAction } from "@/actions/register";

import {
  FormField,
  TextField,
  Button,
  Link,
  FormError,
  FormSuccess,
} from "@/components/basic";
import { Socials } from "@/components/auth";

import styles from "./RegisterForm.module.css";

export type RegisterFormType = z.infer<typeof RegisterSchema>;

interface Props {}

export const RegisterForm = () => {
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: RegisterFormType) => {
    setFormError("");
    setFormSuccess("");

    const response = await registerAction(data);

    setFormError(response.error);
    setFormSuccess(response.success);
  };

  return (
    <form
      className={styles["Form"]}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Sign Up to Otclick</div>
      </div>
      <div className={styles["Content"]}>
        <FormField label="Name" isFullWidth errorMessage={errors.name?.message}>
          <TextField type="text" fieldSize="lg" {...register("name")} />
        </FormField>
        <FormField
          label="Email"
          isFullWidth
          errorMessage={errors.email?.message}
        >
          <TextField type="email" fieldSize="lg" {...register("email")} />
        </FormField>
        <FormField
          label="Password"
          isFullWidth
          errorMessage={errors.password?.message}
        >
          <TextField type="Password" fieldSize="lg" {...register("password")} />
        </FormField>
      </div>
      {formError && <FormError message={formError} />}
      {formSuccess && <FormSuccess message={formSuccess} />}
      <div className={styles["Controls"]}>
        <Button
          type="submit"
          fullWidth
          size="lg"
          isRounded
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
        <div className={styles["RegisterBox"]}>
          Already have an account? <Link href="/auth/login">Sign In</Link>
        </div>
      </div>

      <div className={styles["Footer"]}>
        <Socials />
      </div>
    </form>
  );
};
