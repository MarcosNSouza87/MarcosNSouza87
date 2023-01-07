import { useContext } from 'react'
import styled from 'styled-components'
import * as Img from '../../../../assets/images'
import { SettingsContext } from '../../../../contexts/settingsContext'

export default function AboutPage() {
	const { language } = useContext(SettingsContext)
	const lng = language
	return (
		<Container>
			<Content>
				<InfoMain>
					<h3>{lng === 'pt' ? 'Sobre mim' : 'About me'}</h3>
					<p>
						{lng === 'pt'
							? ` Deixa eu te contar uma coisa, 
							 Eu sou apaixonado por tecnologia e pelo que faço.
							 Eu gosto de aprender coisas novas e de compartilhar
						   conhecimento. Eu sou um cara muito legal, que gosta de programar e
						   resolver problemas. Atuo como desenvolvedor front-end web e mobile.
							 Hoje trabalho com ReactJS, React Native, NodeJS, Typescript, 
							 Styled Components, entre outras tecnologias.
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						`
							: `
						Let me tell you something, 
						I'm loving about technology and what I do. 
						I like to learn new things and share knowledge. 
						I'm a nice guy, who likes to program and solve problems. 
						I work as a front-end web and mobile developer. 
						Today I work with ReactJS, React Native, NodeJS, Typescript,
					  Styled Components, among other technologies.
						`}
					</p>
				</InfoMain>
				<InfoDo>
					<h3>{lng === 'pt' ? 'O que eu faço' : 'What I do'}</h3>
					<Row>
						<Item>
							<img src={Img.Web} alt="web" />
							<h4>{lng === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</h4>
						</Item>
						<Item>
							<img src={Img.Mobile} alt="mobile" />
							<h4>
								{lng === 'pt' ? 'Desenvolvimento Mobile' : 'Mobile Development'}
							</h4>
						</Item>
						<Item>
							<img src={Img.Design} alt="design" />
							<h4>{lng === 'pt' ? 'Design UI/UX' : 'Design UI/UX'}</h4>
						</Item>
					</Row>
				</InfoDo>
			</Content>
		</Container>
	)
}

const Item = styled.div`
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
		color: ${({ theme }) => theme.primary.primary};
		text-transform: uppercase;
	}
`

const InfoDo = styled.div`
	margin-top: 50px;
	padding: 10px 20px;
	width: 100%;
	h3 {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 5px;
		color: ${({ theme }) => theme.primary.primary};
		text-transform: uppercase;
	}
`

const InfoMain = styled.div`
	border-left: 5px solid ${({ theme }) => theme.primary.primary};
	padding: 10px 20px;
	h3 {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: 5px;
		color: ${({ theme }) => theme.primary.primary};
		text-transform: uppercase;
	}
	p {
		font-size: 1.5rem;
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	width: 100vw;
	padding: 60px 0;
`

const Content = styled.div`
	display: flex;
	max-width: 950px;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin: 15px 0;
`
