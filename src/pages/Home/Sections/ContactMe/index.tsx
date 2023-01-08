import React, { useContext } from 'react'
import styled from 'styled-components'
import { SettingsContext } from '../../../../contexts/settingsContext'
import * as Icon from '../../../../assets/icons'
import { theme as Stheme } from '../../../../styles/theme'

const ContactMe = () => {
	const { theme } = useContext(SettingsContext)
	const Theme = theme === 'dark' ? Stheme.Dark : Stheme.Light
	const { language, color } = useContext(SettingsContext)
	const lng = language
	return (
		<Container>
			<Content>
				<Title color={color.toString()}>{lng === 'pt' ? 'CONTATO' : 'CONTACT ME'}</Title>
				<List>
					<Item>
						<IconImg color={color.toString()}>
							<Icon.Linkedin color={Theme.colors.selected[color]} />
						</IconImg>
						<Text>marcosnsouza</Text>
					</Item>
					<Item>
						<IconImg color={color.toString()}>
							<Icon.Github color={Theme.colors.selected[color]} />
						</IconImg>
						<Text>MarkosNunnes87</Text>
					</Item>
					<Item>
						<IconImg color={color.toString()}>
							<Icon.Whatsapp color={Theme.colors.selected[color]} />
						</IconImg>
						<Text>+55 13 99117-9703</Text>
					</Item>
					<Item>
						<IconImg color={color.toString()}>
							<Icon.Behance  color={Theme.colors.selected[color]}/>
						</IconImg>
						<Text>m_souza@outlook.com.br</Text>
					</Item>
					<Item>
						<IconImg color={color.toString()}>
							<Icon.Email color={Theme.colors.selected[color]} />
						</IconImg>
						<Text>m_souza@outlook.com.br</Text>
					</Item>
				</List>
			</Content>
		</Container>
	)
}

interface IItem {
	color: string
}

const List = styled.div``

const Title = styled.h3<IItem>`
	color: ${({ theme, color }) => theme.colors.selected[Number(color)]};
	font-weight: 400;
	font-size: 33px;
	letter-spacing: 1px;
	margin-bottom: 20px;
`

const Item = styled.div`
	display: flex;
	flex-direction: row;
	margin: 20px 0;
`
const IconImg = styled.div<IItem>`
	width: 50px;
	height: 50px;
	background-color: #28262e;
	border: 1px solid ${({ theme, color }) => theme.colors.selected[Number(color)]};
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 30px;
		height: 30px;
	}
`
const Text = styled.div`
	height: 50px;
	width: 300px;
	background-color: #28262e;
	border-radius: 10px;
	margin-left: 10px;
	display: flex;
	align-items: center;
	padding-left: 10px;
	color: #f4ede8;
	letter-spacing: 1px;
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

export default ContactMe
