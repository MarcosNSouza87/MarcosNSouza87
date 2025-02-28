import ButtonSetting from './ButtonSetting';
import { useContext } from 'react';
import { HeaderContainer } from './styles';
import { SettingsContext } from '../../contexts/settingsContext';
import * as S from './styles';
import * as Icon from '../../assets/icons';

interface HeaderProps {
	selectedSection: string;
	setSelectedSection: (section: string) => void;
}

const Header = ({ selectedSection, setSelectedSection }: HeaderProps) => {
	const { language, color, theme } = useContext(SettingsContext);

	const onHandleClick = (link: string) => {
		window.open(link);
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/cv-marcos.pdf"; // Caminho relativo do arquivo
		link.download = "cv-marcos.pdf"; // Nome do arquivo ao baixar
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<HeaderContainer>
			<S.MenuInfo>
				<S.Title>MARCOS NUNES DE SOUZA</S.Title>
				<S.SubTitle color={color.toString()}>
					Front-end Developer | Software Engineer
				</S.SubTitle>
			</S.MenuInfo>

			<S.MenuLinks>
				<S.IconImg
					color={color.toString()}
					onClick={() => onHandleClick('https://www.linkedin.com/in/marcosnsouza/')}
				>
					<Icon.Linkedin color={theme.colors.selected[color]} />
				</S.IconImg>
				<S.IconImg
					color={color.toString()}
					onClick={() => onHandleClick('https://github.com/MarcosNSouza87')}
				>
					<Icon.Github color={theme.colors.selected[color]} />
				</S.IconImg>
				<S.IconImg
					color={color.toString()}
					onClick={() => onHandleClick('https://wa.me/+5513991427167')}
				>
					<Icon.Whatsapp color={theme.colors.selected[color]} />
				</S.IconImg>
			</S.MenuLinks>

			<S.MenuLinks>
				<S.Button className="red" color={color.toString()} onClick={handleDownload}>
					Download CV
				</S.Button>
				<ButtonSetting />
			</S.MenuLinks>
		</HeaderContainer>
	);
};

export default Header;
