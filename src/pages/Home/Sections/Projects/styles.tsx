import styled from 'styled-components'

export const HorizontalCarousel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100vw;
	margin-top: 50px;
`

export const Image = styled.img`
	width: 100%;
	height: 250px;
`
export const Info = styled.div`
	padding: 5px 20px;
`

interface IItem {
	color: string
}

export const Card = styled.div<IItem>`
	width: 400px;
	height: 400px;
	margin: 0 10px;
	background-color: ${({ theme }) => theme.colors.dark};
	border-radius: 4px;
	:hover {
		box-shadow: 0 0 10px ${({ theme,color }) => theme.colors.selected[Number(color)]};
	}
`

export const Pagination = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`

interface IPaginationItem {
	active: boolean
}
export const PaginationItem = styled.button<IPaginationItem>`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: none;
	background-color: ${({ theme, active }) =>
		active ? theme.colors.selected[0] : theme.colors.gray};
	margin: 0 5px;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`
