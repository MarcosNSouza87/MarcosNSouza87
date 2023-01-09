import { useEffect, useState } from 'react'
import { listProjects } from './content'
import ItemProject from './ItemProject'
import * as S from './styles'

export default function Projects() {
	const [page, setPage] = useState(0)
	const [countPage, setCountPage] = useState(0)

	useEffect(() => {
		setCountPage(Math.ceil(listProjects.length / 3))
	}, [])

	return (
		<div>
			<h1>Projects</h1>
			<S.HorizontalCarousel>
				{listProjects.map((project, index) => {
					if (index >= page * 3 && index < page * 3 + 3) {
						return <ItemProject key={project.id} {...project} />
					}else{
						return null
					}
				})}
			</S.HorizontalCarousel>
			<S.Pagination>
				{[...Array(countPage)].map((_, index) => (
					<S.PaginationItem
						key={index}
						active={index === page}
						onClick={() => setPage(index)}
					>
						{index + 1}
					</S.PaginationItem>
				))}
			</S.Pagination>
		</div>
	)
}

