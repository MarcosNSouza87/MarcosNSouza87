import { IProject } from './content';
import * as S from './styles';
import NotFound from '../../assets/images/ImgNotFound.png';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import IconArrowRight from '../../assets/icons/IconArrowRight';

type IItmProject = {
	project: IProject;
	onShowDetails: () => void;
};

const ItemProject = ({ project, onShowDetails }: IItmProject) => {
	const { id, description, title, image, link } = project;
	const { color, language } = useContext(SettingsContext);
	return (
		<S.Card color={color.toString()} key={id}>
			<S.Image src={NotFound} alt="Project Image" />
			<S.Info>
				<h3>{title}</h3>
				<h4>Empresa: Grupo</h4>
				<p>{language === 'pt' ? description.pt : description.en}</p>
				<h5>Tecnologia: Mobile</h5>
			</S.Info>
			<S.BtnShowDetails color={color.toString()}>
				<S.BtnShowCol onClick={onShowDetails}>
					<div className="title">Detalhes</div>
					<div className="icons">
						<IconArrowRight color={'#ffffff55'} />
					</div>
				</S.BtnShowCol>
			</S.BtnShowDetails>
		</S.Card>
	);
};

export default ItemProject;
