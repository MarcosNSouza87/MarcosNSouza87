import { useContext } from 'react'
import * as Img from '../../../../assets/images'
import { SettingsContext } from '../../../../contexts/settingsContext'
import * as S from './styles'

export default function AboutPage() {
	const { language, color,theme } = useContext(SettingsContext)
	const lng = language
	return (
		<S.Container>
			<S.Content>
				<S.InfoMain color={color.toString()}>
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
				</S.InfoMain>
				<S.InfoDo color={color.toString()}>
					<h3>{lng === 'pt' ? 'O que eu faço' : 'What I do'}</h3>
					<S.Row>
						<S.Item color={color.toString()}>
							<Img.Web color={theme.colors.white}/>
							<h4>{lng === 'pt' ? 'Desenvolvimento Web' : 'Web Development'}</h4>
						</S.Item>
						<S.Item color={color.toString()}>
							<Img.Mobile color={theme.colors.white} />
							<h4>
								{lng === 'pt' ? 'Desenvolvimento Mobile' : 'Mobile Development'}
							</h4>
						</S.Item>
						<S.Item color={color.toString()}>
							<Img.Design color={theme.colors.white} />
							<h4>{lng === 'pt' ? 'Design UI/UX' : 'Design UI/UX'}</h4>
						</S.Item>
					</S.Row>
				</S.InfoDo>
			</S.Content>
		</S.Container>
	)
}
