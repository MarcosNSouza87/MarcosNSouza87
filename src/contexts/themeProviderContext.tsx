import { createContext, useCallback, useContext, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { theme as STheme } from '../styles/theme'
import { ReactNode } from 'react'

export interface ThemeContextData {
	toggleTheme(): void
	theme: DefaultTheme
}

export interface MainProps {
	children: ReactNode | any
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const useTheme = () => useContext(ThemeContext)

export const CustomThemeProvider = ({ children }: MainProps) => {
	const [theme, setTheme] = useState<DefaultTheme>(STheme.Dark)

	const toggleTheme = useCallback(() => {
		if (theme.title === 'light') {
			setTheme(STheme.Dark)
		} else if (theme.title === 'dark') {
			setTheme(STheme.Light)
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
