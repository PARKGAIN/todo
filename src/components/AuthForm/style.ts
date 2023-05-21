import { styled } from "styled-components"

export const StyledInput = styled.input`
  font-size: 1rem;
  width: 400px;
  height: 40px;
  border: 1px solid #ddd;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  outline: none;
  &:focus {
    color: $0c-teal-7;
    border-bottom: 1px solid  #808080;
  }
  & + & {
    margin-top: 1rem;
  }`;

export const AuthFormContainer= styled.div`
 width: 50%;
 text-align: center;
 `
export const TodoListHeaderText = styled.h2`
  color: #1ACAA2;
  text-align: center;
  margin-top: 2rem;
`