import { ITheme } from '../../@types/theme';
import backImgDark from '../../assets/images/background_dark_theme.svg'


const Dark: ITheme = {
	title: 'dark',
	background: '#181818',
	colors: {
		primary: {
			red: '#ff0141',
			yellow: '#FFC701',
			green: '#01FF94',
			blue: '#01D1FF',
			purple: '#8F01FF',
		},
		secondary: '#006eef',
		white: '#F4EDE8',
		gray: '#7a7a7a',
		dark: '#181818',
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

export default Dark;