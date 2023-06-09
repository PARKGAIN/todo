import { AuthFormContainer, StyledInput, TodoListHeaderText } from "./style";
import { AuthFormProps } from "../../constants/types/type";
import Button from "../Buttons";
import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { login, signup } from "../../apis/auth";

const textMap: Record<string, string> = {
  register: "회원가입",
  login: "Todo List",
};

const AuthForm = ({ type }: AuthFormProps) => {
  const text = textMap[type];
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: "",
    password: "",
  });
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue((state) => ({ ...state, [name]: value }));
  };

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(inputValue.password !== e.target.value);
    },
    [inputValue.password, setPasswordCheck]
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (!inputValue.id || !inputValue.id.trim()) {
        return;
      }
      if (type === "login") {
        login(inputValue);
        navigate("/todo");
      } else if (type === "register" && !mismatchError) {
        signup(inputValue);
      }
    },
    [inputValue, mismatchError]
  );

  return (
    <AuthFormContainer>
      <TodoListHeaderText>{text}</TodoListHeaderText>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="new-id"
          name="id"
          placeholder="아이디"
          onChange={handleInput}
          value={inputValue.id}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={handleInput}
          value={inputValue.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChangePasswordCheck}
            value={passwordCheck}
          />
        )}
        {type === "login" ? (
          <div>
            <Button type="submit" color={"black"}>
              로그인
            </Button>
            <Link to="register">
              <Button color={"white"}>회원가입</Button>
            </Link>
          </div>
        ) : (
          <Button type="submit" color={"black"}>
            회원가입
          </Button>
        )}
      </form>
      {mismatchError && <div>비밀번호가 다릅니다.</div>}
    </AuthFormContainer>
  );
};

export default AuthForm;
