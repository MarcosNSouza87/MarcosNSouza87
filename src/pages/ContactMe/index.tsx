import React, { useContext } from 'react'
import * as S from './styles'
import { SettingsContext } from '../../contexts/settingsContext'
import * as Icon from '../../assets/icons'

const ContactMe = () => {
	const { theme } = useContext(SettingsContext)
	const { language, color } = useContext(SettingsContext)
	const lng = language
	
	return (
		<S.Container>
			<S.Content>
				<S.Title color={color.toString()}>{lng === 'pt' ? 'CONTATO' : 'CONTACT ME'}</S.Title>
				<S.List>
					<S.Item>
						<S.IconImg color={color.toString()}>
							<Icon.Linkedin color={theme.colors.selected[color]} />
						</S.IconImg>
						<S.Text>marcosnsouza</S.Text>
					</S.Item>
					<S.Item>
						<S.IconImg color={color.toString()}>
							<Icon.Github color={theme.colors.selected[color]} />
						</S.IconImg>
						<S.Text>MarkosNunnes87</S.Text>
					</S.Item>
					<S.Item>
						<S.IconImg color={color.toString()}>
							<Icon.Whatsapp color={theme.colors.selected[color]} />
						</S.IconImg>
						<S.Text>+55 13 99117-9703</S.Text>
					</S.Item>
					<S.Item>
						<S.IconImg color={color.toString()}>
							<Icon.Behance  color={theme.colors.selected[color]}/>
						</S.IconImg>
						<S.Text>m_souza@outlook.com.br</S.Text>
					</S.Item>
					<S.Item>
						<S.IconImg color={color.toString()}>
							<Icon.Email color={theme.colors.selected[color]} />
						</S.IconImg>
						<S.Text>m_souza@outlook.com.br</S.Text>
					</S.Item>
				</S.List>
			</S.Content>
		</S.Container>
	)
}

export default ContactMe