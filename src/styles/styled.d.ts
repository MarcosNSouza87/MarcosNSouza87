import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string
		background: string
		colors: {
			selected: string[]
			secondary: string
			white: string
			gray: string
			grayLight: string
			dark: string
		}
		font: {
			size: {
				lxx: string //30
				lx: string //28
				l: string //26
				m: string //22
				s: string //18
				xs: string //14
			}
			family: {
				primary: string
				secondary: string
			}
			button: {
				radius: string
			}
		}
		backgroundImgUrl: string
	}
}
