import React, { useContext } from 'react' 
import * as Icon from '../../../assets/icons'
import { SettingsContext } from '../../../contexts/settingsContext'
import ToggleSwitch from '../../ToggleSwitchLanguage'
import ToggleSwitchTheme from '../../ToggleSwitchTheme'
import * as S from './styles'

interface ISidebar { 
  setOpen: (value: boolean) => void
}

const Sidebar = ({setOpen}:ISidebar) => {
	const { setColor, color,theme,language } = useContext(SettingsContext)
	const Items = theme.colors.selected.map((item, index) => {
		return {
			id: index,
			color: item,
		}
	})

	return (
		<S.ContainerSideBar>
			<div className="header">
				<S.Button onClick={() => setOpen(false)}>
					<Icon.Close color={theme.colors.dark } />
				</S.Button>
			</div>
			<div className="list"></div>
			<div className="container">
				<h4>{language === 'pt'? 'Escolha a cor' : 'Choice color'}</h4>
				<div className="row">
					{Items.map((item) => (
						<S.ItemColor
							key={item.id}
							color={item.color}
							isSelected={item.id === color}
							onClick={() => setColor(item.id)}
						></S.ItemColor>
					))}
				</div>
			</div>
			<div className="container">
				<h4>{language === 'pt'? 'Escolha o tema' : 'Choice theme'}</h4>
				<ToggleSwitchTheme />
			</div>
			<div className="container">
				<h4>{language === 'pt'? 'Escolha o idioma' : 'Choice language'}</h4>
        <ToggleSwitch />
			</div>
		</S.ContainerSideBar>
	)
}

export default Sidebar
