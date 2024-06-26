import styles from "./page.module.css";

import { MainLayout } from "@/components/main/MainLayout/MainLayout";
import { SettingsForm } from "@/components/settings/SettingsForm/SettingsForm";
import { ScrollUp } from "@/components/tools/ScrollUp/ScrollUp";
import { getCurrentUser } from "@/lib/auth";

interface Props {}

const SettingsPage = async (props: Props) => {
  const user = await getCurrentUser();

  return (
    <>
      <MainLayout>
        <SettingsForm user={user} />
      </MainLayout>
      <ScrollUp />
    </>
  );
};

export default SettingsPage;
