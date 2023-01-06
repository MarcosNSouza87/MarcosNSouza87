import React, { useContext } from 'react'
import styled from 'styled-components'
import { LanguageContext } from '../../../../contexts/languegeContext'
import * as Icon from '../../../../assets/icons'

const ContactMe = () => {
	const { language } = useContext(LanguageContext)
	const lng = language
	return (
		<Container>
			<Content>
				<Title>{lng === 'pt' ? 'CONTATO' : 'CONTACT ME'}</Title>
				<List>
					<Item>
						<IconImg>
							<Icon.Linkedin color="#ff0141" />
						</IconImg>
						<Text>marcosnsouza</Text>
					</Item>
					<Item>
						<IconImg>
							<Icon.Github color="#ff0141" />
						</IconImg>
						<Text>MarkosNunnes87</Text>
					</Item>
					<Item>
						<IconImg>
							<Icon.Whatsapp color="#ff0141" />
						</IconImg>
						<Text>+55 13 99117-9703</Text>
					</Item>
					<Item>
						<IconImg>
							<Icon.Behance color="#ff0141" />
						</IconImg>
						<Text>m_souza@outlook.com.br</Text>
					</Item>
					<Item>
						<IconImg>
							<Icon.Email color="#ff0141" />
						</IconImg>
						<Text>m_souza@outlook.com.br</Text>
					</Item>
				</List>
			</Content>
		</Container>
	)
}

const List = styled.div``

const Title = styled.h3`
	color: #ff0141;
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
const IconImg = styled.div`
	width: 50px;
	height: 50px;
	background-color: #28262e;
	border: 1px solid #ff0141;
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
