import styled from 'styled-components';

interface IItem {
	color: string;
}

export const HorizontalCarousel = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100vw;
	margin-top: 50px;
`;

export const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 33px;
	letter-spacing: 1px;
	margin-bottom: 20px;
`;

export const Image = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 16px;
`;
export const Info = styled.div`
	padding: 5px 20px;
`;

export const Card = styled.div<IItem>`
	display: flex;
	flex-direction: row;
	width: 540px;
	height: 180px;
	margin: 0 10px;
	background-color: ${({ theme }) => theme.colors.dark};
	border-radius: 16px;
	margin-bottom: 20px;
	h3 {
		font-size: 16px;
		color: ${({ theme }) => theme.colors.white};
	}
	h4 {
		font-size: 14px;
	}

	p {
		font-size: 12px;
		padding-bottom: 10px;
	}
	transition: 0.4s;
	:hover {
		box-shadow: 0 0 10px
			${({ theme, color }) => theme.colors.selected[Number(color)]};
		h3 {
			color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
		}
	}
`;

export const Pagination = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
`;

interface IPaginationItem {
	active: boolean;
	color: string;
}
export const PaginationItem = styled.button<IPaginationItem>`
	width: 30px;
	height: 30px;
	border-radius: 4px;
	font-size: 16px;
	border: none;
	background-color: ${({ theme, active, color }) =>
		active ? theme.colors.selected[Number(color)] : theme.colors.grayLight};
	margin: 0 5px;
	:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;
export const IconPagination = styled(PaginationItem)`
	svg {
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
`;

export const Content = styled.div`
	display: flex;
	max-width: 950px;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;

export const BtnShowDetails = styled.button<IItem>`
	background-color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	border: none;
	margin-right: 15px;

	:hover {
		cursor: pointer;
	}
`;

export const BtnShowCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between; 
	height: 100%;
	width: 50px;
	.title {
		color: #fff;
		font-size: 18px;
		font-weight: 100;
		transform: rotate(90deg);
		margin-top: 30px;
	}
	.icons {
		svg {
			margin-top: 10px;
		}
	}
`;
