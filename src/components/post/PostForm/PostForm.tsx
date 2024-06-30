"use client";

import styles from "./PostForm.module.css";

import * as z from "zod";
import { FormField } from "@/components/basic/FormField/FormField";
import { TextField } from "@/components/basic/TextField/TextField";
import { Textarea } from "@/components/basic/Textarea/Textarea";
import { Button } from "@/components/basic/Button/Button";
import { PostSchema } from "@/lib/zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addPost } from "@/actions/post/addPost";
import { TagsFilter } from "@/components/tags/TagsFilter/TagsFilter";
import type { Tag } from "@prisma/client";
import { TagNameType } from "@/types/tag";
import { useState, useTransition } from "react";
import { editPost } from "@/actions/post/editPost";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

export type PostFormType = z.infer<typeof PostSchema>;

interface PostFormProps {
  tags: Tag[];
  postId?: number;
  defaultValues?: {
    title: string;
    text: string | null;
    tags: Tag[];
  };
  isEdit?: boolean;
}

export const PostForm = (props: PostFormProps) => {
  const {
    defaultValues = { title: "", text: "", tags: [] },
    isEdit = false,
    tags,
    postId,
  } = props;

  const [isPending, startTransition] = useTransition();

  const { replace } = useRouter();

  const callbackUrl = useSearchParams().get("callbackUrl");

  const tagOptions = tags.map((tag) => {
    return { label: tag.name, value: tag.name.toLowerCase() };
  });

  const defaultTags = defaultValues.tags.map((tag) => {
    return {
      label: tag.name as TagNameType,
      value: tag.name.toLowerCase() as TagNameType,
    };
  });

  const [selectedTags, setSelectedTags] = useState<
    | {
        value: TagNameType;
        label: TagNameType;
      }[]
  >(defaultTags);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PostFormType>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: defaultValues.title,
      text: defaultValues.text ?? "",
    },
  });

  const onPost = (data: PostFormType) => {
    startTransition(async () => {
      await addPost(
        data,
        selectedTags.map((tag) => tag.value)
      );

      reset();
      replace("/");
    });
  };

  const onEdit = (data: PostFormType) => {
    startTransition(async () => {
      await editPost({
        data,
        tags: selectedTags.map((tag) => tag.value),
        postId,
      });

      replace(callbackUrl ?? "/");
    });
  };

  let classname = [styles["NewPostForm"]].filter((cls) => cls.length).join(" ");

  return (
    <form
      className={classname}
      onSubmit={handleSubmit(isEdit ? onEdit : onPost)}
      noValidate
      autoComplete="off"
    >
      <div className={styles["Title"]}>Create Post</div>
      <div className={styles["Content"]}>
        <FormField isFullWidth={true} errorMessage={errors.title?.message}>
          <TextField
            fieldSize="lg"
            isRounded={true}
            placeholder="Title"
            autoFocus
            maxLength={150}
            error={!!errors.title}
            {...register("title")}
          />
        </FormField>
        <TagsFilter
          tags={tags}
          options={tagOptions}
          value={selectedTags}
          selectedTags={selectedTags}
          onChange={(newValue) => {
            setSelectedTags(
              newValue as { label: TagNameType; value: TagNameType }[]
            );
          }}
        />
        <FormField isFullWidth={true}>
          <Textarea
            placeholder="Body"
            isFullWidth={true}
            {...register("text")}
          />
        </FormField>
      </div>
      <div className={styles["Controls"]}>
        <Button role="secondary" type="button" href="/">
          Cancel
        </Button>
        <Button type="submit" disabled={isPending || !selectedTags.length}>
          {isEdit ? "Edit Post" : "Post"}
        </Button>
      </div>
    </form>
  );
};
