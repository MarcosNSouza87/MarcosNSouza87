//create settings context

import { createContext, useContext, useEffect, useState } from 'react'
import { ITheme } from '../@types/theme'
import { theme as STheme } from '../styles/theme'

interface SettingsContextType {
	selectedTheme: string
	setSelectedTheme: (theme: string) => void
	openSettings: boolean
	setOpenSettings: (open: boolean) => void
	theme: ITheme
	setTheme: (theme: ITheme) => void
	color: number
	setColor: (color: number) => void
	language: string // 'en' | 'pt
	setLanguage: (language: string) => void
}

//create context
export const SettingsContext = createContext<SettingsContextType>({
	selectedTheme: 'dark',
	setSelectedTheme: () => {},
	openSettings: false,
	setOpenSettings: () => {},
	theme: STheme.Dark,
	setTheme: () => {},
	color: 0,
	setColor: () => {},
	language: 'en',
	setLanguage: () => {},
})

//create provider
export const SettingsProvider: React.FC = ({ children }) => {
	const [theme, setTheme] = useState(STheme.Dark)
	const [selectedTheme, setSelectedTheme] = useState('dark')
	const [openSettings, setOpenSettings] = useState(false)
	const [color, setColor] = useState(0)
	const [language, setLanguage] = useState('en')
	useEffect(() => {
		if(selectedTheme === 'dark') {
			setTheme(STheme.Dark)
		}
		if(selectedTheme === 'light') {
			setTheme(STheme.Light)
		}
	}, [theme, selectedTheme])

	useEffect(() => {
		console.log(openSettings)
	}, [openSettings])

	return (
		<SettingsContext.Provider
			value={{
				selectedTheme,
				setSelectedTheme,
				openSettings,
				setOpenSettings,
				theme,
				setTheme,
				color,
				setColor,
				language,
				setLanguage,
			}}
		>
			{children}
		</SettingsContext.Provider>
	)
}

//use context
export const useSettings = () => useContext(SettingsContext)
