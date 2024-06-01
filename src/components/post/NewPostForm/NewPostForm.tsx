import { FormField } from "@/components/basic/FormField/FormField";
import { TextField } from "@/components/basic/TextField/TextField";
import { Textarea } from "@/components/basic/Textarea/Textarea";
import { Button } from "@/components/basic/Button/Button";
import { TagsFilter } from "@/components/search/TagsFilter/TagsFilter";

import styles from "./NewPostForm.module.css";

interface NewPostFormProps {}

export const NewPostForm = (props: NewPostFormProps) => {
  const { ...rest } = props;

  let classname = [styles["NewPostForm"]].filter((cls) => cls.length).join(" ");

  return (
    <form className={classname}>
      <div className={styles["Title"]}>Create Post</div>
      <div className={styles["Content"]}>
        <FormField isFullWidth={true}>
          <TextField
            fieldSize="lg"
            isRounded={true}
            placeholder="Title"
            autoFocus
            maxLength={150}
          />
        </FormField>
        <FormField>
          <TagsFilter />
        </FormField>
        <FormField isFullWidth={true}>
          <Textarea placeholder="Body" isFullWidth={true} />
        </FormField>
      </div>
      <div className={styles["Controls"]}>
        <Button>Post</Button>
      </div>
    </form>
  );
};
