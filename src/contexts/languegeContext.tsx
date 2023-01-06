import { createContext, useContext, useState } from "react"

interface LanguageContextType {
  language: string
  setLanguage: (language: string) => void
}

//create context
export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
})
//create provider
export const LanguageProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState('en')
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}
//use context
export const useLanguage = () => useContext(LanguageContext)
