import styled from "styled-components";

export const SearchInputContainer = styled.div`
  color: ${(props)=>props.theme.colors.gray};
  background-color: ${(props)=>props.theme.colors.dark};
  width: 100%;
  max-width: 650px;
  margin: 10px 0;
  div {
    border-radius: 3px;
    border: 2px solid ${(props) => props.theme.colors.gray};
    display: flex;
    align-items: center;
    transition: all 0.4s;
    input {
      height: 50px;
      flex: 1;
      background: transparent;
      border: 0;
      color: ${(props) => props.theme.colors.white};
      font-size: 1.1rem;
      outline: none;
      &::placeholder {
        color: ${(props) => props.theme.colors.gray};
        font-weight: 400;
      }
      &::-webkit-search-cancel-button {
        cursor: pointer;
        margin-right: 14px;
      }
    }
    svg {
      stroke:${(props)=>props.theme.colors.white};
      margin-right: 14px;
      margin-left: 14px;
    }
  }
`;
