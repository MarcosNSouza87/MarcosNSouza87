import styled from 'styled-components'

interface IItem {
	color: string
}

export const AboutContainer = styled.div<IItem>`
	color: ${(props) => props.theme.colors.white};
	height: 813px;
	width: 100%;
	flex-wrap: nowrap;
	overflow-x: auto;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${(props) => props.theme.colors.dark};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: ${(props) => props.theme.colors.gray};
	}
	section {
		.timeline {
			padding: 0 100px;
			.itm-card {
				border-left: 1px solid ${(props) => props.theme.colors.gray};
				padding: 0px 15px 15px;
				.title-timeline {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 5px;
					h5 {
						color: ${(props) => props.theme.colors.secondary};
						background-color: ${(props) => props.theme.colors.dark};
						border: 1px solid ${(props) => props.theme.colors.secondary};
						padding: 5px 10px;
						margin-left: -50px;
						border-radius: 20px;
					}
					span {
						font-weight: 600;
						font-size: 14px;
					}
				}
				h4.title_header {
					font-weight: 600;
					font-size: 16px;
					padding: 10px 0 5px;
				}
				p {
					font-size: 14px;
					color: ${(props) => props.theme.colors.gray};
				}
				&.frst {
					.title-timeline {
						h5 {
							color: ${({theme}) => theme.colors.white};
							background-color: ${({theme,color}) => theme.colors.selected[Number(color)]};
							border: 1px solid ${({theme,color}) => theme.colors.selected[Number(color)]};
						}
					}
				}
			}
		}

		.aboutme {
			padding: 0 100px;
			p {
				margin-left: 15px;
			}
			button {
				padding: 10px 20px;
				color: ${(props) => props.theme.colors.white};
				background-color: ${(props) => props.theme.colors.secondary};
				border: 1px solid ${(props) => props.theme.colors.dark};
				border-radius: 10px;
			}
		}
	}
`

export const Item = styled.div<IItem>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 20px;
	img {
		width: 100px;
		height: 100px;
	}
	h4 {
		font-size: 1.1rem;
		font-weight: 400;
		margin-top: 10px;
		color: ${({ theme,color }) => theme.colors.selected[Number(color)]};
		text-transform: uppercase;
	}
`

export const InfoDo = styled.div<IItem>`
	margin-top: 50px;
	padding: 10px 20px;
	width: 100%;
	h3 {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 5px;
		color: ${({ theme,color }) => theme.colors.selected[Number(color)]};
		text-transform: uppercase;
	}
`

export const InfoMain = styled.div<IItem>`
	border-left: 5px solid ${({ theme,color }) => theme.colors.selected[Number(color)]};
	padding: 10px 20px;
	h3 {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 5px;
		color: ${({ theme,color }) => theme.colors.selected[Number(color)]};
		text-transform: uppercase;
	}
	p {
		font-size: 1.5rem;
	}
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

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin: 15px 0;
`

