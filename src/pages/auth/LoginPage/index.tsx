import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
