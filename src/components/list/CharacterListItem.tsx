import React, { FC } from 'react'

interface CharacterListItemProps {
	name: string
	image: string
}

const CharacterListItem: FC<CharacterListItemProps> = ({ name, image }) => {
	return (
		<div>
			<img
				alt=''
				src={image}
			/>
            <span>{name}</span>
		</div>
	)
}

export default CharacterListItem
