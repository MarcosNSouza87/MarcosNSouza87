type IconProps = {
	color: string
}

export default function DevWeb({ color }: IconProps) {
	return (
		<svg width="120" height="97" viewBox="0 0 120 97" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="1.5" y="1.5" width="117" height="83" rx="6.5" stroke={color} strokeWidth="3"/>
			<rect x="9.5" y="9.5" width="101" height="67" stroke={color} strokeWidth="3"/>
			<rect x="16.5" y="25.5" width="25" height="20" stroke={color} strokeWidth="3"/>
			<rect x="47.5" y="25.5" width="25" height="20" stroke={color} strokeWidth="3"/>
			<rect x="78.5" y="25.5" width="25" height="20" stroke={color} strokeWidth="3"/>
			<circle cx="17" cy="18" r="2" fill={color}/>
			<circle cx="23" cy="18" r="2" fill={color}/>
			<circle cx="29" cy="18" r="2" fill={color}/>
			<line x1="15" y1="53.5" x2="74" y2="53.5" stroke={color} strokeWidth="3"/>
			<line x1="15" y1="61.5" x2="74" y2="61.5" stroke={color} strokeWidth="3"/>
			<line x1="15" y1="68.5" x2="74" y2="68.5" stroke={color} strokeWidth="3"/>
			<line x1="77" y1="53.5" x2="105" y2="53.5" stroke={color} strokeWidth="3"/>
			<line x1="77" y1="61.5" x2="105" y2="61.5" stroke={color} strokeWidth="3"/>
			<line x1="77" y1="68.5" x2="105" y2="68.5" stroke={color} strokeWidth="3"/>
			<line x1="36" y1="95.5" x2="86" y2="95.5" stroke={color} strokeWidth="3"/>
			<line x1="52.5" y1="93" x2="52.5" y2="83" stroke={color} strokeWidth="3"/>
			<line x1="70.5" y1="93" x2="70.5" y2="83" stroke={color} strokeWidth="3"/>
		</svg>
	)
}
