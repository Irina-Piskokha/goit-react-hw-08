import { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login page";
  });
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
