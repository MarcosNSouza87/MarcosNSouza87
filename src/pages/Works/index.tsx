import './styles.ts'
import SearchInput from '../../components/SearchInput'
import { WorkMainContainer, WorksContainer } from './styles'
import { listCards } from '../../services/List'
import { useState } from 'react'
import { CardList } from '../../components/Cards/List'

export default function WorksPage() {
	const [query, setQuery] = useState('')

	const getList = async () => {
		const gtItem = await fetch('https://api.github.com/users/MarcosNSouza87/repos')
		console.log(gtItem)
	}

	getList()

	return (
		<WorksContainer>
			<h1>Works</h1>
			<WorkMainContainer>
				<SearchInput onChangeInput={setQuery} />
				<div className="row">
					<div className="slider">
						<div className="row__posters" id="row_pst">
							<CardList cards={listCards} query={query} />
						</div>
					</div>
				</div>
			</WorkMainContainer>
		</WorksContainer>
	)
}
