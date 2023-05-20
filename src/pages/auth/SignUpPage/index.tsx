import { Link } from "react-router-dom";
import AuthForm from "../../../components/AuthForm";
import AuthTemplate from "../../../components/AuthTemplate";
import { useRedirectTodo } from "../../../hooks/useRedirectTodo";

const SignUpPage = () => {
  useRedirectTodo();
  return (
    <div>
      <AuthTemplate>
        <AuthForm type="register" />
      </AuthTemplate>
      <Link to="/">로그인하러가기</Link>
    </div>
  );
};

export default SignUpPage;
