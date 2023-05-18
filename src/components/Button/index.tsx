import { ButtonProps } from "../../types/type";
import { StyledButton } from "./style";

const Button: React.FC<ButtonProps> = ({ backgroundColor, children }) => {
  return (
    <StyledButton backgroundColor={backgroundColor}>{children}</StyledButton>
  );
};

export default Button;
