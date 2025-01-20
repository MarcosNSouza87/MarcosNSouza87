import React, { useContext } from 'react';
import styled from 'styled-components';
import { IProject } from '../../pages/Projects/content';
import { SettingsContext } from '../../contexts/settingsContext';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8); /* Fundo escuro com opacidade */
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: white;
	width: 80%;
	max-width: 800px;
	height: 700px;
	border-radius: 8px;
	padding: 20px;
	display: flex;
	flex-direction: row;
	position: relative;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 18px;
	cursor: pointer;
	&:hover {
		color: red;
	}
`;

const LeftSection = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
	color: ${({ theme }) => theme.colors.dark};
	justify-content: space-between;
`;

const RightSection = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-left: 1px solid #ddd;
`;

const ProjectTitle = styled.h2`
	font-size: 24px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.colors.dark};
`;

const Description = styled.p`
	font-size: 16px;
	line-height: 1.5;
	color: #555;
`;

const Tag = styled.span`
	display: inline-block;
	background-color: #e53935;
	color: white;
	padding: 5px 10px;
	border-radius: 50px;
	margin: 3px 5px;
	font-size: 14px;
`;

const FooterIcons = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
	svg {
		font-size: 24px;
		cursor: pointer;
		&:hover {
			color: #555;
		}
	}
`;

interface IModal {
	selectedProject: IProject;
	onClose: () => void;
}

const ModalDetailsProject = ({ onClose, selectedProject }: IModal) => {
	const { language } = useContext(SettingsContext);

	return (
		<ModalOverlay>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				<LeftSection>
					<div>
						<ProjectTitle>{selectedProject.title}</ProjectTitle>
						<Description>
							{language === 'en'
								? selectedProject.description.en
								: selectedProject.description.pt}
						</Description>
						<p>
							<strong>{language === 'en' ? 'Company: ' : 'Empresa: '}</strong>
              {selectedProject.company}
						</p>
						<div>
							{selectedProject.tags.map((item) => (
								<Tag>{item}</Tag>
							))}
						</div>
					</div>
					<FooterIcons>
						{/* Adicione ícones aqui, por exemplo, FontAwesome */}
						<span>🐱‍💻</span>
						<span>📱</span>
					</FooterIcons>
				</LeftSection>
				<RightSection>
					<p>camera-off</p>
				</RightSection>
			</ModalContent>
		</ModalOverlay>
	);
};

export default ModalDetailsProject;
