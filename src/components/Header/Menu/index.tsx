import { useContext } from 'react' 
import * as Icon from '../../../assets/icons'
import { LanguageContext } from '../../../contexts/languegeContext'
import { dark } from '../../../styles/theme'
import ButtonLink from '../ButtonLink'

interface MenuProps {
	selected: string
	setSelected: (section: string) => void
}

const MenuMain = ({ selected, setSelected }: MenuProps) => {
	const { language } = useContext(LanguageContext)
	const lng = language
	const theme = dark.primary

	const checkSelect = (section: string) => {
		if (selected === section) {
			return theme.primary
		} else {
			return theme.white
		}
	}

	return (
		<div className="menu">
			<ButtonLink
				label={lng === 'en' ? 'Projects' : 'Projetos'}
				goTo={() => setSelected('Projects')}
				isSelect={selected === 'Projects' ? true : false}
			>
				<Icon.Projects color={checkSelect('Projects')} />
			</ButtonLink>
			<ButtonLink
				label={lng === 'en' ? 'Experience' : 'Experiência'}
				goTo={() => setSelected('Experience')}
				isSelect={selected === 'Experience' ? true : false}
			>
				<Icon.Experience color={checkSelect('Experience')} />
			</ButtonLink>
			<ButtonLink
				label={lng === 'en' ? 'Home' : 'Início'}
				goTo={() => setSelected('Home')}
				isSelect={selected === 'Home' ? true : false}
			>
				<Icon.Home color={checkSelect('Home')} />
			</ButtonLink>
			<ButtonLink
				label={lng === 'en' ? 'About' : 'Sobre'}
				goTo={() => setSelected('About')}
				isSelect={selected === 'About' ? true : false}
			>
				<Icon.About color={checkSelect('About')} />
			</ButtonLink>
			<ButtonLink
				label={lng === 'en' ? 'Contact Me' : 'Contato'}
				goTo={() => setSelected('ContactMe')}
				isSelect={selected === 'ContactMe' ? true : false}
			>
				<Icon.ContactMe color={checkSelect('ContactMe')} />
			</ButtonLink>
		</div>
	)
}

export default MenuMain
