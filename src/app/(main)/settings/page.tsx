import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { ScrollUp } from "@/components/tools";
import { auth } from "@/auth";

import styles from "./page.module.css";

interface Props {}

const SettingsPage = async (props: Props) => {
  const session = await auth();

  return (
    <>
      <MainLayout>
        <div>{JSON.stringify(session)}</div>
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default SettingsPage;
