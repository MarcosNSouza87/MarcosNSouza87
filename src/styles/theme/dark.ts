import { ITheme } from '../../@types/theme';
import backImgDark from '../../assets/images/background_dark_theme.svg'

export const Dark: ITheme = {
	title: 'dark',
	background: '#181818',
	colors: {
		selected: [
			 '#ff0141',
			 '#FFC701',
			 '#01FF94',
			 '#01D1FF',
			 '#8F01FF',
		],
		secondary: '#006eef',
		white: '#F4EDE8',
		gray: '#7a7a7a',
		grayLight: '#979797',
		dark: '#272727',

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
	backgroundImgUrl: backImgDark,
}