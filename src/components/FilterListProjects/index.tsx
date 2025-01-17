import React from 'react';
import * as S from './styles';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/settingsContext';
import { IProject } from '../../pages/Projects/content';
import SearchInput from '../SearchInput';

interface IFilter {
	list: IProject[];
	setSearch: (search: string) => void;
	setFilterCompany?: (companyName: string) => void; 
	setFilterTecnology?: (tecnologyName: string) => void; 
}

export default function FilterListProject({ list,setSearch }: IFilter) {
	const { color, language } = useContext(SettingsContext);
	const fnChange = (item: string) => {
		setSearch(item)
	}
	return (
		<S.Container>
			<div>
				<S.Title color={color.toString()}>
					{language === 'en' ? 'Projects' : 'Projetos'}
				</S.Title>
				<div>Total: {list.length}</div>
			</div>
			<SearchInput onChangeInput={(search: string) => fnChange(search) }/>
		</S.Container>
	);
}
