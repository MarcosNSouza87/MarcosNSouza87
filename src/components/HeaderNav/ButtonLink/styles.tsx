import styled from 'styled-components'

interface ButtonProps {
	isSelect?: boolean
	theme: any
}

export const Button = styled.button<ButtonProps>`
	background-color: ${(props) =>
		props.isSelect ? props.theme.primary.primary + '22' : 'transparent'};
	border: none;
	height: 75px;
	width: 110px;
	border-bottom: 2px solid
		${(props) => (props.isSelect ? props.theme.primary.primary : 'transparent')};
	div.label {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 13px;
		color: ${(props) =>
			props.isSelect ? props.theme.primary.primary : props.theme.primary.white};
	}
  svg {
    margin-top: 10px;
    margin-bottom: 6px;
    height: 26px;
    width: 26px;
  }
	:hover {
		cursor: pointer;
    border-bottom: 2px solid ${(props) => props.theme.primary.primary};
	}
`
