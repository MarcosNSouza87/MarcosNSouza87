import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input,
textarea {
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  transition: all 0.2s;
}
body{
  background-size: cover;
  color: #212529;
  //background-image: url(${({ theme }) => theme.backgroundImgUrl});
  background-color: ${({ theme }) => theme.background};
}

#root {
  width: 100vw;
  display: flex;
  flex-direction: row;
}

.section {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.dark};
}

.background-span {
  font-family: 'Roboto';
  color: ${(props) => props.theme.colors.dark};
  font-size: 18.75rem;
  font-weight: 900;
  width: 370px;
  margin-top: -130px;
  display: flex;
}

.dark {
  --color-red: #ff0141;
  --color-primary: #01c4ff;
  --color-white: #29292e;
  --color-gray: #101010;
  --color-gray-1: #737373;
  --color-dark-1: #adadad;
  --color-dark: #e6e7e8;
}

`
