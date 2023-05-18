import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default SignUpPage;
