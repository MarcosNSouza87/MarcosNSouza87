import React, { useContext } from 'react'
import { SettingsContext } from '../../../../contexts/settingsContext'
import { Button } from './styles'

interface ButtonLinkProps {
	label: string
	goTo: () => void
	children?: React.ReactNode
	isSelect?: boolean
}

const ButtonLink = ({ label, children, goTo, isSelect }: ButtonLinkProps) => {
	const { color } = useContext(SettingsContext)
	return (
		<Button
			color={color.toString()}
			className="menuLink"
			onClick={goTo}
			isSelect={isSelect}
		>
			{children}
			<div className="label">{label}</div>
		</Button>
	)
}

export default ButtonLink
