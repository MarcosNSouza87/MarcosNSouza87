import styled from "styled-components";

interface IBtn {
  color: string
}

export const Button = styled.button<IBtn>`
  width: 80px;
  height: 80px;
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  svg{
    width: 26px;
    height: 26px;
  }
  :hover {
		cursor: pointer;
    border-bottom: 2px solid ${({theme,color}) => theme.colors.selected[Number(color)]};
	}
`;
