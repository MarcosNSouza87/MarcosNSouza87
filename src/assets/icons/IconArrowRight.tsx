type IconProps = {
	color: string
}

export default function IconArrowRight({ color }: IconProps) {
	return (
		<svg
			width="41"
			height="41"
			viewBox="0 0 41 41"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.5784 30.8149L25.5784 20.8149L15.5784 10.8149"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
