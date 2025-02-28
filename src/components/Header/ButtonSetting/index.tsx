import React, { useContext } from 'react';
import * as Icon from '../../../assets/icons';
import { SettingsContext } from '../../../contexts/settingsContext';
import { Button } from './styles';

const ButtonSetting = () => {
	const { color, theme, setOpenSettings, openSettings } =
		useContext(SettingsContext);
	return (
		<Button color={color.toString()} onClick={() => setOpenSettings(!openSettings)}>
			<Icon.Settings color={theme.colors.grayLight} />
		</Button>
	);
};

export default ButtonSetting;
