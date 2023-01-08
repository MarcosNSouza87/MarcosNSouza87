import HomePage from './pages/Home'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import './styles/global.ts'
import { useContext } from 'react'
import { SettingsContext, SettingsProvider } from './contexts/settingsContext'

export function AppPortfolio() {
	const { theme } = useContext(SettingsContext)
	
	return (
		<SettingsProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<HomePage />
			</ThemeProvider>
		</SettingsProvider>
	)
}
