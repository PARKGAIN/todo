import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";
import { useRedirect } from "../../../hooks/useRedirect";

const SignUpPage = () => {
  useRedirect();
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default SignUpPage;
