type IconProps = {
	color: string
}

export default function IconClose({ color }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M18 6L6 18"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
			<path
				d="M6 6L18 18"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
