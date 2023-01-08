//create settings context

import { createContext, useContext, useState } from "react"

interface SettingsContextType {
  theme: string;
  setTheme: (theme: string) => void
  color: number
  setColor: (color: number) => void
  language: string // 'en' | 'pt
  setLanguage: (language: string) => void
}

//create context
export const SettingsContext = createContext<SettingsContextType>({
  theme: 'dark',
  setTheme: () => {},
  color: 0,
  setColor: () => {},
  language: 'en',
  setLanguage: () => {},
})

//create provider
export const SettingsProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [color, setColor] = useState(2)
  const [language, setLanguage] = useState('en')
  return (
    <SettingsContext.Provider value={{ theme, setTheme, color, setColor, language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  )
}

//use context
export const useSettings = () => useContext(SettingsContext)