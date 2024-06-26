"use client";

import styles from "./SettingsForm.module.css";

import * as z from "zod";
import { SettingsSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/components/basic/FormField/FormField";
import { TextField } from "@/components/basic/TextField/TextField";
import { Button } from "@/components/basic/Button/Button";
import { settings } from "@/actions/settings/settings";
import { useState, useTransition } from "react";
import { User } from "next-auth";
import { FormError } from "@/components/basic/FormError/FormError";
import { FormSuccess } from "@/components/basic/FormSuccess/FormSuccess";

type SettingsFormType = z.infer<typeof SettingsSchema>;

interface SettingsFormProps {
  user?: {
    id: string;
    name: string;
    username: string;
    email: string;
    image?: string | undefined;
    isOAuth: boolean;
  } & User;
}

export const SettingsForm = (props: SettingsFormProps) => {
  const { user } = props;

  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormType>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      username: user?.username || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  });

  const onSave = (data: SettingsFormType) => {
    startTransition(async () => {
      setFormError("");
      setFormSuccess("");

      const response = await settings(data);

      setFormError(response.error);
      setFormSuccess(response.success);
    });
  };

  let classname = [styles["SettingsForm"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <form
      className={classname}
      onSubmit={handleSubmit(onSave)}
      autoComplete="off"
      noValidate
    >
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Settings</div>
      </div>
      <div className={styles["Content"]}>
        <div className={styles["Names"]}>
          <FormField
            label="Name"
            errorMessage={errors.name?.message}
            isFullWidth
          >
            <TextField {...register("name")} error={!!errors.name} />
          </FormField>
          <FormField
            label="Username"
            errorMessage={errors.username?.message}
            isFullWidth
          >
            <TextField {...register("username")} error={!!errors.username} />
          </FormField>
        </div>
        {!user?.isOAuth && (
          <>
            <FormField
              label="Email"
              errorMessage={errors.email?.message}
              isFullWidth
            >
              <TextField
                {...register("email")}
                error={!!errors.email}
                type="email"
              />
            </FormField>

            <div className={styles["Passwords"]}>
              <FormField
                label="Password"
                errorMessage={errors.password?.message}
                isFullWidth
              >
                <TextField
                  {...register("password")}
                  error={!!errors.password}
                  type="password"
                  placeholder="******"
                />
              </FormField>
              <FormField
                label="New password"
                errorMessage={errors.newPassword?.message}
                isFullWidth
              >
                <TextField
                  {...register("newPassword")}
                  error={!!errors.newPassword}
                  type="password"
                  placeholder="******"
                />
              </FormField>
            </div>
          </>
        )}
      </div>
      {formError && <FormError message={formError} />}
      {formSuccess && <FormSuccess message={formSuccess} />}
      <div className={styles["Controls"]}>
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </div>
    </form>
  );
};
