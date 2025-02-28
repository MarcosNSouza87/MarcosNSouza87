import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import { IProject, listProjects } from './content';
import ItemProject from './ItemProject';
import * as S from './styles';
import * as Icon from '../../assets/icons';
import FilterListProject from '../../components/FilterListProjects';
import ModalDetailsProject from '../../components/ModalDetailsProject';

export default function Projects() {
	const { color, theme } = useContext(SettingsContext);
	const [page, setPage] = useState(0);
	const [countPage, setCountPage] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);
	const [countPrjsPg, setCountPrjsPg] = useState(
		width > 992 ? 6 : width > 768 ? 2 : 1,
	);
	const [filteredList, setFilteredList] = useState<IProject[]>(listProjects);
	const [filter, setFilter] = useState<string>('');
	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedProject, setSelectedProject] = useState<IProject>();

	const setPagination = (type: string) => {
		if (type === 'next') {
			if (page < countPage - 1) setPage(page + 1);
		} else {
			if (page > 0) setPage(page - 1);
		}
	};
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		setCountPage(Math.ceil(listProjects.length / countPrjsPg));
		setCountPrjsPg(width > 992 ? 6 : width > 768 ? 2 : 1);
	}, [width]);

	useEffect(() => {
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	}, []);

	useEffect(() => {
		if (filter !== '') {
			const lowerCaseFilter = filter.toLowerCase();
			const filtered = listProjects.filter((project) =>
				project.title.toLowerCase().includes(lowerCaseFilter),
			);
			setFilteredList(filtered);
		} else {
			setFilteredList(listProjects);
		}
	}, [filter]);

	const SelectPrj = (id: number) => {
		const result = listProjects.find((itm) => itm.id === id);
		if(result !== undefined){
			setSelectedProject(result);
		}
	}

	useEffect(() => {
		if(selectedProject !== undefined){
			setShowModal(true)
		}
	},[selectedProject])

	const handleOnCloseModal = () => {
		setShowModal(false);
		setSelectedProject(undefined);
	}

	return (
		<S.Container>
			<FilterListProject list={listProjects} setSearch={setFilter} />
			{showModal && selectedProject !== undefined && <ModalDetailsProject selectedProject={selectedProject} onClose={handleOnCloseModal} />}
			<S.HorizontalCarousel>
				{filteredList.map((project, index) => {
					if (
						index >= page * countPrjsPg &&
						index < page * countPrjsPg + countPrjsPg
					) {
						return (
							<ItemProject
								key={project.id}
								project={project}
								onShowDetails={() => {
									SelectPrj(project.id)
								}}
							/>
						);
					} else {
						return null;
					}
				})}
			</S.HorizontalCarousel>
			<S.Pagination>
				<S.IconPagination
					color={color.toString()}
					active={page > 0}
					onClick={() => setPagination('prev')}
				>
					<Icon.ArrowLeft color={theme.colors.secondary} />
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
					<Icon.ArrowRight color={theme.colors.secondary} />
				</S.IconPagination>
			</S.Pagination>
		</S.Container>
	);
}
