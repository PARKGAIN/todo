import styled from 'styled-components'

export const StyledCheckbox= styled.input`
appearance: none;
border: 1.5px solid gainsboro;
border-radius: 0.35rem;
width: 1.5rem;
height: 1.5rem;

&:checked {
  border-color: transparent;
  background-image: url("https://svgsilh.com/svg/42926-2196f3.svg");
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  border: 1.5px solid gainsboro;
}
 `