import { styled } from "styled-components"

export const StyledInput = styled.input`
  font-size: 1rem;
  border: 1px solid #ddd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $0c-teal-7;
    border-bottom: 1px solid  #808080;
  }
  & + & {
    margin-top: 1rem;
  }`;