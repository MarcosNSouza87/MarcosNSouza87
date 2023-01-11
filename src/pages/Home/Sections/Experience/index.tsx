import React, { useEffect } from 'react'
import * as Icon from '../../../../assets/icons'
import { SettingsContext } from '../../../../contexts/settingsContext'
import * as S from './styles'
import { Conteudo } from './content'

export default function Experience() {
	const [show, setShow] = React.useState('education')
	const { theme, color, language } = React.useContext(SettingsContext)
	const [content, setContent] = React.useState(Conteudo[1].items)
	const selectedItem = (value: string) => {
		if (value === show) {
			return theme.colors.selected[color]
		}
		return theme.colors.gray
	}

	const Information = (value: string) => {
		if (value === 'education') {
			return Conteudo[1].items
		}
		return Conteudo[0].items
	}

	useEffect(() => {
		setContent(Information(show))
	}, [show])

	return (
		<S.Container>
			<S.Content>
				<S.Title color={color.toString()}>
					{language === 'pt' ? 'Minha trajetória pessoal' : 'My personal journey'}
				</S.Title>
				<S.Row>
					<S.Button
						color={color.toString()}
						onClick={() => setShow('education')}
						isActive={show === 'education'}
					>
						<Icon.Education color={selectedItem('education')} />
						<h3>{language === 'pt' ? 'Educação' : 'Education'}</h3>
					</S.Button>
					<S.Button
						color={color.toString()}
						onClick={() => setShow('work')}
						isActive={show === 'work'}
					>
						<Icon.Work color={selectedItem('work')} />
						<h3>{language === 'pt' ? 'Experiência' : 'Experience'}</h3>
					</S.Button>
				</S.Row>
				<S.Main>
					{content.map((item, index) => {
						return (
							<S.Card key={index}>
								<S.CardHeader>
									<S.CardRow>
										<S.Date color={color.toString()}>{item.date}</S.Date>
										<S.Company>{item.company}</S.Company>
									</S.CardRow>
									<S.TitleCard>
										{language === 'pt' ? item.title.pt : item.title.en}
									</S.TitleCard>
								</S.CardHeader>
								<S.CardBody>
									<S.Description>
										{language === 'pt' ? item.description.pt : item.description.en}
									</S.Description>
								</S.CardBody>
							</S.Card>
						)
					})}
				</S.Main>
			</S.Content>
		</S.Container>
	)
}
