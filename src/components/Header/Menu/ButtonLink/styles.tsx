import styled from 'styled-components'
import { ITheme } from '../../../../@types/theme'

interface ButtonProps {
	isSelect?: boolean
	theme: ITheme
	color: string
}

export const Button = styled.button<ButtonProps>`
	background-color: ${({ theme, color, isSelect }) =>
		isSelect ? theme.colors.selected[Number(color)] + '22' : 'transparent'};
	border: none;
	height: 75px;
	width: 110px;
	border-bottom: 2px solid
		${({ isSelect, theme, color }) =>
			isSelect ? theme.colors.selected[Number(color)] : 'transparent'};
	div.label {
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 13px;
		color: ${({ isSelect, theme, color }) =>
			isSelect ? theme.colors.selected[Number(color)] : theme.colors.grayLight};
	}
	svg {
		margin-top: 10px;
		margin-bottom: 6px;
		height: 26px;
		width: 26px;
	}
	:hover {
		cursor: pointer;
		border-bottom: 2px solid
			${({ theme, color }) => theme.colors.selected[Number(color)]};
	}
`
