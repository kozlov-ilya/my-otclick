import styles from "./layout.module.css";

interface Props {
  children?: React.ReactNode;
}

const AuthLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles["MainContainer"]}>
      <div className={styles["Sidebar"]}></div>
      <div className={styles["Content"]}>
        <div className={styles["AuthContainer"]}>
          <div className={styles["AuthContent"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
