import styled from "styled-components";

export const ButtonThemeContainer = styled.button`
  padding: 2px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.primary.dark};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  outline:none;
  svg > path {
    stroke: ${(props) => props.theme.primary.white};
  }
  transition: ease 0.2s;
  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.primary.primary};
    transition: ease 0.2s;
    svg > path {
      transition: ease 0.3s;
      stroke: ${(props) => props.theme.primary.primary};
    }
  }
`;
