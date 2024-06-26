"use client";

import styles from "./OtclickForm.module.css";

import { Textarea } from "@/components/basic/Textarea/Textarea";
import { FormField } from "@/components/basic/FormField/FormField";
import { OtclickSchema } from "@/lib/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/basic/Button/Button";
import { addOtclick } from "@/actions/otclick/addOtclick";
import { useTransition } from "react";

export type OtclickFormType = z.infer<typeof OtclickSchema>;

interface OtclickFormProps {
  postId: number;
}

export const OtclickForm = (props: OtclickFormProps) => {
  const { postId } = props;

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OtclickFormType>({
    resolver: zodResolver(OtclickSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (data: OtclickFormType) => {
    startTransition(async () => {
      const response = await addOtclick({ data, postId });
    });
  };

  let classname = [styles["OtclickForm"]].filter((cls) => cls.length).join(" ");

  return (
    <form className={classname} onSubmit={handleSubmit(onSubmit)}>
      <FormField isFullWidth errorMessage={errors.message?.message}>
        <Textarea
          placeholder="Otclick message..."
          isFullWidth
          {...register("message")}
          status={errors.message && "error"}
        />
      </FormField>
      <div className={styles["Controls"]}>
        <Button type="submit" disabled={isPending}>
          Add Otclick
        </Button>
      </div>
    </form>
  );
};
