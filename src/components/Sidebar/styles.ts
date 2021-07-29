import styled from "styled-components";

export const SidebarContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 28px;
  flex-direction: column;
  width: 120px;
  height: 100vh;
  background-color:  ${(props) => props.theme.primary.dark};
  z-index: 10;
  box-shadow: 0px 0px 12px #101010;
  div.menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    ul {
      display: flex;
      flex-direction: column;

      justify-content: center;
      gap: 2px;
      list-style: none;
      width: 100%;
      li,
      li a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 62px;
        width: 120px;
        text-decoration: none;
        font-size: 24px;
        font-weight: 500;
        border-left: 3px solid  ${(props) => props.theme.primary.dark};
        color:  ${(props) => props.theme.primary.white};
        &:hover {
          color:  ${(props) => props.theme.primary.primary};
          border-left: 3px solid  ${(props) => props.theme.primary.primary};
        }
      }
    }
  }
`;
