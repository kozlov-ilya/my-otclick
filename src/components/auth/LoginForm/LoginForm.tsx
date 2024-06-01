import { FormField } from "@/components/basic/FormField/FormField";
import { TextField } from "@/components/basic/TextField/TextField";
import { Button } from "@/components/basic/Button/Button";
import { Socials } from "@/components/auth/Socials/Socials";
import { Link } from "@/components/basic/Link/Link";

import styles from "./LoginForm.module.css";

interface Props {}

export const LoginForm = (props: Props) => {
  return (
    <form className={styles["Form"]}>
      <div className={styles["Header"]}>
        <div className={styles["Title"]}>Sign In to Otclick</div>
      </div>
      <div className={styles["Content"]}>
        <FormField label="Username or Email">
          <TextField type="text" fieldSize="lg" />
        </FormField>
        <FormField label="Password">
          <TextField type="Password" fieldSize="lg" />
        </FormField>
      </div>
      <div className={styles["Controls"]}>
        <Button type="submit" fullWidth={true} size="lg" isRounded={true}>
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
