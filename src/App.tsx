import HomePage from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { theme as Stheme } from './styles/theme'
import GlobalStyle from './styles/global'
import './styles/global.ts'
import { useContext } from 'react'
import { SettingsContext, SettingsProvider } from './contexts/settingsContext'

export function AppPortfolio() {
	const { theme } = useContext(SettingsContext)
	const Theme = theme === 'dark' ? Stheme.Dark : Stheme.Light
	return (
		<SettingsProvider>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<HomePage />
			</ThemeProvider>
		</SettingsProvider>
	)
}
