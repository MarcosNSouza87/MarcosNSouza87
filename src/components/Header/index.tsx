import ButtonSetting from './ButtonRight'
import MenuMain from './Menu'
import { HeaderContainer } from './styles'

interface HeaderProps {
	selectedSection: string
	setSelectedSection: (section: string) => void
}

const Header = ({ selectedSection, setSelectedSection }: HeaderProps) => {
	return (
		<HeaderContainer>
			<div className="menuSide"></div>
			<MenuMain selected={selectedSection} setSelected={setSelectedSection} />
			<div className="menu-right">
				<ButtonSetting />
			</div>
		</HeaderContainer>
	)
}

export default Header
