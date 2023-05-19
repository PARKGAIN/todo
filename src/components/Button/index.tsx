import { ButtonProps } from "../../constants/types/type";
import { StyledButton } from "./style";

const Button: React.FC<ButtonProps & { onClick?: () => void }> = ({
  children,
  type = "button",
  onClick,
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
