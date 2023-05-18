import { StyledInput } from "./style";
import { AuthFormProps } from "../../types/type";
import Button from "../Button";
import { Link } from "react-router-dom";

const textMap: Record<string, string> = {
  register: "회원가입",
  login: "Todo List",
};

const AuthForm = ({ type }: AuthFormProps) => {
  const text = textMap[type];
  return (
    <div>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        {type === "login" ? (
          <div>
            <Button backgroundColor="black">로그인</Button>
            <Link to="register">
              <Button backgroundColor="white">회원가입</Button>
            </Link>
          </div>
        ) : (
          <Button backgroundColor="black">회원가입</Button>
        )}
      </form>
    </div>
  );
};

export default AuthForm;
