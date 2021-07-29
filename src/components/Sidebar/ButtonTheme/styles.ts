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
  svg > path {
    stroke: ${(props) => props.theme.primary.white};
  }

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.primary.primary};
    svg > path {
      stroke: ${(props) => props.theme.primary.primary};
    }
  }
`;
