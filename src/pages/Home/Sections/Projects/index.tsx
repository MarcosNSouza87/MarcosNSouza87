import React, { useState } from 'react'
import styled from 'styled-components'
import NotFound from '../../../../assets/images/ImgNotFound.png'

export default function Projects() {
	// Aqui criamos um array de projetos que serão exibidos no carousel
	const projects = [
		{
			name: 'Projeto do tipo 1',
			description: 'Uma breve descrição do projeto 1',
			image: NotFound,
		},
		{
			name: 'Projeto  tipagem 2',
			description: 'Uma breve descrição do projeto 2',
			image: NotFound,
		},
		// Adicione mais projetos aqui...
	]

	// Usamos o useState para controlar o índice do projeto atualmente exibido
	const [currentIndex, setCurrentIndex] = useState(0)

	// Essa função é chamada quando o usuário clica no botão de próximo projeto
	const goToNext = () => {
		// Incrementamos o índice atual
		const nextIndex = currentIndex + 1
		// Se o próximo índice for maior que o tamanho do array de projetos, voltamos para o primeiro projeto
		setCurrentIndex(nextIndex % projects.length)
	}

	// Essa função é chamada quando o usuário clica no botão de projeto anterior
	const goToPrev = () => {
		// Decrementamos o índice atual
		let prevIndex = currentIndex - 1
		// Se o índice anterior for menor que zero, vamos para o último projeto
		if (prevIndex < 0) {
			prevIndex = projects.length - 1
		}
		setCurrentIndex(prevIndex)
	}

	// Aqui renderizamos o carousel, exibindo os detalhes do projeto atualmente selecionado
	return (
		<Container>
			<Content>
				<Card>
					<img
						src={projects[currentIndex].image}
						alt={projects[currentIndex].name}
					/>
					<Info>
						<h2>{projects[currentIndex].name}</h2>
						<p>{projects[currentIndex].description}</p>
					</Info>
				</Card>
				<button onClick={goToPrev}>Projeto Anterior</button>
				<button onClick={goToNext}>Próximo Projeto</button>
			</Content>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100vw;
	padding: 60px 0;
`
const Content = styled.div``

const Card = styled.div`
	img {
		width: 500px;
		height: 400px;
	}

  transition: all 0.5s ease;
`
const Info = styled.div``
