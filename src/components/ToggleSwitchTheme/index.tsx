import React, { useContext, useEffect } from 'react'
import { SettingsContext } from '../../contexts/settingsContext';
import { CheckBox, Wrapper } from './styles'
import * as Icon from '../../assets/icons'
import { useTheme } from '../../contexts/themeProviderContext';

const ToggleSwitchTheme = () => {
	const {selectedTheme,setSelectedTheme,theme} = useContext(SettingsContext);
	const [isToggled, setIsToggled] = React.useState(selectedTheme === 'dark' ? true : false)
	const { toggleTheme } = useTheme()
	const onToggle = () => {setIsToggled(!isToggled); toggleTheme()}
	useEffect(() => {
		if (isToggled) {
			setSelectedTheme('dark')
		} else {
			setSelectedTheme('light')
		}
	}, [isToggled, setSelectedTheme])

	return (
		<Wrapper onClick={onToggle} checked={isToggled}>
			<CheckBox checked={isToggled}>
				{selectedTheme === 'light' ? (
					<Icon.Dark color={theme.colors.dark} />
				): (
					<Icon.Light color={theme.colors.dark} />
				)}
			</CheckBox>
		</Wrapper>
	)
}

export default ToggleSwitchTheme
