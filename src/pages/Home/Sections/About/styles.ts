import styled from 'styled-components'

interface IItem {
	color: string
}

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

