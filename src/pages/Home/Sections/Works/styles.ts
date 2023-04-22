import styled from 'styled-components'

export const WorksContainer = styled.div`
	color: var(--color-white);
`

export const WorkMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.row {
  display: flex;
  flex-direction: row;
  .slider {
    height: 570px;
    width:632px;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.dark};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.gray};
    }

    .row__posters {
      display: flex;
      flex-direction: column;
    }
  }
`
