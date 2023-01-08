import { useState } from 'react'
import ButtonSetting from './ButtonRight'
import MenuMain from './Menu'
import Sidebar from './SideBar'
import { HeaderContainer } from './styles'

interface HeaderProps {
	selectedSection: string
	setSelectedSection: (section: string) => void
}

const Header = ({ selectedSection, setSelectedSection }: HeaderProps) => {
	const [openConfig, setOpenConfig] = useState(false);
	return (
		<>
		<HeaderContainer>
			<div className="menuSide"></div>
			<MenuMain selected={selectedSection} setSelected={setSelectedSection} />
			<div className="menu-right">
				<ButtonSetting open={openConfig} setOpen={setOpenConfig}/>
			</div>
		</HeaderContainer>
		{openConfig && (
			<Sidebar setOpen={setOpenConfig}/>
		)}
		</>
	)
}

export default Header
