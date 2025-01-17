import styled from 'styled-components';
interface IItem {
	color: string;
}
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 23px;
	letter-spacing: 1px;
`;