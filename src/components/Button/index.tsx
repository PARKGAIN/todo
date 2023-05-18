import { ButtonProps } from "../../types/type";
import { StyledButton } from "./style";

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
