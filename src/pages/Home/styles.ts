import styled from "styled-components";

export const HomePageContainer = styled.div`
  width: 100%;
  color: ${(props)=> props.theme.primary.white};
  display: flex;
  flex-direction: column;
`;

export const HomeMainContent = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media only screen and (max-width: 1350px) {
      display: flex;
      flex-direction:column;
    }
`;