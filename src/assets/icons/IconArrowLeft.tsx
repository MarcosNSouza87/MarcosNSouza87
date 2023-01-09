type IconProps = {
	color: string
}

export default function IconArrowLeft({ color }: IconProps) {
	return (
		<svg
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M25 30L15 20L25 10"
				stroke={color}
				strokeWidth="4"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
