import styled from 'styled-components'

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

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 440px;
`;

interface IButton {
	color: string
	isActive: boolean
}

export const Button = styled.button<IButton>`
	width: 200px;
	padding: 10px 20px;
	color: ${({ theme }) => theme.colors.gray};
	background-color: transparent;
	border: 1px solid
		${({ theme, color, isActive }) =>
			isActive ? theme.colors.selected[Number(color)] : theme.colors.dark};
	border-radius: 10px;
	:hover {
		background-color: ${({ theme }) => theme.colors.dark};
		cursor: pointer;
	}
	svg {
		width: 30px;
		height: 30px;
	}
`

interface IItem {
	color: string
}

export const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 33px;
	letter-spacing: 1px;
	margin-bottom: 20px;
`

export const Main = styled.div``

export const Card = styled.div`
	margin: 10px 0;
`
export const CardHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	
`
export const Date = styled.h4<IItem>`
	margin-right: 20px;
	border: 1px solid ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	border-radius: 60px;
	padding: 5px 15px;
	`
export const CardBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 10px 0 15px 15px;
	margin-left: 15px;
	border-left: 2px dotted ${({ theme }) => theme.colors.grayLight};
`;




export const Company = styled.h4``
export const TitleCard = styled.h4``


export const Description = styled.p``