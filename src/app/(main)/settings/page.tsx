import { MainLayout } from "@/components/main/MainLayout/MainLayout";

import styles from "./pages.module.css";
import { ScrollUp } from "@/components/tools";

interface Props {}

const SettingsPage = (props: Props) => {
  return (
    <>
      <MainLayout>SettingsPage</MainLayout>
      <ScrollUp />
    </>
  );
};

export default SettingsPage;
