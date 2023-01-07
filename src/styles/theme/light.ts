import backImgWhite from '../../assets/images/background_white_theme.svg'
import { ITheme } from '../../@types/theme';

const Light: ITheme = {
  title: 'light',
  background: '#fefefe',
  colors: {
    primary: {
      red: '#ff0141',
      yellow: '#FFC701',
      green: '#01FF94',
      blue: '#01D1FF',
      purple: '#8F01FF',
    },
    secondary: '#006eef',
    white: "#181818", 
    gray: "#414141", 
    dark: "#fefefe", 
  },
  font: {
    size: {
      lxx: '30px',
      lx: '28px',
      l: '26px',
      m: '22px',
      s: '18px',
      xs: '14px',
    },
    family: {
      primary: 'Roboto, sans-serif',
      secondary: 'Roboto Slab, sans-serif',
    },
    button: {
      radius: '4px',
    },
  },
  backgroundImgUrl: backImgWhite,
}

export default Light;
