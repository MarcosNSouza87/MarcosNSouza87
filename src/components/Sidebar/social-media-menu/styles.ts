import styled from "styled-components";

export const MenuSocialMediaContainer = styled.div`
  padding-top: 50px;
  gap: 26px;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  svg > path {
    fill:  ${(props) => props.theme.primary.white};
  }
  a:hover {
    transition: 0.2s;
    svg > path {
      fill: ${(props) => props.theme.primary.primary};
    }
  }
`;
