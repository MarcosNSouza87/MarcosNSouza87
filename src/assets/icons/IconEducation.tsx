type IconProps = {
	color: string
}

export default function IconEducation({ color }: IconProps) {
	return (
		<svg
			width="45"
			height="45"
			viewBox="0 0 45 45"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.5 28.125C29.7487 28.125 35.625 22.2487 35.625 15C35.625 7.75126 29.7487 1.875 22.5 1.875C15.2513 1.875 9.375 7.75126 9.375 15C9.375 22.2487 15.2513 28.125 22.5 28.125Z"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.3938 26.0438L13.125 43.125L22.5 37.5L31.875 43.125L29.6063 26.025"
				stroke={color}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
