import styled from 'styled-components'
import ImgBR from '../../assets/images/Br.png'
import ImgUS from '../../assets/images/Us.png'

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
	background: #fff;
	background-image: ${(props) =>
		props.checked ? `url(${ImgBR})` : `url(${ImgUS})`};
	background-size: 40px;
	background-position: center;
	border-radius: 24px;
	margin-left: ${(props) => (props.checked ? '40px' : '0px')};
	transition: 0.4s;
`
