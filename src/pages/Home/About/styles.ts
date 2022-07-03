import styled from "styled-components";

export const AboutContainer = styled.div`
  color: ${(props) => props.theme.primary.white};
  height: 813px;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.secondary.dark};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${(props) => props.theme.secondary.gray};
  }
  section {
    .timeline {
      padding: 0 100px;
      .itm-card {
        border-left: 1px solid ${(props) => props.theme.secondary.gray};
        padding: 0px 15px 15px;
        .title-timeline {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          h5 {
            color: ${(props) => props.theme.secondary.primary};
            background-color: ${(props) => props.theme.primary.dark};
            border: 1px solid ${(props) => props.theme.secondary.primary};
            padding: 5px 10px;
            margin-left: -50px;
            border-radius: 20px;
          }
          span {
            font-weight: 600;
            font-size: 14px;
          }
        }
        h4.title_header {
          font-weight: 600;
          font-size: 16px;
          padding: 10px 0 5px;
        }
        p {
          font-size: 14px;
          color: ${(props) => props.theme.primary.gray};
        }
        &.frst {
          .title-timeline {
            h5 {
              color: ${(props) => props.theme.primary.white};
              background-color: ${(props) => props.theme.secondary.primary};
              border: 1px solid ${(props) => props.theme.secondary.primary};
            }
          }
        }
      }
    }

    .aboutme {
      padding: 0 100px;
      p {
        margin-left: 15px;
      }
      button {
        padding: 10px 20px;
        color: ${(props) => props.theme.secondary.white};
        background-color: ${(props) => props.theme.primary.secondary};
        border: 1px solid ${(props) => props.theme.secondary.dark};
        border-radius: 10px;
      }
    }
  }
`;
