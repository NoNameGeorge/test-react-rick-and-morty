import React, { FC } from 'react'

import { ICharacter } from '../../types/ICharacter'
import CharacterListItem from './CharacterListItem'

interface CharacterListProps {
	list: ICharacter[]
}

const CharacterList: FC<CharacterListProps> = ({ list }) => {
	console.log(list)

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
