import { IoSearchOutline } from "react-icons/io5";

import { TextField } from "@/components/basic/TextField/TextField";

import styles from "./SearchBar.module.css";

interface SearchBarProps {}

export const SearchBar = (props: SearchBarProps) => {
  const { ...rest } = props;

  let classname = [styles["SearchBar"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <TextField
        isRounded={true}
        contentLeft={<IoSearchOutline />}
        variant="fill"
        placeholder="Search Otclick"
      />
    </div>
  );
};
