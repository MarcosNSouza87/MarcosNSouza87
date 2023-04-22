import styled from "styled-components"

interface IItem {
	color: string
}

export const List = styled.div``

export const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 33px;
	letter-spacing: 1px;
	margin-bottom: 20px;
`

export const Item = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px 0;
`
export const IconImg = styled.div<IItem>`
	width: 50px;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.dark};
	border: 1px solid ${({ theme, color }) => theme.colors.selected[Number(color)]};
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 30px;
		height: 30px;
	}
`
export const Text = styled.div`
	height: 50px;
	width: 300px;
	background-color: ${({ theme }) => theme.colors.dark};
	border-radius: 4px;
	margin-left: 10px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 1px;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100vw;
	padding: 60px 0;
`

export const Content = styled.div`
	display: flex;
	max-width: 950px;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`
