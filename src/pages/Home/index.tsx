import React, { useContext } from 'react'
import * as S from './styles'
import { SettingsContext } from '../../contexts/settingsContext'
const Home = () => {
	const { language, color,theme } = useContext(SettingsContext)
	const lng = language

	return (
		<S.Container>
		</S.Container>
	)
}

export default Home