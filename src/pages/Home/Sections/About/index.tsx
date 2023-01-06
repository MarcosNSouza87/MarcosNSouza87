import { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../../../contexts/languegeContext'

export default function AboutPage() {
	const { language } = useContext(LanguageContext)
	const lng = language
	return (
		<Container>
			<Content>
				<InfoMain>
					<h3>{lng === 'pt' ? 'Sobre mim' : 'About me'}</h3>
					<p>
						{lng === 'pt'
							? `Deixa eu te contar uma coisa, eu sou um cara muito legal, que gosta de
						programar e de resolver problemas. Eu sou apaixonado por tecnologia e por
						resolver problemas. Eu gosto de aprender coisas novas e de compartilhar
						conhecimento. Eu sou um cara muito legal, que gosta de programar e de
						resolver problemas. Eu sou apaixonado por tecnologia e por resolver
						problemas. Eu gosto de aprender coisas novas e de compartilhar
						conhecimento.`
							: `
						Let me tell you something, I'm a very cool guy, who likes to
						program and solve problems. I'm passionate about technology and solving
						problems. I like to learn new things and share knowledge. I'm a very cool
						guy, who likes to program and solve problems. I'm passionate about
						technology and solving problems. I like to learn new things and share
						knowledge.
						`}
					</p>
				</InfoMain>
				<div>
					<h3>{lng === 'pt' ? 'Habilidades' : 'Skills'}</h3>
					<Row>
						
					</Row>
				</div>
			</Content>
		</Container>
	)
}

const InfoMain = styled.div`
  border-left: 5px solid ${({ theme }) => theme.primary.primary};
  padding: 10px 20px;
`;

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
  margin: 15px 0;
`
