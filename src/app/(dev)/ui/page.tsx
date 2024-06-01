import { FaRegEnvelope } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { LuKeyRound } from "react-icons/lu";

import { Button } from "@/components/basic/Button/Button";
import { TextField } from "@/components/basic/TextField/TextField";
import { FormField } from "@/components/basic/FormField/FormField";
import { Link } from "@/components/basic/Link/Link";
import { Chip } from "@/components/basic/Chip/Chip";
import { MultipleSelect } from "@/components/basic/MultipleSelect/MultipleSelect";

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
        <UiGroup label="FormField">
          <FormField label="Email" message="Email registered" status="success">
            <TextField
              status="success"
              contentLeft={<FaRegEnvelope />}
              defaultValue="1loveschool@mail.ru"
            />
          </FormField>
          <FormField label="Password" message="Invalid password" status="error">
            <TextField
              status="error"
              contentLeft={<LuKeyRound />}
              type="password"
            />
          </FormField>
        </UiGroup>
        <UiGroup label="Link">
          <Link href={"/"}>Link</Link>
          <Link href={"/"} role="secondary">
            Link
          </Link>
        </UiGroup>
        <UiGroup label="MultipleSelect">
          <MultipleSelect />
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
