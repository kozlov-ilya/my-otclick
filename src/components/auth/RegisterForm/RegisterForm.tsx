import { FormField } from "@/components/basic/FormField/FormField";
import { TextField } from "@/components/basic/TextField/TextField";
import { Button } from "@/components/basic/Button/Button";
import { Socials } from "@/components/auth/Socials/Socials";
import { Link } from "@/components/basic/Link/Link";

import styles from "./RegisterForm.module.css";

interface Props {}

export const RegisterForm = (props: Props) => {
  return (
    <form className={styles["Form"]}>
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Sign Up to Otclick</div>
      </div>
      <div className={styles["Content"]}>
        <FormField label="Username">
          <TextField type="text" fieldSize="lg" />
        </FormField>
        <FormField label="Email">
          <TextField type="email" fieldSize="lg" />
        </FormField>
        <FormField label="Password">
          <TextField type="Password" fieldSize="lg" />
        </FormField>
      </div>
      <div className={styles["Controls"]}>
        <Button type="submit" fullWidth={true} size="lg" isRounded={true}>
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
