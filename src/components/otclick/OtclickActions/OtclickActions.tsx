"use client";

import styles from "./OtclickActions.module.css";

import { TbDots } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Icon } from "@/components/basic/Icon/Icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/basic/DropdownMenu/DropdownMenu";
import { deleteOtclick } from "@/actions/otclick/deleteOtclick";
import { usePathname } from "next/navigation";

interface OtclickActionsProps {
  otclickId: number;
}

export const OtclickActions = (props: OtclickActionsProps) => {
  const { otclickId } = props;

  const pathname = usePathname();

  let classname = [styles["OtclickActions"]]
    .filter((cls) => cls.length)
    .join(" ");

  return (
    <div className={classname}>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Icon size="sm">
            <TbDots />
          </Icon>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            icon={<FaRegTrashAlt />}
            onClick={async () => {
              await deleteOtclick({ otclickId, pathToRevalidate: pathname });
            }}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
