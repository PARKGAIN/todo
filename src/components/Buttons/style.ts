import { styled } from "styled-components";

export const StyledButton = styled.button`
  background-color:${(props:any)=>(props.color==="black"? "black": "white")};
  color:${(props:any)=>(props.color==="black"? "white": "black")};
  width: 400px;
  height: 50px;
  line-height: 48px;
  cursor: pointer;
  margin-top: 17px;
  margin-bottom: 5px;
`;