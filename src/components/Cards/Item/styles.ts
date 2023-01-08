import styled from 'styled-components'

interface ICard {
  color: string;
}

export const Card = styled.div<ICard>`
  display: grid;
  grid-template-columns: 170px 280px 150px;
  width: 600px;
  height: 170px;
  background: ${(props)=> props.theme.colors.dark};
  box-shadow: 0px 0px 6px 7px rgba(0, 0, 0, 0.25);
  margin: 10px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3.title {
      font-size: 24px;
      font-weight: 400;
      padding: 5px 1px;
    }
    div.description {
      font-size: 14px;
      font-weight: 400;
    }
    .tecs {
      font-size: 12px;
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    gap: 10px;
    a.dev {
      background-color: ${({theme})=> theme.colors.secondary};
      svg {
        fill: ${({theme})=> theme.colors.white};
      }

    }
    a.prod {
      background-color: ${({theme,color})=> theme.colors.selected[Number(color)]};
      svg {
        stroke: ${({theme})=> theme.colors.white};
      }
    }
    a.disable {
      color: ${({theme})=> theme.colors.gray};
      background-color: ${({theme})=> theme.colors.gray};
      &:hover{
        cursor: not-allowed;
      }
    }
    a {
      width: 55px;
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: ${(props)=> props.theme.colors.white};
      text-decoration: none;
      padding: 10px;
    }
    a > span {
      display: inline-block;
      transform: rotate(90deg);
      margin-top: 25px;
    }
  }
`;
