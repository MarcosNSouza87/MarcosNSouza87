import backImgWhite from '../../assets/images/background_white_theme.svg'
import { ITheme } from '../../@types/theme';

export const Light: ITheme = {
  title: 'light',
  background: '#fefefe',
  colors: {
    selected: [
      '#ff0141',
      '#FFC701',
      '#b4ef14',
      '#01D1FF',
      '#8F01FF',
   ],
    secondary: '#006eef',
    white: "#181818", 
    gray: "#414141",
    grayLight: "#979797",
    dark: "#d9d9d9", 
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
