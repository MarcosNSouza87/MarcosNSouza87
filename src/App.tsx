import HomePage from './pages/Home' 
import './styles/global.ts' 
import { SettingsProvider } from './contexts/settingsContext'

export function AppPortfolio() { 

	return (
		<SettingsProvider> 
			<HomePage />
		</SettingsProvider>
	)
}
