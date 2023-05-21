import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 300px;
  height: 185px;
  border: 1px solid lightgray;
  padding: 10px;
  font-size: 16px;
  resize: vertical;
  margin: 10px auto;
`;

export const ImgInput= styled.input`
  display: none;
 `
export const AddImgLabel= styled.label`
  border: 1px solid;
  padding: 12px 148px;
  line-height: 130px;
  cursor: pointer;
`
export const CloseModalButton= styled.span`
  cursor: pointer;
  display: inline-block;
  margin-left: 550px;
  font-weight: bold;
  font-size: 17px;
`

export const ImgUpdateLabel=styled.label`
  cursor: pointer;
  width: 100px;
  height: 35px;
  line-height: 35px;
  border: 1px solid black;
  box-sizing: border-box;
  margin-right: 10px;
`
export const ImgRemoveButton= styled.button`
  cursor: pointer;
  width: 100px;
  height: 35px;
  line-height: 35px;
  border: 1px solid red;
  color: red;
`