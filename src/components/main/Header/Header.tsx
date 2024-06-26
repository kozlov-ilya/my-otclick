import styles from "./Header.module.css";

import { Logo } from "@/components/basic/Logo/Logo";
import {
  MediaQueryTabletAndBelow,
  MediaQueryMobile,
  MediaQueryTabletAndOver,
} from "@/components/tools/MediaQuery/MediaQueryDynamic";
import { SidebarMobile } from "@/components/main/SidebarMobile/SidebarMobile";
import { UserDropdown } from "@/components/main/UserDropdown/UserDropdown";
import { getCurrentUser } from "@/lib/auth";
import { FeedDb } from "@/components/tools/FeedDb/FeedDb";
import { UserDrawer } from "../UserDrawer/UserDrawer";

interface HeaderProps {}

export const Header = async (props: HeaderProps) => {
  const user = await getCurrentUser();

  let classname = [styles["Header"]].filter((cls) => cls.length).join(" ");

  return (
    <header className={classname}>
      <div className={styles["LeftPart"]}>
        <MediaQueryTabletAndBelow>
          <SidebarMobile />
        </MediaQueryTabletAndBelow>
        <Logo />
      </div>
      <div className={styles["RightPart"]}>
        {/* <FeedDb /> */}
        {user && (
          <>
            <MediaQueryTabletAndOver>
              <UserDropdown
                name={user.name}
                email={user.email}
                avatarSrc={user.image}
              />
            </MediaQueryTabletAndOver>
            <MediaQueryMobile>
              <UserDrawer user={user} />
            </MediaQueryMobile>
          </>
        )}
      </div>
    </header>
  );
};
