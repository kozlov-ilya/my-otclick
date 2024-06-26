import Link from "next/link";
import styles from "./Banner.module.css";

interface BannerProps {
  children?: React.ReactNode;
  href?: string;
}

export const Banner = (props: BannerProps) => {
  const { children, href } = props;

  let classname = [styles["Banner"]].filter((cls) => cls.length).join(" ");

  return href ? (
    <Link className={classname} href={href}>
      {children}
    </Link>
  ) : (
    <div className={classname}>{children}</div>
  );
};
