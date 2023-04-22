import { useContext, useEffect, useState } from 'react'
import { SettingsContext } from '../../../../contexts/settingsContext'
import { listProjects } from './content'
import ItemProject from './ItemProject'
import * as S from './styles'
import * as Icon from '../../../../assets/icons'

export default function Projects() {
	const { color,theme,language } = useContext(SettingsContext)
	const [page, setPage] = useState(0)
	const [countPage, setCountPage] = useState(0)

	useEffect(() => {
		setCountPage(Math.ceil(listProjects.length / 3))
	}, [])

	const setPagination = (type: string) => {
		if(type === 'next'){
			if(page < countPage - 1) setPage(page + 1)
		}else{
			if(page > 0)	setPage(page - 1)
		}
	}

	return (
		<S.Container>
			<S.Title color={color.toString()}>{language === 'en' ? 'Projects' : 'Projetos'}
			</S.Title>
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
				<S.IconPagination
					color={color.toString()}
					active={page > 0}
					onClick={() => setPagination('prev')}
				>
					<Icon.ArrowLeft color={theme.colors.secondary}/>
				</S.IconPagination>
				{[...Array(countPage)].map((_, index) => (
					<S.PaginationItem
						key={index}
						active={index === page}
						color={color.toString()}
						onClick={() => setPage(index)}
					>
						{index + 1}
					</S.PaginationItem>
				))}
				<S.IconPagination
					color={color.toString()}
					active={page < countPage - 1}
					onClick={() => setPagination('next')}
				>
					<Icon.ArrowRight color={theme.colors.secondary}/>
				</S.IconPagination>
			</S.Pagination>
		</S.Container>
	)
}

