import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import CharacterList from '../components/list/CharacterList'

import { ICharacter } from '../types/ICharacter'

const ListPage: FC = () => {
	const [characterList, setCharacterList] = useState<ICharacter[]>([])

	useEffect(() => {
		axios.get('https://rickandmortyapi.com/api/character').then((response) => {
			const list: ICharacter[] = response.data.results

			setCharacterList(list)
		})
	}, [])

	return (
		<div>
			<CharacterList list={characterList} />
		</div>
	)
}

export default ListPage
