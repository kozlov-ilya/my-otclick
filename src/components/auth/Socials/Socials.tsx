"use client";

import Image from "next/image";

import { Button } from "@/components/basic/Button/Button";
import googleLogo from "@/../public/img/icons/google-logo.svg";
import yandexLogo from "@/../public/img/icons/yandex-logo.svg";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import styles from "./Socials.module.css";

interface SocialsProps {}

export const Socials = (props: SocialsProps) => {
  let classname = [styles["Socials"]].filter((cls) => cls.length).join(" ");

  return (
    <div className={classname}>
      <div className={styles["Divider"]}>OR</div>
      <div className={styles["Controls"]}>
        <Button
          variant="outline"
          size="lg"
          isRounded={true}
          type="button"
          leftIcon={
            <Image
              src={googleLogo}
              width={24}
              height={24}
              alt="Google icon by Icons8"
            />
          }
          onClick={() => {
            signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
          }}
        >
          Continue with Google
        </Button>
        {/* <Button
          variant="outline"
          size="lg"
          isRounded={true}
          type="button"
          leftIcon={
            <Image
              src={yandexLogo}
              width={24}
              height={24}
              alt="Yandex icon by Icons8"
            />
          }
        >
          Continue with Yandex
        </Button> */}
      </div>
    </div>
  );
};
