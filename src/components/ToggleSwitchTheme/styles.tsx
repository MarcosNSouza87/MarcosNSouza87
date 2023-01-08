import styled from 'styled-components'

export const Wrapper = styled.div<{ checked: boolean }>`
	width: 90px;
	height: 50px;
	background: ${(props) => (props.checked ? '#00862f55' : '#2070c755')};
	border-radius: 24px;
	padding: 5px;
	cursor: pointer;
	transition: background 1s;
`

export const CheckBox = styled.div<{ checked: boolean }>`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.checked ? '#00862f' : '#2070c7')};
	background-size: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 24px;
	margin-left: ${(props) => (props.checked ? '40px' : '0px')};
	transition: 0.4s;
`
