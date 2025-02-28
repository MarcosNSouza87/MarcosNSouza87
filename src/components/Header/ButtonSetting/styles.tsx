import styled from 'styled-components';

interface IBtn {
	color: string;
}

export const Button = styled.button<IBtn>`
	width: 80px;
	height: 80px;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 10px;
	cursor: pointer;
	svg {
		width: 26px;
		height: 26px;
	}
	:hover {
		cursor: pointer;
		background-color: ${({ theme, color }) => theme.colors.secondary};
	}
`;
