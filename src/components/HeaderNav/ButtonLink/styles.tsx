import styled from "styled-components";

interface ButtonProps {
  isSelect?: boolean;
}

export const Button = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.isSelect ? "#f00" : "transparent"};
  border: none;
  height: 70px;
  width: 100px;
  border-bottom: 2px solid #f00;
  div.label {
    color: #fff;
  }
`;