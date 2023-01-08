import styled from 'styled-components'

export const HomePageContainer = styled.div`
	color: ${(props) => props.theme.colors.white};
	display: grid;
	grid-template-rows: 100px 1fr;
	height: 100vh;
	width: 100vw;
`

export const HomeMainContent = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr;
	@media only screen and (max-width: 1350px) {
		display: flex;
		flex-direction: column;
	}
`
