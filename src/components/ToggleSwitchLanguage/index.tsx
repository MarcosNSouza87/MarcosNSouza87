import React, { useContext, useEffect } from 'react'
import { LanguageContext } from '../../contexts/languegeContext';
import { CheckBox, Wrapper } from './styles'

const ToggleSwitch = () => {
	const {setLanguage} = useContext(LanguageContext);
	const [isToggled, setIsToggled] = React.useState(false)
	const onToggle = () => setIsToggled(!isToggled)
	useEffect(() => {
		if (isToggled) {
			setLanguage('pt')
		} else {
			setLanguage('en')
		}
	}, [isToggled, setLanguage])
	return (
		<Wrapper onClick={onToggle} checked={isToggled}>
			<CheckBox checked={isToggled} />
		</Wrapper>
	)
}

export default ToggleSwitch
