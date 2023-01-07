import React, { useContext } from 'react'
import styled from 'styled-components'
import ToggleSwitch from '../../../../components/ToggleSwitchLanguage'
import Avatar from '../../../../assets/images/Avatar.jpg'
import * as Icon from '../../../../assets/icons'
import { SettingsContext } from '../../../../contexts/settingsContext'


const Home = () => {
  const {language} = useContext(SettingsContext)
  const lng = language;

	return (
		<Container>
			<Content>
				<HomeContainer>
					<HomeAvatar src={Avatar} />
					<InfoContent>
						<InfoMain>
							<h1>Marcos Nunes de Souza</h1>
							<h2>{
                lng === 'pt' ? 'Desenvolvedor Front-End' : 'Front-End Developer'
                }</h2>
							<p>React, React-Native</p>
						</InfoMain>
						<Row>
							<ButtonIcon>
								<Icon.Linkedin color="#979797" />
							</ButtonIcon>
							<ButtonIcon>
								<Icon.Github color="#979797" />
							</ButtonIcon>
						</Row>
						<Row>
							<Button className='red'>{
                lng === 'pt' ? 'Curriculo' : 'RESUME'
              }</Button>
							<Button>{
                lng === 'pt' ? 'Contato' : 'Hire Me'
                }</Button>
						</Row>
					</InfoContent>
				</HomeContainer>
          <Footer>
            <h4>{lng === 'pt' ? 'Escolha o idioma:' : 'Choose the language:'
            }</h4>
            <ToggleSwitch />
          </Footer>
				
			</Content>
		</Container>
	)
}

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  h4 {
    margin-bottom: 10px;
  }
`;

const InfoMain = styled.div`
  border-left: 5px solid ${({ theme }) => theme.primary.primary};
  padding: 10px;
`;

const Button = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 2px;
  border: none;
  font-size: 20px;
  text-transform: uppercase;
  margin-right: 20px;
  color: #979797;
  background-color: #272727;
  &.red {
    color: ${({ theme }) => theme.primary.white};
    background-color: ${({ theme }) => theme.primary.primary};
  }
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const ButtonIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 5px;
	background-color: #272727;
	display: flex;
	align-items: center;
	justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`
const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
  margin: 15px 0;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100vw;
`

const Content = styled.div``

const HomeContainer = styled.div`
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-rows: 300px;
	grid-gap: 20px;
`
const HomeAvatar = styled.img`
	width: 300px;
	height: 300px;
  border-radius: 3px;
`

const InfoContent = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 0 20px;
	h1 {
		font-size: 30px;
		font-weight: 600;
		color: ${({ theme }) => theme.primary.white};
	}
	h2 {
		font-size: 20px;
		font-weight: 600;
		color: ${({ theme }) => theme.primary.primary};
	}
	p {
		font-size: 22px;
		font-weight: 600;
		color: ${({ theme }) => theme.primary.white};
	}
`

export default Home
