import styled from 'styled-components'

interface IItem {
	color: string
}

export const HorizontalCarousel = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100vw;
	margin-top: 50px;
`

export const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 33px;
	letter-spacing: 1px;
	margin-bottom: 20px;
`

export const Image = styled.img`
	width: 100%;
	height: 300px;
`
export const Info = styled.div`
	padding: 5px 20px;
`

export const Card = styled.div<IItem>`
	width: 400px;
	height: 450px;
	margin: 0 10px;
	background-color: ${({ theme }) => theme.colors.dark};
	border-radius: 4px;
	h3{
		color: ${({ theme }) => theme.colors.white};
	}
	transition: 0.4s;
	:hover {
		box-shadow: 0 0 10px ${({ theme,color }) => theme.colors.selected[Number(color)]};
		h3{
			color: ${({ theme,color }) => theme.colors.selected[Number(color)]};
		}
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
	color: string
}
export const PaginationItem = styled.button<IPaginationItem>`
	width: 30px;
	height: 30px;
	border-radius: 4px;
	font-size: 16px;
	border: none;
	background-color: ${({ theme, active,color }) =>
		active ? theme.colors.selected[Number(color)] : theme.colors.grayLight};
	margin: 0 5px;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`
export const IconPagination = styled(PaginationItem)`
	svg{
		width: 30px;
		height: 30px;
	}
`;

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
