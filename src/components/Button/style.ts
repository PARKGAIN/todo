import { styled } from "styled-components";

interface ButtonProps {
  backgroundColor: string;
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props: { backgroundColor: string; }) => props.backgroundColor};
  color: ${(props: { backgroundColor: string; }) =>
    props.backgroundColor === "black" ? "white" : "black"};
`;