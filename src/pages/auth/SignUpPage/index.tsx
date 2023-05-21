import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";

const SignUpPage = () => {
  return (
    <div>
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
    </div>
  );
};

export default SignUpPage;
