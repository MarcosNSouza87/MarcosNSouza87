import styled from 'styled-components'

export const ContainerSideBar = styled.div`
	position: absolute;
	right: 0;
	top: 80px;
	width: 300px;
	min-height: 400px;
	background-color: ${({ theme }) => theme.colors.white};
	padding: 10px 15px;
	.header {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}
	.list {
	}
	.container {
		color: ${({ theme }) => theme.colors.dark};
	}
`

export const Button = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
	cursor: pointer;
`

interface IItem {
	color: string
	isSelected: boolean
}

export const ItemColor = styled.button<IItem>`
	width: 40px;
	height: 40px;
	border-radius: 25px;
	margin: 0 5px;
	border: 2px solid
		${({ isSelected, theme }) => (isSelected ? theme.colors.dark : 'transparent')};
	background-color: ${({ color }) => color};
`
