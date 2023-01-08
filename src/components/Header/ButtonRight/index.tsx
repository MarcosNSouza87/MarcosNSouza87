import React, { useContext } from 'react' 
import * as Icon from '../../../assets/icons'
import { SettingsContext } from '../../../contexts/settingsContext'
import { Button } from './styles'

interface IBtnConfig {
  open: boolean
  setOpen: (value:boolean) => void
}

const ButtonSetting = ({open,setOpen}:IBtnConfig) => {
  const {color,theme} = useContext(SettingsContext);
  return(
    <Button color={color.toString()} onClick={() => setOpen(!open)} >
      <Icon.Settings color={theme.colors.grayLight}/>
    </Button>
  )
}

export default ButtonSetting;