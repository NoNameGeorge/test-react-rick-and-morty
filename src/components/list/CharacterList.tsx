import React, { FC } from 'react'

import { useAppSelector } from '../../hooks/redux'

import CharacterListItem from './CharacterListItem'

const CharacterList: FC = () => {
	const { list, error, isLoading } = useAppSelector((state) => state.character)

	return (
		<div>
			{list.length &&
				list.map((listItem) => {
					console.log(listItem)
					return (
						<CharacterListItem
							key={listItem.id}
							name={listItem.name}
							image={listItem.image}
						/>
					)
				})}
		</div>
	)
}

export default CharacterList
