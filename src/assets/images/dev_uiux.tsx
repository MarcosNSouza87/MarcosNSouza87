type IconProps = {
	color: string
}

export default function DevUIUX({ color }: IconProps) {
	return (
		<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="8" cy="7" r="5.5" stroke={color} strokeWidth="3"/>
			<path d="M60 26L60 63.5" stroke={color} strokeWidth="4"/>
			<circle cx="60" cy="68" r="5.5" stroke={color} strokeWidth="3"/>
			<mask id="path-4-inside-1_115_8" fill="white">
			<rect x="53" width="14" height="14" rx="2"/>
			</mask>
			<rect x="53" width="14" height="14" rx="2" stroke={color} strokeWidth="6" mask="url(#path-4-inside-1_115_8)"/>
			<circle cx="112" cy="7" r="5.5" stroke={color} strokeWidth="3"/>
			<path d="M25.5 19.5001C33 13.0001 44.5 8.3075 55 8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M7.5 53.4999C7.5 49.4998 9.5 41 14 34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M12 7L55 7" stroke={color} strokeWidth="3"/>
			<mask id="path-9-inside-2_115_8" fill="white">
			<rect x="1" y="52" width="13" height="13" rx="2"/>
			</mask>
			<rect x="1" y="52" width="13" height="13" rx="2" stroke={color} strokeWidth="6" mask="url(#path-9-inside-2_115_8)"/>
			<circle cx="19" cy="26" r="2" fill={color}/>
			<path d="M94.5 19.5001C87 13.0001 75.5 8.3075 65 8" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M112.5 53.4999C112.5 49.4998 110.5 41 106 34" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M108 7L65 7" stroke={color} strokeWidth="3"/>
			<mask id="path-14-inside-3_115_8" fill="white">
			<rect width="13" height="13" rx="2" transform="matrix(-1 0 0 1 119 52)"/>
			</mask>
			<rect width="13" height="13" rx="2" transform="matrix(-1 0 0 1 119 52)" stroke={color} strokeWidth="6" mask="url(#path-14-inside-3_115_8)"/>
			<circle r="2" transform="matrix(-1 0 0 1 101 26)" fill={color}/>
			<rect x="40.5" y="92.5" width="39" height="10" rx="5" stroke={color} strokeWidth="3"/>
			<mask id="path-17-inside-4_115_8" fill="white">
			<rect x="44" y="100" width="32" height="19" rx="2"/>
			</mask>
			<rect x="44" y="100" width="32" height="19" rx="2" stroke={color} strokeWidth="6" mask="url(#path-17-inside-4_115_8)"/>
			<path d="M45.5 92L36.5 68L59.5 26" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M36.5 68H45.5" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M74 92L83 68L60 26" stroke={color} strokeWidth="3" strokeLinecap="round"/>
			<path d="M83 68H74" stroke={color} strokeWidth="3" strokeLinecap="round"/>
		</svg>
	)
}
