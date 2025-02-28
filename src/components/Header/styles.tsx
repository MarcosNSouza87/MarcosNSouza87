import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	background-color: ${({ theme }) => theme.background};
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 95px;
	box-shadow: 0px 4px 8px #000000;
	padding: 0 55px;
`;

interface IItem {
	color: string;
}

export const IconImg = styled.div<IItem>`
	width: 50px;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.dark};
	border: 1px solid ${({ theme, color }) => theme.colors.selected[Number(color)]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 30px;
		height: 30px;
	}
	:hover {
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const MenuLinks = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	height: 100%;
	align-items: center;
`;

export const MenuInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 200px;
	white-space: nowrap;
`;

export const Title = styled.h1`
	font-weight: 200;
	letter-spacing: 1px;
	margin-bottom: -10px;
`;

export const SubTitle = styled.h2<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	letter-spacing: 1px;
`;

export const Button = styled.button<IItem>`
	width: 180px;
	height: 50px;
	border-radius: 10px;
	border: none;
	font-size: 20px;
	text-transform: uppercase;
	margin-right: 20px;
	padding: 12px 0;
	color: ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme }) => theme.colors.dark};
	&.red {
		color: ${({ theme, color }) =>
			color === '0' || color === '4' ? theme.colors.dark : theme.colors.secondary};
		background-color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	}
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
