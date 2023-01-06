import HomePage from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { dark } from './styles/theme'
import GlobalStyle from './styles/global'
import './styles/global.ts'
import { useState } from 'react'
import { LanguageProvider } from './contexts/languegeContext'

export function AppPortfolio() {
	const [theme] = useState(dark)

	// const toggleTheme = (darkin: boolean) => {
	// 	if (darkin) {
	// 		setTheme(light)
	// 	} else {
	// 		setTheme(dark)
	// 	}
	// }

	return (
		<LanguageProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<HomePage />
			</ThemeProvider>
		</LanguageProvider>
	)
}
