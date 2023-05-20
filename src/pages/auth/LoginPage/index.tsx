import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";
import { useRedirectTodo } from "../../../hooks/useRedirectTodo";

const LoginPage = () => {
  useRedirectTodo();
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
