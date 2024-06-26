import { LoginForm } from "@/components/auth/LoginForm/LoginForm";
import { Suspense } from "react";

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
