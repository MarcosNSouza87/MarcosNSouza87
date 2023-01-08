import React, { useContext } from 'react'
import * as S from './styles'
import ToggleSwitch from '../../../../components/ToggleSwitchLanguage'
import Avatar from '../../../../assets/images/Avatar.jpg'
import * as Icon from '../../../../assets/icons'
import { SettingsContext } from '../../../../contexts/settingsContext'
const Home = () => {
	const { language, color } = useContext(SettingsContext)
	const lng = language

	return (
		<S.Container>
			<S.Content>
				<S.HomeContainer>
					<S.HomeAvatar src={Avatar} />
					<S.InfoContent color={color.toString()}>
						<S.InfoMain color={color.toString()}>
							<h1>Marcos Nunes de Souza</h1>
							<h2>
								{lng === 'pt' ? 'Desenvolvedor Front-End' : 'Front-End Developer'}
							</h2>
							<p>React, React-Native</p>
						</S.InfoMain>
						<S.Row>
							<S.ButtonIcon>
								<Icon.Linkedin color="#979797" />
							</S.ButtonIcon>
							<S.ButtonIcon>
								<Icon.Github color="#979797" />
							</S.ButtonIcon>
						</S.Row>
						<S.Row>
							<S.Button className="red" color={color.toString()}>
								{lng === 'pt' ? 'Curriculo' : 'RESUME'}
							</S.Button>
							<S.Button color={color.toString()}>
								{lng === 'pt' ? 'Contato' : 'Hire Me'}
							</S.Button>
						</S.Row>
					</S.InfoContent>
				</S.HomeContainer>
				<S.Footer>
					<h4>{lng === 'pt' ? 'Escolha o idioma:' : 'Choose the language:'}</h4>
					<ToggleSwitch />
				</S.Footer>
			</S.Content>
		</S.Container>
	)
}

export default Home