import styled from "styled-components";

export const WorksContainer = styled.div`
  color: var(--color-white-a);
`;

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
    height: 640px;
    width:632px;
    flex-wrap: nowrap;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background-color: #101010;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--color-gray-b);
    }

    .row__posters {
      display: flex;
      flex-direction: column;
    }
  }
`;
