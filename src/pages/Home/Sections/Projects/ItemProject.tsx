import { IProject } from './content'
import * as S from './styles'
import NotFound from '../../../../assets/images/ImgNotFound.png'
import { useContext } from 'react'
import { SettingsContext } from '../../../../contexts/settingsContext'

const ItemProject = ({ id, description, title, image, link }: IProject) => {
	const { color } = useContext(SettingsContext)
	return (
		<S.Card color={color.toString()} key={id}>
			<S.Image src={NotFound} alt="Project Image" />
			<S.Info>
				<h3>{title}</h3>
				<p>{description}</p>
				<div>
				</div>
			</S.Info>
		</S.Card>
	)
}

export default ItemProject
