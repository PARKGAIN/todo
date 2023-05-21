import { ButtonProps } from "../../constants/types/type";
import { StyledButton } from "./style";

const Button: React.FC<ButtonProps & { onClick?: () => void }> = ({
  children,
  type = "button",
  onClick,
  color,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

export default Button;
