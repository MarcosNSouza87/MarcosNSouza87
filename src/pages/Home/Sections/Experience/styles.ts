import styled from 'styled-components'

interface IContainer {
	color: string
}

export const Container = styled.div<IContainer>`
	color: ${(props) => props.theme.colors.white};
	height: 813px;
	width: 100%;
	flex-wrap: nowrap;
	overflow-x: auto;

	&::-webkit-scrollbar {
		width: 12px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${({theme}) => theme.colors.dark};
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: ${({theme}) => theme.colors.gray};
	}
	section {
		.timeline {
			padding: 0 100px;
			.itm-card {
				border-left: 1px solid ${({theme}) => theme.colors.gray};
				padding: 0px 15px 15px;
				.title-timeline {
					display: flex;
					flex-direction: row;
					align-items: center;
					gap: 5px;
					h5 {
						color: ${({theme, color}) => theme.colors.selected[Number(color)]};
						background-color: ${({theme}) => theme.colors.dark};
						border: 1px solid ${({theme, color}) => theme.colors.selected[Number(color)]};
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
					color: ${({theme}) => theme.colors.gray};
				}
				&.frst {
					.title-timeline {
						h5 {
							color: ${({theme}) => theme.colors.white};
							background-color: ${({theme, color}) => theme.colors.selected[Number(color)]};
							border: 1px solid ${({theme, color}) => theme.colors.selected[Number(color)]};
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
				color: ${({theme}) => theme.colors.white};
				background-color: ${({theme}) => theme.colors.secondary};
				border: 1px solid ${({theme}) => theme.colors.dark};
				border-radius: 10px;
			}
		}
	}
`
