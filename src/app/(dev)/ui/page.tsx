import { Button } from "@/components/basic/Button/Button";
import { TextField } from "@/components/basic/TextField/TextField";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import styles from "./page.module.css";

interface UiPageProps {}

const UiPage = (props: UiPageProps) => {
  return (
    <div className={styles["Wrapper"]}>
      <div className={styles["Container"]}>
        <UiGroup label="Button">
          <Button>Label</Button>
          <Button disabled>Label</Button>
          <Button role="secondary">Label</Button>
          <Button role="secondary" disabled>
            Label
          </Button>
          <Button variant="outline">Label</Button>
          <Button variant="outline" role="secondary">
            Label
          </Button>
          <Button variant="ghost">Label</Button>
          <Button variant="ghost" role="secondary">
            Label
          </Button>
        </UiGroup>
        <UiGroup label="TextField">
          <TextField contentLeft={<FaRegEnvelope />} placeholder="Email" />
          <TextField
            contentLeft={<FaRegEnvelope />}
            placeholder="Error"
            status="error"
          />
          <TextField
            contentLeft={<FaRegEnvelope />}
            placeholder="Success"
            status="success"
          />
          <TextField variant="fill" placeholder="Fill" />
          <TextField
            isRounded={true}
            fieldSize="lg"
            contentLeft={<IoSearch />}
            placeholder="Search"
          />
        </UiGroup>
      </div>
    </div>
  );
};

const UiGroup = (props: { label: string; children?: React.ReactNode }) => {
  return (
    <div className={styles["UiGroup"]}>
      <div className={styles["UiGroupLabel"]}>{props.label}</div>
      <div className={styles["UiGroupContent"]}>{props.children}</div>
    </div>
  );
};

export default UiPage;
