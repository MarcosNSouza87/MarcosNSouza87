import styled from "styled-components";

export const MenuSocialMediaContainer = styled.div`
  padding-top: 50px;
  gap: 26px;
  list-style: none;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  svg > path {
    fill:  ${(props) => props.theme.primary.white};
  }
  a:hover {
    transition: all 0.3s;
    svg > path {
      transition: all 0.3s;
      fill: ${(props) => props.theme.primary.primary};
    }
  }
`;
