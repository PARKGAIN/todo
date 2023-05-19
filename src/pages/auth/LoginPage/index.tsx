import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";
import { useRedirect } from "../../../hooks/useRedirect";

const LoginPage = () => {
  useRedirect();
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
