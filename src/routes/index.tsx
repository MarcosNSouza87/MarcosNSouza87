import React, { useContext } from 'react'
import Header from '../components/Header'
import { HomeMainContent, HomePageContainer } from './styles'
import * as Section from '../pages'
import { SettingsContext } from '../contexts/settingsContext'
import Sidebar from '../components/SideBar' 

export default function RouteMain() {
	const [selectedSection, setSelectedSection] = React.useState('Home')
	const { openSettings, setOpenSettings } = useContext(SettingsContext)

	return (
		<HomePageContainer>
			<Header
				selectedSection={selectedSection}
				setSelectedSection={setSelectedSection}
			/>
			{openSettings && <Sidebar setOpen={setOpenSettings} />}
			<HomeMainContent>
				{selectedSection === 'Home' && <Section.Home />}
				{selectedSection === 'About' && <Section.About />}
				{selectedSection === 'Experience' && <Section.Experience />}
				{selectedSection === 'ContactMe' && <Section.ContactMe />}
				{selectedSection === 'Projects' && <Section.Projects />}
			</HomeMainContent>
		</HomePageContainer>
	)
}
