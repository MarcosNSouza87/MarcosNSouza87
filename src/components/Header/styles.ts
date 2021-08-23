import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // min-width: 1400px;
    padding: 20px 124px;
    width: 100%;
    h3 {
      font-weight: 600;
      font-size: 35px;
      span {
        font-weight: 600;
        font-size: 40px;
        color: ${(props) => props.theme.primary.primary};
      }
    }
    h4 {
      font-weight:500;
      font-size:25px;
      span{
        font-weight:500;
        font-size:28px;
        color: ${(props) => props.theme.primary.primary};
      }
    }
  }
}

.back {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #00000009;
}

.mm-header {
  position: absolute;
  background-color: var(--color-white-a);
  padding: 11px;
  width: 240px;
  height: 420px;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 30px;
  gap: 10px;

  button.close-menu {
    padding: 2px;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 25px;
    background-color: var(--color-white-a);
    box-shadow: none;
    svg > path {
      stroke: var(--color-dark-b);
    }
    &:hover {
      cursor: pointer;
      border-color: var(--color-primary);
      svg > path {
        stroke: var(--color-primary);
      }
    }
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
    font-weight: 600;
    li {
      text-align: right;
    }
    li a {
      padding: 2px 10px;
      font-size: 18px;
      color: var(--color-dark-b);
      text-decoration: none;
      border-right: 4px solid var(--color-white-a);
      &:hover {
        border-right: 4px solid var(--color-primary);
        color: var(--color-primary);
      }
    }
  }

`;
