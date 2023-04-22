import HomePage from './pages/Home'
import GlobalStyle from './styles/global'
import './styles/global.ts'
import { SettingsProvider } from './contexts/settingsContext'
import { CustomThemeProvider } from './contexts/themeProviderContext'

export function AppPortfolio() {
	return (
		<CustomThemeProvider>
			<SettingsProvider>
				<GlobalStyle />
				<HomePage />
			</SettingsProvider>
		</CustomThemeProvider>
	)
}
