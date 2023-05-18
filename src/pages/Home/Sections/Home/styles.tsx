import styled from 'styled-components'

export const Footer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 40px;
	h4 {
		margin-bottom: 10px;
	}
`

interface IItem {
	color: string
}

export const InfoMain = styled.div<IItem>`
	border-left: 5px solid
		${({ theme, color }) => theme.colors.selected[Number(color)]};
	padding: 10px;
`

export const Button = styled.button<IItem>`
	width: 170px;
	height: 50px;
	border-radius: 4px;
	border: none;
	font-size: 20px;
	text-transform: uppercase;
	margin-right: 20px;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.dark};
	&.red {
		color: ${({ theme, color }) =>
			color === '0' || color === '4' ? theme.colors.white : theme.colors.secondary};
		background-color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	}
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`

export const IconImg = styled.div`
	width: 50px;
	height: 50px;
	background-color: ${({ theme }) => theme.colors.dark};
	border: 1px solid ${({ theme }) => theme.colors.gray};
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
	svg {
		width: 30px;
		height: 30px;
	}
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 15px 0;
`

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100vw;
`

export const Content = styled.div``

export const HomeContainer = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-rows: 300px;
	grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr;
  }
  align-items: center;
  justify-content: center;

`
export const HomeAvatar = styled.img`
	width: 300px;
	height: 300px;
	border-radius: 100px 10px 100px 100px;
	@media (max-width: 768px) {
		width: 200px;
    height: 200px;
    border-radius: 66px 66px 66px 10px;
    margin-left: 18px;
	}
`

export const InfoContent = styled.div<IItem>`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 20px;
	h1 {
		font-size: 30px;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.white};
	}
	h2 {
		font-size: 20px;
		font-weight: 600;
		color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	}
	p {
		font-size: 22px;
		font-weight: 600;
		color: ${({ theme }) => theme.colors.white};
	}
`
