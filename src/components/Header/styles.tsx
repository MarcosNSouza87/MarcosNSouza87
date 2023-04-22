import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background-color: ${({theme}) => theme.background};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75px;
  box-shadow: 0px 4px 8px #000000;
`;